import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


function App() {
  return (
    <>

        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
          <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand"  href="#">URACADEMY</a>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Courses</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Blogs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Documentation</a>
                </li>
              </ul>
            </div>
          </div>
      </nav>

<main className='mt-4'>
        <div className="container">
        <h3 className='mb-4'>Ultimos Courses<a href="#" className="float-end btn btn-dark"> View Courses <i className="fa-solid fa-arrow-right-long"></i></a></h3> 
        <div className="row">
          {/* Courses Box */}
            <div className="col-12 col-md-3 mb-2">    
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title text-center">Php</h4>
                <h5 className="card-title text-muted text-center">Precio: C$500.00</h5>
                <div className="card-footer">
              </div>
                  <button title="Agregar al carrito" className= 'btn btn-success btn-sm'> <i className="fa-solid fa-cart-shopping"></i></button>
                  <button title="Agregar a la lista" className= 'btn btn-danger btn-sm ms-2'> <i className="fa fa-heart"></i></button>
                  <button title="Agregar a la lista" className= 'btn btn-warning btn-sm ms-2'><i class="fa-solid fa-plus"></i></button>
              </div>
            </div>
            </div>
              {/* Courses Box end */}

          {/* Courses Box */}
            <div className="col-12 col-md-3 mb-2">    
            <div className="card">
              <img src={logo} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h4 className="card-title text-center">Laravel</h4>
                <h5 className="card-title text-muted text-center">Precio: C$500.00</h5>
                <div className="card-footer">
              </div>
                  <button title="Agregar al carrito" className= 'btn btn-success btn-sm'> <i className="fa-solid fa-cart-shopping"></i></button>
                  <button title="Agregar a la lista" className= 'btn btn-danger btn-sm ms-2'> <i className="fa fa-heart"></i></button>
                  <button title="Agregar a la lista" className= 'btn btn-warning btn-sm ms-2'><i class="fa-solid fa-plus"></i></button>
              </div>
            </div>
            </div>
              {/* Courses Box end */}

          {/* Courses Box */}

            <div className="col-12 col-md-3 mb-2">    
            <div className="card">
              <img src={ logo } className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title text-center">Python</h4>
                <h5 className="card-title text-muted text-center">Precio: C$500.00</h5>
                <div className="card-footer">
              </div>
                  <button title="Agregar al carrito" className= 'btn btn-success btn-sm'> <i className="fa-solid fa-cart-shopping"></i></button>
                  <button title="Agregar a la lista" className= 'btn btn-danger btn-sm ms-1'> <i className="fa fa-heart"></i></button>
                  <button title="Agregar a la lista" className= 'btn btn-danger btn-sm ms-1'><i className="fa-solid fa-cloud-arrow-down"></i></button>
              </div>
            </div>
            </div>
              {/* Courses Box end */}

          {/* Courses Box */}
            <div className="col-12 col-md-3 mb-2">    
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title text-center">Django</h4>
                <h5 className="card-title text-muted text-center">Precio: C$500.00</h5>
                <div className="card-footer">
              </div>
                  <button title="Agregar al carrito" className= 'btn btn-success btn-sm'> <i className="fa-solid fa-cart-shopping"></i></button>
                  <button title="Agregar a Me gusta" className= 'btn btn-danger btn-sm ms-1'> <i className="fa fa-heart"></i></button>
                  <button title="Agregar a la lista" className= 'btn btn-warning btn-sm ms-2'><i class="fa-solid fa-plus"></i></button>
              </div>
            </div>
            </div>
              {/* Courses Box end */}

          {/* Courses Box */}
          <div className="col-12 col-md-3 mb-2">    
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title text-center">Node.js</h4>
                <h5 className="card-title text-muted text-center">Precio: C$500.00</h5>
                <div className="card-footer">
              </div>
                  <button title="Agregar al carrito" className= 'btn btn-success btn-sm'> <i className="fa-solid fa-cart-shopping"></i></button>
                  <button title="Agregar a Me gusta" className= 'btn btn-danger btn-sm ms-1'> <i className="fa fa-heart"></i></button>
                  <button title="Agregar a la lista" className= 'btn btn-warning btn-sm ms-2'><i class="fa-solid fa-plus"></i></button>
              </div>
            </div>
            </div>
              {/* Courses Box end */}

              {/* Courses Box */}
            <div className="col-12 col-md-3 mb-2">    
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title text-center">Html</h4>
                <h5 className="card-title text-muted text-center">Precio: C$500.00</h5>
                <div className="card-footer">
              </div>
                  <button title="Agregar al carrito" className= 'btn btn-success btn-sm'> <i className="fa-solid fa-cart-shopping"></i></button>
                  <button title="Agregar a Me gusta" className= 'btn btn-danger btn-sm ms-1'> <i className="fa fa-heart"></i></button>
                  <button title="Agregar a la lista" className= 'btn btn-warning btn-sm ms-2'><i class="fa-solid fa-plus"></i></button>
              </div>
            </div>
            </div>
              {/* Courses Box end */}

              {/* Courses Box */}
            <div className="col-12 col-md-3 mb-2">    
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title text-center">React</h4>
                <h5 className="card-title text-muted text-center">Precio: C$500.00</h5>
                <div className="card-footer">
              </div>
                  <button title="Agregar al carrito" className= 'btn btn-success btn-sm'> <i className="fa-solid fa-cart-shopping"></i></button>
                  <button title="Agregar a Me gusta" className= 'btn btn-danger btn-sm ms-1'> <i className="fa fa-heart"></i></button>
                  <button title="Agregar a la lista" className= 'btn btn-warning btn-sm ms-2'><i class="fa-solid fa-plus"></i></button>
              </div>
            </div>
            </div>
              {/* Courses Box end */}

              {/* Courses Box */}
            <div className="col-12 col-md-3 mb-2">    
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title text-center">JavaScript</h4>
                <h5 className="card-title text-muted text-center">Precio: C$500.00</h5>
                <div className="card-footer">
              </div>  
                  <button title="Agregar al carrito" className= 'btn btn-success btn-sm'> <i className="fa-solid fa-cart-shopping"></i></button>
                  {/* <button title="Agregar a la lista" className= 'btn btn-warning btn-sm ms-2'><i class="fa-solid fa-thumbs-down"></i></button> */}
                  <button title="Agregar a Me gusta" className= 'btn btn-danger btn-sm ms-1'> <i className="fa fa-heart"></i></button>
                  <button title="Agregar a la lista" className= 'btn btn-warning btn-sm ms-2'><i class="fa-solid fa-plus"></i></button>
              </div>
            </div>
            </div>
              {/* Courses Box end */}

        {/* Blogs populares */}

        <h3 className='mb-4'>Blogs Populares<a href="#" className="float-end btn btn-dark"> View Blogs <i className="fa-solid fa-arrow-right-long"></i></a></h3> 
        <div className="row">
          {/* Courses Box */}
            <div className="col-12 col-md-3 mb-2">    
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title text-center">stackoverflow</h4>
                <div className="card-footer">
              </div>
                  <button title="Agregar al carrito" className= 'btn btn-success btn-sm'> <i className="fa-solid fa-cart-shopping"></i></button>
                  <button title="Agregar me gusta" className= 'btn btn-danger btn-sm ms-2'> <i className="fa fa-heart"></i></button>
                  <button title="Agregar a la lista" className= 'btn btn-warning btn-sm ms-2'><i class="fa-solid fa-plus"></i></button>
              </div>
            </div>
            </div>
              {/* Courses Box end */}

          {/* Courses Box */}
            <div className="col-12 col-md-3 mb-2">    
            <div className="card">
              <img src={logo} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h4 className="card-title text-center">Smashing Magazine</h4>
                <div className="card-footer">
              </div>
                  <button title="Agregar al carrito" className= 'btn btn-success btn-sm'> <i className="fa-solid fa-cart-shopping"></i></button>
                  <button title="Agregar a me gusta" className= 'btn btn-danger btn-sm ms-2'> <i className="fa fa-heart"></i></button>
                  <button title="Agregar a la lista" className= 'btn btn-warning btn-sm ms-2'><i class="fa-solid fa-plus"></i></button>
              </div>
            </div>
            </div>
            </div>
            {/* end blogs populares */}
              {/* Courses Box end */}
        {/* Documentation populares */}

        <h3 className='mb-4'>Documentaciones Populares<a href="#" className="float-end btn btn-dark"> View Documentation <i className="fa-solid fa-arrow-right-long"></i></a></h3> 
        <div className="row">
          {/* Courses Box */}
            <div className="col-12 col-md-3 mb-2">    
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title text-center">Django Documentation</h4>
                <div className="card-footer">
              </div>
                  <button title="Agregar al carrito" className= 'btn btn-success btn-sm'> <i className="fa-solid fa-cart-shopping"></i></button>
                  <button title="Agregar a me gusta" className= 'btn btn-danger btn-sm ms-2'> <i className="fa fa-heart"></i></button>
                  <button title="Agregar a la lista" className= 'btn btn-warning btn-sm ms-2'><i class="fa-solid fa-plus"></i></button>
              </div>
            </div>
            </div>
              {/* Courses Box end */}

          {/* Courses Box */}
            <div className="col-12 col-md-3 mb-2">    
            <div className="card">
              <img src={logo} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h4 className="card-title text-center">Bootstrap Documentation</h4>
                <div className="card-footer">
              </div>
                  <button title="Agregar al carrito" className= 'btn btn-success btn-sm'> <i className="fa-solid fa-cart-shopping"></i></button>
                  <button title="Agregar a me gusta" className= 'btn btn-danger btn-sm ms-2'> <i className="fa fa-heart"></i></button>
                  <button title="Agregar a la lista" className= 'btn btn-warning btn-sm ms-2'><i class="fa-solid fa-plus"></i></button>
              </div>
            </div>
            </div>
            </div>
            {/* end blogs populares */}
              {/* Courses Box end */}


        {/* Carusel */}
        <div id="carouselExampleIndicators" className="carousel slide my-4 border bg-dark text-white p-5" data-bs-ride="true">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <figure className="text-center">
                  <blockquote className="blockquote">
                    <p>A well-known quote, contained in a blockquote element.</p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                      <i className='fa fa-star text-warning'></i>
                      <i className='fa fa-star text-warning'></i>
                      <i className='fa fa-star text-warning'></i>
                      <cite title="Source Title"> Users name</cite>
                  </figcaption>
                </figure>
              </div>
              <div className="carousel-item">
                <figure className="text-center">
                    <blockquote className="blockquote">
                    <p>A well-known quote, contained in a blockquote element.</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                      <i className='fa fa-star text-warning'></i>
                      <i className='fa fa-star text-warning'></i>
                      <i className='fa fa-star text-warning'></i>
                      <i className='fa fa-star text-warning'></i>
                      <cite title="Source Title"> Users Name</cite>
                    </figcaption>
                </figure>
              </div>

              <div className="carousel-item">
                <figure className="text-center">
                    <blockquote className="blockquote">
                      <p>A well-known quote, contained in a blockquote element.</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                      <i className='fa fa-star text-warning'></i>
                      <i className='fa fa-star text-warning'></i>
                      <cite title="Source Title"> Users Name</cite>
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

          {/* FOOTER */}
          <footer className="d-flex flex-wrap justify-content-between container align-items-center my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                PythonSoftwareMP
                </a>
                    <span className="mb-3 mb-md-0 text-muted">© 2024 Company, URACADEMY</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex pt-2">
                    <li className="ms-3">
                        <a className="text-muted" href="www.facebook.com" target='blank'><i className='fa-brands fa-facebook fa-2x'></i></a>            
                    </li>
                    <li className="ms-3">
                        <a className="text-muted" href="www.gmail.com" target="_blank"><i className="fab fa-google fa-2x"></i></a>            
                    </li>
                    <li className="ms-3">
                        <a className="text-muted" href="www.twitter.com" target='blank'><i className='fa-brands fa-twitter fa-2x'></i></a>            
                    </li>
                    <li className="ms-3">
                        <a className="text-muted" href="www.github.com" target='blank'><i className='fa-brands fa-github fa-2x'></i></a>            
                    </li>
                </ul>
          </footer>

        {/* end futer */}




        </div>
      </div>
</main>
    </>
);
}

export default App;
