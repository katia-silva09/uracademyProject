import logo from "../../logo.svg"
import { Link } from "react-router-dom"
import  SellerSideBar from "./SellerSideBar"
function SellerProducts(props) {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12 mb-2">
                    <SellerSideBar />
                </div>
                <div className="col-md-9 col-12 mb-2">
                    <div className="row">
                        <div className="table responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <tr>
                                            <td colSpan='5' align="right">
                                                <Link to='/seller/add-course' className="btn btn-warning"><i className="fa fa-plus-circle text-center">Add Course</i>
                                                </Link>
                                            </td>
                                        </tr>
                                        
                                        <th className="text-center text-dark" style={{ fontFamily: 'ADLaM Display', fontSize:20 }}>Course</th>
                                        <th className="text-center">Price</th>
                                        <th className="text-center">Status</th>
                                        <th className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-center">
                                        
                                        <td>1</td>
                                        <td>desarrollo movil con flutter</td>
                                        <td>free</td>
                                        <td className="text-center">publicado</td>
                                        <td className="align-middle">
                                            <a href="#" className="btn btn-warning me-2"> view</a>
                                            <a href="#" className="btn btn-success me-2"> edit</a>
                                            <a href="#" className="btn btn-danger"> Delete</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerProducts