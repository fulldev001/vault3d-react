import React from 'react';
import { MotionInView, varFadeInDown, varFadeInUp } from '../../animate';
import SectionDark from '../../components/SectionDark';

export default function AmbassadorsBlock() {
  return (
    <div id="howtobuy">
      <SectionDark
        id="how-to-buy"
        yPadding="bg-cover py-10 md:py-36 lg:py-36"
      >
        <div className="container mx-auto">
          <div className="text-center">
            <MotionInView variants={varFadeInDown}>
              <h1 className="md:text-4xl lg:text-[36px] text-transparent bg-clip-text inline-block bg-steel-button bg-cover bg-center">
                Ambassadors
              </h1>
            </MotionInView>
          </div>
          <div>
            <MotionInView variants={varFadeInUp}>
              <div className="grid md:grid-cols-3 xs:grid-cols-1 grid-flow-row mt-[86px] gap-y-16">
                <div className="flex justify-center items-center">
                  <img
                    src="/assets/images/ambassador_avatar.png"
                    className="w-[100px] h-[100px]"
                    alt="member 1"
                  />
                  <div className="ml-8">
                    <p className="text-3xl text-indigo-600 font-bold">Rich</p>
                    <p className="text-2xl text-white">Co-Founder</p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src="/assets/images/ambassador_avatar.png"
                    className="w-[100px] h-[100px]"
                    alt="member 1"
                  />
                  <div className="ml-8">
                    <p className="text-3xl text-indigo-600 font-bold">Rich</p>
                    <p className="text-2xl text-white">Co-Founder</p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src="/assets/images/ambassador_avatar.png"
                    className="w-[100px] h-[100px]"
                    alt="member 1"
                  />
                  <div className="ml-8">
                    <p className="text-3xl text-indigo-600 font-bold">Rich</p>
                    <p className="text-2xl text-white">Co-Founder</p>
                  </div>
                </div>
              </div>
            </MotionInView>
            <MotionInView variants={varFadeInDown}>
              <div className="grid md:grid-cols-2 xs:grid-cols-1 grid-flow-row mt-[86px] gap-y-16">
                <div className="flex justify-center items-center">
                  <img
                    src="/assets/images/ambassador_avatar.png"
                    className="w-[100px] h-[100px] md:ml-64"
                    alt="member 1"
                  />
                  <div className="ml-8">
                    <p className="text-3xl text-indigo-600 font-bold">Rich</p>
                    <p className="text-2xl text-white">Co-Founder</p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src="/assets/images/ambassador_avatar.png"
                    className="w-[100px] h-[100px]"
                    alt="member 1"
                  />
                  <div className="ml-8  md:mr-48">
                    <p className="text-3xl text-indigo-600 font-bold">Rich</p>
                    <p className="text-2xl text-white">Co-Founder</p>
                  </div>
                </div>
              </div>
            </MotionInView>
          </div>
        </div>
      </SectionDark>
    </div>
  );
}