import swiggy from "../assets/SwiggyProfile.png"
import insta from "../assets/InstaProfile.png"
import job from "../assets/jobProfile.png"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"

const projects = [
  {
    title: "Swiggy Clone",
    desc: "Responsive food ordering UI with real-time API integration and state management.",
    image: swiggy,
    tech: ["React", "Redux", "Tailwind"],
    live: "https://swiggy-c6dq0a8eb-gunjan-singhs-projects.vercel.app/",
    github: "https://github.com/gunjan-456/swiggy",
    features: [
      "Integrated real-time restaurant API",
      "Managed global state using Redux",
      "Optimized UI for fast loading",
      "Built reusable components"
    ]
  },
  {
    title: "Social Media App",
    desc: "Full-stack MERN app with authentication and real-time features.",
    image: insta,
    tech: ["MERN", "JWT"],
    live: "https://social-media-fe-peach.vercel.app/",
    github: "https://github.com/gunjan-456/Social_Media_BE",
    features: [
      "Implemented JWT authentication",
      "Built real-time features (posts/updates)",
      "Designed REST APIs with Node & Express",
      "Handled user sessions securely"
    ]
  },
  {
    title: "Job Portal",
    desc: "Role-based job portal with filtering, authentication and APIs.",
    image: job,
    tech: ["MERN", "JWT"],
    live: "https://job-portal-fe.vercel.app/",
    github: "https://github.com/gunjan-456/job-Portal-BE",
    features: [
      "Role-based authentication system",
      "Implemented job filtering & search",
      "Developed backend APIs",
      "Connected frontend with MongoDB"
    ]
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0a0a0a] text-white">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-14 
        bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 
        bg-clip-text text-transparent">
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden 
              border border-white/10 bg-white/5 backdrop-blur-xl 
              hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] 
              transition duration-300"
            >

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover 
                  transition duration-500 
                  group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/0 
                group-hover:bg-black/50 transition duration-300"></div>

                <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition duration-500 
                bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl"></div>
              </div>

            
              <div className="p-5 text-left">

                <h3 className="text-lg font-semibold mb-2 
                group-hover:text-pink-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {project.desc}
                </p>

             
                <ul className="mt-3 space-y-1 text-gray-300 text-xs mb-4">
                  {project.features.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>

                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full 
                      bg-gradient-to-r from-purple-500/20 to-pink-500/20 
                      border border-white/10 text-gray-300 
                      group-hover:border-pink-400/40 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

           
                <div className="flex gap-3">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-sm px-4 py-2 rounded-lg 
                    bg-gradient-to-r from-purple-500 to-blue-500 
                    hover:scale-105 transition"
                  >
                    <FiExternalLink /> Live
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-sm px-4 py-2 rounded-lg 
                    border border-white/20 hover:bg-white/10 transition"
                  >
                    <FaGithub /> GitHub
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Projects