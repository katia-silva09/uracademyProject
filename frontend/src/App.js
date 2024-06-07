import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Categories from './components/Categories';
import CategoryCourses from './components/CategoryCourses';
import AllCourse from './components/AllCourses';
import CourseDetail from './components/CourseDetail';
import Checkout from './components/Checkout';
import RelatedSingleCourses from './components/RelatedSingleCourses';
import RelatedCategories from './components/RelatedCategories';
import LoginAll from './components/LoginAll';
import RegisterAll from './components/RegisterAll';

import Register from "./components/Customer/Register";
import Login from "./components/Customer/Login";
import Dashboard from "./components/Customer/Dashboard";
import Orders from "./components/Customer/Orders";
import ChangePassword from './components/Customer/ChangePassword';
import CustomerLogout from "./components/Customer/CustomerLogout";


import Blogs from "./components/Blogs/Blogs";
import Documentation from "./components/Documentation/Documentation";
import BoomCircle from './components/BoomCourse';
import BannerProduct from './components/BannerProduct';
import WishList from './components/Customer/WishList';
import Profile from './components/Customer/Profile';

//route seller
import SellerSideBar from './components/seller/SellerSideBar';
import SellerDashboard from './components/seller/SellerDashboard';
import AddCourse from './components/seller/AddCourse';
import Course from './components/seller/Course';
import Customer from './components/seller/Customer';
import VendorOrders from './components/seller/VendorOrders';
import Report from './components/seller/Report';
import SellerProfile from './components/seller/Profile';
import SellerLogout from './components/seller/SellerLogout';
import SellerChangePassword from './components/seller/ChangePassword';
import RegisterInstructor from './components/instructor/SellerRegister';
import SellerLogin from './components/seller/SellerLogin';
import Instructor from './components/instructor/Instructor';
import InstructorDetail from './components/instructor/InstructorDetail';


import { CartContext} from './Context';
import { useState } from "react";
const checkCart = localStorage.getItem ('cartData')




function App() {
  const [cartData, setCartData] = useState(JSON.parse(checkCart));

  return (
    <CartContext.Provider value={{cartData, setCartData}}>
      <Header />
      <Routes>
        {/* instructor */}
        <Route path='/instuctors' element={<Instructor />} />
        <Route path='/instructor/:instructor_slug/:instructor_id' element={<InstructorDetail />} />

        <Route path='/' element={<LoginAll />} />
        <Route path='/register-all' element={<RegisterAll />} />
        <Route path='/home' element={<Home />} />
        <Route path='/boom-circle' element={<BoomCircle />} />
        <Route path='/banner-product' element={<BannerProduct />} />
        <Route path='categories' element={<Categories />} />
        <Route path='/category/:category_slug/:category_id' element={<CategoryCourses />} />
        <Route path='/courses' element={<AllCourse />} />
        <Route path='/course/:course_slug/:course_id' element={<CourseDetail />} />
        <Route path= '/related-courses/:course_slug/:course_id' element={<RelatedSingleCourses />} />       
        <Route path= '/related-categories/:category_slug/:categoru_id' element={<RelatedCategories />} />       
        <Route path='checkout' element={<Checkout />} />

        {/* customer routes */}
        <Route path="/customer/register" element={<Register />} />
        <Route path="/customer/login" element={<Login />} />
        <Route path="/customer/logout" element={<CustomerLogout/>}/>
        <Route path="/customer/dashboard" element={<Dashboard />} />
        <Route path="/customer/Orders" element={<Orders />} />
        <Route path="/customer/change-password" element={<ChangePassword />} />
        <Route path="/customer/wishlist" element={<WishList />} />
        <Route path="/customer/profile" element={<Profile />} />


        <Route path="/blogs/" element={<Blogs />} />
        <Route path="/documentations/" element={<Documentation />} />


        {/* seller */}
        <Route path="/seller/sidebar" element={<SellerSideBar />} />
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
        <Route path="/seller/course" element={<AddCourse />} />
        <Route path="/seller/customers" element={<Customer />} />
        <Route path="/seller/orders" element={<VendorOrders />} />
        <Route path="/seller/reports" element={<Report />} />
        <Route path="/seller/profile" element={<SellerProfile />} />
        <Route path="/seller/change-password" element={<SellerChangePassword />} />
        <Route path="/seller/register" element={< RegisterInstructor />} />
        <Route path="/seller/login" element={<SellerLogin />} />
        <Route path="/seller/logout" element={<SellerLogout />} />
        <Route path="/seller/course" element={<Course />} />

      </Routes>
      <Footer />
    </CartContext.Provider>
  );
}

export default App;
