import React from 'react';
import { MotionInView, varFadeInUp, varFadeInDown } from '../../animate';
import SectionDark from '../../components/SectionDark';

const Q42021 = [
  { item: 'Launch VAULT3D Token' },
  { item: 'CMC and CG' },
  { item: 'Launch NFT Market Beta' },
  { item: 'Celebrity Promotions' },
  { item: 'Influencer Promotions' },
  { item: 'First Pack Exclusive NFTs' },
];

const Q12022 = [
  { item: 'Finish NFT Marketplace App' },
  { item: 'Launching Pawn Shop' },
  { item: 'Launching Solana Bridge' },
  { item: 'Implementing Tier System' },
  { item: 'Issuing Exclusive Rewards' },
  { item: 'High Profile Promotions' },
];

const Q22022 = [
  { item: 'NFT Staking Feature' },
  { item: 'P2P Pawn Function' },
  { item: 'Team Growth / Hiring' },
  { item: 'Major Buybacks' },
  { item: 'Implementing NFT Art Calendar' },
];

const Q32022 = [
  { item: 'VAULT3D Conference Planning' },
  { item: 'Promotional Blueprint Meetings' },
  { item: 'More Cross-Chain Bridges' },
  { item: 'Marketplace Optimization' },
];

const Q42022 = [
  { item: 'VAULT3D Offices Opening' },
  { item: 'Holder NFT Rewards' },
  { item: 'Board Meetings' },
  { item: 'Plan Review For 2023' },
];

export default function Roadmap() {
  return (
    <SectionDark
      id="roadmap"
      yPadding=" bg-cover py-10 md:py-36 lg:py-36"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <MotionInView variants={varFadeInUp}>
            <h1 className="text-[60px] font-bold mb-0 md:mb-24 lg:mb-24 text-transparent bg-clip-text inline-block bg-steel-button bg-cover bg-center">
              Roadmap
            </h1>
          </MotionInView>
        </div>
        <div className="container">
          <div className="grid md:grid-cols-2 xs:grid-cols-1 grid-flow-row gap-y-16">
            <MotionInView variants={varFadeInUp}>
              <div className="text-center md:min-w-[400px] lg:min-w-[400px] md:max-w-[400px] lg:max-w-[400px] mx-auto">
                <h2 className="text-2xl text-indigo-700 mb-4 mt-10 ml-4">
                  Q4 2021
                </h2>
                <ul className="inline-block md:min-w-[400px] lg:min-w-[600px] md:max-w-[400px] lg:max-w-[400px] mx-auto text-left border-b-2 border-solid border-indigo-500 pb-20">
                  {Q42021.map((item) => (
                    <li
                      key={item.item}
                      className="text-white leading-[90px] text-2xl font-semibold bg-list-icon bg-no-repeat pl-12 bg-[length:50px] bg-left-center"
                    >
                      <span className="pl-7">{item.item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionInView>
            <MotionInView variants={varFadeInDown}>
              <div className="text-center md:min-w-[400px] lg:min-w-[400px] md:max-w-[400px] lg:max-w-[400px] md:noborder lg:noborder mx-auto">
                <h2 className="text-2xl text-indigo-700 mb-4 mt-10 ml-4">
                  Q1 2022
                </h2>

                <ul className="inline-block md:min-w-[400px] lg:min-w-[600px] md:max-w-[400px] lg:max-w-[400px] mx-auto text-left border-b-2 border-solid border-indigo-500 pb-20">
                  {Q12022.map((item) => (
                    <li
                      key={item.item}
                      className="text-white leading-[90px] text-2xl font-semibold bg-list-icon bg-no-repeat pl-12 bg-[length:50px] bg-left-center"
                    >
                      <span className="pl-7">{item.item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionInView>
            <MotionInView variants={varFadeInUp}>
              <div className="text-center min-w-full md:min-w-[400px] lg:min-w-[400px] md:max-w-[400px] lg:max-w-[400px] mx-auto">
                <h2 className="text-2xl text-indigo-700 mb-4 mt-10 ml-4">
                  Q2 2022
                </h2>
                <ul className="inline-block md:min-w-[400px] lg:min-w-[600px] md:max-w-[400px] lg:max-w-[400px] mx-auto text-left border-b-2 border-solid border-indigo-500 pb-20">
                  {Q22022.map((item) => (
                    <li
                      key={item.item}
                      className="text-white leading-[90px] text-2xl font-semibold bg-list-icon bg-no-repeat pl-12 bg-[length:50px] bg-left-center"
                    >
                      <span className="pl-7">{item.item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionInView>
            <MotionInView variants={varFadeInDown}>
              <div className="text-center md:min-w-[400px] lg:min-w-[400px] md:max-w-[400px] lg:max-w-[400px] mx-auto">
                <h2 className="text-2xl text-indigo-700 mb-4 mt-10 ml-4">
                  Q3 2022
                </h2>
                <ul className="inline-block md:min-w-[400px] lg:min-w-[600px] md:max-w-[400px] lg:max-w-[400px] mx-auto text-left border-b-2 border-solid border-indigo-500 pb-[10.5rem]">
                  {Q32022.map((item) => (
                    <li
                      key={item.item}
                      className="text-white leading-[90px] text-2xl font-semibold bg-list-icon bg-no-repeat pl-12 bg-[length:50px] bg-left-center"
                    >
                      <span className="pl-7">{item.item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionInView>
            <MotionInView variants={varFadeInUp}>
              <div className="text-center md:min-w-[400px] lg:min-w-[400px] md:max-w-[400px] lg:max-w-[400px] mx-auto">
                <h2 className="text-2xl text-indigo-700 mb-4 mt-10 ml-4">Q4 2022</h2>
                <ul className="inline-block md:min-w-[400px] lg:min-w-[700px] md:max-w-[400px] lg:max-w-[400px] mx-auto text-left">
                  {Q42022.map((item) => (
                    <li
                      key={item.item}
                      className="text-white leading-[90px] text-2xl font-semibold bg-list-icon bg-no-repeat pl-12 bg-[length:50px] bg-left-center"
                    >
                      <span className="pl-7">{item.item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionInView>
          </div>
        </div>
      </div>
    </SectionDark>
  );
}