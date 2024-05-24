
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SingleCourse from "./SingleCourses";
function AllCourse(props) {
    const baseUrl = "http://127.0.0.1:8000/api";
    const [courses, setCourses] = useState([]);

    const [totalResult, setTotalResult] = useState(0);

    useEffect(() => {
        fetchData(baseUrl + "/courses")
    },
        []);

    function fetchData(baseurl) {

        fetch(baseurl)

            .then((response) => response.json())

            .then((data) => {

                setCourses(data.data);

                setTotalResult(data.count);
            });
    }

    function changeUrl(baseurl) {
        fetchData(baseurl);
    }

    var links = [];
    var limit = 1;
    var totalLinks = totalResult / limit;
    for (let i = 1; i <= totalLinks; i++) {
        links.push(
            <li className="page-item">
                <Link
                    onClick={() => changeUrl(baseUrl + `/courses/?page=${i}`)}
                    to={`/courses/?page=${i}`}
                    className="page-link">
                    {i}
                </Link>

            </li>
        );
    }
    return (
        <section>
            <h3 className="mb-4">< span className=" text-success"></span> Python Products </h3>
            <div className="row mb-4">
                {courses.map((course) => (
                    <SingleCourse course={course} />
                ))};
            </div>

            {/* pagination */}
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    {links}
                </ul>
            </nav>

            {/* end pagination */}
        </section>
    )

};
export default AllCourse