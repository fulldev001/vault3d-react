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
        yPadding="bg-cover py-10 md:py-36 lg:py-36"
      >
        <div className="container mx-auto">
          <div className="text-center">
            <MotionInView variants={varFadeInDown}>
              <h1 className="md:text-4xl lg:text-[56px] text-transparent bg-clip-text inline-block bg-steel-button bg-cover bg-center">
                Our core team
              </h1>
            </MotionInView>
          </div>
          <div className="md:w-[900px] sm:w-[700px] xs:w-[500px] mx-auto">
            <div className="grid md:grid-cols-2 xs:grid-cols-1 grid-flow-row mt-[86px] gap-y-16">
              <MotionInView variants={varFadeInLeft}>
                <div>
                  <div className="flex justify-center">
                    <img
                      src="/assets/images/core_team_avatar.png"
                      className="w-[300px] h-[300px]"
                      alt="member 1"
                    />
                  </div>

                  <p className="text-3xl text-indigo-600 mt-10 ml-4 text-center font-bold">
                    Reza
                  </p>
                  <p className="text-2xl text-white mb-4 ml-4 text-center">
                    Co-Founder, Design Lead
                  </p>
                </div>
              </MotionInView>
              <MotionInView variants={varFadeInRight}>
                <div>
                  <div className="flex justify-center">
                    <img
                      src="/assets/images/core_team_avatar.png"
                      className="w-[300px] h-[300px]"
                      alt="member 1"
                    />
                  </div>

                  <p className="text-3xl text-indigo-600 mt-10 ml-4 text-center font-bold">
                    Eddie
                  </p>
                  <p className="text-2xl text-white mb-4 ml-4 text-center">
                    Marketing Lead
                  </p>
                </div>
              </MotionInView>
              <MotionInView variants={varFadeInRight}>
                <div>
                  <div className="flex justify-center">
                    <img
                      src="/assets/images/core_team_avatar.png"
                      className="w-[300px] h-[300px]"
                      alt="member 1"
                    />
                  </div>

                  <p className="text-3xl text-indigo-600 mt-10 ml-4 text-center font-bold">
                    Rich
                  </p>
                  <p className="text-2xl text-white mb-4 ml-4 text-center">
                    Co-Founder
                  </p>
                </div>
              </MotionInView>
              <MotionInView variants={varFadeInLeft}>
                <div>
                  <div className="flex justify-center">
                    <img
                      src="/assets/images/core_team_avatar.png"
                      className="w-[300px] h-[300px]"
                      alt="member 1"
                    />
                  </div>

                  <p className="text-3xl text-indigo-600 mt-10 ml-4 text-center font-bold">
                    Michael
                  </p>
                  <p className="text-2xl text-white mb-4 ml-4 text-center">
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