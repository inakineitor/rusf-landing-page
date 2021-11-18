import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Advisor from './Advisor';
import { AdvisorsStyles } from './AdvisorsStyles';

const getAdvisors = graphql`
  query {
    advisors: allContentfulAdvisors {
      edges {
        node {
          name
          position
          link
          contentful_id
          description {
            raw
          }
          image {
            gatsbyImageData(width: 600, formats: [AUTO, WEBP])
          }
        }
      }
    }
  }
`;

const Advisors = () => {
  const response = useStaticQuery(getAdvisors);
  const advisors = response.advisors.edges;

  console.log(advisors)

  return (
    <AdvisorsStyles>
      <div className="features__container">
        <div className="features__container--scroll">
          {advisors.map(({ node }) => {
            return <Advisor key={node.contentful_id} feature={node} />;
          })}
        </div>
      </div>
    </AdvisorsStyles>
  );
};

export default Advisors;
