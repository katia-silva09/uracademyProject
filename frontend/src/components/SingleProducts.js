import logo from '../logo.svg';
import { Link } from "react-router-dom"

function SingleProduct(props){
    return(
        <div className="col-12 col-md-3 mb-4">
      <div className="card">
        <Link to="/course/python-timer/123"></Link>
        <img src={logo} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h4 className="card-title"><Link to="/course/python-timer/123">{props.title}</Link></h4>
              <h5 className="card-title text-muted">Precio: c$500.00</h5>
               <div className="card-footer">
                  <button title="Agregar al carrito" className= 'btn btn-warning btn-sm'><i className="fa-solid fa-cart-arrow-down"></i></button>
                  <button title="Agregar a la lista" className= 'btn btn-danger btn-sm ms-2'> <i className="fa fa-heart"></i></button>
              </div>
            </div>
          </div>
    </div>
    );
}

export default SingleProduct