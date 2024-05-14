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
                                            <th className='text-center'>#</th>
                                            <th className='text-center'>Curso</th>
                                            <th className='text-center'>Precio</th>
                                            <th className='text-center'>Estado</th>
                                            <th className='text-center'>Acción</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='text-center'>1</td>
                                            <td>
                                                <Link to="#">
                                                    <img src={logo} className="img-thumbnail" width='80' alt="" />
                                                </Link>
                                                <p><Link to="#">Django</Link></p>
                                            </td>
                                            <td className='text-center'>C$. 500.00</td>
                                            <td><span className="text-success"><i className=" fa fa-check-circle"></i> Completado</span></td>
                                            <td><button className="btn btn-primary btn-sm">Descargas</button></td>
                                        </tr>

                                        <tr>
                                            <td className='text-center'>2</td>
                                            <td>
                                                <Link to="#">
                                                    <img src={logo} className="img-thumbnail" width='80' alt="" />
                                                </Link>
                                                <p><Link to="#">Django</Link></p>
                                            </td>
                                            <td className='text-center'>C$. 500.00</td>
                                            <td><span className="text-success"><i className=" fa fa-check-circle"></i> Completado</span></td>
                                            <td><button className="btn btn-primary btn-sm">Descargas</button></td>
                                        </tr>

                                        <tr>
                                            <td className='text-center'>3</td>
                                            <td>
                                                <Link><img src={logo} className="img-thumbnail" width='80' alt="..." /></Link>
                                                <p><Link>Flask</Link></p>
                                            </td>
                                            <td className='text-center'>c$500.00</td>
                                            <td><span className="text-warning"><i className="fa fa-spin fa-spinner"></i> procesando</span></td>
                                        </tr>


                                        <tr>
                                            
                                            <td className='text-center'>4</td>
                                            <td>
                                                <Link><img src={logo} className="img-thumbnail" width='80' alt="..." /></Link>
                                                <p><Link>ReactJs</Link></p>
                                            </td>
                                            <td className='text-center'>c$500.00</td>
                                            <td><span className="text-danger"><i className="fa fa-times-circle"></i> cancelado</span></td>
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
