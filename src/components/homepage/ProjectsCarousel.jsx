import { motion } from "framer-motion"
import { fadeIn } from "../../constants/motionVariants"
import { projects } from "../../constants/projects"
import Container from "../layout/Container"
import Button from "../ui/Button"
import FeaturedProjectCard from "./FeaturedProjectCard"

const ProjectsCarousel = () => (
  <div className="py-8">
    <Container>
      <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <p className="text-label uppercase tracking-widest text-text-2 mb-2">Selected Work</p>
        <h2 className="text-section text-text-1 mb-6">Featured Projects</h2>
      </motion.div>
    </Container>

    {/* Cards bleed to the right edge; left padding matches Container's px-6 lg:px-8 */}
    <div className="overflow-x-auto">
      <div className="flex gap-4 snap-x snap-mandatory scroll-smooth pb-4 px-6 lg:px-8">
        {projects.slice(0, 3).map((project) => (
          <div key={project.title} className="snap-start flex-shrink-0 w-[78vw] max-w-[300px]">
            <FeaturedProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>

    <Container className="mt-6">
      <Button variant="secondary" href="/#/projects">View All Projects →</Button>
    </Container>
  </div>
)

export default ProjectsCarousel
