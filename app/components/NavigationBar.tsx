"use client"

import Image from 'next/image';
import { Signingbutton } from './SigningButton';
import Link from 'next/link';


interface NavbarProps {
  logo: string;
  companyName: string;
  navItems: string[];
}


const NavigationBar = ({ logo, companyName, navItems }: NavbarProps) => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-gray-50 ">
      <div className="flex items-center">
        <Image src={logo} alt={companyName} width={100} height={100} />

        <Link href={"/"}>
          <h1 className="ml-2 text-xl font-medium font-mono text-black">{companyName}</h1>
        </Link>
      </div>

      <ul className="flex space-x-8">
        {navItems.map((navItem) => (
          <li key={navItem} >
            <Link href={ `/${navItem.toLowerCase()}`} className="text-gray-700 hover:text-gray-900 text-lg font-medium">
              {navItem}
            </Link>
          </li>
        ))}
        <Signingbutton OnClick={() => alert("coming soon")} />
      </ul>

    </nav>

  );
}


export default NavigationBar