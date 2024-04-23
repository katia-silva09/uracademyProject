import logo from '../logo.svg'
import { Link } from 'react-router-dom'
function Categories(){
return(
    <section>
                {/* categorias populares */}

                <h3 className='mb-4'>Popular categories<a href="#" className="float-end btn btn-dark"> View Categories <i className="fa-solid fa-arrow-right-long"></i></a></h3> 
        <div className="row">
          {/* category Box */}
            <div className="col-12 col-md-3 mb-2">    
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title text-center"><Link to="/category/cybersecurity/1">Cybersecurity</Link></h4>             
             </div>
             <div className="card-footer">Course Downloads 202345</div>
            </div>
            </div>
              {/* Category Box end */}

          {/* Category Box */}
            <div className="col-12 col-md-3 mb-2">    
            <div className="card">
              <img src={logo} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h4 className="card-title text-center">Programming</h4>
                <div className="card-footer">
                 <button title="Agregar al carrito" className= 'btn btn-warning btn-sm-2'><i class="fa-solid fa-cart-arrow-down"></i></button>                  
                 <button title="Agregar a me gusta" className= 'btn btn-danger btn-sm-2 ms-2'> <i className="fa fa-heart"></i></button>
              </div>

              </div>
            </div>
            </div>
            </div>
            {/* Category Box end */}

            {/* end category populares */}

            {/* PAGINATION */}
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
            </nav>
            {/* END PAGINATION */}
    </section>
    )
}

export default Categories