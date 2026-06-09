import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import Tag from "../ui/Tag"
import Button from "../ui/Button"

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

const ProjectModal = ({ project, onClose }) => {
  const reduce = useReducedMotion()
  const panelRef = useRef(null)
  const [imgIndex, setImgIndex] = useState(0)

  useEffect(() => { setImgIndex(0) }, [project])

  const images = project?.images?.length
    ? project.images
    : [project?.iconImage]
  const multi = images.length > 1

  useEffect(() => {
    if (!project) return

    const onKey = (e) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") setImgIndex((i) => Math.max(0, i - 1))
      if (e.key === "ArrowRight") setImgIndex((i) => Math.min(images.length - 1, i + 1))
    }
    document.addEventListener("keydown", onKey)

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    panelRef.current?.focus()

    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [project, onClose, images.length])

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
            <div className="relative aspect-video overflow-hidden rounded-t-2xl bg-bg flex-shrink-0">
              <img
                src={images[imgIndex]}
                alt={`${project.title} screenshot ${imgIndex + 1}`}
                className="w-full h-full object-cover"
              />
              {multi && (
                <>
                  <button
                    onClick={() => setImgIndex((i) => Math.max(0, i - 1))}
                    disabled={imgIndex === 0}
                    aria-label="Previous image"
                    className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 disabled:opacity-30 transition-all">
                    <ChevronLeft />
                  </button>
                  <button
                    onClick={() => setImgIndex((i) => Math.min(images.length - 1, i + 1))}
                    disabled={imgIndex === images.length - 1}
                    aria-label="Next image"
                    className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 disabled:opacity-30 transition-all">
                    <ChevronRight />
                  </button>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setImgIndex(i)}
                        aria-label={`Go to image ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all ${i === imgIndex ? "w-4 bg-white" : "w-1.5 bg-white/40"}`}
                      />
                    ))}
                  </div>
                </>
              )}
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
