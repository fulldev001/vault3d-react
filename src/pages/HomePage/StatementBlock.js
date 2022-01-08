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
              {/* Desktop */}
              <MotionInView variants={varFadeInLeft} className="hidden lg:block md:hidden">
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

              {/* Tablet */}
              <MotionInView variants={varFadeInLeft} className="hidden md:block lg:hidden">
                <div className="text-outline-left-tablet relative" title="SHOW IT">
                  <h1 className="relative lg:text-[60px] md:text-[46px] font-bold text-transparent bg-clip-text inline-block bg-steel-button bg-cover bg-center uppercase z-20">
                    Show IT
                  </h1>
                </div>
                <div className="text-outline-left-tablet relative" title="TO THE WORLD!">
                  <h1 className="relative md:text-[46px] lg:text-[60px] font-bold text-transparent bg-clip-text inline-block bg-steel-button bg-cover bg-center uppercase z-20">
                    To The World!
                  </h1>
                </div>
              </MotionInView>

              {/* Mobile */}
              <MotionInView variants={varFadeInLeft} className="block lg:hidden md:hidden">
                <div className="text-outline-left-mobile relative" title="SHOW IT">
                  <h1 className="relative text-[28px] lg:text-[60px] md:text-[46px] font-bold text-transparent bg-clip-text inline-block bg-steel-button bg-cover bg-center uppercase z-20">
                    Show IT
                  </h1>
                </div>
                <div className="text-outline-left-mobile relative" title="TO THE WORLD!">
                  <h1 className="relative text-[28px] md:text-[46px] lg:text-[60px] font-bold text-transparent bg-clip-text inline-block bg-steel-button bg-cover bg-center uppercase z-20">
                    To The World!
                  </h1>
                </div>
              </MotionInView>
              <MotionInView variants={varFadeInRight}>
                <p className="lg:text-2xl md:text-lg md:w-full lg:w-4/5 text-left mt-10 text-white">
                  Your originality is the strength of your NFT
                </p>
              </MotionInView>
              {/* White sphere for desktop */}
              <div className="mt-20 hidden md:hidden lg:block">
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
            <div className="flex justify-between md:flex md:justify-between md:items-baseline items-baseline text-center mt-10 md:mt-0 lg:mt-32">

              {/* White sphere for tablet */}
              <div className="mt-20 hidden lg:hidden md:block md:w-1/5">
                <MotionInView variants={varFadeInUp}>
                  <img
                    src="/assets/images/badge-small.png"
                    alt=""
                    width="250"
                    height="250"
                  />
                </MotionInView>
              </div>

              {/* White sphere for mobile */}
              <div className="mt-20 block lg:hidden md:hidden md:w-1/5">
                <MotionInView variants={varFadeInUp}>
                  <img
                    src="/assets/images/badge-small.png"
                    alt=""
                    className="w-[150px]"
                  />
                </MotionInView>
              </div>

              {/* Space for tablet */}
              <div className="md:w-1/5 hidden lg:hidden"></div>
              <div className="relative w-full md:w-3/5 lg:w-full">
                {/* Curve grid for desktop */}
                <div className="relative w-500 h-500 overflow-hidden hidden md:hidden lg:block">
                  <MotionInView variants={varFadeInUp}>
                    <img
                      src="/assets/images/gridbgright.png"
                      alt=""
                      className="lg:w-[900px] lg:h-[900px] md:w-[900px] md:h-[900px]"
                    />
                  </MotionInView>
                </div>

                {/* Curve grid for tablet */}
                <div className="hidden lg:hidden md:block">
                  <MotionInView variants={varFadeInUp}>
                    <img
                      src="/assets/images/green_curve_grid.png"
                      alt=""
                      className="md:w-[400px] md:h-[400px]"
                    />
                  </MotionInView>
                </div>

                {/* Curve grid for mobile */}
                <div className="flex justify-end md:hidden lg:hidden">
                  <MotionInView variants={varFadeInUp}>
                    <img
                      src="/assets/images/green_curve_grid.png"
                      alt=""
                      className="h-[200px]"
                    />
                  </MotionInView>
                </div>

                <div className="absolute md:py-0 lg:py-2.5 md:px-0 lg:px-20 top-10 md:top-36 lg:top-56 inset-x-0 text-white lg:text-2xl md:text-lg lg:text-left md:text-left text-right">
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