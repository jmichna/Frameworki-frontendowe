import React, { useState } from 'react';
import './PersonProfile.css';
import { data } from '../module-data.js';
import RatingBar from './RatingBar.js';

const PersonProfile = ({ id, name, birth, eyes }) => {
  const [personData, setPersonData] = useState({ name, birth, eyes });
  const [rating, setRating] = useState(0); // Stan dla ratingu od 0 do 10
  const [isDeleted, setIsDeleted] = useState(false); // Stan dla usunięcia osoby
  const [firstCycleCompleted, setFirstCycleCompleted] = useState(false);

  // Funkcja pomocnicza do usuwania osoby z globalnej tablicy data
  const removeFromGlobalData = () => {
    const personIndex = data.findIndex(person => person.id === id);
    if (personIndex !== -1) {
      data.splice(personIndex, 1); // Usunięcie z globalnej tablicy
      console.log(`Usunięto osobę o id ${id} z module-data.js.`);
    }
  };

  const handleEdit = () => {
    const newName = prompt('Podaj nowe imię:', personData.name);
    const newEyes = prompt('Podaj nowy kolor oczu:', personData.eyes);

    if (newName && newEyes) {
      const updatedPerson = { ...personData, name: newName, eyes: newEyes };
      setPersonData(updatedPerson); // Aktualizacja stanu lokalnego
    }
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm('Czy na pewno chcesz usunąć tę osobę?');
    if (confirmDelete) {
      removeFromGlobalData(); // Usunięcie z globalnej tablicy
      setIsDeleted(true); // Ustawienie stanu osoby na usuniętą
    }
  };

  const handleRate = () => {
    if (!firstCycleCompleted) {
      if (rating === 0) {
        setRating(10); // Ustawienie na 10 przy pierwszym kliknięciu
      } else if (rating === 10) {
        setRating(0); // Reset na 0 po osiągnięciu 10
        setFirstCycleCompleted(true); // Po pierwszym cyklu ustawiamy flagę na true
      }
    } else {
      if (rating < 10) {
        setRating(prevRating => prevRating + 1); // Zwiększamy o 1 po zakończeniu pierwszego cyklu
      } else {
        setRating(0); // Reset na 0, gdy osiągnie 10
      }
    }
  };

  if (isDeleted) {
    return null; // Zwracamy "null", co oznacza, że komponent nie zostanie wyrenderowany
  }

  return (
    <div className="person-profile">
      <h2>Person Profile</h2>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Name:</strong> {personData.name}</p>
      <p><strong>Birth Date:</strong> {personData.birth}</p>
      <p><strong>Eye Color:</strong> {personData.eyes}</p>
      <p><strong>Rating:</strong> {rating}</p>

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
