import SingleCategories from "./seller/singleCategories";
import { Link } from "react-router-dom";
const AcademyImages = require.context('../images/categorys', true);


function Categories() {
  return (
    <section className="container">
      {/* categorias populares */}

      <h3 className="mt-4 text-center" style={{ fontFamily: 'ADLaM Display', fontSize: 40, paddingTop: 2, padding: 20 }}>Categories</h3>

      {/* Related carousel products */}
      <div id="relatedProductSlider" className="carousel-dark slide" data-bs-ride="true">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner" >
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" style={{ width: 40 }}>
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" style={{ width: 40 }}>
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
            <div className="carousel-item active">
              <div className="row mb-5">
                <SingleCategories title='programming' imgSrc={AcademyImages('./programacion.png')} />
                <SingleCategories title='web design' imgSrc={AcademyImages('./INTELIGENCIA ARTIFICIAL.png')}/>
                <SingleCategories title='cybersecurity' imgSrc={AcademyImages('./ciberseguridad.png')}/>
                <SingleCategories title='machine learning' imgSrc={AcademyImages('./INTELIGENCIA ARTIFICIAL.png')}/>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row mb-5">
                <SingleCategories title='Artificial Intelligent' imgSrc={AcademyImages('./ciberseguridad.png')}/>
                <SingleCategories title='movil programming' imgSrc={AcademyImages('./INTELIGENCIA ARTIFICIAL.png')}/>
                <SingleCategories title='admin server' imgSrc={AcademyImages('./INTELIGENCIA ARTIFICIAL.png')}/>
                <SingleCategories title='web development' imgSrc={AcademyImages('./ciberseguridad.png')}/>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row mb-5">
                <SingleCategories title='software engineer' imgSrc={AcademyImages('./INTELIGENCIA ARTIFICIAL.png')}/>
                <SingleCategories title='data science ' imgSrc={AcademyImages('./INTELIGENCIA ARTIFICIAL.png')}/>
                <SingleCategories title='style' imgSrc={AcademyImages('./estilage.png')}/>
                <SingleCategories title='web support' imgSrc={AcademyImages('./INTELIGENCIA ARTIFICIAL.png')}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* PAGINATION */}
      <nav aria-label="Page navigation example" >
        <ul className="pagination" >
          <li className="page-item">
            <a className="page-link bg-primary" style={{ fontFamily: '-moz-initial', color: 'white' }} href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link bg-dark" style={{ fontFamily: '-moz-initial', color: 'white' }} href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link bg-dark" style={{ fontFamily: '-moz-initial', color: 'white' }} href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link bg-dark" style={{ fontFamily: '-moz-initial', color: 'white' }} href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link bg-primary" style={{ fontFamily: '-moz-initial', color: 'white' }} href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
      {/* END PAGINATION */}
    </section>
  );
}

export default Categories;
