    "use client"
    import React from 'react'
    import { useEffect } from 'react'
    import { usePathname } from 'next/navigation'
    import Link from 'next/link'

    // import About from '@/app/about/About'
    const Navbar = () => {

      const Pathname = usePathname()

   
      return (
 
// border-gray-200
<nav className="  bg-white dark:bg-gray-900  sticky top-0 z-50 ">
  <div className="  max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link href="/" className=" flex items-center space-x-3 rtl:space-x-reverse">
        <img   src="https://flowbite.com/docs/images/logo.svg" className="h-8 transition-transform duration-1000  hover:rotate-360 "   alt="Port-folio" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Port-folio</span>
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  border border-gray-500 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700  ">
        <li>
          <Link href="/" className={`${Pathname === "/" ? "text-yellow-400 font-bold text-xl underline decoration-1 transition-all duration-600 p-5  ": "text-gray-900" }  block py-2 px-3   rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500`} aria-current="page">Home</Link>
        </li>
        <li>
          <Link href="/about" className= {`${Pathname === "/about" ? "transition-all duration-600 text-yellow-400 font-bold text-lg  underline decoration-1 p-5 ": " text-gray-900 "}    block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>About</Link>
        </li>
        <li>
          <Link href="/myproject" className={`${Pathname === "/myproject" ? " transition-all duration-600 text-green-400 font-bold text-lg underline decoration-1 p-5": "text-gray-900"}  block py-2 px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>My-projects</Link>
        </li>
        <li>
          <Link href="/skill" className={`${Pathname === "/skill" ? " transition-all duration-600 text-red-400 font-bold text-lg underline decoration-1 p-5 ": "text-gray-900"} block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Skills</Link>
        </li>
        {/* <li>
          <Link href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
        </li> */}
      </ul>
    </div>
  </div>
</nav>

      )
    }
    
    export default Navbar

// "use client"
// import { useState, } from "react";
// import { useEffect} from "react";
// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-6xl mx-auto flex justify-between items-center p-4 text-white">
//         <h1 className="text-2xl font-bold">Abhishek</h1>
//         <ul className="flex gap-6">
//           <li><a href="#home" className="hover:text-indigo-400">Home</a></li>
//           <li><a href="#about" className="hover:text-indigo-400">About</a></li>
//           <li><a href="#projects" className="hover:text-indigo-400">Projects</a></li>
//           <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }
