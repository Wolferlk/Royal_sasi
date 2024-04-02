import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdOutlineDelete } from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';
import Spinner from './Spinner';

const StudentEnrollClasses = ({ studentId }) => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/student/${studentId}`)
      .then((response) => {
        setStudent(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching student data:', error);
        setLoading(false);
      });
  }, [studentId]);

  if (loading) {
    return <Spinner />;
  }

  if (!student) {
    return <div>No student found</div>;
  }

  return (
    <div>
      <h2>{student.name}</h2>
      <div>
        <h4>Enrolled Classes</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Class Subject</th>
              <th>Teacher</th>
              <th>Time</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {student.enrolledClasses.map((enrolledClass, index) => (
              <tr key={index}>
                <td>{enrolledClass.subject}</td>
                <td>{enrolledClass.teacher}</td>
                <td>{enrolledClass.time}</td>
                <td>{enrolledClass.date}</td>
                <td>
                  <button className="btn btn-danger mr-2">Unenroll</button>
                  <Link to={`/edit/${enrolledClass.id}`} className="btn btn-primary mr-2">
                    <AiOutlineEdit />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Link to={`/student/${studentId}/enroll`} className="btn btn-success">
          Enroll to New Class
        </Link>
      </div>
    </div>
  );
};

export default StudentEnrollClasses;
