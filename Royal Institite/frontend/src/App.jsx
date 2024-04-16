import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/headlogo.png';
import Manager from './pages/manager'; 
import Student from './pages/student';
import teacher from './pages/teacher';
import test from './pages/test';
import Introduction from "./pages/Introduction";
import MarkAttendance from "./components/MarkAttendance";




const App = () => {
  return (
    <div>
      <div>
        <div className="container d-flex justify-content-end position: fixed">
          {/* Navigation buttons */}
          <Link to="/" className="btn btn-primary mr-2">
            Home
          </Link>
          <Link to="/manager" className="btn btn-primary mr-2">
            Manager
          </Link>
          <Link to="/student" className="btn btn-primary mr-2">
            Student
          </Link>
          <Link to="/teacher" className="btn btn-primary mr-2">
            Teacher
          </Link>
          <Link to="/test" className="btn btn-primary ">
            test
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/manager" element={<Manager />} />
        <Route path="/student" element={<Student />} />
        <Route path="/teacher" element={<teacher />} />
        <Route path="/test" element={<test />} />
        <Route path="/manager/dashboard" element={<Introduction />} />

      </Routes>
    </div>
    // </Router>
  );
};

export default App;
