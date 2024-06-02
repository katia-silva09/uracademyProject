// import logo from "../logo.svg";
import { Link } from "react-router-dom";

function RelatedSingleCourses(props){
    return (
        <div className="col-4 offeset-4 mb-4">
        <div className="card">
          <Link to={`/course/${props.course.slug}/${props.course.id}`}>
            <img src={props.course.image} class="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <h4 className="card-title"><Link to={`/course/${props.course.slug}/${props.course.id}`}>{props.course.title}</Link></h4>
            <h5 className="card-title text-muted">Precio: C$. {props.course.price}</h5>
          <div className="card-footer">
            <button
              title="Agregar al carrito"
              className="btn btn-success btn-sm"
            >
              <i className="fa-solid fa-cart-plus"></i>
            </button>
            <button
              title="Agregar a la lista"
              className="btn btn-danger btn-sm ms-1"
            >
              <i className="fa fa-heart"></i>
            </button>
            </div>
            </div>
        </div>
        </div>

    );
}
export default RelatedSingleCourses;