
import { Link } from "react-router-dom"
import SingleProduct from './SingleProducts';

const AcademyImages = require.context('../images/', true);

function Home() {
  return (


    <section style={{ backgroundColor: 'DarkSlateGray', marginTop: 0, paddingTop: 50, paddingBottom: 20 }}>


      <div className="container">
        <h1 className='mb-4 text-center' style={{ fontFamily: 'ADLaM Display', color: 'white', fontSize: 40 }}>El boom de los idiomas</h1>
        <div className="d-flex justify-content-center align-items-center">
          <div className="rounded-circle overflow-hidden" style={{ width: 60, height: 60, margin: 30 }}>
            <Link to="/courses"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" alt="Circle Image" className="img-fluid" /></Link>
          </div>
          <div className="rounded-circle overflow-hidden" style={{ width: 60, height: 60, margin: 30 }}>
            <Link to="/courses"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png" alt="Circle Image" className="img-fluid" /></Link>
          </div>
          <div className="rounded-circle overflow-hidden" style={{ width: 60, height: 60, margin: 30 }}>
            <Link to="/courses"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png" alt="Circle Image" className="img-fluid" /></Link>
          </div>
          <div className="rounded-circle overflow-hidden" style={{ width: 60, height: 60, margin: 30 }}>
            <Link to="/courses"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png" alt="Circle Image" className="img-fluid" /></Link>
          </div>
          <div className="rounded-circle overflow-hidden" style={{ width: 60, height: 60, margin: 30 }}>
            <Link to="/courses"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png" alt="Circle Image" className="img-fluid" /></Link>
          </div>
          <div className="rounded-circle overflow-hidden" style={{ width: 60, height: 60, margin: 30 }}>
            <Link to="/courses"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png" alt="Circle Image" className="img-fluid" /></Link>
          </div>
          <div className="rounded-circle overflow-hidden" style={{ width: 60, height: 60, margin: 30 }}>
            <Link to="/courses"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png" alt="Circle Image" className="img-fluid" /></Link>
          </div>
          <div className="rounded-circle overflow-hidden" style={{ width: 60, height: 60, margin: 30 }}>
            <Link to="/courses"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png" alt="Circle Image" className="img-fluid" /></Link>
          </div>
          <div className="rounded-circle overflow-hidden" style={{ width: 60, height: 60, margin: 30 }}>
            <Link to="/courses"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png" alt="Circle Image" className="img-fluid" /></Link>
          </div>
          <div className="rounded-circle overflow-hidden" style={{ width: 60, height: 60, margin: 30 }}>
            <Link to="/courses"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png" alt="Circle Image" className="img-fluid" /></Link>
          </div>
          <div className="rounded-circle overflow-hidden" style={{ width: 60, height: 60, margin: 30 }}>
            <Link to="/courses"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png" alt="Circle Image" className="img-fluid" /></Link>
          </div>

        </div>
        {/* latest course section */}
        <h3 className="mb-4" style={{ fontFamily: 'ADLaM Display', color: 'white' }}> Latest Course<Link to="/course/python-timer/123" className="float-end btn btn-warning"> view all course{" "}<i className="fa-solid fa-arrow-right-long"></i></Link></h3>
        <div className="row mb-4">
          <SingleProduct title="Java" imgSrc={AcademyImages('./courses/java.png')} />
          <SingleProduct title="Python basic" imgSrc={AcademyImages('./courses/python.png')} />
          <SingleProduct title="Django" imgSrc={AcademyImages('./courses/django.png')} />
          <SingleProduct title="JavaScrip" imgSrc={AcademyImages('./courses/javascript.png')} />

          {/* categorias populares */}

          <h3 className='mb-4' style={{ fontFamily: 'ADLaM Display', color: 'white' }}>Popular categories<Link to="/" className="float-end btn btn-warning"> View Categories <i className="fa-solid fa-arrow-right-long"></i></Link></h3>
          <div className="row" >
            {/* category Box */}
            <div className="col-12 col-md-3 mb-2">
              <div className="card">
                <img src={AcademyImages('./categorys/INTELIGENCIA ARTIFICIAL.png')} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title text-center">
                    <Link to="/category/cybersecurity/1">Artificial Intelligent</Link>
                  </h4>
                  <div className="card-footer">Course download 2500</div>
                </div>
              </div>
            </div>
            {/* Category Box end */}

            {/* Category Box */}
            <div className="col-12 col-md-3 mb-2">
              <div className="card">
                <img src={AcademyImages('./categorys/programacion.png')} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title text-center">
                    <Link to="/category/cybersecurity/1">Programming</Link> </h4>
                  <div className="card-footer">Course download 25500</div>
                </div>
              </div>
            </div>
            {/* Category Box end */}
            {/* Category Box */}
            <div className="col-12 col-md-3 mb-2">
              <div className="card">
                <img src={AcademyImages('./categorys/estilage.png')} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title text-center">
                    <Link to="/category/cybersecurity/1">Estilage</Link> </h4>
                  <div className="card-footer">Course download 25500</div>
                </div>
              </div>
            </div>
            {/* Category Box end */}
            {/* Category Box */}
            <div className="col-12 col-md-3 mb-2">
              <div className="card">
                <img src={AcademyImages('./categorys/ciberseguridad.png')} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title text-center">
                    <Link to="/category/cybersecurity/1">CiberSecurity</Link> </h4>
                  <div className="card-footer">Course download 25500</div>
                </div>
              </div>
            </div>
            {/* Category Box end */}
          </div>
          {/* end category populares */}

          {/* Instructor populares */}
          <h3 className='mb-4' style={{ fontFamily: 'ADLaM Display', color: 'DarkSlateGray' }}>Popular instructor<Link to="/" className="float-end btn btn-warning"> View instructor <i className="fa-solid fa-arrow-right-long"></i></Link></h3>
          <div className="row">
            {/* instructor Box */}
            <div className="col-12 col-md-3 mb-2">
              <div className="card">
                <img src={AcademyImages('./instructor/marlon.png')} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title text-center" style={{ fontFamily: 'Amaranth', color: 'DarkSlateGray' }}>Marlon Peralta</h4>
                  <div className="card-footer">
                    <button title="Agregar al carrito" className='btn btn-warning btn-sm-2'><i class="fa-solid fa-eye"></i></button>
                    <button title="Agregar medalla" className='btn btn-primary btn-sm-2 ms-2'> <i className="fa fa-medal"></i></button>
                  </div>
                </div>
              </div>
            </div>
            {/* instructor Box end */}

            {/* instructor Box */}
            <div className="col-12 col-md-3 mb-2">
              <div className="card">
                <img src={AcademyImages('./instructor/darwin.png')} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title text-center" style={{ fontFamily: 'Amaranth', color: 'DarkSlateGray' }}>Darwin Salinas</h4>
                  <div className="card-footer">
                    <button title="Agregar al carrito" className='btn btn-warning btn-sm-2'><i class="fa-solid fa-eye"></i></button>
                    <button title="Agregar medalla" className='btn btn-primary btn-sm-2 ms-2'> <i className="fa fa-medal"></i></button>
                  </div>
                </div>
              </div>
            </div>
            {/* instructor Box end */}
            {/* instructor Box */}
            <div className="col-12 col-md-3 mb-2">
              <div className="card">
                <img src={AcademyImages('./instructor/eliseo.png')} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title text-center" style={{ fontFamily: 'Amaranth', color: 'DarkSlateGray' }}>Eliseo Davila</h4>
                  <div className="card-footer">
                    <button title="Agregar al carrito" className='btn btn-warning btn-sm-2'><i class="fa-solid fa-eye"></i></button>
                    <button title="Agregar medalla" className='btn btn-primary btn-sm-2 ms-2'> <i className="fa fa-medal"></i></button>
                  </div>
                </div>
              </div>
            </div>
            {/* instructor Box end */}
            {/* instructor Box */}
            <div className="col-12 col-md-3 mb-2">
              <div className="card">
                <img src={AcademyImages('./instructor/perfil.png')} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title text-center" style={{ fontFamily: 'Amaranth', color: 'DarkSlateGray' }}>Bryan Alvarado</h4>
                  <div className="card-footer">
                    <button title="Agregar al carrito" className='btn btn-warning btn-sm-2'><i class="fa-solid fa-eye"></i></button>
                    <button title="Agregar medalla" className='btn btn-primary btn-sm-2 ms-2'> <i className="fa fa-medal"></i></button>
                  </div>
                </div>
              </div>
            </div>
            {/* instructor Box end */}
          </div>
          {/* end instructor populares */}



          {/* Carusel */}

          <div id="carouselExampleIndicators" className="carousel slide my-4  text-white p-5" data-bs-ride="true">

            <div id="carouselExampleIndicators" className="carousel slide my-4  text-white p-5" data-bs-ride="true">

              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <figure className="text-center">
                    <blockquote className="blockquote">
                      <p>100% recomendable los cursos del instructor Marlon peralta, explicacion magestuosa.</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                      <i className='fa fa-star text-warning'></i>
                      <i className='fa fa-star text-warning'></i>
                      <i className='fa fa-star text-warning'></i>
                      <cite title="Source Title" style={{ color: 'white' }}>Juan Duarte</cite>
                    </figcaption>
                  </figure>
                </div>
                <div className="carousel-item">
                  <figure className="text-center">
                    <blockquote className="blockquote"  >
                      <p >A well-known quote, contained in a blockquote element.</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                      <i className='fa fa-star text-warning'></i>
                      <i className='fa fa-star text-warning'></i>
                      <i className='fa fa-star text-warning'></i>
                      <i className='fa fa-star text-warning'></i>
                      <cite title="Source Title" style={{ color: 'white' }}> Users Name</cite>
                    </figcaption>
                  </figure>
                </div>

                <div className="carousel-item">
                  <figure className="text-center">
                    <blockquote className="blockquote">
                      <p>"Uracademy ha sido de gran ayuda para mi desarrollo como programador"</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                      <i className='fa fa-star text-warning'></i>
                      <i className='fa fa-star text-warning'></i>
                      <cite title="Source Title" style={{ color: 'white' }}>Randy Arguello</cite>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            {/* End  */}


          </div>
        </div>
      </div>
    </section>
  );
}

export default Home