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
      yPadding=" bg-cover py-10 md:py-18 lg:py-36"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-left md:text-center text-center">
          <MotionInView variants={varFadeInUp}>
            <h1 className="lg:text-[60px] md:text-[46px] text-[28px] font-bold mb-0 md:mb-24 lg:mb-24 text-transparent bg-clip-text inline-block bg-steel-button bg-cover bg-center">
              Roadmap
            </h1>
          </MotionInView>
        </div>
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 grid-flow-row lg:gap-y-16 md:gap-y-16 gap-y-7 lg:gap-x-8 md:gap-x-8 gap-x-0">
            <MotionInView variants={varFadeInUp}>
              <div className="w-full">
                <h2 className="lg:text-2xl md:text-2xl text-sm text-indigo-700 mb-4 mt-10 ml-4">
                  Q4 2021
                </h2>
                <ul className="inline-block text-left border-b-2 border-solid border-indigo-500 lg:pb-20 md:pb-10 pb-10">
                  {Q42021.map((item) => (
                    <li
                      key={item.item}
                      className="text-white lg:leading-[90px] md:leading-[50px] leading-[30px] lg:text-2xl md:text-md text-sm lg:font-semibold md:font-semibold bg-list-icon bg-list-icon-size bg-no-repeat pl-10 bg-left-center"
                    >
                      <span className="lg:pl-7 md:pl-0">{item.item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionInView>
            <MotionInView variants={varFadeInDown}>
              <div className="w-full">
                <h2 className="lg:text-2xl md:text-2xl text-sm text-indigo-700 mb-4 lg:mt-10 md:mt-10 mt-0 ml-4">
                  Q1 2022
                </h2>

                <ul className="inline-block text-left border-b-2 border-solid border-indigo-500 lg:pb-20 md:pb-10 pb-10">
                  {Q12022.map((item) => (
                    <li
                      key={item.item}
                      className="text-white lg:leading-[90px] md:leading-[50px] leading-[30px] lg:text-2xl md:text-md text-sm lg:font-semibold md:font-semibold bg-list-icon bg-list-icon-size bg-no-repeat pl-10 bg-left-center"
                    >
                      <span className="lg:pl-7 md:pl-0">{item.item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionInView>
            <MotionInView variants={varFadeInUp}>
              <div className="w-full">
                <h2 className="lg:text-2xl md:text-2xl text-sm text-indigo-700 mb-4 lg:mt-10 md:mt-0 ml-4">
                  Q2 2022
                </h2>
                <ul className="inline-block text-left border-b-2 border-solid border-indigo-500 lg:pb-20 md:pb-10 pb-10">
                  {Q22022.map((item) => (
                    <li
                      key={item.item}
                      className="text-white lg:leading-[90px] md:leading-[50px] leading-[30px] lg:text-2xl md:text-md text-sm lg:font-semibold md:font-semibold bg-list-icon bg-list-icon-size bg-no-repeat pl-10 bg-left-center"
                    >
                      <span className="lg:pl-7 md:pl-0">{item.item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionInView>
            <MotionInView variants={varFadeInDown}>
              <div className="w-full">
                <h2 className="lg:text-2xl md:text-2xl text-sm text-indigo-700 mb-4 lg:mt-10 md:mt-0 ml-4">
                  Q3 2022
                </h2>
                <ul className="inline-block text-left border-b-2 border-solid border-indigo-500 lg:pb-[10.5rem] md:pb-[5.5rem] pb-10">
                  {Q32022.map((item) => (
                    <li
                      key={item.item}
                      className="text-white lg:leading-[90px] md:leading-[50px] leading-[30px] lg:text-2xl md:text-md text-sm lg:font-semibold md:font-semibold bg-list-icon bg-list-icon-size bg-no-repeat pl-10 bg-left-center"
                    >
                      <span className="lg:pl-7 md:pl-0">{item.item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionInView>
            <MotionInView variants={varFadeInUp}>
              <div className="w-full">
                <h2 className="lg:text-2xl md:text-2xl text-sm text-indigo-700 mb-4 lg:mt-10 md:mt-0 ml-4">Q4 2022</h2>
                <ul className="inline-block text-left">
                  {Q42022.map((item) => (
                    <li
                      key={item.item}
                      className="text-white lg:leading-[90px] md:leading-[50px] leading-[30px] lg:text-2xl md:text-md text-sm lg:font-semibold md:font-semibold bg-list-icon bg-list-icon-size bg-no-repeat pl-10 bg-left-center"
                    >
                      <span className="lg:pl-7 md:pl-0">{item.item}</span>
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