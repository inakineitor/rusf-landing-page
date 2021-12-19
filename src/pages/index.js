import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/SEO';
import BannerModule from '../components/BannerModule/BannerModule';
import PerksModule from '../components/PerksModule/PerksModule';
import Perk from '../components/PerksModule/Perk';
import Members from '../components/Members/Members';
import UsaMapModule from '../components/UsaMapModule/UsaMapModule';
import PurposeTextModule from '../components/PurposeTextModule/PurposeTextModule';
import HowToJoinModule from '../components/HowToJoinModule/HowToJoinModule';

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="We are amidst an energy revolution"
          subTitle="Introducing the nation’s first new energy focused student-managed investment fund"
        />
        <PurposeTextModule />
        <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule>
        <UsaMapModule />
        <Members />
        <HowToJoinModule />
      </Layout>
    </>
  );
};

export default Index;
