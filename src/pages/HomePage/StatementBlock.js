import React from 'react';
import SectionDark from '../../components/SectionDark';
import {
  MotionInView,
  varFadeInLeft,
  varFadeInRight,
  varFadeInUp,
  varFadeInDown,
} from '../../animate';

export default function StatementBlock() {
  return (
    <SectionDark
      yPadding=" bg-cover pt-20 md:pt-36 lg:pt-36 pb-10 md:pb-36 lg:pb-36"
    >
      <div className="">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="">
              <MotionInView variants={varFadeInLeft}>
                <div className="text-outline-left relative" title="SHOW IT">
                  <h1 className="relative lg:text-[60px] md:text-[46px] font-bold text-transparent bg-clip-text inline-block bg-steel-button bg-cover bg-center uppercase z-20">
                    Show IT
                  </h1>
                </div>
                <div className="text-outline-left relative" title="TO THE WORLD!">
                  <h1 className="relative md:text-[46px] lg:text-[60px] font-bold text-transparent bg-clip-text inline-block bg-steel-button bg-cover bg-center uppercase z-20">
                    To The World!
                  </h1>
                </div>
              </MotionInView>
              <MotionInView variants={varFadeInRight}>
                <p className="lg:text-2xl md:text-lg md:w-full lg:w-4/5 text-left mt-10 text-white">
                  Your originality is the strength of your NFT
                </p>
              </MotionInView>
              <div className="mt-20">
                <MotionInView variants={varFadeInUp}>
                  <img
                    src="/assets/images/badge-small.png"
                    alt=""
                    width="250"
                    height="250"
                  />
                </MotionInView>
              </div>
            </div>
            <div className="text-center mt-10 md:mt-32 lg:mt-32">
              <div className="relative">
                <div className="relative w-500 h-500 overflow-hidden">
                  <MotionInView variants={varFadeInUp}>
                    <img
                      src="/assets/images/gridbgright.png"
                      alt=""
                      width="900"
                      height="600"
                    />
                  </MotionInView>
                </div>

                <div className="absolute md:py-2.5 lg:py-2.5 md:px-20 lg:px-20 top-16 md:top-28 lg:top-56 inset-x-0 text-white text-2xl text-left">
                  <MotionInView variants={varFadeInDown}>
                    VOULT3D will make it easier than ever to create, upload,
                    price, and show off your NFTs!
                  </MotionInView>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionDark>
  );
}