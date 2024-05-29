import { useParams } from "react-router";
import { useEffect, useState } from "react";

function InstructorDetail(props){
    
  const baseUrl = "http://127.0.0.1:8000/api";
  const [InstructorData, setInstructorData] = useState([]);
  const [InstructorImgs, setInstructorImgs] = useState([]);
  const { instructor_id } = useParams();

  useEffect(() => {
    fetchDataInstructor(baseUrl + "/instructor/" + instructor_id);
  }, [instructor_id]);

  function fetchDataInstructor(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setInstructorData(data);
        setInstructorImgs(data.instructor_imgs || []);
      });
  }
  return (
    <section style={{fontFamily: 'ADLaM Display', backgroundColor: 'DarkSlateGray', marginTop: 0, paddingTop: 20, paddingBottom: 90 , color:'white', fontSize:30, textDecoration: 'none' }}>
    <div className="container">
      <br/>
      <h3 className="mb-4" style={{fontSize:40}}>{InstructorData.description}</h3>
      <div className="row">
        <div className="col-4">
          <div id="relatedThumbnailsSlider" className="carousel carousel-dark slide carousel-fade" data-bs-ride="true">
            
            <div className="carousel-inner">
              {
                InstructorImgs.map((img, index) => {
                  if (index === 0) {
                    return (
                      <div className="carousel-item active" key={index}>
                        <img src={img.image} className="img-thumbnail mb-5" alt={index} />
                      </div>
                    );
                  } else {
                    return (
                      <div className="carousel-item" key={index}>
                        <img src={img.image} className="img-thumbnail mb-5" alt={index} />
                      </div>
                    );
                  }
                })
              }
            </div>
          </div>
          
        </div>
      </div>
        <div className="col-8">
        <h4 className="text-info" style={{fontSize:40, textDecoration: 'none' }}>{InstructorData.name}</h4>
          <p style={{fontSize:25}}>{InstructorData.description}</p>
          <p className="text-warning" style={{fontSize:20}}>Redes: ${InstructorData.github}</p>
        </div>
      {/* Related carousel products */}
       <h3 className="mt-5 mb-3 text-center">Productos Relacionados</h3>
      <div id="relatedProductSlider" className="carousel-dark slide" data-bs-ride="true">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
            <div className="carousel-item active">
              <div className="row mb-5">

              </div>
            </div>
            <div className="carousel-item">
              <div className="row mb-5">
       
              </div>
            </div>
            <div className="carousel-item">
              <div className="row mb-5">
               
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
    </section>
  );
}


export default InstructorDetail;