import { Link, useLocation } from "react-router-dom"
import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
} from "framer-motion"
import { useState } from "react"

const GlassNavbar = ({ baseColor = "rgba(255, 255, 255, 0.15)" }) => {
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

  const allLinks = navSections.flatMap((section) => section.links)

  return (
    <>
      {/* Desktop Nav - Centered */}
      <div className="fixed top-[2em] left-0 right-0 z-[99] hidden md:flex justify-center pointer-events-none">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : -100,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="backdrop-blur-lg border border-white/10 rounded-full px-8 py-3 shadow-2xl pointer-events-auto"
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
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}>
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

                        {isActive && (
                          <motion.div
                            layoutId="activeLink"
                            className="absolute inset-0 bg-white/20 rounded-full -z-10 shadow-lg"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                          />
                        )}

                        {!isActive && isHovered && (
                          <motion.div
                            layoutId="hoverLink"
                            className="absolute inset-0 rounded-full -z-10"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 25,
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

      {/* Mobile Nav - Left Side */}
      <div className="fixed top-[1.2em] left-4 z-[99] md:hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            x: isVisible ? 0 : -50,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="relative pointer-events-auto"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}>
          {/* Expanded Menu Background */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  width: 48,
                  height: 48,
                }}
                animate={{
                  opacity: 1,
                  width: 200,
                  height: 240, // Fixed height to prevent jump
                }}
                exit={{
                  opacity: 0,
                  width: 48,
                  height: 48,
                }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 26,
                }}
                className="absolute top-0 left-0 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl p-3 pt-14"
                style={{
                  backgroundColor: baseColor,
                  transform: "translateZ(0)",
                  WebkitTransform: "translateZ(0)",
                }}>
                <motion.div
                  className="flex flex-col gap-1"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
                    },
                    closed: {
                      transition: {
                        staggerChildren: 0.03,
                        staggerDirection: -1,
                      },
                    },
                  }}>
                  {allLinks.map((link, idx) => {
                    const isActive = location.pathname === link.href
                    const isPrimary = link.isPrimary

                    return (
                      <motion.div
                        key={idx}
                        variants={{
                          open: { opacity: 1, y: 0 },
                          closed: { opacity: 0, y: -5 },
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 24,
                        }}>
                        <Link
                          to={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`relative block px-4 py-2.5 rounded-xl font-medium no-underline transition-all duration-200
                            ${isPrimary ? "text-base" : "text-sm"}
                            ${
                              isActive
                                ? "text-white bg-white/20"
                                : "text-white/70 hover:text-white hover:bg-white/10"
                            }
                          `}>
                          {link.label}
                        </Link>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Hamburger Button - Hide circle when open */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            animate={{
              backgroundColor: mobileMenuOpen ? "transparent" : baseColor,
              borderColor: mobileMenuOpen
                ? "transparent"
                : "rgba(255, 255, 255, 0.1)",
            }}
            className="backdrop-blur-lg border rounded-full p-3 shadow-2xl relative z-10"
            style={{
              transform: "translateZ(0)",
              WebkitTransform: "translateZ(0)",
            }}>
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={{
                  rotate: mobileMenuOpen ? 45 : 0,
                  y: mobileMenuOpen ? 8 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className="w-full h-0.5 bg-white rounded-full origin-center"
              />
              <motion.span
                animate={{
                  opacity: mobileMenuOpen ? 0 : 1,
                  scale: mobileMenuOpen ? 0.8 : 1,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="w-full h-0.5 bg-white rounded-full"
              />
              <motion.span
                animate={{
                  rotate: mobileMenuOpen ? -45 : 0,
                  y: mobileMenuOpen ? -8 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
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
