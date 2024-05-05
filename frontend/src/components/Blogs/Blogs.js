import { Link } from "react-router-dom";
import logo from "../../logo.svg";

const AcademyImages = require.context('../../images/blog', true);





function Blogs () {
    return(
        <section className="container">
            <h3 className="mt-4">Blogs</h3>
            <div className="row mb-4">
                {/* category Box */}
                <div className="col-12 col-md-3 mb-2">
                <div className="card ">
                    <img src={AcademyImages('./github.png')} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h4 className="card-title text-center">
                        <Link to="https://es.stackoverflow.com">Stackoverflow</Link>
                    </h4>
                    </div>
                    <div className="card-footer">View</div>
                </div>
                </div>
                {/* Category Box end */}

                        {/* category Box */}
                        <div className="col-12 col-md-3 mb-2">
                <div className="card">
                    <img src={ AcademyImages('./stackoverflow.png') } className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h4 className="card-title text-center">
                        <Link to="https://github.com/">GitHub</Link>
                    </h4>
                    </div>
                    <div className="card-footer">View</div>
                </div>
                </div>
                {/* Category Box end */}      
            </div>
                    {/* pagination */}
                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                        </ul>
                    </nav>

                    {/* end pagiantion */}
        </section>
    )
    ;
}
export default Blogs