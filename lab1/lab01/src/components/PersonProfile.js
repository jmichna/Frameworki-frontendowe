import React, { useContext, useState } from 'react';
import './PersonProfile.css';
import { useNavigate } from 'react-router-dom';
import RatingBar from './RatingBar';
import AppContext from '../data/AppContext';

const PersonProfile = ({ id, name, birth, eyes, rating }) => {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const [localRating, setLocalRating] = useState(rating || 0);

  const handleEdit = () => {
    navigate(`/lab4/edit/${id}`);
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm('Czy na pewno chcesz usunąć tę osobę?');
    if (confirmDelete) {
      dispatch({
        type: 'delete',
        payload: { id }
      });
    }
  };

  const handleRate = () => {
    const newRating = localRating < 10 ? localRating + 1 : 0;
    setLocalRating(newRating);

    dispatch({
      type: 'rate',
      payload: {
        id,
        rating: newRating,
      },
    });
  };

  return (
    <div className="person-profile">
      <h2>Person Profile</h2>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Birth Date:</strong> {birth}</p>
      <p><strong>Eye Color:</strong> {eyes}</p>

      <RatingBar rate={rating} />

      <div className="profile-buttons">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleRate}>Rate</button>
      </div>
    </div>
  );
};

export default PersonProfile;