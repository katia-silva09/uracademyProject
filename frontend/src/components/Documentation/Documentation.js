import { Link } from "react-router-dom";
import logo from "../../logo.svg";

function Documentation () {
    return(
        <section className="container">
            <h3 className="mt-4">Documentation</h3>
            <div className="row mb-4">
                {/* category Box */}
                <div className="col-12 col-md-3 mb-2">
                <div className="card ">
                    <img src={ logo } className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h4 className="card-title text-center">
                        <Link to="https://www.php.net/docs.php">PHP Documentation</Link>
                    </h4>
                    </div>
                    <div className="card-footer">View</div>
                </div>
                </div>
                {/* Category Box end */}

                        {/* category Box */}
                        <div className="col-12 col-md-3 mb-2">
                <div className="card">
                    <img src={ logo } className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h4 className="card-title text-center">
                        <Link to="https://docs.djangoproject.com/en/5.0/">Django Documentation</Link>
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
export default Documentation