import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Icon } from '@iconify/react';
import Logo from './Logo';

const navigation = {
  social: [
    {
      name: 'Twitter',
      href: 'https://twitter.com/vault3d',
      icon: (props) => (
        <div className="text-black text-3xl p-2">
          <Icon icon="akar-icons:twitter-fill" />
        </div>
      ),
    },
    {
      name: 'Telegram',
      href: 'https://t.me/VAULT3D',
      icon: (props) => (
        <div className="text-black text-3xl p-2">
          <Icon icon="file-icons:telegram" />
        </div>
      ),
    },
    // {
    //   name: 'Instagram',
    //   href: 'https://www.instagram.com/getvault3d/',
    //   icon: () => (
    //     <div className="p-[3px] text-black">
    //       <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //         <path
    //           fillRule="evenodd"
    //           d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
    //           clipRule="evenodd"
    //         />
    //       </svg>
    //     </div>
    //   ),
    // },
  ],
  social_mobile: [
    {
      name: 'Twitter',
      href: 'https://twitter.com/vault3d',
      icon: (props) => (
        <div className="text-white text-3xl p-2">
          <Icon icon="akar-icons:twitter-fill" />
        </div>
      ),
    },
    {
      name: 'Telegram',
      href: 'https://t.me/VAULT3D',
      icon: (props) => (
        <div className="text-white text-3xl p-2">
          <Icon icon="file-icons:telegram" />
        </div>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/getvault3d/',
      icon: (props) => (
        <div className="text-white text-3xl p-2">
          <Icon icon="il:instagram" />
        </div>
      ),
    },
  ],
};

const mainnavigation = [
  { name: 'Gallery', href: '#gallery', current: false },
  { name: 'The Vault3D Token', href: '#tokenomics', current: false },
  { name: 'Roadmap', href: '#roadmap', current: false },
  { name: 'How to buy', href: '#howtobuy', current: false },
];
const secondnavigation = [
  { name: 'Features', href: '#features', current: true },
  { name: 'Tokenomics', href: '#tokenomics', current: false },
  { name: 'Roadmap', href: '#roadmap', current: false },
  { name: 'FAQ', href: '#faq', current: false },
  { name: 'Telegram', href: 'https://t.me/vault3d', current: false },
  { name: 'Buy', href: '#how-to-buy', current: false },
];

export default function TopHeader() {
  return (
    <Disclosure as="nav" className="bg-transparent">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-3 lg:px-5 xl:px-15 2xl:px-20">
            <div className="lg:flex md:justify-between lg:justify-between pt-0 sm:pt-0 lg:pt-10">
              <div className="flex justify-between md:justify-items-start lg:justify-items-start">

                <div className="flex-shrink-0 flex items-center">
                  <Logo />
                </div>
                <div className="ml-2 mr-2 flex items-center lg:hidden">
                  <div className="items-center hidden md:flex lg:flex mr-6">
                  <div className="flex-shrink-0 flex">
                    <div className="flex items-center">
                      {navigation.social.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="bg-indigo-600 hover:bg-indigo-800 mr-4 rounded-full p-1 font-semibold inline-block text-white "
                        >
                          <span className="sr-only">{item.name}</span>
                          <item.icon className="h-8 w-8" aria-hidden="true" />
                        </a>
                      ))}
                    </div>

                    <a href="#how-to-buy">
                      <button
                        type="button"
                        className="relative uppercase text-2xl inline-flex items-center px-6 sm:px-4 lg:px-14 py-2 border border-transparent shadow-sm rounded-3xl bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500 text-[#081312] font-bold"
                      >
                        <span>Buy $VAULT</span>
                      </button>
                    </a>
                    {/* <a
                      href="https://t.me/vault3d"
                      target="_blank"
                      rel="noreferrer"
                    ></a> */}
                  </div>
                </div>
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:items-center lg:space-x-4">
                  {mainnavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-transparent bg-clip-text header-gradent hover:bg-indigo-700 hover:text-indigo-700 px-3 py-2 rounded-md uppercase md:text-xl lg:text-2xl xl:text-3xl font-black"
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="items-center hidden lg:flex ">
                <div className="flex-shrink-0 flex">
                  <div className="flex items-center">
                    {navigation.social.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="bg-indigo-600 hover:bg-indigo-800 mr-4 rounded-full p-1 font-semibold inline-block text-white "
                      >
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-8 w-8" aria-hidden="true" />
                      </a>
                    ))}
                  </div>

                  <a href="#how-to-buy">
                    <button
                      type="button"
                      className="relative uppercase text-2xl inline-flex items-center px-6 sm:px-4 lg:px-14 py-2 border border-transparent shadow-sm rounded-3xl bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500 text-[#081312] font-bold"
                    >
                      <span>Buy $VAULT</span>
                    </button>
                  </a>
                  {/* <a
                    href="https://t.me/vault3d"
                    target="_blank"
                    rel="noreferrer"
                  ></a> */}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 h-screen">
              {secondnavigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={
                    item.current
                      ? 'bg-indigo-800 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-2xl font-medium text-center text-white'
                  }
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div class='hidden md:block text-center mx-auto'>
                {navigation.social_mobile.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="rounded-full mt-8 px-2 font-semibold inline-block text-white "
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </a>
                ))}
              </div>
              <div className="items-center md:hidden ">
                <div className="flex-shrink-0 flex">
                  <div className="flex items-center justify-center">
                    {navigation.social.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="bg-indigo-600 hover:bg-indigo-800 mr-4 rounded-full p-1 font-semibold inline-block text-white "
                      >
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-8 w-8" aria-hidden="true" />
                      </a>
                    ))}
                  </div>

                  <a href="#how-to-buy">
                    <button
                      type="button"
                      className="relative uppercase text-2xl inline-flex items-center px-6 sm:px-4 lg:px-14 py-2 border border-transparent shadow-sm rounded-3xl bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500 text-[#081312] font-bold"
                    >
                      <span>Buy $VAULT</span>
                    </button>
                  </a>
                  {/* <a
                    href="https://t.me/vault3d"
                    target="_blank"
                    rel="noreferrer"
                  ></a> */}
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
