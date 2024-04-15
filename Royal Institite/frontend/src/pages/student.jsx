// Introduction.jsx

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/headlogo.png';
import Sidebar from '../components/Sidebar';
import MarkAttendance from '../components/MarkAttendance';
import AttendanceTable from '../components/Attendanceview';
import AttendanceForm from '../components/AttendanceForm';

const student = () => {
  return (
    <div>
      <div>
        <div className="container">
          <img src={logo} alt="Company Logo" />
        </div>

        <center>
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
        </center>

        <Sidebar />
      </div>

      <MarkAttendance />
      {/* <AttendanceTable /> */}

      <div>
         {/* <Attendanceview/> */}
         <div className='Attendanceform'>
      <h2>Mark Attendance</h2>
      <AttendanceForm />
    </div>
         
      </div>
    </div>
  );
}

export default student;
