import React from 'react';
import {
  MotionInView,
  varFadeInLeft,
  varFadeInRight,
  varFadeInDown,
} from '../../animate';
import SectionDark from '../../components/SectionDark';

export default function OurCoreTeamBlock() {
  return (
    <div id="ourteam">
      <SectionDark
        id="how-to-buy"
        yPadding="bg-cover py-10 md:py-18 lg:py-36"
      >
        <div className="container mx-auto">
          <div className="text-center">
            <MotionInView variants={varFadeInDown}>
              <h1 className="md:text-[46px] lg:text-[60px] font-bold text-transparent bg-clip-text inline-block bg-steel-button bg-cover bg-center">
                Our core team
              </h1>
            </MotionInView>
          </div>
          <div className="container">
            <div className="grid md:grid-cols-2 xs:grid-cols-1 grid-flow-row mt-[86px] lg:gap-y-32 md:gap-y-16">
              <MotionInView variants={varFadeInLeft}>
                <div className="w-full">
                  <div className="flex justify-center">
                    <img
                      src="/assets/images/core_team_avatar.png"
                      className="w-2/3"
                      alt="member 1"
                    />
                  </div>

                  <p className="lg:text-4xl md:text-3xl text-indigo-600 mt-10 ml-4 text-center font-bold">
                    Reza
                  </p>
                  <p className="lg:text-3xl md:text-xl text-white mb-4 ml-4 text-center">
                    Co-Founder, Design Lead
                  </p>
                </div>
              </MotionInView>
              <MotionInView variants={varFadeInRight}>
                <div className="w-full">
                  <div className="flex justify-center">
                    <img
                      src="/assets/images/core_team_avatar.png"
                      className="w-2/3"
                      alt="member 1"
                    />
                  </div>

                  <p className="lg:text-4xl md:text-3xl text-indigo-600 mt-10 ml-4 text-center font-bold">
                    Eddie
                  </p>
                  <p className="lg:text-3xl md:text-xl text-white mb-4 ml-4 text-center">
                    Marketing Lead
                  </p>
                </div>
              </MotionInView>
              <MotionInView variants={varFadeInRight}>
                <div className="w-full">
                  <div className="flex justify-center">
                    <img
                      src="/assets/images/core_team_avatar.png"
                      className="w-2/3"
                      alt="member 1"
                    />
                  </div>

                  <p className="lg:text-4xl md:text-3xl text-indigo-600 mt-10 ml-4 text-center font-bold">
                    Rich
                  </p>
                  <p className="lg:text-3xl md:text-xl text-white mb-4 ml-4 text-center">
                    Co-Founder
                  </p>
                </div>
              </MotionInView>
              <MotionInView variants={varFadeInLeft}>
                <div className="w-full">
                  <div className="flex justify-center">
                    <img
                      src="/assets/images/core_team_avatar.png"
                      className="w-2/3"
                      alt="member 1"
                    />
                  </div>

                  <p className="lg:text-4xl md:text-3xl text-indigo-600 mt-10 ml-4 text-center font-bold">
                    Michael
                  </p>
                  <p className="lg:text-3xl md:text-xl text-white mb-4 ml-4 text-center">
                    Senior Developer
                  </p>
                </div>
              </MotionInView>
            </div>
          </div>
        </div>
      </SectionDark>
    </div>
  );
}