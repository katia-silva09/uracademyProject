import { Link } from 'react-router-dom'
// import python from '../IA.svg'

function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-success" style={{backgroundColor: 'yellow'}}>
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <nav class="navbar bg-body-tertiary">
          </nav>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand"  to="/"  style={{fontFamily: 'Agbalumo'}}>URACADEMY</Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-1">
              <li className="nav-item">
                <Link className="nav-link" style={{fontFamily:'ADLaM Display'}} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories" style={{fontFamily:'ADLaM Display'}}>Category</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{fontFamily:'ADLaM Display'}}>Blogs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{fontFamily:'ADLaM Display'}}>Documentation</a>
              </li>
              {/* dorpdown */}
              <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Register
                        </a>
                        <ul class="dropdown-menu">
                            <li><Link class="dropdown-item" to="/customer/register">registro</Link></li>
                            <li><Link class="dropdown-item" to="/customer/login">acceder</Link></li>
                            <li><hr class="dropdown-divider"/></li>
                            <li><Link class="dropdown-item" to="/customer/dashboard">Panel de control</Link></li>
                            <li><Link class="dropdown-item" to="/customer/logout">Cerrar Sesion</Link></li>
                        </ul>
                    </li>
                    {/* end dorpdown */}
              {/* <button className="btn btn-danger" style={{fontFamily:'ADLaM Display'}}>Logout</button> */}
            </ul>
          </div>
        </div>
    </nav> 
    );
}

export default Header