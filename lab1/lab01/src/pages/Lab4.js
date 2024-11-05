import React from 'react';
import { Link } from 'react-router-dom';

const Lab4 = () => {
  return (
    <div>
      <h1>Laboratorium 4</h1>
        <Link to="/lab4/add">
            <button>Dodaj Nową Osobę</button>
        </Link>
    </div>
  );
};

export default Lab4;