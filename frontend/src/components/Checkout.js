import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context";
import { useState } from "react";

// import logo from "../logo.svg";

function Checkout(props) {
  const { cartData, setCartData } = useContext(CartContext);
  const [cartbuttonClickStatus, setcartButtonClickStatus] = useState(false);
  const [courseData, setCourseData] = useState([]);

  if (cartData.length == null || cartData.length === 0) {
    var cartItems = 0;
  } else {
    var cartItems = cartData.length;
  }

  var sum = 0;
  cartData.forEach((item) => {
    if (item.course && typeof item.course.price === "number") {
      sum += item.course.price;
    }
  });

  const cartRemoveButtonHandler = (course_id) => {
    var previousCart = localStorage.getItem("cartData");
    var cartJson = JSON.parse(previousCart);
    cartJson = cartJson.filter(cart => cart && cart.course && cart.course.id !== course_id);
    var cartString = JSON.stringify(cartJson);
    localStorage.setItem("cartData", cartString);

    console.log("Eliminado del carrito");
    setcartButtonClickStatus(false);
    setCartData(cartJson);
};

  return (
    <div className="container mt4">
      <h3 className="mb-4">Todos los articulos ({cartItems})</h3>
      {cartItems !== 0 && (
        <div className="row">
          <div className="col-md-8 col-12">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>course</th>
                  <th>Precio</th>
                  <th>Accion</th>
                </tr>
              </thead>
              <tbody>
                {cartItems &&
                 cartData.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      {item.course && item.course.id && (
                        <Link to={`/course/${item.course.id}`}>
                          <img
                            src={item.course.image}
                            className="img-thumbnail"
                            width="80"
                            alt=""
                          />
                        </Link>
                      )}
                      {item.course && item.course.title && (
                        <p>
                          <Link to={`/course/${item.course.id}`}>
                            {item.course.title}
                          </Link>
                        </p>
                      )}
                    </td>
                    <td>
                      {item.course &&
                        item.course.price &&
                        `C$.${item.course.price}`}
                    </td>
                    <td>
                      <button
                        title="Eliminar del carrito"
                        type="button"
                        onClick={() =>
                          cartRemoveButtonHandler(
                            item.course && item.course.id
                          )
                        }
                        className="btn btn-danger ms-1"
                      >
                        <i className="fa-solid fa-cart-plus"></i> Eliminar del
                        carrito
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th></th>
                  <th>Total</th>
                  <th>{sum}</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}
      {cartItems === 0 && (
        <>
          <Link to="/" className="btn btn-success">
            Home
          </Link>
        </>
      )}
    </div>
  );
}
export default Checkout;
