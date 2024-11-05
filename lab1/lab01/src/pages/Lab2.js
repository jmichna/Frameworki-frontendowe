import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../data/AppContext';

const Lab2 = () => {
  const { items } = useContext(AppContext);
  const { id } = useParams();
  const personId = parseInt(id, 10);

  const person = items.find(p => p.id === personId);

  if (!id) {
    return <p>Brak identyfikatora osoby.</p>;
  }

  if (!person) {
    return <p>Nie znaleziono osoby o tym identyfikatorze.</p>;
  }

  return (
    <div>
      <h1>Profil osoby</h1>
      <p><strong>ID:</strong> {person.id}</p>
      <p><strong>Name:</strong> {person.name}</p>
      <p><strong>Birth Date:</strong> {person.birth}</p>
      <p><strong>Eye Color:</strong> {person.eyes}</p>
    </div>
  );
};

export default Lab2;