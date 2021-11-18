import * as React from 'react';
import Button from '../Button/Button';
import { BasicTextModuleStyles } from './BasicTextModuleStyles';
import { Link } from 'gatsby';

const BasicTextModule = () => {
  return (
    <BasicTextModuleStyles>
      <div className="container">
        <h2>
          We are at the heart of the Energy Revolution
        </h2>
        <p style={{ marginBottom: '60px' }}>
          Situated in Houston, Texas, Rice University bla bla bla. Enter text about purpose of the fund. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
        <Button text="View Advisors" as={Link} to="/advisors" />
      </div>
    </BasicTextModuleStyles>
  );
};

export default BasicTextModule;
