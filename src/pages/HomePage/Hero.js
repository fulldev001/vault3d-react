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
      <HeroSection yPadding="pt-10 md:pt-20 lg:pt-20 pb-0">
        <div className="flex md:flex-row lg:flex-row mx-10 md:mx-32 lg:mx-32 lg:mt-24">
          <div className="flex flex-col lg:w-3/5 items-stretch pt-0 md:pt-10 lg:pt-10 pb-16 md:pb-32 lg:pb-32">
            <MotionInView variants={varFadeInLeft}>
              <h1 className="font-bold text-transparent bg-clip-text header-gradent mt-5 md:mt-0 mr-0 lg:mt-0 text-2xl md:text-4xl lg:text-[62px]">
                Reimagining NFT management through the raw power <br /> of the blockchain
              </h1>
            </MotionInView>

            {/* <div className="border-t border-l border-white mt-14 inline-block"> */}
            <MotionInView variants={varFadeInUp}>
              <div className="relative">
                <div className="absolute z-20 left-4 top-4">
                  <a href="/assets/pdf/VAULT3D-Whitepaper.pdf" target="_blank">
                    <button className="px-12 py-4 mt-14 text-3xl bg-white bg-steel-button bg-cover bg-center text-black font-bold uppercase focus:shadow-outline hover:bg-indigo-600 hover:text-themePrimaryDark-100">
                      Start Collect
                    </button>
                  </a>
                </div>
                <div className="absolute z-10">
                  <a href="/assets/pdf/VAULT3D-Whitepaper.pdf" target="_blank">
                    <button className="px-12 py-4 mt-14 text-3xl bg-transparent text-transparent font-bold uppercase bottom-button-gradient">
                      Start Collect
                    </button>
                  </a>
                </div>
              </div>

            </MotionInView>
            {/* </div> */}
          </div>
          <div className="w-full lg:w-2/5 text-right hidden md:block lg:block">
            {/* <div className="flex justify-center items-center content-center h-full"> */}
            <MotionInView variants={varFadeInRight}>
              <img
                src="/assets/images/hero-image-mascot.png"
                width="581"
                height="703"
                alt=""
              />
            </MotionInView>
            {/* </div> */}

            {/* 
          <li>
            <Link href="https://t.me/vault3d">
              <a>Telegram</a>
            </Link>
          </li>
          <a href="#swap" target="_blank" rel="noreferrer">
            <li className="px-6 py-2 transition-colors duration-150 bg-transparent border-2 border-themePrimary-400 text-black rounded-full focus:shadow-outline hover:bg-themePrimary-200 hover:text-themePrimaryDark-100">
              BUY NOW
            </li>
          </a>
<h1>SWAP</h1> */}
          </div>
        </div>
      </HeroSection>
    </Background>
  );
}