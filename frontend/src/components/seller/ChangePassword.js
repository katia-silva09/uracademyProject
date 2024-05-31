import SideBar from "./SellerSideBar";
import { LockFill } from 'react-bootstrap-icons';

function ChangePassword(){
    return(
        <div className="container mt-2">
            <div className="row">
                <div className="col-md-3 col-12 mb-2">
                    <SideBar />
                </div>
                <div className="col-md-9 col-12 mb-2 d-flex justify-content-center align-items-start" style={{ minHeight: '80vh', marginTop: '50px' }}>
                    <div className="card shadow" style={{  backgroundColor: 'DarkSlateGray', width: '400px', padding: '20px'}}>
                        <h4 className="card-header text-center text-white">Cambiar Contraseña</h4>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="pwd" className="form-label text-white" >
                                        Nueva Contraseña
                                    </label>
                                    <input type="password" className="form-control" id="pwd" style={{ backgroundColor: 'rgba(128, 128, 128, 0.3)' }} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cpwd" className="form-label text-white">
                                        Confirmar Contraseña
                                    </label>
                                    <input type="password" className="form-control" id="cpwd" style={{ backgroundColor: 'rgba(128, 128, 128, 0.3)' }}/>
                                </div>
                                {/* Otros campos del formulario aquí */}
                                <button type="submit" className="btn btn-transparent text-white border border-success">
                                    <LockFill className="me-2" /> Guardar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;
