"use client"
import Image from "next/image";
import React, { useEffect, useState } from 'react'
import Link from "next/link";
 import { motion } from "framer-motion";
import Typed from "typed.js";

const page = () => {
  
 useEffect(() => {
    const typed = new Typed(".typed-text", {
      strings: ["Frontend Developer", "React Enthusiast", "UI Designer"],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <div>
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-900 to-black text-white">
 
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-3"
        >
          {/* Hi, I'm <span className="text-indigo-400 hover:text-white  hover:underline transition-all duration-300  ">Abhishek Chauhan</span> */}
          Hi, I'm{" "}
<span className="relative group cursor-pointer text-indigo-400 hover:text-white">
  Abhishek Chauhan
  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-400 transition-all duration-500 group-hover:w-full"></span>
</span>

        </motion.h1>


  
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl text-gray-300 mb-6"
        >
          <span className="typed-text"></span>
        </motion.p>


         {/* Social Links */}
        <div className="flex gap-6 mb-8">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">
            <i className="ri-github-fill text-2xl"></i>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">
            <i className="ri-linkedin-box-fill text-2xl"></i>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">
            <i className="ri-twitter-x-line text-2xl"></i>
          </a>
        </div>


  <div className="flex gap-4">
   <Link href="/about"> <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full transition">View Work</button></Link>
    {/* <button className="px-6 py-3 border border-indigo-400 hover:bg-indigo-400 hover:text-black rounded-full transition">Contact</button>*/}


 
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 border border-indigo-400 hover:bg-indigo-400 hover:text-black rounded-full transition"
          >
            Download Resume
          </a>
  </div>

  
   
</section>



</div>
  )
}

export default page

// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Typed from "typed.js";

// export default function Home() {
//   const [scrolled, setScrolled] = useState(false);

//   // Scroll listener for navbar background
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Typed text effect
//   useEffect(() => {
//     const typed = new Typed(".typed-text", {
//       strings: ["Frontend Developer", "React Enthusiast", "UI Designer"],
//       typeSpeed: 60,
//       backSpeed: 40,
//       loop: true,
//     });
//     return () => typed.destroy();
//   }, []);

//   return (
//     <main className="bg-gray-950 text-white min-h-screen relative overflow-hidden">

//       {/* 🔹 Navbar */}
//       <nav
//         className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//           scrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
//           <h1 className="text-2xl font-bold text-indigo-400">Abhishek</h1>

//           <ul className="hidden md:flex gap-8">
//             <li><a href="#home" className="hover:text-indigo-400 transition">Home</a></li>
//             <li><a href="#about" className="hover:text-indigo-400 transition">About</a></li>
//             <li><a href="#skills" className="hover:text-indigo-400 transition">Skills</a></li>
//             <li><a href="#projects" className="hover:text-indigo-400 transition">Projects</a></li>
//             <li><a href="#contact" className="hover:text-indigo-400 transition">Contact</a></li>
//           </ul>
//         </div>
//       </nav>

//       {/* 🔹 Hero Section */}
//       <section
//         id="home"
//         className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20"
//       >
//         {/* Animated background blobs */}
//         <div className="absolute inset-0 -z-10">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
//           <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
//         </div>

//         {/* Main Heading */}
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-5xl font-bold mb-3"
//         >
//           Hi, I'm <span className="text-indigo-400">Abhishek Chauhan</span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="text-2xl text-gray-300 mb-6"
//         >
//           <span className="typed-text"></span>
//         </motion.p>

//         {/* Social Links */}
//         <div className="flex gap-6 mb-8">
//           <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">
//             <i className="ri-github-fill text-2xl"></i>
//           </a>
//           <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">
//             <i className="ri-linkedin-box-fill text-2xl"></i>
//           </a>
//           <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">
//             <i className="ri-twitter-x-line text-2xl"></i>
//           </a>
//         </div>

//         {/* Buttons */}
//         <div className="flex gap-4">
//           <a
//             href="#projects"
//             className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full transition"
//           >
//             View Work
//           </a>
//           <a
//             href="/resume.pdf"
//             download
//             className="px-6 py-3 border border-indigo-400 hover:bg-indigo-400 hover:text-black rounded-full transition"
//           >
//             Download Resume
//           </a>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-10 flex flex-col items-center">
//           <div className="animate-bounce text-indigo-400 text-sm">Scroll Down</div>
//           <div className="w-1 h-8 bg-indigo-400 rounded-full mt-2 animate-pulse"></div>
//         </div>
//       </section>

//       {/* Placeholder Sections */}
//       <section id="about" className="h-screen flex items-center justify-center bg-gray-900 text-gray-400">
//         About Section
//       </section>
//       <section id="skills" className="h-screen flex items-center justify-center text-gray-400">
//         Skills Section
//       </section>
//       <section id="projects" className="h-screen flex items-center justify-center bg-gray-900 text-gray-400">
//         Projects Section
//       </section>
//       <section id="contact" className="h-screen flex items-center justify-center text-gray-400">
//         Contact Section
//       </section>

//     </main>
//   );
// }
