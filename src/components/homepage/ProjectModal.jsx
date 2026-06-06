import { useEffect, useRef } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import Tag from "../ui/Tag"
import Button from "../ui/Button"

const ProjectModal = ({ project, onClose }) => {
  const reduce = useReducedMotion()
  const panelRef = useRef(null)

  useEffect(() => {
    if (!project) return

    const onKey = (e) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", onKey)

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    panelRef.current?.focus()

    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [project, onClose])

  const image = project?.hoverImage || project?.iconImage

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.2 }}>

          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            tabIndex={-1}
            className="relative z-10 w-full max-w-lg rounded-2xl bg-[#111] border border-white/10 shadow-2xl outline-none max-h-[85vh] overflow-y-auto"
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 12 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 8 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}>

            {/* Image */}
            <div className="aspect-video overflow-hidden rounded-t-2xl bg-bg flex-shrink-0">
              <img
                src={image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <h2 id="project-modal-title" className="text-text-1 text-xl font-bold">
                  {project.title}
                </h2>
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="flex-shrink-0 mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-text-2 hover:text-text-1 hover:bg-white/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <p className="text-text-2 text-sm leading-relaxed">{project.longDesc}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
              </div>

              <Button
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full justify-center mt-2">
                View Project →
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
