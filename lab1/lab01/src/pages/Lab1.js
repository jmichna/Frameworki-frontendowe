import React from 'react';
import PersonProfile from '../components/PersonProfile';
import { data } from '../module-data';

const Lab1 = () => {
  return (
    <div>
      <h1>People Profiles</h1>
      {data.map((person) => (
        <PersonProfile
          key={person.id}
          id={person.id}
          name={person.name}
          birth={person.birth}
          eyes={person.eyes}
          rating={person.rating}
        />
      ))}
    </div>
  );
};

export default Lab1;