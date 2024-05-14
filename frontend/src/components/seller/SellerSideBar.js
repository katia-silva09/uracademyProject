import { Link } from "react-router-dom";

function SellerSideBar() {
    return (
        <div className="list-group">
            <Link to="/seller/dashboard" className="list-group-item list-group-item-action active">Panel de control</Link>
            <Link to="/seller/course" className="list-group-item list-group-item-action">Courses</Link>
            <Link to="/seller/add-course" className="list-group-item list-group-item-action">Add course</Link>
            <Link to="/seller/orders" className="list-group-item list-group-item-action">Orders</Link>
            <Link to="/seller/customers" className="list-group-item list-group-item-action">customer</Link>
            <Link to="/seller/reports" className="list-group-item list-group-item-action">Reports</Link>
            <Link to="/seller/profile" className="list-group-item list-group-item-action">Profile</Link>
            <Link to="/seller/change-password" className="list-group-item list-group-item-action">Change Password</Link>
            <Link to="/" className="list-group-item list-group-item-action text-danger">log out</Link>
        </div>
    )
}
export default SellerSideBar