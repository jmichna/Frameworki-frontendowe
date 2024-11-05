import React, { useContext } from 'react';
import AppContext from '../data/AppContext';

function FlexContainer({ element: Element }) {
  const { items } = useContext(AppContext);

  return (
    <div className="flex-container">
      {items.map(item => (
        <Element key={item.id} {...item} />
      ))}
    </div>
  );
}

export default FlexContainer;