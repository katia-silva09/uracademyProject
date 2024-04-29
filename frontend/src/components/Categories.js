
import { Link } from "react-router-dom";
import programming from "../programacion.svg"
import ia from "../IA.svg"

function Categories() {
  return (
    <section className="container">
      {/* categorias populares */}

      <h3 className="mt-4">Categories</h3>
      <div className="row mb-4">
        {/* category Box */}
        <div className="col-12 col-md-3 mb-2">
          <div className="card">
            <img src={ programming } className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title text-center">
                <Link to="/category/programming/1">Programming</Link>
              </h4>
            </div>
            <div className="card-footer">Course Downloads 202345</div>
          </div>
        </div>
        {/* Category Box end */}

                {/* category Box */}
                <div className="col-12 col-md-3 mb-2">
          <div className="card">
            <img src={ ia } className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title text-center">
                <Link to="/category/cybersecurity/1">Artificial Intelligent</Link>
              </h4>
            </div>
            <div className="card-footer">Course Downloads 202345</div>
          </div>
        </div>
        {/* Category Box end */}      
      </div>

      {/* PAGINATION */}
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
      {/* END PAGINATION */}
    </section>
  );
}

export default Categories;
