import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"
import Card from "../components/ui/Card"
import Tag from "../components/ui/Tag"
import Container from "../components/layout/Container"
import {
  pageTransition,
  fadeUp,
  fadeIn,
  staggerContainer,
} from "../constants/motionVariants"
import { projects } from "../constants/projects"

const ProjectCard = ({ title, shortDesc, longDesc, tags, iconImage, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block h-full rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
    <Card className="overflow-hidden group hover:border-white/20 transition-colors duration-300 flex flex-col h-full cursor-pointer">
      <div className="aspect-video overflow-hidden bg-bg flex-shrink-0">
        <img
          src={iconImage}
          alt={`${title} project screenshot`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <h3 className="text-text-1 font-semibold text-lg mb-2">{title}</h3>
        <p className="text-text-2 text-sm leading-relaxed mb-2 hidden xl:block flex-1">
          {longDesc}
        </p>
        <p className="text-text-2 text-sm leading-relaxed mb-4 xl:hidden flex-1">
          {shortDesc}
        </p>
        <span className="text-primary text-sm font-medium mt-auto">
          Take a look →
        </span>
      </div>
    </Card>
  </a>
)

const ProjectsPage = () => (
  <motion.div {...pageTransition}>
    <Helmet>
      <title>Kaine Binch | Projects</title>
      <meta
        name="description"
        content="A collection of projects built by Kaine Binch - from pixel art generators to React admin dashboards and sorting algorithm visualisers."
      />
      <meta property="og:title" content="Kaine Binch | Projects" />
      <meta
        property="og:description"
        content="A collection of projects built by Kaine Binch - from pixel art generators to React admin dashboards and sorting algorithm visualisers."
      />
      <meta property="og:image" content="/images/profile/kaine.webp" />
      <meta property="og:type" content="website" />
    </Helmet>

    <Container className="pt-32 pb-24">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}>
        <p className="text-label uppercase tracking-widest text-text-2 mb-2">
          My Work
        </p>
        <h1 className="text-hero text-text-1 mb-4">Projects</h1>
        <p className="text-text-2 max-w-xl leading-relaxed mb-4">
          A collection of things I&apos;ve built - from weekend experiments to
          more complete applications. For everything else, check out{" "}
          <a
            href="https://github.com/KaineBinch"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            my GitHub profile
          </a>
          .
        </p>
      </motion.div>

      <motion.div
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}>
        {projects.filter((p) => p.title).map((project) => (
          <motion.div
            key={project.title}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="h-full">
            <ProjectCard
              title={project.title}
              shortDesc={project.shortDesc}
              longDesc={project.longDesc}
              tags={project.tags}
              iconImage={project.iconImage}
              link={project.link}
            />
          </motion.div>
        ))}
      </motion.div>
    </Container>
  </motion.div>
)

export default ProjectsPage
