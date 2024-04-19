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
          {/* Product Box */}
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
              {/* Product Box end */}

              {/* Product Box */}
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
              {/* Product Box end */}

              {/* Product Box */}
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
              {/* Product Box end */}

              {/* Product Box */}
            <div className="col-12 col-md-3 mb-2">    
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title text-center">Django</h4>
                <h5 className="card-title text-muted text-center">Precio: C$500.00</h5>
                <div className="card-footer">
              </div>
                  <button title="Agregar al carrito" className= 'btn btn-success btn-sm'> <i className="fa-solid fa-cart-shopping"></i></button>
                  <button title="Agregar a la lista" className= 'btn btn-danger btn-sm ms-1'> <i className="fa fa-heart"></i></button>
                  <button title="Agregar a la lista" className= 'btn btn-warning btn-sm ms-2'><i class="fa-solid fa-plus"></i></button>
              </div>
            </div>
            </div>
              {/* Product Box end */}

              {/* Product Box */}
            <div className="col-12 col-md-3 mb-2">    
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title text-center">Node.js</h4>
                <h5 className="card-title text-muted text-center">Precio: C$500.00</h5>
                <div className="card-footer">
              </div>
                  <button title="Agregar al carrito" className= 'btn btn-success btn-sm'> <i className="fa-solid fa-cart-shopping"></i></button>
                  <button title="Agregar a la lista" className= 'btn btn-danger btn-sm ms-1'> <i className="fa fa-heart"></i></button>
                  <button title="Agregar a la lista" className= 'btn btn-warning btn-sm ms-2'><i class="fa-solid fa-plus"></i></button>
              </div>
            </div>
            </div>
              {/* Product Box end */}

              {/* Product Box */}
            <div className="col-12 col-md-3 mb-2">    
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title text-center">Html</h4>
                <h5 className="card-title text-muted text-center">Precio: C$500.00</h5>
                <div className="card-footer">
              </div>
                  <button title="Agregar al carrito" className= 'btn btn-success btn-sm'> <i className="fa-solid fa-cart-shopping"></i></button>
                  <button title="Agregar a la lista" className= 'btn btn-danger btn-sm ms-1'> <i className="fa fa-heart"></i></button>
                  <button title="Agregar a la lista" className= 'btn btn-warning btn-sm ms-2'><i class="fa-solid fa-plus"></i></button>
              </div>
            </div>
            </div>
              {/* Product Box end */}

              {/* Product Box */}
            <div className="col-12 col-md-3 mb-2">    
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title text-center">React</h4>
                <h5 className="card-title text-muted text-center">Precio: C$500.00</h5>
                <div className="card-footer">
              </div>
                  <button title="Agregar al carrito" className= 'btn btn-success btn-sm'> <i className="fa-solid fa-cart-shopping"></i></button>
                  <button title="Agregar a la lista" className= 'btn btn-danger btn-sm ms-1'> <i className="fa fa-heart"></i></button>
                  <button title="Agregar a la lista" className= 'btn btn-warning btn-sm ms-2'><i class="fa-solid fa-plus"></i></button>
              </div>
            </div>
            </div>
              {/* Product Box end */}

              {/* Product Box */}
            <div className="col-12 col-md-3 mb-2">    
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title text-center">JavaScript</h4>
                <h5 className="card-title text-muted text-center">Precio: C$500.00</h5>
                <div className="card-footer">
              </div>  
                  <button title="Agregar al carrito" className= 'btn btn-success btn-sm'> <i className="fa-solid fa-cart-shopping"></i></button>
                  <button title="Agregar a la lista" className= 'btn btn-danger btn-sm ms-1'> <i className="fa fa-heart"></i></button>
                  {/* <button title="Agregar a la lista" className= 'btn btn-warning btn-sm ms-2'><i class="fa-solid fa-thumbs-down"></i></button> */}
                  <button title="Agregar a la lista" className= 'btn btn-primary btn-sm ms-2'><i class="fa-solid fa-bookmark"></i></button>
              </div>
            </div>
            </div>
              {/* Product Box end */}
        </div>
      </div>
</main>
    </>
);
}

export default App;
