import * as React from 'react';
import Layout from '../components/Layout';
import Features from '../components/Advisors/Advisors';
import Seo from '../components/SEO';
import SimpleBanner from '../components/SimpleBanner/SimpleBanner';
import { StaticImage } from 'gatsby-plugin-image';

const products = () => {
  return (
    <>
      <Seo title="Advisors" />
      <Layout>
        <SimpleBanner title="All Advisors">
          <StaticImage
            className="banner__image"
            src="../images/abstract-building.jpg"
            alt="Abstract Building"
          />
        </SimpleBanner>
        <Features />
      </Layout>
    </>
  );
};

export default products;
