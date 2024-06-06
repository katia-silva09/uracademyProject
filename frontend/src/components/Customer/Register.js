import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const baseUrl = "http://127.0.0.1:8000/api/";
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [registerFormData, setRegisterFormData] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        mobile: "",
        password: "",
    });

    const navigate = useNavigate();

    const inputHandler = (event) => {
        setRegisterFormData({
            ...registerFormData,
            [event.target.name]: event.target.value
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const formData = new FormData();
        for (let key in registerFormData) {
            formData.append(key, registerFormData[key]);
        }

        axios.post(baseUrl + "customer/register/", formData)
            .then((response) => {
                if (response.data.bool === false) {
                    setErrorMsg(response.data.msg);
                    setSuccessMsg('');
                } else {
                    setRegisterFormData({
                        first_name: "",
                        last_name: "",
                        username: "",
                        email: "",
                        mobile: "",
                        password: "",
                    });
                    setSuccessMsg(response.data.msg);
                    setErrorMsg('');
                    
                    // Redirigir a /customer/dashboard
                    navigate("/customer/dashboard");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    const buttonEnable =
        registerFormData.first_name !== "" &&
        registerFormData.last_name !== "" &&
        registerFormData.username !== "" &&
        registerFormData.email !== "" &&
        registerFormData.mobile !== "" &&
        registerFormData.password !== "";

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-8 col-12 offset-2">
                    <div className="card" style={{ color: 'black', fontFamily: 'Amaranth' }}>
                        <h4 className="card-header text-center" style={{ color: 'blue' }}>Registro de Usuario</h4>
                        <div className="card-body">
                            {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
                            {successMsg && <div className="alert alert-success">{successMsg}</div>}
                            <form style={{ color: 'gray' }}>
                                <div class="mb-3">
                                    <label htmlFor="firstName" class="form-label">Nombres</label>
                                    <input type="text" name="first_name" onChange={inputHandler} value={registerFormData.first_name} class="form-control" id="first_name"/>
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="lastName" class="form-label">Apellidos</label>
                                    <input type="text" name="last_name" onChange={inputHandler} value={registerFormData.last_name} class="form-control" id="last_name"/>
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="username" class="form-label">Nombre Usuario</label>
                                    <input type="text" name="username" onChange={inputHandler} value={registerFormData.username} class="form-control" id="username"/>
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="mobile" class="form-label">mobile</label>
                                    <input type="number" name="mobile" onChange={inputHandler} value={registerFormData.mobile} class="form-control" id="mobile"/>
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="email" class="form-label">Email</label>
                                    <input type="email" name="email" onChange={inputHandler} value={registerFormData.email} class="form-control" id="email"/>
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="pwd" class="form-label">Contraseña</label>
                                    <input type="password" name="password" onChange={inputHandler} value={registerFormData.password} class="form-control" id="pwd"/>
                                </div>
                                <button type="submit" disabled={!buttonEnable} onClick={submitHandler} class="btn btn-primary">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
