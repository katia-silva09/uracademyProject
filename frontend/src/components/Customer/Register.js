// import { Link } from "react-router-dom";

// import logo from "../logo.svg"

function Register(props) {
    return (
        <div className="container mt-4" >
            <div className="row" >
                <div className="col-md-8 col-12 offset-2" >
                    <div className="card" style={{ color: 'black', fontFamily: 'Amaranth' }}>
                        <h4 className="card-header text-center" style={{ color: 'blue' }}>Registro de Usuario</h4>
                        <div className="card-body">
                            <form style={{ color: 'gray' }}>
                                <div class="input-group has-validation" >
                                    <span class="input-group-text"> <i class="fa-solid fa-user"></i></span>
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="floatingInputGroup1" placeholder="firstName" required />
                                        <label for="floatingInputGroup1">Name</label>
                                    </div>
                                    <div class="invalid-feedback">
                                        Please choose a name
                                    </div>
                                </div>
                                <br />
                                <div className="input-group  has-validation">
                                    <span class="input-group-text"> <i class="fa-solid fa-user-pen"></i></span>
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="floatingInputGroup2" placeholder="lastName" required />
                                        <label for="floatingInputGroup2">lastName</label>
                                    </div>
                                </div>
                                <br />
                                <div className="input-group  has-validation">
                                    <span class="input-group-text"> <i class="fa-solid fa-circle-user"></i></span>
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="floatingInputGroup3" placeholder="username" required />
                                        <label for="floatingInputGroup3">username</label>
                                    </div>
                                </div>
                                <br />
                                <div className="input-group  has-validation">
                                    <span class="input-group-text"> <i class="fa-solid fa-envelope"></i></span>
                                    <div class="form-floating">
                                        <input type="email" class="form-control" id="floatingInputGroup4" placeholder="email" required />
                                        <label for="floatingInputGroup4">Email</label>
                                    </div>
                                </div>
                                <br />
                                <div className="input-group  has-validation">
                                    <span class="input-group-text"> <i class="fa-solid fa-key"></i></span>
                                    <div class="form-floating">
                                        <input type="pwd" class="form-control" id="floatingInputGroup4" placeholder="pwd" required />
                                        <label for="floatingInputGroup4">password</label>
                                    </div>
                                </div>
                                <br />
                                {/* <div className="mb-3">
                                    <label for="username" className="form-label">Nombre Usuario</label>
                                    <input type="text" className="form-control" id="username" />
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label for="pwd" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="pwd" />
                                </div> */}
                                <button type="submit" className="btn btn-warning">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Register;