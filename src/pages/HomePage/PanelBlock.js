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
            <h1 className="font-bold text-[28px] md:text-[46px] lg:text-[64px] text-transparent bg-clip-text inline-block bg-steel-button bg-cover bg-center">
              Features
            </h1>
          </div>
        </MotionInView>

        <div className="flex items-end justify-items-end">
          <div className="md:w-full md:mr-20 lg:w-4/5 text-left">
            <div className="md:px-6 lg:px-6 py-4">
              <MotionInView variants={varFadeInDown}>
                <div className="lg:mb-10 md:mb-10 mb-5 md:ml-0 lg:ml-20 text-xl md:text-3xl lg:text-3xl text-themePrimary-500 text-left md:text-left lg:text-left font-extrabold uppercase">
                  For Creators
                </div>
              </MotionInView>
              <div className="flex md:flex lg:flex flex-grow space-x-1 lg:space-x-12 md:space-x-12">
                <MotionInView variants={varFadeInLeft}>
                  <div className="lg:w-40 md:w-40 w-20 mb-4 md:mb-0 lg:mb-0">
                    <img
                      src="/assets/images/icecube.png"
                      alt="icecube"
                      className="lg:w-[129px] md:w-[129px] w-[60px]"
                    />
                  </div>
                </MotionInView>
                <MotionInView variants={varFadeInRight}>
                  <div className="static">
                    <p className="text-white text-left text-[16px] lg:text-[26px] md:text-lg leading-1">
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
                <div className="lg:mb-10 md:mb-10 mb-5 md:ml-0 lg:ml-20 text-xl md:text-3xl lg:text-3xl text-themePrimary-500 font-extrabold uppercase  md:mr-0 lg:mr-20 text-right md:text-right lg:text-right">
                  For Holders
                </div>
              </MotionInView>
              <div className="flex lg:flex md:flex space-x-1 lg:space-x-12 md:space-x-12">
                {/* <MotionInView variants={varFadeInRight}>
                  <div className="lg:hidden md:hidden mb-4 lg:mb-0 md:mb-0 inline-block">
                    <img
                      src="/assets/images/icecubes.png"
                      className="lg:w-[129px] md:w-[129px] w-[60px]"
                      alt="icecubes"
                    />
                  </div>
                </MotionInView> */}
                <MotionInView variants={varFadeInLeft}>
                  <div className="static">
                    <p className="text-white text-left text-[16px] lg:text-[26px] md:text-lg leading-1">
                      VAULT3D tokenholders will not only benefit from the rewards
                      and increase of intrinsic token value, but will also enjoy
                      the benefits of extrinsic value—created by both the
                      marketplace itself and the content therein.
                    </p>
                  </div>
                </MotionInView>
                <MotionInView variants={varFadeInUp}>
                  <div className="lg:w-40 md:w-40 w-20 md:inline-block lg:inline-block">
                    <img
                      src="/assets/images/icecubes.png"
                      className="lg:w-[129px] md:w-[129px] w-[70px]"
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