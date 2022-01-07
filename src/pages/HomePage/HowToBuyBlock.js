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
          <div className="text-center md:text-right lg:text-right">
            <MotionInView variants={varFadeInDown}>
              <h1 className="text-5xl mb-10 md:mb-20 lg:mb-20 text-transparent bg-clip-text inline-block bg-steel-button bg-cover bg-center">
                How To Buy
              </h1>
            </MotionInView>
          </div>
          <div className="flex items-end justify-items-end">
            <div className="md:w-3/5 lg:w-3/5 text-left">
              <div className="px-6 py-14">
                <div className="md:flex lg:flex md:space-x-8 lg:space-x-8">
                  <MotionInView variants={varFadeInLeft}>
                    <div className="static mx-20 md:mx-0 lg:mx-0 md:flex lg:flex items-center">
                      <img
                        src="/assets/images/wallet-icon.png"
                        width="330"
                        height="310"
                        alt=""
                      />
                    </div>
                  </MotionInView>

                  <div className="static mt-10 md:mt-0 lg:mt-0">
                    <MotionInView variants={varFadeInRight}>
                      <p className="text-white text-left text-2xl md:ml-10 lg:ml-10">
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
            <div className="md:w-3/5 lg:w-3/5 text-left">
              <div className="px-6 py-14">
                <div className="md:flex lg:flex md:space-x-8 lg:space-x-8">
                  <MotionInView variants={varFadeInLeft}>
                    <div className="static mx-20 md:mx-0 lg:mx-0 md:flex lg:flex items-center">
                      <img
                        src="/assets/images/doc-icon.png"
                        width="330"
                        height="370"
                        alt="ww"
                      />
                    </div>
                  </MotionInView>
                  <div className="static mt-10 md:mt-0 lg:mt-0">
                    <MotionInView variants={varFadeInRight}>
                      <p className="text-white text-left text-2xl md:ml-10 lg:ml-10">
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
            <div className="md:w-3/5 lg:w-3/5 text-left">
              <div className="px-6 py-14">
                <div className="md:flex lg:flex md:space-x-8 lg:space-x-8">
                  <MotionInView variants={varFadeInLeft}>
                    <div className="static mx-20 md:mx-0 lg:mx-0 md:flex lg:flex items-center">
                      <img
                        src="/assets/images/handshake-icon.png"
                        width="251"
                        height="220"
                        alt=""
                      />
                    </div>
                  </MotionInView>
                  <div className="static mt-10 md:mt-0 lg:mt-0">
                    <MotionInView variants={varFadeInRight}>
                      <p className="text-white text-left text-2xl md:ml-10 lg:ml-10">
                        Input the amount you would like to buy, making sure
                        $VAULTED populates into the second box. Just click to swap
                        and you are done. Welcome to VAULT3D!
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