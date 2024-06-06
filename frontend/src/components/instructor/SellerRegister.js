import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterInstructor() {
    const baseUrl = "http://127.0.0.1:8000/api/";
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [registerFormData, setRegisterFormData] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        description: "",
        cv: "",
        linkedin: "",
        github: "",
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

        axios.post(baseUrl + "instructor/register/", formData)
            .then((response) => {
                if (response.data.bool === false) {
                    setErrorMsg(response.data.msg);
                    setSuccessMsg("");
                } else {
                    setRegisterFormData({
                        first_name: "",
                        last_name: "",
                        username: "",
                        email: "",
                        description: "",
                        cv: "",
                        linkedin: "",
                        github: "",
                        password: "",
                    });
                    setSuccessMsg(response.data.msg);
                    setErrorMsg("");

                    // Redirigir a /seller/dashboard/
                    navigate("/seller/dashboard");
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
        registerFormData.password !== "" &&
        registerFormData.description !== "" &&
        registerFormData.cv !== "" &&
        registerFormData.linkedin !== "" &&
        registerFormData.github !== "";

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-8 col-12 offset-2">
                    <div className="card" style={{ color: 'black', fontFamily: 'Amaranth' }}>
                        <h4 className="card-header text-center" style={{ color: 'blue' }}>Registro de Instructor</h4>
                        <div className="card-body">
                            {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
                            {successMsg && <div className="alert alert-success">{successMsg}</div>}
                            <form style={{ color: 'gray' }}>
                                <div className="mb-3">
                                    <label htmlFor="first_name" className="form-label">Nombre</label>
                                    <input type="text" name="first_name" onChange={inputHandler} value={registerFormData.first_name} className="form-control" id="first_name"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="last_name" className="form-label">Apellido</label>
                                    <input type="text" name="last_name" onChange={inputHandler} value={registerFormData.last_name} className="form-control" id="last_name"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Nombre Usuario</label>
                                    <input type="text" name="username" onChange={inputHandler} value={registerFormData.username} className="form-control" id="username"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" name="email" onChange={inputHandler} value={registerFormData.email} className="form-control" id="email"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pwd" className="form-label">Contraseña</label>
                                    <input type="password" name="password" onChange={inputHandler} value={registerFormData.password} className="form-control" id="pwd"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Descripción</label>
                                    <textarea name="description" className="form-control" id="description" value={registerFormData.description} onChange={inputHandler}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cv" className="form-label">Currículum Vitae (CV)</label>
                                    <input type="url" name="cv" className="form-control" id="cv" value={registerFormData.cv} onChange={inputHandler}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="linkedin" className="form-label">LinkedIn</label>
                                    <input type="url" name="linkedin" className="form-control" id="linkedin" value={registerFormData.linkedin} onChange={inputHandler}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="github" className="form-label">GitHub</label>
                                    <input type="url" name="github" className="form-control" id="github" value={registerFormData.github} onChange={inputHandler}/>
                                </div>
                                <button type="submit" disabled={!buttonEnable} onClick={submitHandler} className="btn btn-primary">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterInstructor;
