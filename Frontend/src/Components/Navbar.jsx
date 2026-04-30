import { useEffect, useState } from "react"

const Navbar = () => {

  const [active, setActive] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "education", "contact"]

      sections.forEach((id) => {
        const section = document.getElementById(id)
        if (section) {
          const top = section.offsetTop - 100
          const height = section.offsetHeight

          if (window.scrollY >= top && window.scrollY < top + height) {
            setActive(id)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
     { name: "Contact", id: "contact" },
  ]

  return (
    <nav className="fixed w-full top-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold text-purple-400">Gunjan</h1>

        <div className="flex gap-6">

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`transition duration-300 ${
                active === link.id
                  ? "text-pink-400 border-b-2 border-pink-400 pb-1"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}

        </div>

      </div>
    </nav>
  )
}

export default Navbar