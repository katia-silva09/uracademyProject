import axios from "axios";
import { useState } from "react";

function RegisterInstructor(props) {
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

    const inputHandler = (event) => {
        setRegisterFormData({
            ...registerFormData,
            [event.target.name]: event.target.value,
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        // Validar campos obligatorios
        if (!registerFormData.username || !registerFormData.email || !registerFormData.password || !registerFormData.first_name || !registerFormData.last_name) {
            setErrorMsg("Los campos de nombre de usuario, correo electrónico, contraseña, nombre y apellido son necesarios.");
            return;
        }
        else
        setSuccessMsg("gracias por registrarce")

        // Crear objeto FormData y agregar todos los campos
        const formData = new FormData();
        formData.append("first_name", registerFormData.first_name);
        formData.append("last_name", registerFormData.last_name);
        formData.append("username", registerFormData.username);
        formData.append("email", registerFormData.email);
        formData.append("description", registerFormData.description);
        formData.append("cv", registerFormData.cv);
        formData.append("linkedin", registerFormData.linkedin);
        formData.append("github", registerFormData.github);
        formData.append("password", registerFormData.password);

        axios
        .post(baseUrl + "customer/register/", formData)
        .then (function (response){
            // console.log(response);
            if (response.data.bool === false){
                setErrorMsg(response.data.msg)
                setSuccessMsg('');
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
                setSuccessMsg('');


            }
        })
        .catch(function (error){
            console.log(error)
        })

    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-8 col-12 offset-2">
                    <div className="card">
                        <h4 className="card-header text-center">Registro de Instructor</h4>
                        <div className="card-body">
                            {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
                            {successMsg && <div className="alert alert-success">{successMsg}</div>}
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="first_name" className="form-label">Nombre</label>
                                    <input type="text" name="first_name" className="form-control" id="first_name" onChange={inputHandler} value={registerFormData.first_name} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="last_name" className="form-label">Apellido</label>
                                    <input type="text" name="last_name" className="form-control" id="last_name" onChange={inputHandler} value={registerFormData.last_name} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Nombre de usuario</label>
                                    <input type="text" name="username" className="form-control" id="username" onChange={inputHandler} value={registerFormData.username} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                                    <input type="email" name="email" className="form-control" id="email" onChange={inputHandler} value={registerFormData.email} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Descripción</label>
                                    <textarea name="description" className="form-control" id="description" onChange={inputHandler} value={registerFormData.description}></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cv" className="form-label">Currículum Vitae (CV)</label>
                                    <input type="text" name="cv" className="form-control" id="cv" onChange={inputHandler} value={registerFormData.cv} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="linkedin" className="form-label">LinkedIn</label>
                                    <input type="text" name="linkedin" className="form-control" id="linkedin" onChange={inputHandler} value={registerFormData.linkedin} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="github" className="form-label">GitHub</label>
                                    <input type="text" name="github" className="form-control" id="github" onChange={inputHandler} value={registerFormData.github} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <input type="password" name="password" className="form-control" id="password" onChange={inputHandler} value={registerFormData.password} />
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={submitHandler}>Registrarse</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterInstructor;
