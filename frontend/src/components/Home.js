import logo from '../logo.svg'


function Home(){
    return(
        <main className='mt-4'>
        <div className="container">
        <h3 className='mt-4'>Latest courses<a href="#" className="float-end btn btn-dark"> View Courses <i className="fa-solid fa-arrow-right-long"></i></a></h3> 
        <div className="row">
          {/* Courses Box */}
            <div className="col-12 col-md-3 mb-2">    
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title text-center">Php</h4>
                <h5 className="card-title text-muted text-center">Precio: C$500.00</h5>
                <div className="card-footer">
                  <button title="Agregar al carrito" className= 'btn btn-warning btn-sm'><i class="fa-solid fa-cart-arrow-down"></i></button>
                  <button title="Agregar a la lista" className= 'btn btn-danger btn-sm ms-2'> <i className="fa fa-heart"></i></button>
              </div>
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
                  <button title="Agregar al carrito" className= 'btn btn-warning btn-sm'><i className="fa-solid fa-cart-arrow-down"></i></button>
                  <button title="Agregar a la lista" className= 'btn btn-danger btn-sm ms-2'> <i className="fa fa-heart"></i></button>
              </div>
                 
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
                  <button title="Agregar al carrito" className= 'btn btn-warning btn-sm'><i class="fa-solid fa-cart-arrow-down"></i></button>
                  <button title="Agregar a la lista" className= 'btn btn-danger btn-sm ms-1'> <i className="fa fa-heart"></i></button>
              </div>
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
                <button title="Agregar al carrito" className= 'btn btn-warning btn-sm'><i class="fa-solid fa-cart-arrow-down"></i></button>
                  <button title="Agregar a Me gusta" className= 'btn btn-danger btn-sm ms-1'> <i className="fa fa-heart"></i></button>
              </div>
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
                  <button title="Agregar al carrito" className= 'btn btn-warning btn-sm'><i class="fa-solid fa-cart-arrow-down"></i></button>
                  <button title="Agregar a Me gusta" className= 'btn btn-danger btn-sm ms-1'> <i className="fa fa-heart"></i></button>
              </div>
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
                <button title="Agregar al carrito" className= 'btn btn-warning btn-sm'><i class="fa-solid fa-cart-arrow-down"></i></button>
              <button title="Agregar a Me gusta" className= 'btn btn-danger btn-sm ms-1'> <i className="fa fa-heart"></i></button>
              </div>
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
                <button title="Agregar al carrito" className= 'btn btn-warning btn-sm'><i class="fa-solid fa-cart-arrow-down"></i></button>                  
               <button title="Agregar a Me gusta" className= 'btn btn-danger btn-sm ms-1'> <i className="fa fa-heart"></i></button>
              </div>
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
                  <button title="Agregar al carrito" className= 'btn btn-warning btn-sm'><i class="fa-solid fa-cart-arrow-down"></i></button>
                  <button title="Agregar a Me gusta" className= 'btn btn-danger btn-sm ms-1'> <i className="fa fa-heart"></i></button>
              </div>  
              </div>
            </div>
            </div>
              {/* Courses Box end */}

        {/* Blogs populares */}

        <h3 className='mb-4'>Popular Blogs<a href="#" className="float-end btn btn-dark"> View Blogs <i className="fa-solid fa-arrow-right-long"></i></a></h3> 
        <div className="row">
          {/* Courses Box */}
            <div className="col-12 col-md-3 mb-2">    
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title text-center">stackoverflow</h4>
                <div className="card-footer">
                  <button title="Agregar al carrito" className= 'btn btn-warning btn-sm'><i class="fa-solid fa-cart-arrow-down"></i></button>
                  <button title="Agregar me gusta" className= 'btn btn-danger btn-sm ms-2'> <i className="fa fa-heart"></i></button> 
              </div>             
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
                 <button title="Agregar al carrito" className= 'btn btn-warning btn-sm'><i class="fa-solid fa-cart-arrow-down"></i></button>                  
                 <button title="Agregar a me gusta" className= 'btn btn-danger btn-sm ms-2'> <i className="fa fa-heart"></i></button>
              </div>

              </div>
            </div>
            </div>
            </div>
            {/* end blogs populares */}
              {/* Courses Box end */}
        {/* Documentation populares */}

        <h3 className='mb-4'>Popular documentations<a href="#" className="float-end btn btn-dark"> View Documentation <i className="fa-solid fa-arrow-right-long"></i></a></h3> 
        <div className="row">
          {/* Courses Box */}
            <div className="col-12 col-md-3 mb-2">    
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title text-center">Django</h4>
                <div className="card-footer">
                  <button title="Agregar al carrito" className= 'btn btn-warning btn-sm'><i class="fa-solid fa-cart-arrow-down"></i></button>
                  <button title="Agregar a me gusta" className= 'btn btn-danger btn-sm ms-2'> <i className="fa fa-heart"></i></button>
              </div>
              </div>
            </div>
            </div>
              {/* Courses Box end */}

          {/* Courses Box */}
            <div className="col-12 col-md-3 mb-2">    
            <div className="card">
              <img src={logo} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h4 className="card-title text-center">Bootstrap</h4>
               <div className="card-footer">
                 <button title="Agregar al carrito" className= 'btn btn-warning btn-sm'><i class="fa-solid fa-cart-arrow-down"></i></button>                  
                 <button title="Agregar a me gusta" className= 'btn btn-danger btn-sm ms-2'> <i className="fa fa-heart"></i></button>
               </div>
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


        </div>
      </div>
</main>
    );
}

export default Home