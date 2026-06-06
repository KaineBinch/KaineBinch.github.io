import { motion } from "framer-motion"
import { fadeIn, fadeUp, staggerContainer } from "../../constants/motionVariants"
import { projects } from "../../constants/projects"
import Button from "../ui/Button"
import FeaturedProjectCard from "./FeaturedProjectCard"

const ProjectsGrid = () => (
  <div className="flex flex-col h-full">
    <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
      <p className="text-label uppercase tracking-widest text-text-2 mb-2">Selected Work</p>
      <h2 className="text-section text-text-1 mb-6">Featured Projects</h2>
    </motion.div>

    <motion.div
      className="grid grid-cols-3 gap-4"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}>
      {projects.slice(0, 6).map((project) => (
        <motion.div
          key={project.title}
          variants={fadeUp}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="h-full">
          <FeaturedProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>

    <motion.div className="mt-auto pt-4" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
      <Button variant="secondary" href="/#/projects">View All Projects →</Button>
    </motion.div>
  </div>
)

export default ProjectsGrid
