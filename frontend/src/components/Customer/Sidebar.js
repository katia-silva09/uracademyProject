import { Link } from "react-router-dom";

function SideBar() {
    return (
        <div className="list-group">
            <Link to="/customer/dashboard" className="list-group-item list-group-item-action active">Control Panel</Link>
            <Link to="/customer/orders" className="list-group-item list-group-item-action">Orders</Link>
            <Link to="/customer/wishlist" className="list-group-item list-group-item-action">WishList</Link>
            <Link to="/customer/profile" className="list-group-item list-group-item-action">Profile</Link>
            <Link to="/customer/add-address" className="list-group-item list-group-item-action">add address</Link>
            <Link to="/customer/change-password" className="list-group-item list-group-item-action">Change Password</Link>
            <Link to="/" className="list-group-item list-group-item-action text-danger">log out</Link>
        </div>
    )
}
export default SideBar;