import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Blogs () {
  const baseUrl = 'http://127.0.0.1:8000/api';
  const [documentations, setDocumentations] = useState([]);
  const[totalResult, setTotalResult] = useState([0]);

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
  const limit = 1;
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
      <section className="container mt-4">
          <h3 className="mt-4 text-center" style={{ fontFamily: 'ADLaM Display', fontSize: 40, paddingTop: 2, padding: 20 }}>Documentation</h3>
          <div className="row mb-2">
              {documentations.map((documentation) => (
                <div className="col-12 col-md-3 mb-2">
                  <div className="card">
                    <Link to={documentation.url}>
                      <img src={documentation.image} className="card-img-top" alt={documentation.title} />
                    </Link>                  <div className="card-body">
                        <h4 className="card-title text-center">
                          <Link to={documentation.url}style={{ fontFamily: 'ADLaM Display', color: 'DarkSlateGray' }}>{documentation.title}</Link>
                        </h4>
                      </div>
                      <div className="card-footer">{documentation.description}</div>
                    </div>
                    </div>
              ))}
          </div>
          <nav aria-label="Page navigation example">
              <ul className="pagination">
                  {links}
              </ul>
          </nav>
      </section>

            );
}
export default Blogs