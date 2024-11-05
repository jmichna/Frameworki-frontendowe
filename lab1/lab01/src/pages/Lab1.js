import React, { useContext } from 'react';
import PersonProfile from '../components/PersonProfile';
import AppContext from '../data/AppContext';

const Lab1 = () => {
  const { items } = useContext(AppContext); // Pobieramy dane z kontekstu

  return (
    <div>
      <h1>People Profiles</h1>
      {items.map((person) => (
        <PersonProfile
          key={person.id}
          id={person.id}
          name={person.name}
          birth={person.birth}
          eyes={person.eyes}
          rating={person.rating} // Przekazujemy rating z kontekstu
        />
      ))}
    </div>
  );
};

export default Lab1;