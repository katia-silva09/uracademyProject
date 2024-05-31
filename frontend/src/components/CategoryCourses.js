import SingleCourse from "./SingleCourses";
// const AcademyImages = require.context('../images/', true);
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CategoryCourses(props) {
    const baseUrl = 'http://127.0.0.1:8000/api';
    const [courses, setCourses] = useState([]);
    const [totalResult, setTotalResult] = useState(0);
    const { category_slug, category_id } = useParams();

    useEffect(() => {
        if (category_id) {
            fetchData(`${baseUrl}/courses?category=${category_id}`);
        }
    }, [category_id]);

    function fetchData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setCourses(data.data);
                setTotalResult(data.count);
            })
    }

    function changeUrl(baseurl) {
        fetchData(baseurl);
    }

    const links = [];
    const limit = 4;
    const totalLinks = Math.ceil(totalResult / limit);
    for (let i = 1; i <= totalLinks; i++) {
        links.push(
            <li className="page-item" >
                <Link
                    onClick={() => changeUrl(`${baseUrl}/courses?category=${category_id}&page=${i}`)}
                    to={`/category/${category_slug}/${category_id}/?page=${i}`}
                    className="page-link"
                >
                    {i}
                </Link>
            </li>
        );
    }

    return (
        <section className="container mt-4">
            <h3 className="mb-4 text-center">Todos los cursos de {category_slug}</h3>
            <div className="row mb-4">
                {courses.map((course) => (
                    <SingleCourse course={course} />
                ))}
            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">{links}</ul>
            </nav>
        </section>
    );
}

export default CategoryCourses;
