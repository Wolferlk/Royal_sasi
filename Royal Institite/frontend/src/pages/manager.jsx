import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import { BsInfoCircle } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/headlogo.png';
import StudentEnrollClasses from '../components/StudentEnrollClasses';
 // Import the Navbar_manager component
 import Sidebar from '../components/Sidebar';
 import Enroll from '../components/Enroll';
//  import '../sasi.scss';
 


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

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase() 
  ));

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleStudentClick = (studentId) => {
    setSelectedStudent(studentId);
  };

  return (
    
    <div>
      
      
    <div className='logo'>
      <img src={logo} alt="Company Logo" />
    </div> 
 

    <div className="grid grid-cols-3 ">
          <Sidebar />
          </div>

          


          
      




  <div className='Enroll'>   
      <center>
        <h1 className='text-5xl'>Manage Students Classes Enrollments</h1><br/>
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
      <div className="grid grid-cols-3">
      <Sidebar />
      <div></div>
          <div className='p-5'>
            <div className='flex justify-between items-center mb-8'>
              <h1 className='text-3xl'>Registered Students</h1>
              <Link to='/student/create'>
                <MdOutlineAddBox className='text-sky-800 text-4xl' />
              </Link>
            </div>

            <div className="mb-5 w-50">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchInputChange}
                placeholder="Search by student name"
                className="form-control"
              />
            </div>

            {loading ? (
              <Spinner />
            ) : filteredStudents.length > 0 ? (
              <table className='w-50 border-separate border-spacing-2'>
                <thead>
                  <tr>
                    <th scope="col" className='border border-slate-600 rounded-md text-center'>Student ID</th>
                    <th scope="col" className='border border-slate-600 rounded-md text-center'>Student Name</th>
                    <th scope="col" className='border border-slate-600rounded-md text-center'>View</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student, index) => (
                    <tr key={student._id} className='h-8'>
                      <td className='border border-slate-700 rounded-md text-center'>{index +1}</td>
                      <td className='border border-slate-700 rounded-md text-center'>{student.name}</td>
                      <td className='border border-slate-700 rounded-md text-center'>
                        <div className='flex justify-center gap-x-4'>
                          <BsInfoCircle className='text-2xl text-blue-800' onClick={() => handleStudentClick(student._id)} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div>No students available</div>
            )}
          </div>
        </div>

    {selectedStudent && (
      <div>
        <StudentEnrollClasses studentId={selectedStudent} />
      </div>
    )}
  </div>
 
 
 
 
  
</div>
);
};

export default Students;
