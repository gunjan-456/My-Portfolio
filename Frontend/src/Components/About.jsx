import profile from "../assets/profilePic.jpg"

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#0a0a0a] text-white scroll-mt-24">

    
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 
      bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 
      bg-clip-text text-transparent">
        About Me
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

   
        <div className="flex justify-center">
          <div className="relative group w-72 h-80">

         
            <div className="absolute inset-0 rounded-2xl 
            bg-gradient-to-r from-purple-500 to-blue-500 
            blur-2xl opacity-20"></div>

          
            <img
              src={profile}
              alt="profile"
              className="relative w-full h-full object-cover rounded-2xl 
              border border-white/10 shadow-xl 
              hover:scale-105 transition duration-500"
            />

          </div>
        </div>

    
        <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl 
        border border-white/10 shadow-lg 
        hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] 
        transition duration-300">

          <p className="text-gray-300 text-lg leading-relaxed">
            I’m a <span className="text-purple-400 font-semibold">Full Stack Developer </span> 
            specializing in the MERN stack, passionate about building scalable and high-performance web applications.
          </p>

          <p className="mt-4 text-gray-400">
            I enjoy solving real-world problems, writing clean code, and continuously learning new technologies.
          </p>

        
          <div className="mt-6 flex flex-wrap gap-3">
            {["React", "Node.js", "MongoDB", "JavaScript"].map((item, i) => (
              <span
                key={i}
                className="px-4 py-1 text-sm rounded-full 
                bg-gradient-to-r from-purple-500/20 to-pink-500/20 
                border border-white/10 text-gray-300 
                hover:border-pink-400/40 hover:scale-105 
                transition duration-300"
              >
                {item}
              </span>
            ))}
          </div>

        </div>

      </div>

    </section>
  )
}

export default About