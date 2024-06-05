import { Link } from "react-router-dom";
import BoomCircle from "./BoomCourse";
import BannerProduct from "./BannerProduct";
import SingleCourse from "./SingleCourses";
import { useEffect, useState } from "react";
import Instructor from "./instructor/Instructor";
import RelatedCategories from "./RelatedCategories";
import RelatedBlogs from "./Blogs/RelatedBlogs";
const AcademyImages = require.context("../images/", true);

function Home() {
  const [courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const baseUrl = "http://127.0.0.1:8000/api";
  const [totalResult, setTotalResult] = useState(0);

  useEffect(() => {
    fetchData(baseUrl + "/courses");
    fetchDataInstructor(baseUrl + "/instructors");
  }, []);

  function fetchData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setCourses(data.data);
        setTotalResult(data.count);
        //revision
      });
  }

  function fetchDataInstructor(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setInstructors(data.data);
        setTotalResult(data.count);
      });
  }

  return (
    <section
      style={{
        backgroundColor: "DarkSlateGray",
        marginTop: 0,
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      <div className="container">
        <h1
          className="text-center"
          style={{ fontFamily: "ADLaM Display", color: "white" }}
        >
          URACADEMY PROJECT
        </h1>
        <BannerProduct />
        <h1
          className="mb-4 text-center"
          style={{ fontFamily: "ADLaM Display", color: "white", fontSize: 40 }}
        >
          El boom de los idiomas
        </h1>
        <div className="d-flex justify-content-center flex-wrap">
          <BoomCircle
            title="java"
            imgSrc={AcademyImages("./courses/java.png")}
          />
          <BoomCircle
            title="react"
            imgSrc={AcademyImages("./courses/react.svg")}
          />
          <BoomCircle
            title="Javascript"
            imgSrc={AcademyImages("./courses/javascript.png")}
          />
          <BoomCircle
            title="TypeScript"
            imgSrc={AcademyImages("./courses/typescript.svg")}
          />
          <BoomCircle title="PHP" imgSrc={AcademyImages("./courses/php.svg")} />
          <BoomCircle
            title="python"
            imgSrc={AcademyImages("./courses/python.png")}
          />
          <BoomCircle
            title="django"
            imgSrc={AcademyImages("./courses/django.png")}
          />
          <BoomCircle
            title="ruby"
            imgSrc={AcademyImages("./courses/ruby.svg")}
          />
        </div>

        {/* latest course section */}
        <h3
          className="mb-4"
          style={{ fontFamily: "ADLaM Display", color: "white" }}
        >
          Latest Course
          <Link to="/courses" className="float-end btn btn-warning">
            view all course <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </h3>
        <div className="row mb-4">
          {courses.map((course) => (
            <SingleCourse key={course.id} course={course} />
          ))}
        </div>
        {/* End course */}

       {/* categorias populares */}
       <h3
          className="mb-4"
          style={{ fontFamily: "ADLaM Display", color: "white" }}
        >
          Popular categories
          <Link to="/categories" className="float-end btn btn-warning">
            View Categories <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </h3>
        <RelatedCategories /> {/* Render RelatedCategories only once */}
        {/* end categorias populares */}

        {/* best blogs */}
        <h3
          className="mb-4"
          style={{ fontFamily: "ADLaM Display", color: "white", marginTop: 20 }}
        >
          Best Blogs
          <Link to="/blogs/" className="float-end btn btn-warning">
            View all blogs <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </h3>
        <div className="row">
          {/* blog Box */}
          <h3><RelatedBlogs/></h3>
          {/* Blog Box end */}
          {/* Repeat other blog boxes as needed */}
        </div>
        {/* End blogs */}

        {/* instructores populares */}
        <h3
          className="mb-4"
          style={{ fontFamily: "ADLaM Display", color: "white" }}
        >
          Popular instructor
          <Link to="/instructor" className="float-end btn btn-warning">
            View All Instructor <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </h3>
        <div className="row">
          {instructors.map((instructor) => (
            <Instructor key={instructor.id} instructor={instructor} />
          ))}
        </div>
        {/* End instructores populares */}

        {/* Carusel */}
        <div
          id="carouselExampleIndicators"
          className="carousel slide my-4 text-white p-5"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>
                    100% recomendable los cursos del instructor Marlon peralta,
                    explicacion magestuosa.
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <cite title="Source Title" style={{ color: "white" }}>
                    Juan Duarte
                  </cite>
                </figcaption>
              </figure>
            </div>
            <div className="carousel-item">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>Ansiosamente esperando un curso de flutter</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <cite title="Source Title" style={{ color: "white" }}>
                    Bryan Alvarado
                  </cite>
                </figcaption>
              </figure>
            </div>
            <div className="carousel-item">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>
                    "Uracademy ha sido de gran ayuda para mi desarrollo como
                    programador"
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <cite title="Source Title" style={{ color: "white" }}>
                    Randy Arguello
                  </cite>
                </figcaption>
              </figure>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* End Carusel */}
      </div>
    </section>
  );
}

export default Home;
