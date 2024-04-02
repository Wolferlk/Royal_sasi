// teacher.jsx
import React from 'react';
import logo from '../assets/headlogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Teacher = () => {
  return (
    <div>
      <div className="container">
        <img src={logo} alt="Company Logo" /> 
      </div>
      <h1>Welcome to teacher</h1>
      <p>
        Thank you for visiting our website! We are excited to have you here. Our website
        aims to provide valuable information and resources to our users.
      </p>
      <p>
        Whether you're a new visitor or returning, we hope you find what you're looking
        for and have a pleasant experience navigating our site.
      </p>
      <p>
        Feel free to explore our pages and learn more about what we have to offer.
        If you have any questions or feedback, please don't hesitate to contact us.
      </p>
    </div>
  );
}

export default Teacher;
