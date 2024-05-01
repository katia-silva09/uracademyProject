// import { Link } from "react-router-dom";

// import logo from "../logo.svg"

function Login(props) {
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-8 col-12 offset-2">
                    <div className="card" style={{color: 'black' , fontFamily: 'Amaranth'}}>
                        <h4 className="card-header">Acceso de Usuario</h4>
                        <div className="card-body">
                        <form>
                            {/* <div className="mb-3">
                                <label for="firstName" className="form-label">Nombres</label>
                                <input type="text" className="form-control" id="firstName"/>
                            </div>
                            <div className="mb-3">
                                <label for="lastName" className="form-label">Apellidos</label>
                                <input type="text" className="form-control" id="lastNAme"/>
                            </div> */}
                            {/* Login */}
                            <div className="mb-3">
                                <label for="username" className="form-label">Nombre Usuario</label>
                                <input type="text" className="form-control" id="username" />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email"/>
                            </div>
                            <div className="mb-3">
                                <label for="pwd" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" id="pwd"/>
                            </div>
                            <button type="submit" className="btn btn-success">Acceder</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Login;