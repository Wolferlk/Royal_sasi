
import React, { useEffect, useState } from 'react';
import pp from '../assets/icons8-user.gif';
import '../components/sasi.scss';





const StudentCardEnroll = ({ student }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>Student Id : </h2>
      </div>
      <div className="card-body">
      <img src={pp} alt="Student" className="student-image" />
        <p><strong>Student ID:</strong> id15465</p>
        <p><strong>Email:</strong> student@mail.com</p>
        <p><strong>Grade:</strong> clas1</p>
        <p><strong>Class:</strong> clas2</p>
      </div>
    </div>
  );
};

export default StudentCardEnroll;
