"use client"
import React from 'react'

const myproject = () => {
  return (
   <section id="projects" className="py-20 bg-gray-900 px-6 text-center">
  <h2 className="text-3xl font-semibold mb-10">Featured Projects</h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
    {/* ✅ Project 1 */}
    <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:scale-105 transition">
      <img
        src="/gym.png"
        alt="Portfolio Project 1"
        className="h-65 w-full object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Gym Website</h3>
        <p className="text-gray-400 mb-4">
          A personal portfolio built using React and Tailwind CSS with smooth animations and a responsive layout.
        </p>
        <a
          href="https://github.com/Abhi7520/Portfolio.git" target='_blank'
          className="text-indigo-400 hover:underline font-medium"
        >
          View Project →
        </a>
      </div>
    </div>

    {/* ✅ Project 2 */}
    <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:scale-105 transition">
      <img
        src="/ecommerce.png"
        alt="Project 2"
        className="h-65 w-full object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">E-Commerce UI</h3>
        <p className="text-gray-400 mb-4">
          A modern e-commerce frontend built with Next.js and Tailwind, featuring product cards and filters.
        </p>
        <a
          href="#"
          className="text-indigo-400 hover:underline font-medium"
        >
          View Project →
        </a>
      </div>
    </div>

    {/* ✅ Project 3 */}
    <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:scale-105 transition">
      <img
        src="/weather.png"
        alt="Project 3"
        className="h-65 w-full object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Weather App</h3>
        <p className="text-gray-400 mb-4">
          A live weather dashboard fetching real-time data from an API, built with React and OpenWeather.
        </p>
        <a
          href="#"
          className="text-indigo-400 hover:underline font-medium"
        >
          View Project →
        </a>
      </div>
    </div>
  </div>
</section>

  )
}

export default myproject