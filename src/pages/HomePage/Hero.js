import React from 'react';
import {
  MotionInView,
  varFadeInUp,
  varFadeInLeft,
  varFadeInRight,
} from '../../animate';
import Background from '../../components/Background';
import HeroSection from '../../components/HeroSection';

export default function Hero() {
  return (
    <Background className="flex bg-no-repeat">
      <HeroSection yPadding="pt-10 pt-20 md:pt-20 lg:pt-20 pb-0">
        <div className="flex flex-col md:flex-col lg:flex-row px-8 md:px-8 lg:px-32 lg:mt-24">
          <div className="flex flex-col lg:w-3/5 w-full md:w-full items-stretch pt-10 pb-32 md:pb-32 lg:pb-32">
            <MotionInView variants={varFadeInLeft}>
              <h1 className="font-bold text-transparent bg-clip-text header-gradent mt-5 mr-0 text-[28px] md:text-[46px] lg:text-[62px]">
                Reimagining NFT management through the raw power <br /> of the blockchain
              </h1>
            </MotionInView>

            {/* <div className="border-t border-l border-white mt-14 inline-block"> */}
            <MotionInView variants={varFadeInUp}>
              <div className="relative">
                <div className="absolute z-20 left-2 top-2 md:left-4 md:top-4 lg:left-4 lg:top-4">
                  <a href="/assets/pdf/VAULT3D-Whitepaper.pdf" target="_blank">
                    <button className="px-6 py-2 md:px-12 md:py-4 lg:px-12 lg:py-4 mt-14 text-lg md:text-3xl lg:text-3xl bg-white bg-steel-button bg-cover bg-center text-black font-bold uppercase focus:shadow-outline hover:bg-indigo-600 hover:text-themePrimaryDark-100">
                      Start Collecting
                    </button>
                  </a>
                </div>
                <div className="absolute z-10">
                  <a href="/assets/pdf/VAULT3D-Whitepaper.pdf" target="_blank">
                    <button className="px-6 py-2 md:px-12 md:py-4 lg:px-12 lg:py-4 mt-14 text-lg md:text-3xl lg:text-3xl bg-transparent text-transparent font-bold uppercase bottom-button-gradient">
                      Start Collecting
                    </button>
                  </a>
                </div>
              </div>

            </MotionInView>
            {/* </div> */}
          </div>
          <div className="w-full lg:w-2/5 text-right flex justify-end lg:block lg:mt-0 md:mt-0 mt-20">
            {/* <div className="flex justify-center items-center content-center h-full"> */}
            <MotionInView variants={varFadeInRight}>
              <img
                src="/assets/images/hero-image-mascot.png"
                width="581"
                height="703"
                alt=""
                className="lg:w-[581px] lg:h-[703px] md:w-[350px] w-[150px]"
              />
            </MotionInView>
          </div>
        </div>
      </HeroSection>
    </Background>
  );
}