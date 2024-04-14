import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import '../components/sasi.scss';


const AllClasses = () => {
  const [allClasses, setAllClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5555/classes');
        setAllClasses(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching classes:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (allClasses.length === 0) {
    return <div>No classes found</div>;
  }


//   const sampleData = [
//     { name: 'Math', teacher: 'Mr. Smith', subject: 'Mathematics', day: 'Monday', time: '9:00 AM', grade: '10' },
//     { name: 'Science', teacher: 'Ms. Johnson', subject: 'Science', day: 'Tuesday', time: '10:00 AM', grade: '11' },
//     // Add more sample data as needed
//   ];

  return (
    <div>
        <div className="card">
        <div className="card-header">
            <h2>All Classes</h2>
            </div>
            <div className="card-body">


                <div>
                    <p>kdsnosjfokjo</p>

                </div>
       <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Teacher</th>
            <th>Subject</th>
            <th>Day</th>
            <th>Time</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {allClasses.map((classItem) => (
            <tr key={classItem._id}>
              <td>{classItem.name}</td>
              <td>{classItem.teacher}</td> 
              <td>{classItem.subject}</td>
              <td>{classItem.day}</td>
              <td>{classItem.time}</td>
              <td>{classItem.grade}</td>
            </tr>
          ))}
        </tbody>
        </table> 
      </div>
    </div>
    </div>
  );
};

export default AllClasses;
