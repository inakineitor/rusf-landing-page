import * as React from 'react';
import Button from '../Button/Button';
import { UsaMapModuleStyles } from './UsaMapModuleStyles';
// import { StaticImage } from 'gatsby-plugin-image';
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
              Located in Houston, Texas, Rice University, has historically generated the leaders of energy finance. We have a collection of experienced advisors across the entire capital stack.
            </p>
          </div>
          <img className="map" src={usaMap} alt="Houston in USA Map" />
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
