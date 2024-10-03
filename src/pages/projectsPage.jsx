import ProjectCard from "../components/projectCard";
import { projects } from "../constants/projects";
import { motion as m } from "framer-motion";

const Projects = () => {
  return (
    <>
      <div className="fixed bg-secondary top-0 h-screen w-screen z-[-1] " />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="pt-28 mb-10 text-6xl font-bold">Projects</div>
        <p className="font-semibold px-10 mb-12">
          Welcome to my projects page. Here, you will find a list of projects I
          {"'"}m currently working on. From coding experiments to creative
          endeavors, have a look and see what I{"'"}m up to!
        </p>
      </m.div>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="px-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 md:gap-4 mb-10"
      >
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            title={project.title}
            shortDesc={project.shortDesc}
            longDesc={project.longDesc}
            tags={project.tags}
            iconImage={project.iconImage}
            link={project.link}
          />
        ))}
      </m.div>
    </>
  );
};
export default Projects;
