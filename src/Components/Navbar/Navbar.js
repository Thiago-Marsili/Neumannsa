import React from 'react';
import { Disclosure } from '@headlessui/react';
import './navbar.css'; 

const navigation = [
  { name: 'Empresa', href: './', current: false },
  { name: 'Productos', href: './Catalogo2024.pdf', current: false },
  { name: 'Localizacion', href: './localizacion', current: false },
  { name: 'Contacto', href: './contacto', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-blue-950">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between font-roboto text-white">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 items-center">
                  <a href='./'>
                    <img
                      className="h-9 w-auto"
                      src='/assets/logo_sf.png'
                      alt="Logo Neumann SA"
                    />
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in-out',
                          'rounded-md px-3 py-2 text-sm font-medium',
                          'no-underline'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in-out',
                    'block rounded-md px-3 py-2 text-base font-medium',
                    'no-underline'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
  
}
