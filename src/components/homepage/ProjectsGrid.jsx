import { useState } from "react"
import { motion } from "framer-motion"
import {
  fadeIn,
  fadeUp,
  staggerContainer,
} from "../../constants/motionVariants"
import { projects } from "../../constants/projects"
import Button from "../ui/Button"
import FeaturedProjectCard from "./FeaturedProjectCard"
import ProjectModal from "./ProjectModal"

const ProjectsGrid = () => {
  const [active, setActive] = useState(null)

  return (
    <>
      <div className="flex flex-col h-full">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}>
          <p className="text-label uppercase tracking-widest text-text-2 mb-2">
            Selected Work
          </p>
          <h2 className="text-section text-text-1 mb-6">Featured Projects</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}>
          {projects
            .filter((p) => p.title)
            .slice(0, 3)
            .map((project) => (
              <motion.div
                key={project.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="h-full">
                <FeaturedProjectCard
                  project={project}
                  onClick={() => setActive(project)}
                />
              </motion.div>
            ))}
        </motion.div>

        <motion.div
          className="mt-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}>
          <Button variant="secondary" href="/#/projects">
            View All Projects →
          </Button>
        </motion.div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </>
  )
}

export default ProjectsGrid
