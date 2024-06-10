// CrisisList.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CrisisList = () => {
  const [crises, setCrises] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/crises')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setCrises(data);
        } else {
          setCrises([]); // Ensure crises is an empty array if no data or incorrect data is returned
        }
      })
      .catch(error => {
        console.error('Error fetching crises:', error);
        setCrises([]); // Ensure crises is set to an empty array in case of error
      });
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
