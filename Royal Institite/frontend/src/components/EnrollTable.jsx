import React, { useEffect, useState } from 'react'
import axios from 'axios';

const EnrollTable = (props) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { selectedStudent } = props;

  useEffect(() => {
    const apiUrl = "http://localhost:5555/class";

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(apiUrl);
        console.log(response);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
    };
  }, []); 

  const handleSubmit = async (classes, selectedStudent) => {

    const newData = {
      class: classes.classid,
      teacher: classes.teacher,
      date: classes.day,
      studentId: selectedStudent,
    };

    try {
      const response = await axios.post(
        "http://localhost:5555/studentenroll",
        newData
      );

      console.log('Response:', response.data);

      alert('submitted successfully!');
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
    }

  };

  return (
    <>
      <table className="studentenroll-table">
        <thead>
          <tr>
            <th>Class Id</th>
            <th>Teacher</th>
            <th>Subject</th>
            <th>Date</th>
            <th>Time</th>
            <th>Grade</th>
            <th>Enroll</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((classes) => (
            <tr>
              <td>{classes.classid}</td>
              <td>{classes.teacher}</td>
              <td>{classes.subject}</td>
              <td>{classes.day}</td>
              <td>{classes.time}</td>
              <td>{classes.grade}</td>
              <td>
                {" "}
                <button
                  onClick={() => handleSubmit(classes, selectedStudent)}
                  className="btn btn-danger mr-2"
                >
                  Enroll
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default EnrollTable