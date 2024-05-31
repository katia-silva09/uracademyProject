// import logo from '../logo.svg';
import { Link } from "react-router-dom"
// import python from "../python.svg"
// const AcademyImages = require.context('../images/', true);


function SingleCategories(props) {
    const { imgSrc } = props;
    return (
        <div className="col-12 col-md-3 mb-4">
            <div className="card">
                <span class="border border-warning"></span>
                <Link to="/category/programming/1"></Link>
                <img src={imgSrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title text-center"><Link to="/category/programming/1" style={{ fontFamily: 'ADLaM Display', color: 'DarkSlateGray' }}>{props.title}</Link></h4>

                    <div className="card-footer">
                        <h5 className="card-title text-muted text-center" style={{ fontFamily: 'fantasy' }}>Precio: c$500.00</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleCategories