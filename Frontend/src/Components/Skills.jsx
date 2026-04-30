import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit } from "react-icons/fa"
import { SiRedux, SiTailwindcss, SiMongodb, SiPostman, SiExpress, SiMysql } from "react-icons/si"

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400 text-3xl" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-400 text-3xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-3xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300 text-3xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-3xl" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-400 text-3xl" /> },
  { name: "Git", icon: <FaGit className="text-orange-400 text-3xl" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500 text-3xl" /> },
]

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0a0a0a] text-white">

      <div className="max-w-6xl mx-auto text-center">

       
        <h2 className="text-3xl md:text-4xl font-bold mb-14 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-xl bg-white/5 p-6 rounded-2xl border border-white/10 
              hover:scale-105 hover:border-pink-400/40 
              hover:shadow-[0_0_25px_rgba(236,72,153,0.3)] 
              transition-all duration-300 cursor-pointer"
            >
              
             
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
              bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 blur-xl transition duration-300"></div>

              <div className="relative flex flex-col items-center gap-3">
                {skill.icon}
                <p className="text-gray-200 font-medium tracking-wide group-hover:text-white transition">
                  {skill.name}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Skills