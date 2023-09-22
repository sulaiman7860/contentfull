import client from "@/app/lib/contentfulClient"

const fetchServices = async () => {
    let response = await client.getEntries({ content_type: "images" })


    const images = response.items.map((item) => {
        return {
            name: item.fields.name,
            image: item.fields.image.fields.file.url
        }
    })

    return images

}

export default async function Images() {
    const images = await fetchServices()
    return (
        <div className='row campus'>
            {images.map((image, id) => {
                return (
                    <div className="col-12 col-lg-4" key={id}>
                        <div className="container pt-2 text-center">
                            <div className="campus-col">
                            <img src={image.image} className="img-fluid" id="" alt="" />
                            <div className="layer">
                            <h3>{image.name}</h3>
                            </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
