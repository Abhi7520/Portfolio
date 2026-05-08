import React from 'react'

const skill = () => {
  return (
    <div>
      {/* 🔹 Skills Section */}
      <section id="skills" className="flex flex-col item-center mt-20 py-20 px-6 text-center text-white bg-black-400 h-screen">
        <h2 className="text-3xl font-semibold mb-10 hover:text-4xl transition-all  duration-600">My Skills</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {["React", "Tailwind", "JavaScript", "Next.js", "Node.js", "Git", "HTML", "CSS"].map(
            (skill) => (
              <div
                key={skill}
                className="p-6 bg-gray-900 rounded-2xl hover:scale-105 transition shadow-md"
              >
                <p className="text-lg font-medium">{skill}</p>
              </div>
            )
          )}
        </div>
      </section></div>
  )
}

export default skill