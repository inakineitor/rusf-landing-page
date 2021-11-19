import * as React from 'react';
import Button from '../Button/Button';
import { HowToJoinModuleStyles } from './HowToJoinModuleStyles';
import { Link } from 'gatsby';

const HowToJoinModule = () => {
  return (
    <HowToJoinModuleStyles>
      <div className="container">
        <h2>Want to Join?</h2>
        <p style={{ marginBottom: '60px' }}>
          Fill out the short form below to be considered for a position within the fund. We will reach out shortly after the form submission with information about next steps.
        </p>
        <Button
          text="Join"
          as={Link}
          to="https://forms.gle/ztWPQyzq3YNcksoW8"
        />
      </div>
    </HowToJoinModuleStyles>
  );
};

export default HowToJoinModule;
