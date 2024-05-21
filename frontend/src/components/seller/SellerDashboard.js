import SellerSideBar from "./SellerSideBar";
import BannerProduct from "../BannerProduct";

const AcademyImages = require.context('../../assest/', true);

function SellerDashboard(props) {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12 mb-2">
                    <SellerSideBar />
                </div>
                <div className="col-md-9 col-12 mb-2 text-center">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
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
                                <img src={AcademyImages('./Panel/Customers.svg')} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4>Total Customers</h4>
                                    <h4><a href="#">123</a></h4>
                                </div>
                            </div>
                        </div>
                        {/* Agrega más grupos de tres tarjetas aquí si es necesario */}
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default SellerDashboard;
