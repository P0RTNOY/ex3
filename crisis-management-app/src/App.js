import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CrisisList from './crisisList';
import CrisisDetails from './crisisDetails';
import AddCrisisForm from './addCrisisForm';
import UpdateCrisisForm from './updateCrisisForm';

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/add-crisis" className="nav-link">Add Crisis</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<CrisisList />} />
          <Route path="/crises/:id" element={<CrisisDetails />} />
          <Route path="/add-crisis" element={<AddCrisisForm />} />
          <Route path="/update-crisis/:id" element={<UpdateCrisisForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
