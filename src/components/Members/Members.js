import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { AdvisorsStyles } from '../Advisors/AdvisorsStyles';
import Advisor from '../Advisors/Advisor';

const getMembers = graphql`
  query {
    featuredMembers: allContentfulMembers(
      filter: { featured: { eq: true } }
    ) {
      edges {
        node {
          name
          position
          link
          contentful_id
          image {
            gatsbyImageData(width: 600, formats: [AUTO, WEBP])
          }
        }
      }
    }
  }
`;

const Members = () => {
  const response = useStaticQuery(getMembers);
  const members = response.featuredMembers.edges;

  return (
    <AdvisorsStyles>
      <div className="features__container">
        <div className="features__container--scroll">
          {members.map(({ node }) => {
            return <Advisor key={node.contentful_id} feature={node} />;
          })}
        </div>
      </div>
    </AdvisorsStyles>
  );
};

export default Members;
