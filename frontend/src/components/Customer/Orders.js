import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import Sidebar from "./Sidebar";

function Orders(props) {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-2 mb-2">
                    <Sidebar />
                </div>
                <div className="col-md-9 col-10 mb-2">
                    <div className="row">
                        <div className="col">
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Curso</th>
                                            <th>Precio</th>
                                            <th>Estado</th>
                                            <th>Acción</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                <Link to="#">
                                                    <img src={logo} className="img-thumbnail" width='80' alt="" />
                                                </Link>
                                                <p><Link to="#">Django</Link></p>
                                            </td>
                                            <td>C$. 5000.00</td>
                                            <td><span className="text-success"><i className="fa-check-circle"></i> Completado</span></td>
                                            <td><button className="btn btn-primary btn-sm">Descargas</button></td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                <Link to="#">
                                                    <img src={logo} className="img-thumbnail" width='80' alt="" />
                                                </Link>
                                                <p><Link to="#">Django</Link></p>
                                            </td>
                                            <td>C$. 5000.00</td>
                                            <td><span className="text-success"><i className="fa-check-circle"></i> Completado</span></td>
                                            <td><button className="btn btn-primary btn-sm">Descargas</button></td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                <Link to="#">
                                                    <img src={logo} className="img-thumbnail" width='80' alt="" />
                                                </Link>
                                                <p><Link to="#">Django</Link></p>
                                            </td>
                                            <td>C$. 5000.00</td>
                                            <td><span className="text-success"><i className="fa-check-circle"></i> Completado</span></td>
                                            <td><button className="btn btn-primary btn-sm">Descargas</button></td>
                                        </tr>
                                     
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders;
