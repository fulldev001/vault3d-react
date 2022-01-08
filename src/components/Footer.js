import React from 'react';
import SectionDark from './SectionDark';
import { MotionInView, varFadeInDown, varFadeInUp } from '../animate';
import Logo from './Logo';

const date = new Date().getFullYear();
const navigation = {
  solutions: [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Features', href: '#features' },
    { name: 'The Vault3D', href: '#tokenomics' },
  ],
  support: [
    { name: 'How to buy', href: '#howtobuy' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Our team', href: '#ourteam' },
    { name: 'F.A.Q', href: '#faq' },
    // { name: 'Marketplace', href: '#marketplace' },
    // { name: 'Partners', href: '#partners' },
  ],
  social: [
    {
      name: 'Twitter',
      href: 'https://twitter.com/vault3d',
      icon: () => (
        <img
          src="/assets/images/twitter-steel.png"
          alt="twitter-steel"
          className="w-[35px]"
        />
      ),
    },
    {
      name: 'Telegram',
      href: 'https://t.me/VAULT3D',
      icon: (props) => (
        <div className="p-[3px]">
          <span {...props} className="hidden"></span>
          <img
            src="/assets/images/telegram-steel.png"
            alt="telegram-steel"
            className="w-[35px]"
          />
        </div>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/getvault3d/',
      icon: () => (
        <img
          src="/assets/images/instagram-steel.png"
          alt="instagram-steel"
          className="w-[35px]"
        />
      ),
    },
  ],
};

export default function Footer() {
  return (
    <SectionDark
      id="footer"
      yPadding="mx-auto py-5"
    >
      <footer className="" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <MotionInView variants={varFadeInDown}>
            {/* For desktop */}
            <div className="lg:hidden md:block">
              <div className="md:grid md:grid-cols-3 md:gap-8 lg:hidden">
                <div className="flex justify-between items-center flex-col">
                  <Logo />
                  <a href="/assets/pdf/VAULT3D-Whitepaper.pdf">
                    <button
                      className="text-white text-xl uppercase bottom-button-gradient hover:bg-white hover:bg-opacity-10 border-gray-100 px-7 p-3">
                      White paper
                    </button>
                  </a>
                </div>
                <div className="flex justify-center flex-col gap-8">
                  <ul className="mt-4 space-y-4">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-white text-2xl tracking-wider uppercase hover:text-indigo-600"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center">
                  <ul className="mt-4 space-y-4">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-white text-2xl tracking-wider uppercase hover:text-indigo-600"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex space-x-6 mt-10">
                  {navigation.social.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="font-semibold text-white hover:text-indigo-600"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-9 w-9" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {/* For tablet */}
            <div className="lg:grid lg:grid-cols-4 lg:gap-8 md:hidden">
              <div className="flex justify-start items-start">
                <Logo />
              </div>
              <div className="flex justify-center">
                <ul className="mt-4 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-white text-2xl tracking-wider uppercase hover:text-indigo-600"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <ul className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-white text-2xl tracking-wider uppercase hover:text-indigo-600"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <div>
                  <p className="text-white text-2xl mb-4 pt-4 uppercase">
                    Social Media:
                  </p>
                  <div className="flex space-x-6 mb-7">
                    {navigation.social.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="font-semibold text-white hover:text-indigo-600"
                      >
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-9 w-9" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                  <div className="">
                    <a href="/assets/pdf/VAULT3D-Whitepaper.pdf">
                      <button
                        className="text-white text-xl uppercase bottom-button-gradient hover:bg-white hover:bg-opacity-10 border-gray-100 px-7 p-3">
                        White paper
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </MotionInView>
          <MotionInView variants={varFadeInUp}>
            <div className="mt-12 border-t border-gray-200 pt-8">
              <p className="text-lg text-gray-400 text-center">
                &copy; Copyright {date} VAULT3D.
              </p>
            </div>
          </MotionInView>
        </div>
      </footer>
    </SectionDark>
  );
}