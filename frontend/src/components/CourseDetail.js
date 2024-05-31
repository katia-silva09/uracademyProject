import { Link,useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RelatedSingleCourses from "./RelatedSingleCourses";

function CourseDetail() {
  const baseUrl = "http://127.0.0.1:8000/api";
  const [CourseData, setCourseData] = useState([]);
  const [CourseImgs, setCourseImgs] = useState([]);
  const [relatedCourses, setRelatedCourses] = useState([]);

  const { course_id } = useParams();

  useEffect(() => {
    fetchData(baseUrl + "/course/" + course_id);
    fetchRelatedData(baseUrl + "/related-courses/" + course_id);

  }, [course_id]);

  function fetchData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCourseData(data);
        setCourseImgs(data.course_imgs || []);
      });
  }

  function fetchRelatedData(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setRelatedCourses(data.results);
      });
  }


  return (
    <section style={{fontFamily: 'ADLaM Display', backgroundColor: 'DarkSlateGray', marginTop: 0, paddingTop: 20, paddingBottom: 90 , color:'white', fontSize:30, textDecoration: 'none' }}>
    <div className="container">
      <br/>
      <h3 className="mb-4" style={{fontSize:40}}>Detalle del curso</h3>
      <div className="row">
        <div className="col-4">
          <div id="relatedThumbnailsSlider" className="carousel carousel-dark slide carousel-fade" data-bs-ride="true">
            
            <div className="carousel-inner">
              {
                CourseImgs.map((img, index) => {
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
        <div className="col-8">
          <h4 className="text-info" style={{fontSize:40, textDecoration: 'none' }}>{CourseData.title}</h4>
          <p style={{fontSize:25}}>{CourseData.details}</p>
          <p className="text-warning" style={{fontSize:20}}>Precio: ${CourseData.price}</p>
          <button title="Demo" target="_blanck" className="btn btn-dark">
            <i className="fa-solid fa-cart-plus"></i> Demo
          </button>
          <button title="Agregar al carrito" target="_blanck" className="btn btn-primary ms-1">
            <i className="fa-solid fa-cart-plus"></i> Agregar al carrito
          </button>
          <button title="Comprar ahora" target="_blanck" className="btn btn-success ms-1">
            <i className="fa-solid fa-credit-card"></i> Comprar ahora
          </button>
          <button title="Agregar a la lista" target="_blanck" className="btn btn-danger ms-1">
            <i className="fa-solid fa-tag"></i> Agregar a la lista
          </button>
        </div>
      </div>

      {/* Related carousel Cos */}
      {relatedCourses.length > 0 && ( 
        <>      
        <h3 className="mt-5 mb-3 text-center">Cursos Relacionados</h3>
        <div
            id="relatedCourseSlider"
            className="carousel slide carousel-dark"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              {relatedCourses.map((course, index) => {
                if (index === 0) {
                  return (
                    <button
                      type="button"
                      data-bs-target="#relatedCourseSlider"
                      data-bs-slide-to={index}
                      className="active"
                      aria-current="true"
                      aria-label="slide 1"
                    ></button>
                  );
                } else {
                  return (
                    <button
                      type="button"
                      data-bs-target="#relatedCourseSlider"
                      data-bs-slide-to={index}
                      className="active"
                      aria-current="true"
                      aria-label="slide 1"
                    ></button>
                  );
                }
              })}
            </div>
            <div className="carousel-inner">
              {relatedCourses.map((course, index) => {
                if (index === 0) {
                  return (
                    <div className="carousel-item active">
                      <RelatedSingleCourses course={course } />
                    </div>
                  );
                } else {
                  return (
                    <div className="carousel-item">
                      <RelatedSingleCourses course ={course}/>
                    </div>
                  );
                }
              })}
            </div>

            <div className="carousel-item active">
              <div className="row mb-5">
                {/* Contenido de los Cursos relacionados */}
              </div>
            </div>
            <div className="carousel-item">
              <div className="row mb-5">
                {/* Contenido de los Cursos relacionados */}
              </div>
            </div>
            <div className="carousel-item">
              <div className="row mb-5">
                {/* Contenido de los Cursos relacionados */}
              </div>
            </div>
        </div>
        </>
       )}
      </div>

    </section>
  );
}

export default CourseDetail;
