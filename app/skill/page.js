// import React from 'react'

// const skill = () => {
//   return (
//     <div>
//       {/* 🔹 Skills Section */}
//       <section id="skills" className="flex flex-col item-center mt-20 py-20 px-6 text-center text-white bg-black-400 h-screen">
//         <h2 className="text-3xl font-semibold mb-10 hover:text-4xl transition-all  duration-600">My Skills</h2>
//         <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
//           {["React", "Tailwind", "JavaScript", "Next.js", "Node.js", "Git", "HTML", "CSS" ," Github" ,"Express.js","Node.js","Next.js "].map(
//             (skill) => (
//               <div
//                 key={skill}
//                 className="p-6 bg-gray-900 rounded-2xl hover:scale-105 transition shadow-md"
//               >
//                 <p className="text-lg font-medium">{skill}</p>
//               </div>
//             )
//           )}
//         </div>
//       </section></div>
//   )
// }

// export default skill



import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <FaReact size={45} />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss size={45} />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={45} />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={45} />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={45} />,
  },
  {
    name: "Express.js",
    icon: <SiExpress size={45} />,
  },
  {
    name: "Git",
    icon: <FaGitAlt size={45} />,
  },
  {
    name: "Github",
    icon: <FaGithub size={45} />,
  },
  {
    name: "HTML",
    icon: <FaHtml5 size={45} />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt size={45} />,
  },
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <div className="text-center mb-16">
          <p className="text-blue-500 uppercase tracking-widest font-semibold">
            My Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Technologies I Work With
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            I build modern, scalable, and responsive web applications using
            powerful frontend and backend technologies.
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col items-center justify-center hover:border-blue-500 hover:-translate-y-2 transition duration-300"
            >
              <div className="text-blue-500 mb-4">
                {skill.icon}
              </div>

              <h3 className="text-lg font-semibold">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;