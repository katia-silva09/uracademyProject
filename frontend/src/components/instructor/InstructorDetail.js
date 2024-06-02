import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function InstructorDetail(props) {
  const baseUrl = "http://127.0.0.1:8000/api";
  const [InstructorData, setInstructorData] = useState([]);
  const [InstructorImgs, setInstructorImgs] = useState([]);
  const { instructor_id } = useParams();

  useEffect(() => {
    fetchDataInstructor(baseUrl + "/instructor/" + instructor_id);
  }, [instructor_id]);

  function fetchDataInstructor(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setInstructorData(data);
        setInstructorImgs(data.instructor_imgs || []);
      });
  }

  return (
    <section
      style={{
        fontFamily: 'Roboto, sans-serif',
        backgroundColor: 'DarkSlateGray',
        marginTop: 0,
        paddingTop: 20,
        paddingBottom: 90,
        color: 'white',
        fontSize: 30,
        textDecoration: 'none',
      }}
    >
      <div className="container">
        <br />
        <h3 className="mb-4" style={{ fontSize: 40, fontFamily: 'Angkor' }}>
          Perfil Instructor
        </h3>
        <div className="row">
          <div className="col-12 col-md-4 d-flex flex-column align-items-center">
            <div
              id="relatedThumbnailsSlider"
              className="carousel carousel-dark slide carousel-fade mb-3"
              data-bs-ride="true"
            >
              <div className="carousel-inner">
                {InstructorImgs.map((img, index) => {
                  return (
                    <div
                      className={`carousel-item ${index === 0 ? 'active' : ''}`}
                      key={index}
                    >
                      <img
                        src={img.image}
                        className="img-thumbnail mb-2"
                        alt={`Instructor Image ${index}`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <h4 className="text-white text-center" style={{ fontSize: 40, textDecoration: 'none', fontFamily: 'ADLaM Display' }}>
              {InstructorData.name}
            </h4>
            <div className="d-flex justify-content-center">
              <Link
                to={InstructorData.github}
                className="text-white text-center mx-3"
                style={{ fontSize: 20, textDecoration: 'none', fontFamily: 'Montserrat, sans-serif' }}
              >
                <i className="fa-brands fa-github fa-2x"></i>
              </Link>
              <Link
                to={InstructorData.linkedin}
                className="text-info text-center mx-3"
                style={{ fontSize: 20, textDecoration: 'none', fontFamily: 'Montserrat, sans-serif' }}
              >
                <i className="fa-brands fa-linkedin fa-2x"></i>
              </Link>
              <Link
                to={InstructorData.linkedin}
                className="text-white text-center mx-3"
                style={{ fontSize: 20, textDecoration: 'none', fontFamily: 'Montserrat, sans-serif' }}
              >
                <i className="fa-solid fa-user-tie fa-2x"></i>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-8 d-flex align-items-start">
            <p style={{ fontSize: 30, fontFamily: 'ADLaM Display' }}>{InstructorData.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InstructorDetail;
