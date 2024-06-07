import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserContext } from './Context';
import { SellerContext } from './SellerContex';

const checkinstructor = localStorage.getItem("instructor_login");
const checkCustomer = localStorage.getItem("customer_login")
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      {/* Proporciona tanto el contexto del usuario como el del vendedor */}
      <UserContext.Provider value={checkCustomer}>
        <SellerContext.Provider value={checkinstructor}>
          <App />
        </SellerContext.Provider>
      </UserContext.Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
