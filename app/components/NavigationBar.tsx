"use client"

import Image from 'next/image';
import { Signingbutton } from './SigningButton';
import Link from 'next/link';
import { useState } from 'react';


interface NavbarProps {
  logo: string;
  companyName: string;
  navItems: string[];
}

function NavigationBar ({ logo, companyName, navItems }: NavbarProps){

  const [menuOpen, setmenuOpen] = useState(false)

  function toggleMenu(){
    setmenuOpen(!menuOpen)
  }

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-gray-50 static">
      <div className="flex items-center">
        <Image src={logo} alt={companyName} width={100} height={100} />

        <Link href={"/"}>
          <h1 className="ml-2 text-xl font-medium font-mono text-black">{companyName}</h1>
        </Link>
      </div>

      <ul className="hidden lg:flex space-x-8 items-center">
        <Link href="/" className="text-gray-700 hover:text-gray-900 text-lg font-medium">Home</Link>
        {navItems.map((navItem) => (
          <li key={navItem} >
            <Link href={`/${navItem.toLowerCase()}`} className="text-gray-700 hover:text-gray-900 text-lg font-medium">
              {navItem}
            </Link>
          </li>
        ))}
        <Signingbutton OnClick={() => alert("coming soon")} />
      </ul>

      <div className="lg:hidden flex flex-cols">
        <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      <div hidden={!menuOpen} className='absolute top-0 bottom-0 w-full h-full' onClick={toggleMenu}>
        <div className='bg-white right-0 w-full'>
          {navItems.map((navItem) => (
            <li key={navItem} >
              <Link href={`/${navItem.toLowerCase()}`} className="text-gray-700 hover:text-gray-900 text-lg font-medium">
                {navItem}
              </Link>
            </li>
          ))}
        </div>
      </div>

    </nav>
  );
}


export default NavigationBar