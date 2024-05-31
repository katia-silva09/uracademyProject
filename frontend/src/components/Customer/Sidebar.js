import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="list-group" style={{ width: '300px', padding: '20px', margin: '10px' }}>
      <Link to="/customer/dashboard" className="list-group-item list-group-item-action active text-center" style={{ fontFamily: 'ADLaM Display', color: 'white', fontSize: 18 }}>Control Panel</Link>
      <Link to="/customer/orders" className="list-group-item list-group-item-action text-center" style={{ fontFamily: 'ADLaM Display', fontSize: 15 }}>My course    </Link>
      <Link to="/customer/wishlist" className="list-group-item list-group-item-action text-center" style={{ fontFamily: 'ADLaM Display', fontSize: 15 }}>WishList</Link>
      <Link to="/customer/profile" className="list-group-item list-group-item-action text-center" style={{ fontFamily: 'ADLaM Display', fontSize: 15 }}>Profile</Link>
      {/* <Link to="/customer/add-address" className="list-group-item list-group-item-action text-center" style={{ fontFamily: 'ADLaM Display', fontSize: 15 }}>add address</Link> */}
      <Link to="/customer/change-password" className="list-group-item list-group-item-action text-center" style={{ fontFamily: 'ADLaM Display', fontSize: 15 }}>Change Password</Link>
      <Link to="/" className="list-group-item list-group-item-action text-danger text-center">log out</Link>
    </div>
  );
}

export default SideBar;
