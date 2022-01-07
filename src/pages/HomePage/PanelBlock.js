import React from 'react';
import {
  MotionInView,
  varFadeInUp,
  varFadeInDown,
  varFadeInLeft,
  varFadeInRight,
} from '../../animate';
import SectionDark from '../../components/SectionDark';

export default function PanelBlock() {
  return (
    <SectionDark
      id="features"
      yPadding="flex mx-auto py-5 bg-cover py-14 md:py-18 lg:py-36"
    >
      <div className="lg:container md:container-xl mx-auto">
        <MotionInView variants={varFadeInUp}>
          <div className="text-center mg-10 md:mb-10 lg:mb-20">
            <h1 className="font-bold md:text-[46px] lg:text-[64px] text-transparent bg-clip-text inline-block bg-steel-button bg-cover bg-center">
              Features
            </h1>
          </div>
        </MotionInView>

        <div className="flex items-end justify-items-end">
          <div className="md:w-full md:mr-20 lg:w-4/5 text-left">
            <div className="md:px-6 lg:px-6 py-4">
              <MotionInView variants={varFadeInDown}>
                <div className="mb-10 md:ml-0 lg:ml-20 text-3xl text-themePrimary-500 text-center md:text-left lg:text-left font-extrabold uppercase">
                  For Creators
                </div>
              </MotionInView>
              <div className="md:flex lg:flex flex-grow space-x-12">
                <MotionInView variants={varFadeInLeft}>
                  <div className="w-40 mb-4 md:mb-0 lg:mb-0">
                    <img
                      src="/assets/images/icecube.png"
                      width="129"
                      height="130"
                      alt="icecube"
                    />
                  </div>
                </MotionInView>
                <MotionInView variants={varFadeInRight}>
                  <div className="static">
                    <p className="text-white text-left lg:text-[26px] md:text-lg ">
                      Creators deserve the ease and simplicity of a marketplace
                      that can both support their art and give them total control
                      over their NFTs. That is why VAULT3D was created, to promote
                      and accentuate YOUR brilliant work.
                    </p>
                  </div>
                </MotionInView>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-10 lg:mt-0 md:mt-0">
          <div className="md:w-full md:ml-20 lg:w-4/5 ml-auto text-right md:text-right lg:text-right">
            <div className="md:px-6 lg:px-6 py-4">
              <MotionInView variants={varFadeInDown}>
                <div className="text-3xl text-themePrimary-500 font-extrabold uppercase mb-10 md:mr-0 lg:mr-20 text-center md:text-right lg:text-right">
                  For Holders
                </div>
              </MotionInView>
              <div className="lg:flex md:flex space-x-12">
                {/* <MotionInView variants={varFadeInRight}>
                  <div className="lg:hidden md:hidden mb-4 lg:mb-0 md:mb-0 inline-block">
                    <img
                      src="/assets/images/icecubes.png"
                      width="129"
                      height="130"
                      className="object-center"
                      alt="icecubes"
                    />
                  </div>
                </MotionInView> */}
                <MotionInView variants={varFadeInLeft}>
                  <div className="static">
                    <p className="text-white text-left lg:text-[26px] md:text-lg">
                      VAULT3D tokenholders will not only benefit from the rewards
                      and increase of intrinsic token value, but will also enjoy
                      the benefits of extrinsic value—created by both the
                      marketplace itself and the content therein.
                    </p>
                  </div>
                </MotionInView>
                <MotionInView variants={varFadeInUp}>
                  <div className="hidden w-40 md:inline-block lg:inline-block">
                    <img
                      src="/assets/images/icecubes.png"
                      width="129"
                      height="130"
                      alt="icecubes"
                    />
                  </div>
                </MotionInView>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionDark>
  );
}