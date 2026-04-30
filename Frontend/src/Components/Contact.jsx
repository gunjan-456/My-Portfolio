import { useState } from "react"
import { toast } from "react-toastify"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { HiLocationMarker } from "react-icons/hi"

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all fields ❌")
      return
    }

    toast.success("Message sent successfully 🚀")

    setFormData({
      name: "",
      email: "",
      message: ""
    })
  }

  return (
    <section id="contact" className="py-24 px-6 bg-[#0a0a0a] text-white scroll-mt-24">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 
        bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 
        bg-clip-text text-transparent">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <h3 className="text-xl font-semibold mb-4">Let's Connect 👋</h3>

            <p className="text-gray-400 mb-6">
              I'm open to freelance projects, internships, and full-time opportunities. Feel free to reach out!
            </p>

            <div className="space-y-3 mb-6">

              <p className="flex items-center gap-2 text-gray-300">
                <MdEmail className="text-pink-400" />
                gunjansingh72002@gmail.com
              </p>

              <p className="flex items-center gap-2 text-gray-300">
                <HiLocationMarker className="text-purple-400" />
                Delhi
              </p>

            </div>

            <div className="flex gap-4">

              <a
                href="https://github.com/gunjan-456"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg 
                hover:bg-white/10 transition"
              >
                <FaGithub /> GitHub
              </a>

          
              <a
                href="https://www.linkedin.com/in/gunjan-singh-3620b822a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg 
                hover:bg-white/10 transition"
              >
                <FaLinkedin /> LinkedIn
              </a>

            </div>
          </div>

       
          <form
            onSubmit={handleSubmit}
            className="backdrop-blur-md bg-white/10 p-6 rounded-2xl 
            border border-white/10 overflow-hidden
            hover:border-pink-400/30 
            hover:shadow-[0_0_15px_rgba(236,72,153,0.15)] 
            transition duration-300"
          >

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full mb-4 p-3 rounded-lg bg-white/5 
              border border-white/20 
              focus:outline-none focus:border-pink-400 
              focus:ring-1 focus:ring-pink-400 transition"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full mb-4 p-3 rounded-lg bg-white/5 
              border border-white/20 
              focus:outline-none focus:border-pink-400 
              focus:ring-1 focus:ring-pink-400 transition"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="w-full mb-5 p-3 rounded-lg bg-white/5 
              border border-white/20 
              focus:outline-none focus:border-pink-400 
              focus:ring-1 focus:ring-pink-400 transition"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-lg 
              bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 
              hover:scale-105 transition duration-300 shadow-lg"
            >
              Send Message 
            </button>

          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact