import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Categories() {
    const baseUrl = 'http://127.0.0.1:8000/api';
    const [categories, setCategories] = useState([]);
    const [totalResult, setTotalResult] = useState(0);

    useEffect(() => {
        fetchData(`${baseUrl}/categories`);
    }, []);

    function fetchData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setCategories(data.data);
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
                    onClick={() => changeUrl(baseUrl + `/categories/?page=${i}`)}
                    to={`/categories/?page=${i}`}
                    className="page-link"
                >
                    {i}
                </Link>
            </li>
        );
    }

    return (
        <section className="container mt-4">
            <h3 className="mt-4 text-center" style={{ fontFamily: 'ADLaM Display', fontSize: 40, paddingTop: 2, padding: 20 }}>Categorias</h3>
            <div className="row mb-2">
                {categories.map((category) => (
                    <div className="col-12 col-md-3 mb-4" key={category.id}>
                        <div className="card">
                            <img src={category.image} className="img-thumbnail mb-5" alt={category.title} />
                            <div className="card-body">
                                <h4 className="card-title">
                                    <Link to={`/category/${category.title}/${category.id}`}>{category.title}</Link>
                                </h4>
                            </div>
                            <div className="card-footer">Descargar producto 1234</div>
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

export default Categories;
