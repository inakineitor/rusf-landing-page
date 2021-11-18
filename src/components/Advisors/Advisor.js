import * as React from 'react';
import { Link } from 'gatsby';
import Button from '../Button/Button';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// import ContenfulRichText from '../ContentfulRichText';

const Advisor = ({ feature }) => {
  const { name, position, link, image } = feature;
  const imageObj = getImage(image);

  return (
    <aside className="features__item">
      <Link to={link}>
        <GatsbyImage
          className="features__item--img"
          image={imageObj}
          alt="Advisor Image"
        />
        <div className="features__item--content">
          {name && <h2>{name}</h2>}
          {position && <h3>{position}</h3>}
          {/* {description && <ContenfulRichText richTextAttribute={description} />} */}
          <Button text="Read More" as="span" />
        </div>
      </Link>
    </aside>
  );
};

export default Advisor;
