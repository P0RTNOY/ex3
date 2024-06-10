import React from 'react';

const DeleteCrisisButton = ({ crisisId }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/crises/${crisisId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete crisis');
      }
      console.log('Crisis deleted successfully');
    } catch (error) {
      console.error('Error deleting crisis:', error);
    }
  };

  return (
    <button onClick={handleDelete} className="btn btn-danger">Delete Crisis</button>
  );
};

export default DeleteCrisisButton;
