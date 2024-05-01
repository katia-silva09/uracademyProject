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
import Checkaout from './components/Checkaout';

import Register from "./components/Customer/Register";
import Login from "./components/Customer/Login";
import Dashboard from "./components/Customer/Deshboard";
import Orders from "./components/Customer/Orders";


function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Home />} />
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

    </Routes>
    <Footer/>
    </>
);
}

export default App;
