
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
    var limit = 4;
    var totalLinks = totalResult / limit;
    for (let i = 1; i <= totalLinks; i++) {
        links.push(
            <li className="page-item" >
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
        <section style={{ fontFamily: 'ADLaM Display', backgroundColor: 'DarkSlateGray', marginTop: 0, paddingTop: 20, paddingBottom: 250, color: 'white' }}>
            <div className="container">
                <br />
                <h3 className="mb-4 text-center" style={{ fontFamily: 'ADLaM Display', fontSize: 40, paddingTop: 2, padding: 20, textDecoration: 'none' }}>< span className=" text-success" ></span> All Courses</h3>
                <div className="row mb-4">
                    {courses.map((course) => (
                        <SingleCourse course={course} />
                    ))}
                </div>

                {/* pagination */}
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        {links}
                    </ul>
                    <br />
                </nav>

                {/* end pagination */}
            </div>
        </section>
    )

};
export default AllCourse