import React from 'react';
import './RatingBar.css';

const RatingBar = ({ rate }) => {
  const totalStars = 10; // Ustawiamy całkowitą liczbę gwiazdek

  // Generujemy tablicę gwiazdek (wypełnionych i pustych)
  const stars = Array.from({ length: totalStars }, (_, index) => (
    <span key={index}>
      {index < rate ? '★' : '☆'} {/* Wypełniona gwiazdka '★', pusta gwiazdka '☆' */}
    </span>
  ));

  return <div>{stars}</div>;
};

export default RatingBar;