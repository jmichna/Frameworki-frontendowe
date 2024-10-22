import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../module-data'; // Import wygenerowanych danych

const Lab2 = () => {
  const { id } = useParams(); // Pobieranie id z parametrów ścieżki
  
  // Konwersja id na liczbę
  const personId = parseInt(id, 10);
  
  // Znajdowanie osoby po id
  const person = data.find(p => p.id === personId);

  // Obsługa błędnych lub brakujących parametrów
  if (!id) {
    return <p>Brak identyfikatora osoby.</p>;
  }

  if (!person) {
    return <p>Nie znaleziono osoby o tym identyfikatorze.</p>;
  }

  // Wyświetlanie szczegółów osoby
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