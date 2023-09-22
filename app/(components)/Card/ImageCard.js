import client from "@/app/lib/contentfulClient"

const fetchServices = async () => {
    let response = await client.getEntries({ content_type: "block" })

    const blocks = response.items.map((item) => {
        return {
            h1: item.fields.h1,
            descriptions: item.fields.descriptions,
            image: item.fields.image.fields.file.url
        }
    })

    return blocks

}

export default async function ImageCard() {
    const blocks = await fetchServices()

    return (
        <div className='row'>
          {blocks.map((block,id)=>{
            return (
                <div className="col-12 col-lg-4" key={id}>
                    <div className="container">
                        <img src={block.image} className="img-fluid rounded" alt="" />
                        <h3 className="my-2 fw-bold">{block.h1}</h3>
                        <p>{block.descriptions}</p>
                    </div>
                </div>
            )
          })
          }
        </div>
    )
}
