// import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function SellerLogin(props) {
    const baseUrl = "http://127.0.0.1:8000/api";
    const [formError, setFormError] = useState(false)
    const [errorMsg, seterrorMsg] = useState("")

    const [loginFormData, setloginFormData] = useState({
            "username":'',
            "password":'',
    });

    const inputHandler = (event) => {
        setloginFormData({
            ...loginFormData,
            [event.target.name]: event.target.value
        });
        // console.log(loginFormData);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("username", loginFormData.username);
        formData.append("password", loginFormData.password);

        axios.post(baseUrl + "/instructor/login/", formData)
        .then (function (response){
                 console.log(response);
            if (response.data.bool === false){
                setFormError(true)
                seterrorMsg(response.data.msg);
            } else {
                console.log(response.data);
                localStorage.setItem("instructor_login", true)
                localStorage.setItem("instructor_username", response.data.user)
                setFormError(true)
                seterrorMsg("");

            }
        })
        .catch(function (error){
            console.log(error)
        })
        // console.log(formData);
    };

    const checkinstructor =localStorage.getItem("instructor_login");
    if (checkinstructor){
        window.location.href = "/seller/dashboard";
    }

    // console.log(localStorage.getItem("instructor_login"));

    const buttonEnable =
    loginFormData.username!=="" && loginFormData.password!=="";

    return(
        <div className="container mt-4">
            <div className="row">
            <div className="card" style={{ fontFamily: 'Amaranth' }}>
                        <h4 className="card-header text-center" style={{ color: 'blue', fontFamily: 'Amaranth' }}>Acceso de instructor</h4>
                        <div className="card-body">
                        {formError && <p className="text-danger">{errorMsg}</p>}
                        <form>
                            <div className="mb-3">
                                <label for="username" className="form-label">Nombre Usuario</label>
                                <input type="text" name="username" value={loginFormData.username} onChange={inputHandler} className="form-control" id="username" />
                            </div>
                            <div className="mb-3">
                                <label for="pwd" className="form-label">Contraseña</label>
                                <input type="password" name="password" value={loginFormData.password} onChange={inputHandler} className="form-control" id="pwd"/>
                            </div>
                            <button type="submit" disabled={!buttonEnable} onClick={submitHandler} className="btn btn-primary" style={{ fontFamily: 'Amaranth', fontSize: 20 }}>Acceder</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default SellerLogin;