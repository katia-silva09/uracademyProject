import SingleCourse from "./SingleCourses";
// const AcademyImages = require.context('../images/', true);
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CategoryCourses(props) {
    //   return (
    //     <section className="container">
    //       <h3 className="mt-4">
    //         <span className="text-success">Courses python</span>
    //       </h3>
    //       <div className="row mb-4">
    //         <SingleCourse imgSrc={AcademyImages('./courses/django.png')} title="Django" />
    //         <SingleCourse imgSrc={AcademyImages('./courses/flask.png')} title="Flask" />
    //       </div>
    //       {/* end product section */}

    //       {/* PAGINATION */}
    //       <nav aria-label="Page navigation example">
    //         <ul className="pagination">
    //           <li className="page-item">
    //             <a className="page-link" href="#" aria-label="Previous">
    //               <span aria-hidden="true">&laquo;</span>
    //             </a>
    //           </li>

    //           <li className="page-item">
    //             <a className="page-link" href="#">
    //               1
    //             </a>
    //           </li>

    //           <li className="page-item">
    //             <a className="page-link" href="#">
    //               2
    //             </a>
    //           </li>

    //           <li className="page-item">
    //             <a className="page-link" href="#">
    //               3
    //             </a>
    //           </li>

    //           <li className="page-item">
    //             <a className="page-link" href="#" aria-label="Next">
    //               <span aria-hidden="true">&raquo;</span>
    //             </a>
    //           </li>
    //         </ul>
    //       </nav>
    //       {/* END PAGINATION */}
    //     </section>
    //   );
    // }


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
    const limit = 1;
    const totalLinks = totalResult / limit;
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
            <h3 className="mb-4">Todos los Productos de {category_slug}</h3>
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
