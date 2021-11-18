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
          A part of the funds excess returns will be withdrawn anually fro spending on sustainability initiatives at Rice, like funding unpaid internships in energy transition, solar installation, recycling (rainwater & composting) and Rice EV.
        </p>
      </div>
    </PurposeTextModuleStyles>
  );
};

export default PurposeTextModule;
