import * as React from 'react';
import Button from '../Button/Button';
import { UsaMapModuleStyles } from './UsaMapModuleStyles';
import { StaticImage } from 'gatsby-plugin-image';
import usaMap from '../../images/usa-map-outline.svg'
import { Link } from 'gatsby';

const UsaMapModule = () => {
  return (
    <UsaMapModuleStyles>
      <div className="container">
        <div className="top-container">
          <div className="text-container">
            <h2>
              We are at the heart of the Energy Revolution
            </h2>
            <p style={{ marginBottom: '60px' }}>
              Situated in Houston, Texas, Rice University bla bla bla. We have a collection of experienced advisors bla bla bla.
            </p>
          </div>
          <div className="map-container">
            <img src={usaMap} alt="Houston in USA Map" />
          </div>
        </div>
        <div>
          <Button text="View Advisors" as={Link} to="/advisors" />
        </div>
      </div>
      <div className="container">
        
      </div>
    </UsaMapModuleStyles>
  );
};

export default UsaMapModule;
