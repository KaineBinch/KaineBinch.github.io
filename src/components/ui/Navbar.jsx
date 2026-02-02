import { Link, useLocation } from "react-router-dom"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react"

const GlassNavbar = ({
  className = "",
  baseColor = "rgba(255, 255, 255, 0.15)",
}) => {
  const location = useLocation()
  const [hoveredLink, setHoveredLink] = useState(null)
  const [isVisible, setIsVisible] = useState(true)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()

    // If at the very top, always show
    if (latest < 50) {
      setIsVisible(true)
    }
    // If scrolling down, hide
    else if (latest > previous) {
      setIsVisible(false)
    }
    // If scrolling up, show
    else {
      setIsVisible(true)
    }
  })

  const navSections = [
    {
      links: [
        { label: "Home", href: "/", isPrimary: true },
        { label: "Work History", href: "/work" },
      ],
    },
    {
      links: [{ label: "Projects", href: "/projects" }],
    },
    {
      links: [{ label: "Contact", href: "/contact" }],
    },
  ]

  return (
    <div
      className={`fixed top-[1.2em] md:top-[2em] left-0 right-0 z-[99] flex justify-center pointer-events-none ${className}`}>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : -100,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="backdrop-blur-md border border-white/5 rounded-full px-8 py-3 shadow-2xl pointer-events-auto"
        style={{
          backgroundColor: baseColor,
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transform: "translateZ(0)",
          WebkitTransform: "translateZ(0)",
          willChange: "transform, opacity",
        }}>
        <div className="flex items-center gap-4">
          {navSections.map((section, sectionIdx) => (
            <div key={sectionIdx} className="flex items-center gap-4">
              {sectionIdx > 0 && <div className="w-px h-6 bg-white/30" />}

              {section.links.map((link, linkIdx) => {
                const isActive = location.pathname === link.href
                const isPrimary = link.isPrimary
                const linkId = `${sectionIdx}-${linkIdx}`
                const isHovered = hoveredLink === linkId

                return (
                  <motion.div
                    key={linkIdx}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    <Link
                      to={link.href}
                      onMouseEnter={() => setHoveredLink(linkId)}
                      onMouseLeave={() => setHoveredLink(null)}
                      className={`relative font-medium no-underline transition-all px-4 py-1.5 rounded-full whitespace-nowrap block
                        ${isPrimary ? "text-lg" : "text-sm"}
                        ${
                          isActive
                            ? "text-white"
                            : isPrimary
                              ? "text-white/80 hover:text-white"
                              : "text-white/60 hover:text-white/90"
                        }
                      `}>
                      {link.label}

                      {/* Active state - solid bubble */}
                      {isActive && (
                        <motion.div
                          layoutId="activeLink"
                          className="absolute inset-0 bg-white/20 rounded-full -z-10 shadow-lg"
                          transition={{
                            type: "spring",
                            bounce: 0.3,
                            duration: 0.6,
                          }}
                        />
                      )}

                      {/* Hover state - softer bubble with glow */}
                      {!isActive && isHovered && (
                        <motion.div
                          layoutId="hoverLink"
                          className="absolute inset-0 rounded-full -z-10"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{
                            type: "spring",
                            bounce: 0.4,
                            duration: 0.3,
                          }}
                          style={{
                            background:
                              "radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)",
                            boxShadow:
                              "0 0 20px rgba(255, 255, 255, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.1)",
                          }}
                        />
                      )}
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          ))}
        </div>
      </motion.nav>
    </div>
  )
}

export default GlassNavbar
