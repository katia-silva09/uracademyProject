import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function RelatedBlogs() {
  const baseUrl = 'http://127.0.0.1:8000/api';
  const [blogs, setBlogs] = useState([]);
  const [totalResult, setTotalResult] = useState(0);

  useEffect(() => {
    fetchData(`${baseUrl}/blogs`);
  }, []);

  function fetchData(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setBlogs(data.data);
        setTotalResult(data.count);
      });
  }

  return (
    <section style={{ fontFamily: 'ADLaM Display', backgroundColor: 'DarkSlateGray', marginTop: 0, paddingTop: 20, paddingBottom: 20, color: 'white' }}>
      <div className="container">
        <div className="row mb-4">
          {blogs.map((blog) => (
            <div className="col-12 col-md-3 mb-" key={blog.id}>
              <div className="card bg-dark h-100">
                <Link to={blog.url}>
                  <img src={blog.image} className="card-img-top img-fluid" alt={blog.title} style={{ height: '300px' }} />
                </Link>
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title text-center flex-grow-">
                    <Link to={blog.url} style={{ fontFamily: 'ADLaM Display', color: 'white', textDecoration: 'none' }}>{blog.title}</Link>
                  </h4>
                </div>
                <div className="card-footer text-white text-center">View</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedBlogs;
