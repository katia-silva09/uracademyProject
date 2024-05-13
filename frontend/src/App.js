import {Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer'
import Categories from './components/Categories';
import CategoryCourses from './components/CategoryCourses';
import AllProducts from './components/AllProducts';
import CourseDetail from './components/CourseDetail';
import Checkaout from './components/Checkout';

import Register from "./components/Customer/Register";
import Login from "./components/Customer/Login";
import Dashboard from "./components/Customer/Dashboard";
import Orders from "./components/Customer/Orders";
import ChangePassword from './components/Customer/ChangePassword';

import Blogs from "./components/Blogs/Blogs";
import Documentation from "./components/Documentation/Documentation";
import BoomCircle from './components/BoomCourse';
import BannerProduct from './components/BannerProduct';
import AddAddress from './components/Customer/AddAddress';
import WishList from './components/Customer/WishList';


function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/boom-circle' element={<BoomCircle />} />
    <Route path='/banner-product' element={<BannerProduct />} />
    <Route path='categories' element={<Categories/>}/>
    <Route path='/category/:category_slug/:category_id' element={<CategoryCourses/>}/>
    <Route path='courses' element={<AllProducts/>}/>
    <Route path='/course/:course_slug/:course_id' element={<CourseDetail/>}/>
    <Route path='checkaout' element={<Checkaout/>}/>
     {/* customer routes */}
    <Route path="/customer/register" element={<Register/>}/>
    <Route path="/customer/login" element={<Login/>}/>
    <Route path="/customer/dashboard" element={<Dashboard/>}/>
    <Route path="/customer/Orders" element={<Orders/>}/>
    <Route path="/customer/change-password" element={<ChangePassword/>}/>
    <Route path="/customer/add-address" element={<AddAddress/>}/>
    <Route path="/customer/wishlist" element={<WishList/>}/>


    <Route path="/blogs/" element={<Blogs/>}/>
    <Route path="/documentation/" element={<Documentation/>}/>

    </Routes>
    <Footer/>
    </>
);
}

export default App;
