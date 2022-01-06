import React from 'react';
import {
  MotionInView,
  varFadeInLeft,
  varFadeInRight,
  varFadeInUp,
  varFadeInDown,
} from '../../animate';
import SectionDark from '../../components/SectionDark';
import Allocations from './Allocations';
import Distributions from './Distributions';

export default function TokenomicsBlock() {
  return (
    <div id="tokenomics">
      <SectionDark
        yBackground="bg-section-four-background"
        yPadding=" bg-cover py-10 md:py-36 lg:py-36"
      >
        <div className="container mx-auto">
          <div className="rounded-3xl md:my-0 lg:my-0 md:mx-20 lg:mx-20 bg-gray-400 bg-opacity-10 p-5">
            <div className="max-w-7xl mx-auto pb-0 md:px-4 sm:px-6 lg:px-8">
              <div className="mt-8 lg:mt-16 mx-auto md:px-4 lg:px-4 ">
                <div className="text-center">
                  <MotionInView variants={varFadeInDown}>
                    <h1 className="text-5xl text-transparent bg-clip-text inline-block bg-steel-button bg-cover bg-center">
                      The VAULT3D Token
                    </h1>
                  </MotionInView>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 md:gap-10 lg:gap-10 lg:mt-20 md:mt-20">
                  <MotionInView variants={varFadeInLeft}>
                    <div className="w-full md:flex lg:flex justify-center md:w-auto lg:w-auto">
                      <Allocations />
                    </div>
                  </MotionInView>
                  <MotionInView variants={varFadeInRight}>
                    <div className="inline-block text-white text-xl items-center">
                      <p className="mb-10 align-middle">
                        The marketing wallet is rerouting the 7% marketing tax
                        into BNB instead of native $VAULT3D tokens before it hits
                        the marketing wallet.
                      </p>
                      <p className=" align-middle">
                        This basically means that the marketing wallet is already
                        funded without having to sell any native tokens. 40% of
                        the marketing wallet will always be reserved for
                        marketing.
                      </p>
                    </div>
                  </MotionInView>
                </div>
                <div className="grid grid-cols-1 mt-10 md:mt-31 lg:mt-32">
                  <MotionInView variants={varFadeInDown}>
                    <div className="text-center">
                      <h1 className="text-2xl text-transparent bg-clip-text inline-block bg-steel-button bg-cover bg-center">
                        Token Distribution
                      </h1>
                    </div>
                  </MotionInView>
                  <MotionInView variants={varFadeInUp}>
                    <div className="mt-0 md:mt-10 lg:mt-10 text-center w-full md:w-auto lg:w-auto">
                      <Distributions />
                    </div>
                  </MotionInView>
                  <MotionInView variants={varFadeInDown}>
                    <div className="inline-block text-white text-xl align-middle mt-0 md:mt-20 lg:mt-20 md:mx-20 lg:mx-20">
                      <p className="mb-6 lg:mb-20 md:mb-20 align-middle">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor doamet sint. Velit officia consequat duis enim velit
                        mollit. Exercitation veniam consequat sunt nostrud amet.
                      </p>
                    </div>
                  </MotionInView>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionDark>
    </div>
  );
}