// Introduction.jsx

import React from 'react';
import logo from "../assets/headlogo.png";
import Sidebar from '../components/Sidebar';


const Introduction = () => {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="Company Logo" />
      </div>

      <div className="grid grid-cols-2">
        <Sidebar />
      </div>

      <div>
        <div>
          <h1>Welcome to Our Website</h1>
          <p>
            Thank you for visiting our website! We are excited to have you here.
            Our website aims to provide valuable information and resources to
            our users.
          </p>
          <p>
            Whether you're a new visitor or returning, we hope you find what
            you're looking for and have a pleasant experience navigating our
            site.
          </p>
          <p>
            Feel free to explore our pages and learn more about what we have to
            offer. If you have any questions or feedback, please don't hesitate
            to contact us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
