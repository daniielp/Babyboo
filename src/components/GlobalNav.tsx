'use client';
import { Fragment } from 'react';
import { Popover, Transition, Menu } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Logo from './Logo';
import UserIcon from 'src/icons/UserIcon';
import Search from './Search';
import { classNames } from 'src/utils/classNames'
import LanguagePicker from './LanguagePicker';
import StatusBar from './StatusBar';

const links = [
  {
    name: 'Serier',
    href: '#',
  },
  {
    name: 'Vugge',
    href: '#',
  },
  {
    name: 'Børnesenge',
    href: '#',
  },
  {
    name: 'Opbevaring',
    href: '#',
  },
  {
    name: 'Højstol',
    href: '#',
  },
  {
    name: 'Pusle',
    href: '#',
  },
  {
    name: 'Tekstiler',
    href: '#',
  },
  {
    name: 'Tilbehør',
    href: '#',
  },
  {
    name: 'Reservedele',
    href: '#',
  },
];

const user = {
  name: 'Babybob',
  email: 'kontakt@babybob.com',
}

const userNavigation = [
  { name: 'Din profil', href: '#' },
  { name: 'Indstillinger', href: '#' },
  { name: 'Log ud', href: '#' },
]


export default function GlobalNav() {
  return (
    <>
      <StatusBar />
      <Popover className="relative bg-white">
        <Popover className="relative bg-babyboo-darkbrown">
          <div className="flex items-center justify-between px-4 py-6 sm:px-6 xl:justify-start md:space-x-10 xl:container">
            <div>
              <a href="/" className="flex items-center justify-center">
                <span className="sr-only">Ønskelisten.dk</span>
                <Logo className="h-11 w-auto sm:h-11 fill-white" />
              </a>
            </div>
            <div className="-my-2 -mr-2 xl:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md  p-2 text-white  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="hidden xl:flex md:flex-1 md:items-center md:justify-between">
              <div className='flex'>
                <nav className='flex justify-between items-end'>
                  {links.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="items-center rounded-lg text-sm font-bold px-2 text-white hover:text-gray-300"
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
                <Search />
              </div>
              <div className="flex items-center justify-between md:ml-12">
                <Menu as="div" className="relative ml-3">
                  <Menu.Button className="relative w-full flex items-center cursor-default rounded-md border text-white border-none py-2 pl-3 pr-5 text-left focus:border-white focus:outline-none focus:ring-1 focus:ring-white sm:text-sm">
                    <span className="sr-only">Open user menu</span>
                    <UserIcon />
                    {/* <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" /> */}
                    <p className='pl-2 text-white font-bold'>{user.name}</p>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
                <LanguagePicker />
              </div>
            </div>
          </div>
          {/* Mobile menu */}
          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition xl:hidden"
            >
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Logo className='h-11 w-auto sm:h-11 fill-babyboo-darkbrown' />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-6 border-b border-gray-200 pt-4 pb-3">
                      {links.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-lg p-3 px-0 hover:bg-white"
                        >
                          <div className="ml-4 text-base font-medium text-babyboo-darkbrown">
                            {item.name}
                          </div>
                        </a>
                      ))}
                    </nav>
                    <a href="#" className="flex items-center px-4 py-4">
                      <div className="flex-shrink-0">
                        <UserIcon className='fill-babyboo-darkbrown stroke-babyboo-darkbrown h-10' />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium text-gray-800">{user.name}</div>
                        <div className="text-sm font-medium text-gray-500">{user.email}</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </Popover>
    </>
  );
}