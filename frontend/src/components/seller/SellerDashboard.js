import SellerSideBar from "./SellerSideBar";
import BannerProduct from "../BannerProduct";
import image1 from '../../assest/banner/uracademyTec.gif';

const AcademyImages = require.context('../../assest/', true);


function SellerDashboard(props) {
    const images = [image1];

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-justify">
                     <BannerProduct />
                </div>
                <div className="col-md-3 col-12 mb-2">
                    <SellerSideBar />
                </div>
                 <div className="col-md-9 col-12 mb-2"> {/* Utilizamos col-md-8 para que ocupe el resto del ancho en dispositivos medianos y más grandes */}
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                        <img src={AcademyImages('./Panel/Courses.svg')} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4>Total Course</h4>
                                <h4><a href="#">123</a></h4>
                            </div>
                    </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src={AcademyImages('./Panel/Orders.svg')} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4>Total Orders</h4>
                                <h4><a href="#">123</a></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src={AcademyImages('./Panel/Customers.jpg')} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4>Total Customers</h4>
                                <h4><a href="#">123</a></h4>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SellerDashboard;