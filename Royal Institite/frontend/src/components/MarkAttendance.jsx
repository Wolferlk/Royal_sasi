import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Spinner from '../components/Spinner';
import { BsInfoCircle } from 'react-icons/bs';
import AttendanceTable from './Attendanceview';

const MarkAttendance = () => {
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');
  const [students, setStudents] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [attendanceList, setAttendanceList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Fetch classes
  useEffect(() => {
    axios.get('http://localhost:5555/class')
      .then(response => {
        setClasses(response.data);
      })
      .catch(error => {
        console.error('Error fetching classes:', error);
      });
  }, []);

  // Fetch students based on selected class
  useEffect(() => {
    if (selectedClass) {
      axios.get(`http://localhost:5555/students?class=${selectedClass}`)
        .then(response => {
          setStudents(response.data);
          // Update attendanceList when students are fetched
          setAttendanceList(response.data.map(student => ({
            studentId: student._id,
            present: false // Default to false
          })));
        })
        .catch(error => {
          console.error('Error fetching students:', error);
        });
    }
  }, [selectedClass]);

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
      student?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student?._id.toString().toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleStudentClick = (studentId) => {
    setSelectedStudent(studentId);

    console.log(selectedStudent);

     axios
       .get("http://localhost:5555/attendance/" + studentId)
       .then((response) => {
         setAttendanceList(response.data);
         console.log(response.data);
         setLoading(false);
       })
       .catch((error) => {
         console.error("Error fetching student data:", error);
         setLoading(false);
       });

    console.log(attendanceList);

   

    // axios
    //   .post("http://localhost:5555/class", postData)
    //   .then((response) => {
    //     console.log("POST request successful:", response.data);
    //     // Handle the response data here
    //   })
    //   .catch((error) => {
    //     console.error("Error making POST request:", error);
    //     // Handle errors here
    //   });
    // //Toggle attendance status for the clicked student
    // const updatedAttendanceList = attendanceList.map(item => {
    //   if (item.studentId === studentId) {
    //     return { ...item, present: !item.present };
    //   }
    //   return item;
    // });
    // setAttendanceList(updatedAttendanceList);
  };

   useEffect(() => {
     console.log(selectedStudent);
   }, [selectedStudent]);

  // Submit attendance
  const submitAttendance = () => {
    // Implement logic to submit attendance data to backend
    axios.post('http://localhost:5555/attendance', {
      classId: selectedClass,
      attendanceList
    })
    .then(response => {
      console.log('Attendance submitted:', response.data);
    })
    .catch(error => {
      console.error('Error submitting attendance:', error);
    });
  };

  return (
    <>
      <div className="Attendanceform">
        <div>
          <label className="text-2xl" htmlFor="classSelect">
            Select Class:
          </label>
          <select
            id="classSelect"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="">Select a class</option>
            {classes.map((cls) => (
              <option key={cls.classid} value={cls.classid}>
                {cls.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-2xl" htmlFor="searchInput">
            Search Student:
          </label>
          <div className="mb-5 w-100">
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
            <table className="w-100 border-separate border-spacing-2">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="border border-slate-600 rounded-md text-center"
                  >
                    Student ID
                  </th>
                  <th
                    scope="col"
                    className="border border-slate-600 rounded-md text-center"
                  >
                    Student Name
                  </th>
                  <th
                    scope="col"
                    className="border border-slate-600 rounded-md text-center"
                  >
                    Mark
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student, index) => (
                  <tr key={student._id} className="h-8">
                    <td className="border border-slate-700 rounded-md text-center">
                      {student._id}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center">
                      {student.name}
                    </td>
                    <td className="rounded-md text-center">
                      <Button
                        variant="contained"
                        endIcon={<SendIcon />}
                        onClick={() => handleStudentClick(student.idnum)}
                      >
                        {attendanceList.find(
                          (item) => item.studentId === student._id
                        )?.present
                          ? "Unmark Attendance"
                          : "Mark Attendance"}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div>No students available</div>
          )}
        </div>
        <div>
          <Button onClick={submitAttendance}>Submit Attendance</Button>
        </div>
      </div>
      <AttendanceTable attendanceList={attendanceList} />
      <h1>hello</h1>
    </>
  );
};

export default MarkAttendance;
