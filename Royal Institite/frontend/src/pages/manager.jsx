import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { BsHighlighter, BsInfoCircle } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-3xl'>Registered Students</h1>
        <Link to='/student/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : students.length > 0 ? (
        <table className='w-full border-separate border-spacing-2'>
          <thead>
            <tr>
              <th scope="col" className='border border-slate-600 rounded-md'>Student ID</th>
              <th scope="col" className='border border-slate-600 rounded-md'>Student Name</th>
              <th scope="col" className='border border-slate-600 rounded-md'>Operations</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student._id} className='h-8'>
                <td className='border border-slate-700 rounded-md text-center'>{index + 1}</td>
                <td className='border border-slate-700 rounded-md text-center'>{student.name}</td>
                <td className='border border-slate-700 rounded-md text-center'>
                  <div className='flex justify-center gap-x-4'>
                    <Link to={`student/details/${student._id}`}>
                      <BsInfoCircle className='text-2xl text-blue-800' />
                    </Link>
                    <Link to={`student/edit/${student._id}`}>
                      <AiOutlineEdit className='text-2xl text-green-600' />
                    </Link>
                    <MdOutlineDelete className='text-2xl text-red-600' />
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
  );
};

export default Students;
