import profile from "../assets/profilePic.jpg"

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a] text-white scroll-smooth"
    >

     
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0b2e] via-[#0a0a0a] to-[#0b1f3a]"></div>

     
      <div className="absolute w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-20 bottom-10 right-10 animate-pulse"></div>

      <div className="relative z-10 text-center max-w-2xl px-6">

       
        <div className="relative w-36 h-36 mx-auto mb-6">
          <img
            src={profile}
            alt="profile"
            className="w-full h-full object-cover rounded-full border-4 border-purple-500 shadow-lg hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 rounded-full border-4 border-purple-400 animate-ping opacity-20"></div>
        </div>

        
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Gunjan Singh
          </span>
        </h1>

        <p className="mt-3 text-lg text-gray-300">
          Full Stack Developer building scalable and real-time web applications
        </p>

        <p className="mt-4 text-gray-400 max-w-lg mx-auto">
          Building scalable, high-performance web applications with modern UI and clean architecture.
        </p>

       
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          
          <a href="#projects">
            <button className="px-7 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 hover:shadow-xl transition">
              View Projects
            </button>
          </a>

          <a href="/Gunjan_FullStack_Resume.pdf" download>
            <button className="px-7 py-3 rounded-lg border border-purple-400 hover:bg-purple-500/20 transition">
              Download Resume
            </button>
          </a>

        </div>

      </div>
    </section>
  )
}

export default Hero