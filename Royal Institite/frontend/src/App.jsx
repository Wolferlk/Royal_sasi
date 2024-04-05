import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/headlogo.png';
import Manager from './pages/manager'; 
import Student from './pages/student';
import teacher from './pages/teacher';




const App = () => {
  return (
    // <Router>
      <div>
     
        <div>

        

        <div className="container d-flex justify-content-end position: fixed">
        {/* Navigation buttons */}
        <Link to="/" className="btn btn-primary mr-2">Home</Link>
        <Link to="/manager" className="btn btn-primary mr-2">Manager</Link>
        <Link to="/student" className="btn btn-primary mr-2">Student</Link>
        <Link to="/teacher" className="btn btn-primary">Teacher</Link>
      </div>

        </div>
        

        {/* <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Royal Institue</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Student</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">Manager</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div> */}

        <Routes>
          <Route path="/manager" element={<Manager />} />
          <Route path="/student" element={<Student />} />
          <Route path="/teacher" element={<teacher />} />
        </Routes>
      </div>
    // </Router>
  );
};

export default App;
