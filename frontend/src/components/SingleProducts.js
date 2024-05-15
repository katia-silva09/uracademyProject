// import logo from '../logo.svg';
import { Link } from "react-router-dom"
// import python from "../python.svg"
// const AcademyImages = require.context('../images/', true);


function SingleProduct(props) {
  const { imgSrc } = props;
  return (
    <div className="col-12 col-md-3 mb-4">
      <div className="card">
        <span class="border border-warning"></span>
        <Link to="/course/python-timer/123">
        <img src={imgSrc} className="card-img-top" alt="..." /></Link>
        <div className="card-body">
          <h4 className="card-title text-center"><Link to="/course/python-timer/123" style={{ fontFamily: 'ADLaM Display', color: 'DarkSlateGray' }}>{props.title}</Link></h4>
          <h5 className="card-title text-muted text-center">Precio: c$500.00</h5>
          <div className="card-footer">
            <button title="Agregar al carrito" className='btn btn-warning btn-sm'><i className="fa-solid fa-cart-arrow-down"></i></button>
            <button title="Agregar a la lista" className='btn btn-danger btn-sm ms-2'> <i className="fa fa-heart"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct