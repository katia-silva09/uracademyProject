// import { Link } from "react-router-dom";

// import logo from "../logo.svg"
import Sidebar from "./Sidebar";

function Dashboard(props) {
    return (
    
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4 col-12 mb-2">
                    <Sidebar/>
                    
                </div>
                <div className="col-md-8 col-12 mb-2"> 
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <div className="card shadow">
                                <div className="card-body text-center">
                                    <h4>Ordenes Totales</h4>
                                    <h4><a href="#">123</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-2">
                            <div className="card shadow">
                                <div className="card-body text-center">
                                    <h4>Deseos Totales</h4>
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

export default Dashboard;
