import React from 'react';
import SideBar from "./SellerSideBar";
const AcademyImages = require.context('../../assest/', true);

function SellerProfile(props) {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12 mb-2">
                    <SideBar />
                </div>
                <div className="col-md-9 col-12 mb-2">
                    <div className="card mb-3" style={{ maxWidth: '1000px',height: '600px', background: 'linear-gradient(to right, #ff7e5f, #feb47b)' }}>
                        <div className="row g-0">
                        <div className="col-md-2 mt-4 ms-3">
                            <img src={AcademyImages('./Profile/profile.svg')} className="img-fluid rounded-start" alt="Profile" />
                            <textarea className="form-control mt-2" placeholder="Escribe una pequeña descripción..."></textarea>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Actualizar perfil</h5>
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="firstName" className="form-label">
                                                Nombres
                                            </label>
                                            <input type="text" className="form-control" id="firstName" />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="lastName" className="form-label">
                                                Apellidos
                                            </label>
                                            <input type="text" className="form-control" id="lastName" />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="username" className="form-label">
                                                Nombre Usuario
                                            </label>
                                            <input type="text" className="form-control" id="username" />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">
                                                Email
                                            </label>
                                            <input type="email" className="form-control" id="email" />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="profileImg" className="form-label">
                                                Imagen de perfil
                                            </label>
                                            <input type="file" className="form-control" id="profileImg" />
                                        </div>

                                        <button type="submit" className="btn btn-primary">
                                            Enviar
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SellerProfile;
