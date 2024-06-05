import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function RelatedCategories(props) {
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

    return (
        <section style={{fontFamily: 'ADLaM Display', backgroundColor: 'DarkSlateGray', marginTop: 0, paddingTop: 20, paddingBottom: 20 , color:'white'}}>
        <div className="container" >
            <div className="row mb-2">
                {categories.map((category) => (
                    <div className="col-12 col-md-3 mb-4" key={category.id}>
                        <div className="card bg-dark" >
                        <Link to={`/category/${category.title}/${category.id}`}>
                            <img src={category.image} className="img-thumbnail mb-5 " alt={category.title} />
                            </Link>
                            <div className="card-body " >
                                <h4 className="card-title text-center ">
                                    <Link to={`/category/${category.title}/${category.id}`} style={{fontSize:25, textDecoration: 'none', color:'white', }}>{category.title}</Link>
                                </h4>
                            </div>
                            <div className="card-footer text-center text-white">Descargar producto 1234</div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
        </section>
    );
}

export default RelatedCategories;
