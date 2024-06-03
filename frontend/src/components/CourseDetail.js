import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserContext, CartContext } from "../Context";
import RelatedSingleCourses from "./RelatedSingleCourses";
import axios from "axios";

function CourseDetail() {
  const baseUrl = "http://127.0.0.1:8000/api";
  const [CourseData, setCourseData] = useState([]);
  const [CourseImgs, setCourseImgs] = useState([]);
  const [relatedCourses, setRelatedCourses] = useState([]);
  const [cartbuttonClickStatus, setcartButtonClickStatus] = useState(false);

  // Use the CartContext
  const { cartData, setCartData } = useContext(CartContext);

  const { course_id } = useParams();

  useEffect(() => {
    fetchData(baseUrl + "/course/" + course_id);
    fetchRelatedData(baseUrl + "/related-courses/" + course_id);
    checkCourseInCart(course_id);
  }, [course_id]);

  function checkCourseInCart(course_id) {
    var previousCart = localStorage.getItem("cartData");
    var cartJson = previousCart ? JSON.parse(previousCart) : [];

    if (cartJson && Array.isArray(cartJson)) {
      cartJson.forEach((cart) => {
        if (cart && cart.course && cart.course.id === parseInt(course_id)) {
          setcartButtonClickStatus(true);
        }
      });
    }
  }

  function fetchData(baseurl) {
    axios.get(baseurl)
      .then((response) => {
        const data = response.data;
        console.log(data);
        setCourseData(data);
        setCourseImgs(data.course_imgs || []);
      })
      .catch((error) => console.error("Error fetching course data", error));
  }

  function fetchRelatedData(url) {
    axios.get(url)
      .then((response) => {
        setRelatedCourses(response.data.results);
      })
      .catch((error) => console.error("Error fetching related courses", error));
  }

  const cartAddButtonHandler = () => {
    var previousCart = localStorage.getItem("cartData");
    var cartJson = previousCart ? JSON.parse(previousCart) : [];
    var newCartItem = {
      course: {
        id: CourseData.id,
        title: CourseData.title,
        price: CourseData.price,
        image: CourseData.image,
      },
      user: {
        id: 1,
      },
    };

    cartJson.push(newCartItem);
    localStorage.setItem("cartData", JSON.stringify(cartJson));
    setCartData(cartJson);
    console.log("agregado al carrito");
    setcartButtonClickStatus(true);
  };

  const cartRemoveButtonHandler = () => {
    var previousCart = localStorage.getItem("cartData");
    var cartJson = previousCart ? JSON.parse(previousCart) : [];
    
    cartJson = cartJson.filter(cart => cart.course.id !== parseInt(course_id));
    localStorage.setItem("cartData", JSON.stringify(cartJson));
    setCartData(cartJson);
    console.log("Eliminado del carrito");
    setcartButtonClickStatus(false);
  };

  return (
    <section
      style={{
        fontFamily: "ADLaM Display",
        backgroundColor: "DarkSlateGray",
        marginTop: 0,
        paddingTop: 20,
        paddingBottom: 90,
        color: "white",
        fontSize: 30,
        textDecoration: "none",
      }}
    >
      <div className="container">
        <br />
        <h3 className="mb-4" style={{ fontSize: 40 }}>
          Detalle del curso
        </h3>
        <div className="row">
          <div className="col-4">
            <div
              id="relatedThumbnailsSlider"
              className="carousel carousel-dark slide carousel-fade"
              data-bs-ride="true"
            >
              <div className="carousel-inner">
                {CourseImgs.map((img, index) => {
                  return (
                    <div
                      className={`carousel-item ${index === 0 ? 'active' : ''}`}
                      key={index}
                    >
                      <img
                        src={img.image}
                        className="img-thumbnail mb-5"
                        alt={index}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-8">
            <h4
              className="text-info"
              style={{ fontSize: 40, textDecoration: "none" }}
            >
              {CourseData.title}
            </h4>
            <p style={{ fontSize: 25 }}>{CourseData.details}</p>
            <p className="text-warning" style={{ fontSize: 20 }}>
              Precio: ${CourseData.price}
            </p>
            <Link
              to={CourseData.demo_url}
              title="Demo"
              target="_blank"
              className="btn btn-dark"
            >
              <i className="fa-solid fa-cart-plus"></i> Demo
            </Link>
            {!cartbuttonClickStatus && (
              <button
                title="Agregar al carrito"
                type="button"
                onClick={cartAddButtonHandler}
                className="btn btn-primary ms-1"
              >
                <i className="fa-solid fa-cart-plus"></i> Agregar al carrito
              </button>
            )}
            {cartbuttonClickStatus && (
              <button
                title="Eliminar del carrito"
                type="button"
                onClick={cartRemoveButtonHandler}
                className="btn btn-danger ms-1"
              >
                <i className="fa-solid fa-cart-plus"></i> Eliminar del carrito
              </button>
            )}
            <button
              title="Comprar ahora"
              target="_blank"
              className="btn btn-success ms-1"
            >
              <i className="fa-solid fa-credit-card"></i> Comprar ahora
            </button>
            <button
              title="Agregar a la lista"
              target="_blank"
              className="btn btn-danger ms-1"
            >
              <i className="fa-solid fa-tag"></i> Agregar a la lista
            </button>
          </div>
        </div>

        {/* Related carousel */}
        {relatedCourses.length > 0 && (
          <>
            <h3 className="mt-5 mb-3 text-center">Cursos Relacionados</h3>
            <div
              id="relatedCourseSlider"
              className="carousel slide carousel-dark"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                {relatedCourses.map((course, index) => (
                  <button
                    type="button"
                    data-bs-target="#relatedCourseSlider"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : ""}
                    aria-label={`Slide ${index + 1}`}
                    key={index}
                  ></button>
                ))}
              </div>
              <div className="carousel-inner">
                {relatedCourses.map((course, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? 'active' : ''}`}
                    key={index}
                  >
                    <RelatedSingleCourses course={course} />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default CourseDetail;
