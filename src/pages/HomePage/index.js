import React from 'react';
import Footer from '../../components/Footer';
import TopHeader from "../../components/TopHeader";
import AmbassadorsBlock from './AmbassadorsBlock';
import FaqBlock from './FaqBlock';
import Hero from './Hero';
import HowToBuyBlock from './HowToBuyBlock';
import OurCoreTeamBlock from './OurCoreTeamBlock';
import PanelBlock from './PanelBlock';
import Roadmap from './Roadmap';
import StatementBlock from './StatementBlock';
import TokenomicsBlock from './TokenomicsBlock';

export default function HomePage() {
  return (
    <div className="antialiased text-gray-600">
      <TopHeader />
      <Hero />
      <PanelBlock />
      <StatementBlock />
      <TokenomicsBlock />
      <Roadmap />
      {/* <HowToBuyBlock /> */}
      {/* <OurCoreTeamBlock /> */}
      {/* <AmbassadorsBlock /> */}
      {/* <FaqBlock /> */}
      {/* <Footer /> */}
    </div>
  );
}