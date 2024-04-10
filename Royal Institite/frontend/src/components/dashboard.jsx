import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link, Outlet } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import { BsInfoCircle } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/headlogo.png';
import StudentEnrollClasses from '../components/StudentEnrollClasses';
 // Import the Navbar_manager component
 import Sidebar from '../components/Sidebar';
 import Enroll from '../components/Enroll';

const Dashboard = () => {
 
  return (
    
    <div>
      
<div>

        <center className='Discription'>
            <h1 className='text-5xl'>Manager-Dashboard</h1><br/>
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
          </center>
    </div> 

    <div className="grid grid-cols-3">
          <Sidebar />
          </div>


          <div>
            <Outlet/>
            {/* <Enroll/> */}
          </div>
      


  
</div>
);
};

export default Dashboard;
