import client from "@/app/lib/contentfulClient"

const fetchServices = async () => {
    let response = await client.getEntries({ content_type: "student" })

    const students = response.items.map((item) => {
        return {
            h1: item.fields.h1,
            descriptions: item.fields.descriptions,
            image: item.fields.image.fields.file.url
        }
    })

    return students

}

export default async function StudentCard() {
    const students = await fetchServices()
  return (
    <div className="col-12 col-lg-4 offset-lg-1 mt-3">
      {students.map((student,id)=>{
            return (
               
                    <div className="container studentCard py-4" key={id}>
                        <div className="row">
                            <div className="col-3">
                                <img src={student.image} className="img-fluid rounded-circle" alt="" />
                                </div>
                                <div className="col-9">
                                    <p className="text-secondary">{student.descriptions}</p>
                                    <h4 className="fw-bold">{student.h1}</h4>
                                </div>
                        </div>
                    </div>
            )
          })
          }
    </div>
  )
}
