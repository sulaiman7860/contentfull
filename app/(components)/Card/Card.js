import client from "@/app/lib/contentfulClient"


const fetchServices = async () => {
    let response = await client.getEntries({ content_type: "card" });

    const cards = response.items.map((item) => {
        return {
            h1: item.fields.h1,
            descriptions: item.fields.descriptions,
        };
    });

    return cards;
};

export default async function Card() {
    const cards = await fetchServices()
    return (
        <div className="row">
            {cards.map((card,id) => {
                return (
                    <div className="col-12 col-md-4" key={id}>
                        <div className="container card1 py-3 text-center mt-3" id="firstId">
                            <h3 className="fw-bold">{card.h1}</h3>
                            <p>{card.descriptions}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
