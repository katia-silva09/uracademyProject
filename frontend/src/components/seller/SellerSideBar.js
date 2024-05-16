import { Link } from "react-router-dom";

function SellerSideBar() {
    return (
        <div className="list-group shadow">
            <Link to="/seller/dashboard" className="list-group-item list-group-item-action  active text-center" style={{fontFamily:'ADLaM Display', fontSize:20}}>Panel de control</Link>
            <Link to="/seller/course" className="list-group-item list-group-item-action bg-warning text-center" style={{fontFamily:'ADLaM Display', fontSize:20}}>Courses</Link>
            <Link to="/seller/add-course" className="list-group-item list-group-item-action bg-warning text-center" style={{fontFamily:'ADLaM Display', fontSize:20}}>Add course</Link>
            <Link to="/seller/orders" className="list-group-item list-group-item-action bg-warning text-center" style={{fontFamily:'ADLaM Display', fontSize:20}}>Orders</Link>
            <Link to="/seller/customers" className="list-group-item list-group-item-action bg-warning text-center" style={{fontFamily:'ADLaM Display', fontSize:20}}>customer</Link>
            <Link to="/seller/reports" className="list-group-item list-group-item-action bg-warning text-center" style={{fontFamily:'ADLaM Display', fontSize:20}}>Reports</Link>
            <Link to="/seller/profile" className="list-group-item list-group-item-action bg-warning text-center" style={{fontFamily:'ADLaM Display', fontSize:20}}>Profile</Link>
            <Link to="/seller/change-password" className="list-group-item bg-warning list-group-item-action text-center" style={{fontFamily:'ADLaM Display', fontSize:20}}>Change Password</Link>
            <Link to="/" className="list-group-item list-group-item-action text-white text-center bg-danger" style={{fontFamily:'ADLaM Display'}}>log out</Link>
        </div>
    )
}
export default SellerSideBar