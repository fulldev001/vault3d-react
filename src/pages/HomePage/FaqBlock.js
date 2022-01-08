import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import {
  MotionInView,
  varFadeInDown,
  varFadeInUp,
  varFadeInLeft,
} from '../../animate';
import SectionDark from '../../components/SectionDark';

const faqs = [
  {
    question: 'When is the launch?',
    answer:
      "We are working hard to bring you the VAULT3D token as soon as possible. While we want to launch the token right away, we're also aware that we need to launch with a substantial backing. We will announce the launch date in the next few days on our Telegram group, so keep an eye on that!",
  },
  {
    question: 'What is the total supply?',
    answer:
      '1 billion tokens. Please be sure to review our tokenomics section above as well.',
  },
  {
    question: 'What is the target starting price?',
    answer: '~$500-$550k MC',
  },
  {
    question: 'How can I invest?',
    answer:
      'We are curerntly planning our fairlaunch. The date will be announced in our Telegram group soon. Once the token has been deployed and liquidity has been added, you may buy the token on PancakeSwap, PooCoin, and/or Dextools',
  }
];

export default function FaqBlock() {
  return (
    <div id="faq">
      <SectionDark
        id="faq"
        yPadding="flex pt-20 pb-20 bg-cover md:pb-36 lg:pb-36 md:pt-18 lg:pt-36"
      >
        <div className="mx-auto container">
          <div className="text-left mb-10 md:mb-20 lg:mb-20">
            <MotionInView variants={varFadeInDown}>
              <h1 className="lg:text-[60px] md:text-[46px] text-[28px] font-bold text-transparent bg-clip-text inline-block bg-steel-button bg-cover bg-center">
                F.A.Q
              </h1>
            </MotionInView>
          </div>
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <dl className="lg:max-w-3xl md:w-full lg:mx-4 md:mx-0">
              {faqs.map((faq) => (
                <MotionInView variants={varFadeInLeft} key={faq.question}>
                  <Disclosure as="div" className="pt-6">
                    {({ open }) => (
                      <>
                        <dt className="text-lg">
                          <Disclosure.Button className="text-left w-full flex justify-start items-center text-gray-400 mb-4">
                            {open ? (
                              <img
                                src="/assets/images/minus.png"
                                alt="minus"
                                className="lg:w-[30px] md:w-[30px] w-[20px]"
                              />
                            ) : (
                              <img
                                src="/assets/images/plus.png"
                                alt="plus"
                                className="lg:w-[30px] md:w-[30px] w-[20px]"
                              />
                            )}

                            <h2 className="font-bold lg:text-3xl md:text-3xl text-xl text-transparent bg-clip-text inline-block bg-steel-button bg-cover bg-center ml-4">
                              {faq.question}
                            </h2>
                          </Disclosure.Button>
                        </dt>
                        <Transition
                          enter="transition duration-100 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                        >
                          <Disclosure.Panel
                            as="dd"
                            className="lg:ml-12 md:ml-12 ml-0 mt-2 pr-12 pb-10"
                          >
                            <p className="lg:text-2xl md:text-2xl text-md text-indigo-500">
                              {faq.answer}
                            </p>
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                </MotionInView>
              ))}
            </dl>
          </div>
        </div>
      </SectionDark>
    </div>
  );
}