const educationData = [
  {
    degree: "B.Tech",
    institute: "NIET",
    year: "2020 - 2024"
  },
  {
    degree: "12th",
    institute: "R B T Vidyalaya",
    year: "2019"
  }
]

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-6 bg-[#0a0a0a] text-white scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto">

     
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-16 
        bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 
        bg-clip-text text-transparent">
          Education
        </h2>

      
        <div className="relative border-l border-white/10 pl-8 space-y-10">

          {educationData.map((item, index) => (
            <div key={index} className="relative group">

           
              <div className="absolute -left-[10px] top-3 w-4 h-4 
              bg-gradient-to-r from-purple-500 to-pink-500 
              rounded-full"></div>

              
              <div
                className="backdrop-blur-md bg-white/10 p-6 rounded-2xl 
                border border-white/10 overflow-hidden
                hover:border-pink-400/30 
                hover:shadow-[0_0_12px_rgba(236,72,153,0.12)] 
                hover:-translate-y-1
                transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-1">
                  {item.degree}
                </h3>

                <p className="text-gray-400">
                  {item.institute}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  {item.year}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Education