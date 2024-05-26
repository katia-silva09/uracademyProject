import { useParams } from "react-router";
import { useEffect, useState } from "react";

function CourseDetail() {
  const baseUrl = "http://127.0.0.1:8000/api";
  const [CourseData, setCourseData] = useState([]);
  const [CourseImgs, setCourseImgs] = useState([]);
  const { course_id } = useParams();

  useEffect(() => {
    fetchData(baseUrl + "/course/" + course_id);
  }, [course_id]);

  function fetchData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setCourseData(data);
        setCourseImgs(data.course_imgs || []);
      });
  }

  return (
    <section className="container mt-4">
      <h3 className="mb-4">Detalle del curso</h3>
      <div className="row">
        <div className="col-4">
          <div id="relatedThumbnailsSlider" className="carousel carousel-dark slide carousel-fade" data-bs-ride="true">
            
            <div className="carousel-inner">
            {
                                CourseImgs.map((img, index) => {
                                    if (index === 0) {
                                        return (
                                            <div className="carousel-item active">
                                                <img src={img.image} className="img-thumbnail mb-5" alt={index} />
                                            </div>
                                        );
                                    }
                                    else {
                                        return (
                                            <div className="carousel-item">
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
          <h4>{CourseData.title}</h4>
          <p>{CourseData.details}</p>
          <p className="text-muted">Precio: ${CourseData.price}</p>
          <button title="Demo" target="_blanck" className="btn btn-dark">
            <i className="fa-solid fa-cart-plus"></i>Demo
          </button>
          <button title="Agregar al carrito" target="_blanck" className="btn btn-primary ms-1">
            <i className="fa-solid fa-cart-plus"></i>Agregar al carrito
          </button>
          <button title="Comprar ahora" target="_blanck" className="btn btn-success ms-1">
            <i className="fa-solid fa-credit-card"></i>Comprar ahora
          </button>
          <button title="Agregar a la lista" target="_blanck" className="btn btn-danger ms-1">
            <i className="fa-solid fa-tag"></i>Agregar a la lista
          </button>
        </div>
      </div>

      {/* Related carousel products */}
      <h3 className="mt-5 mb-3">Productos Relacionados</h3>
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
                {/* Contenido de los productos relacionados */}
              </div>
            </div>
            <div className="carousel-item">
              <div className="row mb-5">
                {/* Contenido de los productos relacionados */}
              </div>
            </div>
            <div className="carousel-item">
              <div className="row mb-5">
                {/* Contenido de los productos relacionados */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseDetail;
