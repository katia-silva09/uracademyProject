import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext, CartContext } from "../Context";
import { SellerContext } from "../SellerContex";

function Header() {
  const userContext = useContext(UserContext);
  const sellerContext = useContext(SellerContext);
  const { cartData, setcartData } = useContext(CartContext);
  const cartItems = cartData && Array.isArray(cartData) ? cartData.length : 0;

  return (
    <nav
      className="navbar navbar-expand-lg navbar-success shadow"
      style={{ backgroundColor: "DarkSlateGray", fontSize: 20 }}
    >
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav className="navbar bg-body-tertiary"></nav>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link
            className="navbar-brand"
            to="/"
            style={{ fontFamily: "Agbalumo", color: "white", fontSize: 20 }}
          >
            URACADEMY
          </Link>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-1">
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{
                  fontFamily: "ADLaM Display",
                  color: "white",
                  fontSize: 20,
                }}
                aria-current="page"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/categories"
                style={{
                  fontFamily: "ADLaM Display",
                  color: "white",
                  fontSize: 20,
                }}
              >
                Category
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/blogs"
                style={{
                  fontFamily: "ADLaM Display",
                  color: "white",
                  fontSize: 20,
                }}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/documentations"
                style={{
                  fontFamily: "ADLaM Display",
                  color: "white",
                  fontSize: 20,
                }}
              >
                Documentation
              </Link>
            </li>

            <li
              className="nav-item dropdown"
              style={{ fontFamily: "ADLaM Display" }}
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  fontFamily: "ADLaM Display",
                  color: "white",
                  fontSize: 20,
                }}
              >
                My account
              </a>
              <ul className="dropdown-menu">
                {userContext !== "true" && (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/customer/Register">
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/customer/Login">
                        login
                      </Link>
                    </li>
                  </>
                )}
                {userContext === "true" && (
                  <>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/customer/dashboard">
                        Panel
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        style={{ color: "red" }}
                        to="/customer/Logout"
                      >
                        Logout
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </li>
            <li
              className="nav-item dropdown"
              style={{ fontFamily: "ADLaM Display" }}
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  fontFamily: "ADLaM Display",
                  color: "white",
                  fontSize: 20,
                }}
              >
                Panel Instructor
              </a>
              <ul className="dropdown-menu">
              {sellerContext !== "true" && (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/seller/register">
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/seller/login">
                        Login
                      </Link>
                    </li>
                  </>
                )}
                {sellerContext === "true" && (
                  <>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/seller/dashboard"
                      >
                        Panel
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        style={{ color: "red" }}
                        to="/seller/logout"
                      >
                        Logout
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </li>
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

export default Header;
