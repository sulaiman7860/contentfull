import Card from "./(components)/Card/Card";
import ImageCard from "./(components)/Card/imageCard";
import Images from "./(components)/Images/Images";
import StudentCard from "./(components)/StudentCard/StudentCard";


export default function Home() {
  return (
<main>
<div className="container thisClass">
    <div className="row">
      <div className="col-12 py-3 text-center">
      <h1 className="heading py-4">EXPLORE OUR 60+ <br/> MAJOR PROGRAMS</h1>
        <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
    <Card/>
   </div>
   <div className="container thisClass">
   <div className="row">
     <div className="col-12 py-3 text-center">
     <h1 className="heading py-4">TAKE OUR VIRTUAL TOUR</h1>
       <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
     </div>
   </div>
   <Images/>
   </div>
   <div className="container thisClass">
    <div className="row">
      <div className="col-12 py-3 text-center">
        <h1 className="heading py-4">OUR FACILITIES</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      </div>
      <ImageCard/>
    </div>
    <div className="container thisClass">
      <div className="row">
        <div className="col-12 py-3 text-center">
          <h1 className="heading py-4">WHAT OUR STUDENT SAYS</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="row">
        <StudentCard/>
        <StudentCard/>
      </div>
    </div>
    <div className="container thisClass">
      <div className="row">
        <div className="col-10 offset-1 text-center imageClass">
        <div className="row">
          <div className="col-10 offset-1">
          <h1 className="fw-bold">GET READY FOR A BRIGHT FUTURE</h1>
        <button className="px-3 py-2">CONTACT US</button>
          </div>
        </div>
        </div>
      </div>
    </div>
</main>
  )
}
