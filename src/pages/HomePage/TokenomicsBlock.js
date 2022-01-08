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
        yPadding=" bg-cover py-10 md:py-36 lg:py-36"
      >
        <div className="container-xl mx-auto">
          <div className="lg:rounded-[50px] md:rounded-[50px] rounded-[25px] md:my-0 lg:my-0 md:mx-0 lg:mx-20 bg-pink-50 bg-opacity-5 p-5">
            <div className="container-xl mx-auto pb-0 md:px-0 sm:px-6 lg:px-8">
              <div className="mt-8 lg:mt-16 mx-auto md:px-4 lg:px-4 ">
                <div className="text-center">
                  <MotionInView variants={varFadeInDown}>
                    <h1 className="text-[28px] lg:text-[60px] md:text-[42px] font-bold text-transparent bg-clip-text inline-block bg-steel-button bg-cover bg-center">
                      The Vault3D Token
                    </h1>
                  </MotionInView>
                </div>

                {/* For tablet and desktop */}
                <div className="lg:grid md:grid md:grid-cols-2 lg:grid-cols-2 gap-0 md:gap-10 lg:gap-10 lg:mt-20 md:mt-20 items-center hidden">
                  <MotionInView variants={varFadeInLeft}>
                    <div className="w-full md:flex lg:flex justify-center md:w-auto lg:w-auto">
                      <Allocations />
                    </div>
                  </MotionInView>
                  <MotionInView variants={varFadeInRight}>
                    <div className="inline-block text-white lg:text-2xl md:text-md items-center">
                      <p className="mb-10 align-middle">
                        The marketing wallet is rerouting the 7% marketing tax
                        into BNB instead of native $VAULT3D tokens before it hits
                        the marketing wallet.
                      </p>
                      <p className="align-middle">
                        This basically means that the marketing wallet is already
                        funded without having to sell any native tokens. 40% of
                        the marketing wallet will always be reserved for
                        marketing.
                      </p>
                    </div>
                  </MotionInView>
                </div>

                {/* For mobile */}
                <div className="grid grid-cols-1 gap-0 md:gap-10 mt-5 items-center lg:hidden md:hidden">
                  <MotionInView variants={varFadeInRight}>
                    <div className="inline-block text-white lg:text-2xl md:text-md items-center">
                      <p className="mb-5 align-middle">
                        The marketing wallet is rerouting the 7% marketing tax
                        into BNB instead of native $VAULT3D tokens before it hits
                        the marketing wallet.
                      </p>
                      <p className="align-middle">
                        This basically means that the marketing wallet is already
                        funded without having to sell any native tokens. 40% of
                        the marketing wallet will always be reserved for
                        marketing.
                      </p>
                    </div>
                  </MotionInView>
                  <MotionInView variants={varFadeInLeft}>
                    <div className="w-full">
                      <Allocations />
                    </div>
                  </MotionInView>
                </div>

                <div className="grid grid-cols-1 mt-10 md:mt-31 lg:mt-32">
                  <MotionInView variants={varFadeInDown}>
                    <div className="text-center">
                      <h1 className="lg:text-4xl md:text-4xl text-xl font-bold text-transparent bg-clip-text inline-block bg-steel-button bg-cover bg-center">
                        Token Distribution
                      </h1>
                    </div>
                  </MotionInView>
                  <MotionInView variants={varFadeInUp}>
                    <div className="lg:mt-20 md:mt-20 mt-10 flex justify-center">
                      <Distributions />
                    </div>
                  </MotionInView>
                  <MotionInView variants={varFadeInDown}>
                    <div className="inline-block text-white lg:text-2xl md:text-md align-middle mt-5 md:mt-20 lg:mt-20 md:mx-10 lg:mx-60">
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