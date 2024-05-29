import { Link } from "react-router-dom";

function Instructor(props) {
  return (
    <div className="col-12 col-md-3 mb-4 d-flex align-items-stretch">
      <div className="card bg-dark w-100">
        <span className="border border-warning"></span>
        <Link to={`/instructor/${props.instructor.name}/${props.instructor.id}`}>
          <img src={props.instructor.image} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body d-flex flex-column shadow">
          <h4 className="card-title text-center">
            <Link 
              to={`/course/${props.instructor.name}/${props.instructor.id}`} 
              style={{ fontFamily: 'ADLaM Display', color: 'white', textDecoration: 'none' }}>
              {props.instructor.name}
            </Link>
          </h4>
          <div className="mt-auto">
            <button title="Agregar al carrito" className='btn btn-warning btn-sm'>
              <i className="fa-solid fa-cart-arrow-down"></i>
            </button>
            <button title="Agregar a la lista" className='btn btn-danger btn-sm ms-2'>
              <i className="fa fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructor;
