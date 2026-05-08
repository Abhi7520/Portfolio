
import react from "react";
import Link from "next/link";
import {
  Code2, BriefcaseBusiness,
  Database,
  Rocket,
  BarChart3,download
} from "lucide-react";

export default function About() {
  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto">
        {/* HERO */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT  Section*/}
          <div>
            <p className="text-blue-500 font-semibold mb-4 tracking-widest uppercase">
              About Me
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              🚀 The Intersection of {" "}
              <span className="text-blue-500">Code</span> and{" "}
              <span className="text-blue-500">Strategy</span>
            </h1>

            <p className="text-gray-400 text-lg mt-8 leading-8">
              I’m <span className="text-white font-semibold">Abhishek Chauhan</span>,
              a passionate Full Stack Developer focused on building scalable,
              modern, and user-centric web applications using the MERN Stack
              and Next.js.
            </p>

            <p className="text-gray-400 text-lg mt-6 leading-8">
              My mission is simple — combine clean code, strategic thinking,
              and impactful design to create digital products that deliver
              real-world value.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              {/* Explore button */}
              <button className="bg-blue-600 hover:bg-blue-700 transition px-7 py-3 rounded-xl font-semibold">
                Explore Projects
              </button>

{/* Resume button */}
<a href="/resume.pdf" download>
              <button className=" flex  gap-2 border border-gray-700 hover:border-blue-500 transition px-7 py-3 rounded-xl font-semibold">
               Resume 
               <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download-icon lucide-download"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg>
              </button>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800 hover:border-blue-500 transition">
              <Code2 className="text-blue-500 mb-4" size={40} />
              <h3 className="font-bold text-xl mb-3">Frontend Mastery</h3>
              <p className="text-gray-400 leading-7">
                Building responsive and interactive interfaces using React.js
                and Next.js.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800 hover:border-blue-500 transition">
              <Database className="text-blue-500 mb-4" size={40} />
              <h3 className="font-bold text-xl mb-3">Backend Engineering</h3>
              <p className="text-gray-400 leading-7">
                Developing scalable APIs and server-side systems with Node.js
                and Express.js.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800 hover:border-blue-500 transition">
              <BriefcaseBusiness
                className="text-blue-500 mb-4"
                size={40}
              />
              <h3 className="font-bold text-xl mb-3">Business Strategy</h3>
              <p className="text-gray-400 leading-7">
                Pursuing an MBA to bridge the gap between technology and
                business impact.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800 hover:border-blue-500 transition">
              <BarChart3 className="text-blue-500 mb-4" size={40} />
              <h3 className="font-bold text-xl mb-3">Data Driven</h3>
              <p className="text-gray-400 leading-7">
                Using analytics and Excel-based insights to make smarter
                development decisions.
              </p>
            </div>
          </div>
        </div>

        {/* JOURNEY */}
        <div className="mt-28">
          <div className="text-center mb-16">
            <p className="text-blue-500 uppercase tracking-widest font-semibold">
              My Journey
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              The Developer’s Journey
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">
                From Curiosity to Commitment
              </h3>

              <p className="text-gray-400 leading-8">
                My journey into web development started just over a year ago.
                What began as curiosity quickly transformed into a deep passion
                for building modern digital experiences.
              </p>

              <p className="text-gray-400 leading-8 mt-5">
                Today, I specialize in the MERN stack and Next.js, focusing on
                creating scalable applications with seamless user experiences
                and clean architecture.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">
                Strategic Thinking
              </h3>

              <p className="text-gray-400 leading-8">
                Alongside development, I’m currently pursuing my MBA to better
                understand business operations, scalability, and product
                strategy.
              </p>

              <p className="text-gray-400 leading-8 mt-5">
                I believe the best developers are not just coders — they are
                problem solvers who understand users, markets, and business
                goals.
              </p>
            </div>
          </div>
        </div>

        {/* FUTURE */}
        <div className="mt-28">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-3xl p-10 md:p-16 text-center">
            <Rocket size={60} className="mx-auto text-blue-500 mb-6" />

  
             <h2 className="text-4xl md:text-5xl font-bold">
              Looking Forward
            </h2>
 

            <p className="max-w-4xl mx-auto text-gray-300 leading-8 mt-8 text-lg">
              As a motivated fresher, I am actively seeking opportunities where
              I can contribute my full-stack development skills while bringing
              strategic business thinking into every project.
            </p>

            <p className="max-w-4xl mx-auto text-gray-400 leading-8 mt-6 text-lg">
              I’m more than a programmer — I’m a builder focused on creating
              digital products that are powerful, efficient, scalable, and
              meaningful.
            </p>
    <Link href="/myproject">
            <button className="mt-10 bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold text-lg">
              Let’s Explore
            </button>
              </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

























