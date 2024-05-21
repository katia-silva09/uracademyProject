import SellerSideBar from "./SellerSideBar"
import BannerProduct from "../BannerProduct"
import { useState, useEffect } from "react"
function AddCourse(){

    const baseUrl = 'http://localhost:4000/api/'
    const [course, setCourse] = useState([])

    //paginacion
    const [TotalResults, setTotalResults] = useState(0)

    useEffect(() => {
        fetchData(baseUrl + 'courses')
    }, [])

    function fetchData(baseurl){
        fetch(baseurl)
        .then(response => response.json())
        .then(data => {
            setCourse(data.data)
            setTotalResults(data.count)
        })
    }

    function changeUrl(baseurl){
        fetchData(baseurl)
    }

    var links = [];
    var limit = 1;
    var totalLinks = TotalResults / limit;
    for (let i = 1; i <= totalLinks; i++) {
        links.push(
            <li className="page-item">
            <a className="page-link" href="#" onClick={() => changeUrl(baseUrl +  `/courses?page= ` + i)}>{i}</a>            
            </li>
        )
    }
    return (
        <section style={{backgroundColor: 'DarkSlateGray'}}>
            <br/>
        <div className="container">
        <div className="row">
            <div className="col-md-3 col-12 mb-2">
                <SellerSideBar/>    
            </div>

            <div className="col-md-9 col-12 mb-2 ">
            <BannerProduct/>
                <div className="card text-center">
                    <h4 className="card-header">Agregar Producto</h4>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label for='category' className="form-label">
                                    Categoria del Producto
                                </label>
                                <select className="form-control">
                                <option>python</option>
                                <option>PHP</option>
                                <option>ReactJs</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    )
}

export default AddCourse