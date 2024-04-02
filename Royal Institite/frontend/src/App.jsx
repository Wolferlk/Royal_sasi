import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Manager from './pages/manager'; // Assuming you have Manager and Student components
import Student from './pages/student';

const App = () => {
  return (
    <Router>
      <div>
        <div className="container">
          <h1>Temp page</h1><br/>
        </div>

        <div className="container">
          <h2>Royal</h2>
        </div>

        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">React CRUD Sample</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/student" className="nav-link">Student</Link>
                </li>
                <li className="nav-item">
                  <Link to="/manager" className="nav-link">Manager</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <Routes>
          <Route path="/manager" element={<Manager />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
