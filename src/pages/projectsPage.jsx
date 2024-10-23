import ProjectCard from "../components/projectCard";
import { projects } from "../constants/projects";
import { motion as m } from "framer-motion";

const Projects = () => {
  return (
    <>
      <div className="fixed bg-base-100 top-0 h-screen w-screen z-[-1] " />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="pt-28 mb-10 text-6xl font-bold">Projects</div>
        <p className="font-semibold px-10 mb-12">
          Welcome to my projects page! Here, you can explore a collection of my
          current projects, showcasing everything from coding experiments to
          creative endeavors. I invite you to dive in and see what I{"'"}m
          working on. For more of my work, feel free to visit
          <a
            className="text-info"
            href="https://github.com/KaineBinch"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            my Github profile
          </a>
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
