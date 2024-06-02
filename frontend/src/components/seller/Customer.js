import logo from '../../logo.svg';
import { Link } from "react-router-dom";
import SellerSideBar from './SellerSideBar';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Customer(props){
    const [customerData, setCustomerData] = useState([]);
    const baseUrl = "http://127.0.0.1:8000/api";
    const { customer_id } = useParams();

    useEffect(() => {
        fetchData(baseUrl + "/customers/");
      }, []);
    
      function fetchData(baseurl) {
        fetch(baseurl)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setCustomerData(data);
          });
      }
    


    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <SellerSideBar/>
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className='table-responsive'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombre</th>
                                        <th>Email</th>
                                        <th>Mobil</th>
                                        <th>Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Bryan Alvarado</td>
                                        <td>bryanalvarado@gmail.com</td>
                                        <td>89124672</td>
                                        <td>
                                            <button className='btn btn-primary btn-sm'>Ordenes</button>
                                            <button className='btn btn-danger btn-sm ms-1'>Eliminar de la lista</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>2</td>
                                            <td>katia silva</td>
                                            <td>katiasilva09@gmail.com</td>
                                            <td>8888888</td>
                                            <td>
                                                <button className='btn btn-primary btn-sm'>Ordenes</button>
                                                <button className='btn btn-danger btn-sm ms-1'>Eliminar de la lista</button>

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
export default Customer;