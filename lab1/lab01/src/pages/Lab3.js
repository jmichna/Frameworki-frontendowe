import React from 'react';
import FlexContainer from '../components/FlexContainer';
import PersonProfile from '../components/PersonProfile';
import { data } from '../module-data';

const Lab03 = () => {
  return (
    <div>
      <h1>Lab 03 - FlexContainer Example</h1>
      <FlexContainer element={PersonProfile} data={data} />
    </div>
  );
};

export default Lab03;