import Navbar from "./Navbar";
import client from "@/app/lib/contentfulClient";

const fetchServices = async () => {
    let response = await client.getEntries({ content_type: "contentful" });

    const contentfull = response.items.map((item) => {
        return {
            h1: item.fields.h1,
            h2: item.fields.h2,
            paragraph: item.fields.paragraph,
            button: item.fields.button,
        };
    });

    return contentfull;
};

export default async function Header() {
    const contentfull = await fetchServices();

    return (
        <header>
            <Navbar />
          <div className="container">
          <div className="row" style={{marginTop:"15vh"}}>
                {contentfull.map((service, index) => {
                    return (
                        <div className="col-8 offset-2" key={index}>
                            <div className="container text-light text-center" id="firstId">
                                <h1 className="fw-bold" style={{color:"#41ead4",fontSize:"4rem"}}>{service.h1}</h1>
                                <h2 className="fw-bold" style={{color:"#b7ffd8",fontSize:"2rem"}}>{service.h2}</h2>
                                <p>{service.paragraph}</p>
                                <button className="py-2 px-3">{service.button}</button>
                            </div>
                        </div>
                    );
                })}
            </div>
          </div>
        </header>
    );
}

