// import { Link } from "react-router-dom";

// import logo from "../logo.svg"
import axios from "axios";
import { useState, useEffect } from "react";

function Register(props) {
    const baseUrl = "http://127.0.0.1:8000/api/";
    const [errorMsg, seterrorMsg] = useState("")
    const [successMsg, setsuccessMsg] = useState("")
    const [registerFormData, setregisterFormData] =useState ({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        mobile: "",
        password: "",
    })

    const inputHandler = (event) => {
        setregisterFormData({
            ...registerFormData,
            [event.target.name]: event.target.value
        });
        // console.log(loginFormData);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("first_name", registerFormData.first_name);
        formData.append("last_name", registerFormData.last_name);
        formData.append("username", registerFormData.username);
        formData.append("email", registerFormData.email);
        formData.append("mobile", registerFormData.mobile);
        formData.append("password", registerFormData.password);

    axios
        .post(baseUrl + "customer/register/", formData)
        .then (function (response){
            // console.log(response);
            if (response.data.bool === false){
                seterrorMsg(response.data.msg)
                setsuccessMsg('');
            } else {
                setregisterFormData({
                    first_name: "",
                    last_name: "",
                    username: "",
                    email: "",
                    mobile: "",
                    password: "",
                });
                setsuccessMsg(response.data.msg);
                setsuccessMsg('');


            }
        })
        .catch(function (error){
            console.log(error)
        })
        // console.log(formData);
    };
    const buttonEnable =
        registerFormData.first_name !==""&&
        registerFormData.last_name !==""&&
        registerFormData.username !==""&&
        registerFormData.email !==""&&
        registerFormData.mobile !==""&&
        registerFormData.password !=="";

    return (
        <div className="container mt-4" >
            <div className="row" >
                <div className="col-md-8 col-12 offset-2" >
                    <div className="card" style={{ color: 'black', fontFamily: 'Amaranth' }}>
                        <h4 className="card-header text-center" style={{ color: 'blue' }}>Registro de Usuario</h4>
                        <div className="card-body">
                            <form style={{ color: 'gray' }}>
                            <div class="mb-3">
                                <label for="firstName" class="form-label">Nombres</label>
                                <input type="text" name="first_name" onChange={inputHandler} value={registerFormData.first_name} class="form-control" id="first_name"/>
                            </div>
                            <div class="mb-3">
                                <label for="lastName" class="form-label">Apellidos</label>
                                <input type="text" name="last_name" onChange={inputHandler} value={registerFormData.last_name} class="form-control" id="last_name"/>
                            </div>
                            <div class="mb-3">
                                <label for="username" class="form-label">Nombre Usuario</label>
                                <input type="text" name="username" onChange={inputHandler} value={registerFormData.username} class="form-control" id="username" />
                            </div>
                            <div class="mb-3">
                                <label for="mobile" class="form-label">mobile</label>
                                <input type="number" name="mobile" onChange={inputHandler} value={registerFormData.mobile} class="form-control" id="mobile"/>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" name="email" onChange={inputHandler} value={registerFormData.email}class="form-control" id="email"/>
                            </div>
                            <div class="mb-3">
                                <label for="pwd" class="form-label">Contraseña</label>
                                <input type="password" name="password" onChange={inputHandler} value={registerFormData.password} class="form-control" id="pwd"/>
                            </div>
                            <button type="submit" disabled= {!buttonEnable} onClick={submitHandler} class="btn btn-primary">Enviar</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Register;