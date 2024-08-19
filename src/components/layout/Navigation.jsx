import { useState } from "react"
import { Link } from "react-router-dom"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"


const links = [
  { name: 'Home', href: '/' },
  { name: 'Plants list', href: '/plants-list' },
  { name: 'Dashboard', href: '/dashboard' },
]


export default function Navigation () {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`w-full h-max md:h-header-min mx-auto px-6 py-4 md:py-0 lg:px-8 bg-gray-800 flex justify-center items-center shadow-xl`}>
      {/* Desktop/ Tablet */}
      <div className="hidden md:block h-fit mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <ul className="grid grid-cols-1 gap-x-8 gap-y-6 font-semibold leading-7 sm:grid-cols-2 md:flex lg:gap-x-10">
          {links.map((link) => (
            <li key={link.name} className="text-white hover:text-green-200 text-xl ">
              <Link to={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile */}  
      <div className="flex flex-col items-end md:hidden h-fit mx-auto w-full lg:mx-0 lg:max-w-none">
        <div className="px-3 py-2 border rounded max-w-max text-gray-300 hover:text-white hover:bg-gray-700 cursor-pointer"> 
        {isOpen ? (
             <XMarkIcon aria-hidden="true" className="h-6 w-6" onClick={() => setIsOpen(false)}/>
          ) : (
            <Bars3Icon aria-hidden="true" className="h-6 w-6" onClick={() => setIsOpen(true)} />
          )}
        </div>
        <ul className={`self-start font-semibold leading-7 ${isOpen ? 'block' : 'hidden'}`}>
          {links.map((link) => (
            <li key={link.name} className="text-white hover:text-green-200 text-xl ">
              <Link to={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div> 
    </div>
  );
}