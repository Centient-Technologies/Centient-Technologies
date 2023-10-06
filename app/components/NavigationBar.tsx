"use client"

import Image from 'next/image';
import router from 'next/router';


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
        <h1 className="ml-2 text-xl font-medium font-mono text-black">{companyName}</h1>
      </div>

      <ul className="flex space-x-4">
        {navItems.map((navItem) => (
          <li key={navItem}>
            <a
              href={navItem == "Home" ? "/" : `/${navItem.toLowerCase()}`}
              className="text-gray-700 hover:text-gray-900"
              onClick={() => router.push(navItem)}
            >
              {navItem}
            </a>
          </li>
        ))}
      </ul>
    </nav>

  );
}


export default NavigationBar