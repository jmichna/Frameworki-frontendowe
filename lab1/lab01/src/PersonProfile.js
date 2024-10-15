import React from 'react';
import './PersonProfile.css';

const PersonProfile = ({ id, name, birth, eyes }) => {
  return (
    <div className="person-profile">
      <h2>Person Profile</h2>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Birth Date:</strong> {birth}</p>
      <p><strong>Eye Color:</strong> {eyes}</p>
    </div>
  );
};

export default PersonProfile;
