import React, { useEffect, useState } from 'react';
import pp from '../assets/icons8-user.gif';
import axios from 'axios';
import '../components/sasi.scss';

const StudentCardEnroll = ({ studentId }) => {
  const [studentData, setStudentData] = useState(null);
  const [enrolledClasses, setEnrolledClasses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const studentResponse = await axios.get(`http://localhost:5555/student/${studentId}`);
        setStudentData(studentResponse.data.data);

        const enrollResponse = await axios.get(`http://localhost:5555/student/${studentId}/enrollments`);
        setEnrolledClasses(enrollResponse.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching student data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [studentId]);

  return (
    <div className='stdcard'>
      <div className="card">
        <div className="card-header">
          <h2>Student Id: {studentId}, {studentData ? studentData.id : ''}</h2>
        </div>
        <div className="card-body">
          <img src={pp} alt="Student" className="student-image" />
          {studentData && (
            <div className='dtlis'>
              <p><strong>Student Name:</strong> {studentData.name}</p>
              <p><strong>ID Number:</strong> {studentData.idnum}</p>
              <p><strong>Grade:</strong> {studentData.grade}</p>
              <p><strong>School:</strong> {studentData.school}</p>
            </div>
          )}

          <table className="studentenroll-table">
            <thead>
              <tr>
                <th>Class</th>
                <th>Teacher</th>
                <th>Time</th>
                <th>Date</th>
                <th>Unenroll</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6">Loading...</td>
                </tr>
              ) : (
                enrolledClasses.map((enrollment) => (
                  <tr key={enrollment._id}>
                    <td>{enrollment.class}</td>
                    <td>{enrollment.teacher}</td>
                    <td>{enrollment.time}</td>
                    <td>{enrollment.date}</td>
                    <td><button className="unenroll-button">Unenroll</button></td>
                    <td><button className="edit-button">Edit</button></td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentCardEnroll;
