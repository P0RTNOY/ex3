import React, { useState } from 'react';
import {addNewCrises} from '../api';

const AddCrisisForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addNewCrises({ title, description });
      console.log('Crisis added successfully');
    } catch (error) {
      console.error('Error adding crisis:', error);
    }
  };

  return (
    <div>
      <h2>Add New Crisis</h2>
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
        <button type="submit" className="btn btn-primary">Add Crisis</button>
      </form>
    </div>
  );
};

export default AddCrisisForm;
