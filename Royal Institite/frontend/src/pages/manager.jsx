import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { BsInfoCircle } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/headlogo.png';
import StudentCardEnroll from '../components/StudentCardEnroll';
import Sidebar from '../components/Sidebar';
import '../components/sasi.scss';
import AllClasses from '../components/AllClasses';
import Enrollnew from '../components/Enrollnew';
import { Link } from 'react-router-dom';
import Enroll from "../components/Enroll";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);


  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5555/student')
      .then((response) => {
        setStudents(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching student data:', error);
        setLoading(false);
      });
  }, []);

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student._id.toString().toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleStudentClick = (studentId) => {
    setSelectedStudent(studentId);
  };

  return (
    <div>
      <div className="logo">
        <img src={logo} alt="Company Logo" />
      </div>

      <div className="grid grid-cols-2">
        <Sidebar />
      </div>

      <div>
        <Enrollnew />
        {/* <Enroll/> */}
      </div>
    </div>
  );
};

export default Students;
