import { Link } from "react-router-dom";

import logo from "../logo.svg"

function Checkaout(props) {
    return(
        <div className="container mt4">
            <h3 className="mb-4">Todos los Cursos</h3>
            <div className="row">
                <div className="col-md-8 col-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Cursos</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <Link><image src={logo} className="image-Thumbnail" with='80' alt="..."/></Link>
                                </td>
                                <td>C$. 500</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    <Link><image src={logo} className="image-Thumbnail" with='80' alt="..."/></Link>
                                </td>
                                <td>C$. 500</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    <Link><image src={logo} className="image-Thumbnail" with='80' alt="..."/></Link>
                                </td>
                                <td>C$. 500</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>
                                    <Link><image src={logo} className="image-Thumbnail" with='80' alt="..."/></Link>
                                </td>
                                <td>C$. 500</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th>Total</th>
                                <th>C$. 2000</th>
                            </tr>
                        </tfoot>

                    </table>
                </div>
            </div>

        </div>
    );
}
export default Checkaout;