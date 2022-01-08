import React from 'react';
import {
  MotionInView,
  varFadeInLeft,
  varFadeInRight,
  varFadeInDown,
} from '../../animate';
import SectionDark from '../../components/SectionDark';

export default function HowToBuyBlock() {
  return (
    <div id="howtobuy">
      <SectionDark
        id="how-to-buy"
        yPadding="bg-cover py-10 md:py-36 lg:py-36"
      >
        <div className="container mx-auto">
          <div className="text-right md:text-right lg:text-right">
            {/* Desktop */}
            <MotionInView variants={varFadeInDown} className="hidden md:hidden lg:block">
              <div className="text-outline-right relative" title="How To Buy?">
                <h1 className="lg:text-[60px] md:text-[46px] text-[28px] font-bold mb-10 md:mb-20 lg:mb-20 text-transparent bg-clip-text inline-block bg-steel-button bg-cover bg-center relative z-20">
                  How To Buy?
                </h1>
              </div>
            </MotionInView>

            {/* Tablet */}
            <MotionInView variants={varFadeInDown} className="hidden md:block lg:hidden">
              <div className="text-outline-right-tablet relative" title="How To Buy?">
                <h1 className="lg:text-[60px] md:text-[46px] text-[28px] font-bold mb-10 md:mb-20 lg:mb-20 text-transparent bg-clip-text inline-block bg-steel-button bg-cover bg-center relative z-20">
                  How To Buy?
                </h1>
              </div>
            </MotionInView>

            {/* Mobile */}
            <MotionInView variants={varFadeInDown} className="block md:hidden lg:hidden">
              <div className="text-outline-right-mobile relative" title="How To Buy?">
                <h1 className="lg:text-[60px] md:text-[46px] text-[28px] font-bold mb-10 md:mb-20 lg:mb-20 text-transparent bg-clip-text inline-block bg-steel-button bg-cover bg-center relative z-20">
                  How To Buy?
                </h1>
              </div>
            </MotionInView>
          </div>
          <div className="flex items-end justify-items-end">
            <div className="md:w-full lg:w-4/5 text-left">
              <div className="lg:px-6 lg:py-14 md:px-6 md:py-14">
                <div className="flex space-x-8">
                  <MotionInView variants={varFadeInLeft}>
                    <div className="static mx-0 md:flex lg:flex items-center">
                      <img
                        src="/assets/images/wallet-icon.png"
                        width="430"
                        height="310"
                        alt=""
                      />
                    </div>
                  </MotionInView>

                  <div className="static">
                    <MotionInView variants={varFadeInRight}>
                      <p className="text-white text-left lg:text-2xl md:text-lg md:ml-10 lg:ml-10">
                        Connect wallet to PancakeSwap, PinkSale, PooCoin, or your
                        favorite DEX service. You will need to be connected to one
                        of these services in order to exchange your BNB or other
                        currency to $VAULTED.
                      </p>
                    </MotionInView>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-items-end">
            <div className="md:w-full lg:w-4/5 text-left">
              <div className="lg:px-6 lg:py-14 md:px-6 md:py-14 py-8">
                <div className="flex space-x-8">
                  <MotionInView variants={varFadeInLeft}>
                    <div className="static mx-0 md:flex lg:flex items-center">
                      <img
                        src="/assets/images/doc-icon.png"
                        width="430"
                        height="370"
                        alt="ww"
                      />
                    </div>
                  </MotionInView>
                  <div className="static">
                    <MotionInView variants={varFadeInRight}>
                      <p className="text-white text-left lg:text-2xl md:text-lg md:ml-10 lg:ml-10">
                        Add (import) or look up the $VAULTED contract address in
                        your chosen DEX service, and double check to make sure you
                        have the right contract! This page will always show the
                        right contract address.
                      </p>
                    </MotionInView>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-items-end">
            <div className="md:w-full lg:w-4/5 text-left">
              <div className="lg:px-6 lg:py-14 md:px-6 md:py-14 py-4">
                <div className="flex space-x-8">
                  <MotionInView variants={varFadeInLeft}>
                    <div className="static mx-0 md:flex lg:flex items-center">
                      <img
                        src="/assets/images/handshake-icon.png"
                        width="200"
                        height="220"
                        alt=""
                      />
                    </div>
                  </MotionInView>
                  <div className="static">
                    <MotionInView variants={varFadeInRight}>
                      <p className="text-white text-left lg:text-2xl md:text-lg md:ml-10 lg:ml-10">
                        Input the amount you would like to buy, making sure
                        $VAULTED populates into the second box.
                      </p>
                      <p className="text-white text-left lg:text-2xl md:text-lg md:ml-10 lg:ml-10 mt-5">
                        That's it! Just click to swap and you are done. <br />
                        Welcome to VAULT3D!
                      </p>
                    </MotionInView>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionDark>
    </div>
  );
}