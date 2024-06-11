import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {updateCrises,getCrisesById} from '../api';

const UpdateCrisisForm = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    getCrisesById(id).then(data => {
        setTitle(data.title);
        setDescription(data.description);
      })
      .catch(error => console.error('Error fetching crisis details:', error));
  }, [id]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateCrises(id ,{ title, description });
      console.log('Crisis updated successfully');
    } catch (error) {
      console.error('Error updating crisis:', error);
    }
  };

  return (
    <div>
      <h2>Update Crisis</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Crisis</button>
      </form>
    </div>
  );
};

export default UpdateCrisisForm;
