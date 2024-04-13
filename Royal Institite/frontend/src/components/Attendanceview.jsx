import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/sasi.scss';

function AttendanceTable() {
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/api/attendance');
        setAttendance(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Class</th>
          <th>Student</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {attendance.map((record) => (
          <tr key={record._id}>
            <td>{record.classId?.name}</td>
            <td>{record.studentId?.name}</td>
            <td>{new Date(record.date).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AttendanceTable;
