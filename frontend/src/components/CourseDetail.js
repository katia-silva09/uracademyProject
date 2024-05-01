import SingleProduct from "./SingleProducts";
import logo from "../logo.svg";
function CourseDetail() {
  return (
    <section className="container mt-4">
      <h3 className=" mb-4">Detalle del Producto</h3>
        <div className="row">
          <div className="col-4">
            <div id="relatedThumbnailSlider" className="carousel-dark slide carousel-fade" data-bs-ride="true">
              {/* <div className="carousel-indicators">
                <button type="button" data-bs-target="#relatedThumbnailSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#relatedThumbnailSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#relatedThumbnailSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div> */}

              <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={logo} className="img-thumbnail mb-5 " alt="..." />
                  <div className="carousel-item"> 
                    <img src={logo} className="img-thumbnail mb-5 " alt="..." />
                  </div>
                  <div className="carousel-item"> 
                    <img src={logo} className="img-thumbnail mb-5 " alt="..." />
                  </div>
                </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#relatedThumbnailSlider" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#relatedThumbnailSlider" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
            </div>
          </div>
        </div>
          <div className="col-8">
            <h4>React</h4>
            <p>
              Descripción: The standard chunk of Lorem Ipsum used since the 1500s
              is reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </p>
            <p className="text-muted">Precio:$500</p>
            <button title="Demo" target="_blanck" className="btn btn-dark">
              <i className="fa-solid fa-cart-plus"></i>Demo
            </button>
            <button title="Agregar al carrito" target="_blanck" className="btn btn-primary ms-1">
              <i className="fa-solid fa-cart-plus"></i>Agregar al carrito
            </button>
            <button
              title="Comprar ahora" target="_blanck" className="btn btn-success ms-1" >
              <i class="fa-solid fa-credit-card"></i>Comprar ahora
            </button>
            <button
              title="gregar a la lista" target="_blanck" className="btn btn-danger ms-1">
              <i class="fa-solid fa-tag"></i>Agregar a la lista
            </button>
          </div>
        </div>

        {/* Related carousel products */}
        <h3 className="mt-5 mb-3">Productos Relacionados</h3>
        <div id="relatedProductSlider" className="carousel-dark slide" data-bs-ride="true">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
              <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
            <div class="carousel-inner">
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
              <div class="carousel-item active">
                <div className="row mb-5">
                  <SingleProduct title="Django API" />
                  <SingleProduct title="Flask" />
                  <SingleProduct title="Introduccion a Python" />
                  <SingleProduct title="Python Product 4 " />
                </div>
              </div>
              <div class="carousel-item">
                <div className="row mb-5">
                  <SingleProduct title="Python Product 1 " />
                  <SingleProduct title="Python Product 2 " />
                  <SingleProduct title="Python Product 3 " />
                  <SingleProduct title="Python Product 4 " />
                </div>
              </div>
              <div class="carousel-item">
                <div className="row mb-5">
                  <SingleProduct title="Python Product 1 " />
                  <SingleProduct title="Python Product 2 " />
                  <SingleProduct title="Python Product 3 " />
                  <SingleProduct title="Python Product 4 " />
                </div>
              </div>
          </div>
          </div>
      </div>
    </section>
  );
}

export default CourseDetail;
