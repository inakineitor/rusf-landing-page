import * as React from 'react';
import { PurposeTextModuleStyles } from './PurposeTextModuleStyles';

const PurposeTextModule = () => {
  return (
    <PurposeTextModuleStyles>
      <div className="container">
        <h2>
          Our core mission is to generate returns for sustainability initiatives at Rice while advancing decarbonization, education, and diversity
        </h2>
        <p style={{ marginBottom: '60px' }}>
          Part of the fund's excess returns will be withdrawn annually for spending on sustainability initiatives at Rice, such as funding unpaid internships in energy transition, installing more solar PVs on campus, and expanding recycling (rainwater & composting).
        </p>
      </div>
    </PurposeTextModuleStyles>
  );
};

export default PurposeTextModule;
