import SingleProduct from "./SingleProducts";

function CategoryCourses() {
  return (
    <section className="container">
      <h3 className="mt-4">
        <span className="text-success">Courses python</span>
      </h3>
      <div className="row mb-4">
        <SingleProduct title="Django" />
        <SingleProduct title="Flask" />
        <SingleProduct title="Django Rest Framework" />
      </div>
      {/* end product section */}

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

export default CategoryCourses;
