import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { PerksModuleStyles } from './PerksModuleStyles';
import Perk from './Perk';

const PerksModule = () => {
  return (
    <PerksModuleStyles>
      <StaticImage
        className="perks__image--bg"
        src="../../images/abstract-building.jpg"
        alt="Perks Module"
        layout="constrained"
        placeholder="tracedSVG"
      />
      <div className="perks__image--overlay"></div>
      <div className="perks_image--title">
        <h2>Core Values</h2>
      </div>
      <div className="container">
        <Perk
          title="Generate Returns"
          content="Generate returns for earmarked sustainability projects at Rice by seeking alpha from a fresh, proprietary lens"
        >
          {/* <StaticImage
            src="../../images/logos/gatsby-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          /> */}
        </Perk>
        <Perk
          title="Increasing Exposure"
          content="Increase exposure to energy transition among students from diverse backgrounds, producing the energy, and impact finance leaders of the future"
        >
          {/* <StaticImage
            src="../../images/logos/contentful-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          /> */}
        </Perk>
        <Perk
          title="Alumni Network"
          content="Build and leverage a strong network of alumni advisors leading the energy transition"
        >
          {/* <StaticImage
            src="../../images/logos/netlify-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          /> */}
        </Perk>
      </div>
    </PerksModuleStyles>
  );
};

export default PerksModule;
