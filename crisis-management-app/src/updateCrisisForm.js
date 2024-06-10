import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';


const UpdateCrisisForm = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8080/crises/${id}`)
      .then(response => response.json())
      .then(data => {
        setTitle(data.title);
        setDescription(data.description);
      })
      .catch(error => console.error('Error fetching crisis details:', error));
  }, [id]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/crises/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });
      if (!response.ok) {
        throw new Error('Failed to update crisis');
      }
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
