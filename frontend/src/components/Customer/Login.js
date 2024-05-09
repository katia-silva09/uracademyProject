// import { Link } from "react-router-dom";

// import logo from "../logo.svg"

function Login(props) {
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-7 col-12 offset-3">
                    <div className="card" style={{fontFamily: 'Amaranth'}}>
                        <h4 className="card-header text-center" style={{color: 'blue' ,fontFamily: 'Amaranth'}}>Acceso de Usuario</h4>
                        <div className="card-body">
                        <form >
                            {/* <div className="mb-3">
                                <label for="firstName" className="form-label">Nombres</label>
                                <input type="text" className="form-control" id="firstName"/>
                            </div>
                            <div className="mb-3">
                                <label for="lastName" className="form-label">Apellidos</label>
                                <input type="text" className="form-control" id="lastNAme"/>
                            </div> */}
                            {/* Login */}
                            <div class="input-group has-validation">
                            <span class="input-group-text"> <i class="fa-solid fa-user"></i></span>
                            <div class="form-floating">
                                <input type="text" class="form-control" id="floatingInputGroup2" placeholder="Username" required/>
                                <label for="floatingInputGroup2">Username</label>
                            </div>
                            <div class="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                            <br/>
                            <div class="input-group has-validation">
                                <span class="input-group-text"> <i class="fa-solid fa-envelope"></i></span>
                                <div class="form-floating">
                                    <input type="email" class="form-control" id="floatingInputEmail" placeholder="Email" required/>
                                    <label for="floatingInputEmail">Email</label>
                                </div>
                                <div class="invalid-feedback">
                                    Please enter a valid email address.
                                </div>
                            </div>
                            <br/>
                            <div class="input-group has-validation">
                                <span class="input-group-text"> <i class="fa-solid fa-lock"></i></span>
                                <div class="form-floating">
                                    <input type="password" class="form-control" id="floatingInputPassword" placeholder="Password" required/>
                                    <label for="floatingInputPassword">Password</label>
                                </div>
                                <div class="invalid-feedback">
                                    Please enter a password.
                                </div>
                            </div> 
                            <br/>
                            <button type="submit" className="btn btn-primary" style={{fontFamily:'Amaranth', fontSize:20}}>Acceder</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Login;