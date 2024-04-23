import {Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer'
import Categories from './components/Categories';
import CategoryCourses from './components/CategoryCourses';


function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='categories' element={<Categories/>}/>
    <Route path='/category/:category_slug/:category_id' element={<CategoryCourses/>}/>
    </Routes>
    <Footer/>
    </>
);
}

export default App;
