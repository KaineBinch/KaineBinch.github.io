import { Link, useLocation } from "react-router-dom"
import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
} from "framer-motion"
import { useState } from "react"

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact",  href: "/contact" },
]

const GlassNavbar = ({ baseColor = "rgba(255, 255, 255)" }) => {
  const location = useLocation()
  const [hoveredLink, setHoveredLink] = useState(null)
  const [isVisible, setIsVisible] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (latest < 50) {
      setIsVisible(true)
    } else if (latest > previous) {
      setIsVisible(false)
      setMobileMenuOpen(false)
    } else {
      setIsVisible(true)
    }
  })

  return (
    <>
      {/* Desktop Nav */}
      <div className="fixed top-[2em] left-0 right-0 z-[99] hidden md:flex justify-center pointer-events-none">
        <motion.nav
          aria-label="main navigation"
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : -100,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="backdrop-blur-lg border border-white/10 rounded-full px-8 py-3 shadow-2xl pointer-events-auto flex items-center gap-2"
          style={{
            backgroundColor: baseColor,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "translateZ(0)",
            WebkitTransform: "translateZ(0)",
            willChange: "transform, opacity",
          }}>

          {navLinks.map((link, idx) => {
            const isActive = location.pathname === link.href
            const isHovered = hoveredLink === idx

            return (
              <motion.div
                key={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <Link
                  to={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onMouseEnter={() => setHoveredLink(idx)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`relative text-sm font-medium no-underline transition-colors px-4 py-1.5 rounded-full whitespace-nowrap block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50
                    ${isActive ? "text-white" : "text-white/60 hover:text-white/90"}
                  `}>
                  {link.label}

                  {isActive && (
                    <motion.div
                      layoutId="activeLink"
                      className="absolute inset-0 bg-white/20 rounded-full -z-10 shadow-lg"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {!isActive && isHovered && (
                    <motion.div
                      layoutId="hoverLink"
                      className="absolute inset-0 rounded-full -z-10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ type: "spring", stiffness: 500, damping: 25 }}
                      style={{
                        background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
                        boxShadow: "0 0 20px rgba(255,255,255,0.3), inset 0 0 10px rgba(255,255,255,0.1)",
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            )
          })}

          <div className="w-px h-5 bg-white/30 mx-1" />

          <motion.a
            href="/resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="text-sm font-semibold px-4 py-1.5 rounded-full bg-primary text-bg whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            Resume
          </motion.a>
        </motion.nav>
      </div>

      {/* Mobile Nav */}
      <div className="fixed top-[1.2em] left-4 z-[99] md:hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            x: isVisible ? 0 : -50,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative pointer-events-auto"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, width: 48, height: 48 }}
                animate={{ opacity: 1, width: 200, height: 310 }}
                exit={{ opacity: 0, width: 48, height: 48 }}
                transition={{ type: "spring", stiffness: 280, damping: 26 }}
                className="absolute top-0 left-0 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl p-3 pt-14"
                style={{
                  backgroundColor: baseColor,
                  transform: "translateZ(0)",
                  WebkitTransform: "translateZ(0)",
                }}>
                <nav aria-label="main navigation">
                  <motion.div
                    className="flex flex-col gap-1"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={{
                      open:   { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
                      closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
                    }}>
                    {navLinks.map((link) => {
                      const isActive = location.pathname === link.href
                      return (
                        <motion.div
                          key={link.href}
                          variants={{
                            open:   { opacity: 1, y: 0 },
                            closed: { opacity: 0, y: -5 },
                          }}
                          transition={{ type: "spring", stiffness: 300, damping: 24 }}>
                          <Link
                            to={link.href}
                            aria-current={isActive ? "page" : undefined}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-4 py-2.5 rounded-xl text-sm font-medium no-underline transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white/50
                              ${isActive ? "text-white bg-white/20" : "text-white/70 hover:text-white hover:bg-white/10"}
                            `}>
                            {link.label}
                          </Link>
                        </motion.div>
                      )
                    })}

                    <motion.div
                      variants={{
                        open:   { opacity: 1, y: 0 },
                        closed: { opacity: 0, y: -5 },
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 24 }}>
                      <a
                        href="/resume.pdf"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-bg bg-primary hover:brightness-110 transition-all duration-200 text-center mt-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary">
                        Resume
                      </a>
                    </motion.div>
                  </motion.div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            animate={{
              backgroundColor: mobileMenuOpen ? "transparent" : baseColor,
              borderColor: mobileMenuOpen ? "transparent" : "rgba(255,255,255,0.1)",
            }}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="backdrop-blur-lg border rounded-full p-3 shadow-2xl relative z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
            style={{ transform: "translateZ(0)", WebkitTransform: "translateZ(0)" }}>
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 8 : 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="w-full h-0.5 bg-white rounded-full origin-center"
              />
              <motion.span
                animate={{ opacity: mobileMenuOpen ? 0 : 1, scale: mobileMenuOpen ? 0.8 : 1 }}
                transition={{ duration: 0.2 }}
                className="w-full h-0.5 bg-white rounded-full"
              />
              <motion.span
                animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -8 : 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="w-full h-0.5 bg-white rounded-full origin-center"
              />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </>
  )
}

export default GlassNavbar
