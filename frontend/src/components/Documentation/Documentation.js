import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Documentation() {
  const baseUrl = 'http://127.0.0.1:8000/api';
  const [documentations, setDocumentations] = useState([]);
  const [totalResult, setTotalResult] = useState([0]);

  useEffect(() => {
    fetchData(`${baseUrl}/documentations`);
  }, []);

  function fetchData(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setDocumentations(data.data);
        setTotalResult(data.count);
      });
  }

  function changeUrl(url) {
    fetchData(url);
  }

  const links = [];
  const limit = 4;
  const totalLinks = Math.ceil(totalResult / limit);

  for (let i = 1; i <= totalLinks; i++) {
    links.push(
      <li className="page-item" key={i}>
        <Link
          onClick={() => changeUrl(baseUrl + `/documentations/?page=${i}`)}
          to={`/documentations/?page=${i}`}
          className="page-link"
        >
          {i}
        </Link>
      </li>
    );
  }

  return (
      <section style={{fontFamily: 'ADLaM Display', backgroundColor: 'DarkSlateGray', marginTop: 0, paddingTop: 20, paddingBottom: 250 , color:'white'}}>
      <div className="container mt-4">
          <h3 className="mt-4 text-center" >Documentations</h3>
          <div className="row mb-2">
              {documentations.map((documentation) => (
                <div className="col-12 col-md-3 mb-2">
                  <div className="card bg-dark">
                    <Link to={documentation.url}>
                      <img src={documentation.image} className="card-img-top" alt={documentation.title} />
                    </Link><div className="card-body">
                        <h4 className="card-title text-center">
                          <Link to={documentation.url}style={{ fontFamily: 'ADLaM Display', color: 'white', textDecoration: 'none'  }}>{documentation.title}</Link>
                        </h4>
                      </div>
                      <Link   to={documentation.url} className="card-footer text-warning text-end" style={{fontSize:25,textDecoration: 'none'}}>View</Link>
                    </div>
                    </div>
              ))}
          </div>
          <nav aria-label="Page navigation example">
              <ul className="pagination">
                  {links}
              </ul>
          </nav>
      </div>
      </section>
  );
}
export default Documentation;