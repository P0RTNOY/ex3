// CrisisList.js
import {getCrises} from '../api';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CrisisList = () => {
  const [crises, setCrises] = useState([]);

  useEffect(() => {
    getCrises().then(setCrises);
  }, []);

  return (
    <div className="container">
      <h2 className="mt-5">Crisis List</h2>
      <ul className="list-group">
        {crises.length > 0 ? (
          crises.map(crisis => (
            <li key={crisis._id} className="list-group-item">
              <Link to={`/crises/${crisis._id}`} className="text-decoration-none">{crisis.title}</Link>
            </li>
          ))
        ) : (
          <li className="list-group-item">No crises found</li>
        )}
      </ul>
    </div>
  );
};

export default CrisisList;
