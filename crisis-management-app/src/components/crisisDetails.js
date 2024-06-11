import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import DeleteCrisisButton from './deleteCrisisButton';
import {getCrisesById} from '../api';

const CrisisDetails = () => {
  const { id } = useParams();
  const [crisis, setCrisis] = useState(null);

  useEffect(() => {
    getCrisesById(id).then(setCrisis);
  }, [id]);

  if (!crisis) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2 className="mt-3">Crisis Details</h2>
      <p><strong>Title:</strong> {crisis.title}</p>
      <p><strong>Description:</strong> {crisis.description}</p>
      <p><strong>Date:</strong> {new Date(crisis.date).toLocaleString()}</p>
      <div className="mb-3">
        <Link to={`/update-crisis/${id}`} className="btn btn-primary mr-2">Update Crisis</Link>
        <DeleteCrisisButton crisisId={id} className="btn btn-danger"></DeleteCrisisButton>
      </div>
    </div>
  );
};

export default CrisisDetails;
