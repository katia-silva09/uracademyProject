import { Link } from 'react-router-dom'
// import python from '../IA.svg'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-success shadow" style={{ backgroundColor: 'DarkSlateGray', fontSize: 20 }}>
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav className="navbar bg-body-tertiary">
        </nav>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand" to="/" style={{ fontFamily: 'Agbalumo', color: 'white', fontSize: 20 }}>URACADEMY</Link>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-1">
            <li className="nav-item">
              <Link className="nav-link" style={{ fontFamily: 'ADLaM Display', color: 'white', fontSize: 20 }} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories" style={{ fontFamily: 'ADLaM Display', color: 'white', fontSize: 20 }}>Category</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs" style={{ fontFamily: 'ADLaM Display', color: 'white', fontSize: 20 }}>Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/documentations" style={{ fontFamily: 'ADLaM Display', color: 'white', fontSize: 20 }}>Documentation</Link>
            </li>
            {/* dorpdown */}
            <li className="nav-item dropdown" style={{ fontFamily: 'ADLaM Display' }}>
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontFamily: 'ADLaM Display', color: 'white', fontSize: 20 }}>
                My account
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" style={{ color: 'blue' }} to="/customer/register">Register</Link></li>
                <li><Link className="dropdown-item" style={{ color: 'blue' }} to="/customer/login">Login</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/customer/dashboard">Control Panel</Link></li>
                <li><Link className="dropdown-item" style={{ color: 'red' }} to="/customer/logout">Logout</Link></li>
              </ul>
            </li>
            {/* end dropdown */}
            {/* <button className="btn btn-danger" style={{fontFamily:'ADLaM Display'}}>Logout</button> */}
            {/* dorpdown */}
            <li className="nav-item dropdown" style={{ fontFamily: 'ADLaM Display' }}>
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontFamily: 'ADLaM Display', color: 'white', fontSize: 20 }}>
                Panel Vendor
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" style={{ color: 'blue' }} to="/seller/register">Register</Link></li>
                <li><Link className="dropdown-item" style={{ color: 'blue' }} to="/customer/login">Login</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/seller/dashboard">Control Panel</Link></li>
                <li><Link className="dropdown-item" style={{ color: 'red' }} to="/customer/logout">Logout</Link></li>
              </ul>
            </li>
            {/* end dropdown */}

            <li className="nav-item">
              <Link className="nav-link" to="/checkout">
              <i className="fa-solid fa-cart-arrow-down fa-1x text-light"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header