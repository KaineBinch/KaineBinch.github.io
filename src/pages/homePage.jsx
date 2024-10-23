import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "../utils/splitText";
import { motion as m } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeProject from "../components/homepage/homeProject";
import { projects } from "../constants/projects";

const styles = {
  clipPath: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" },
};

const HomePage = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.to(".char", {
        y: 0,
        stagger: 0.1,
        delay: 0.3,
        duration: 0.6,
      });
    },
    { scope: container }
  );

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const ProjectList = ({ projects }) => {
    const [visibleProjects, setVisibleProjects] = useState(3);

    const handleSeeMore = () => {
      setVisibleProjects((prev) => prev + 5);
    };

    return (
      <>
        <div data-aos="fade-right">
          <hr className="border-neutral" />
          {projects.slice(0, visibleProjects).map((project, i) => (
            <HomeProject key={i} title={project.title} link={project.link} />
          ))}
          {visibleProjects < projects.length && (
            <span
              onClick={handleSeeMore}
              className="cursor-pointer text-primary mt-4 block self-start"
              style={{
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              See More...
            </span>
          )}
        </div>
      </>
    );
  };

  return (
    <div className="overflow-x-hidden">
      <div className="hero min-h-[92svh] bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-full">
            <div className="" style={styles.clipPath} ref={container}>
              {SplitText(
                "Kaine Binch",
                "md:text-8xl text-6xl font-bold -translate-y-full"
              )}
            </div>
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="py-6"
            >
              Nottingham based software engineer dedicated to transforming ideas
              into efficient, user-centric solutions. With a fresh perspective
              and a passion for innovation, my portfolio showcases projects that
              reflect my commitment to excellence in coding.
            </m.p>
          </div>
        </div>
      </div>
      <hr className="border-neutral-300" />
      <div className="max-w-screen flex bg-neutral md:flex-row flex-col p-10 overflow-x-hidden">
        <div className="flex-1 text-neutral-200" data-aos="fade-right">
          <h1 className="text-5xl font-bold mb-5">About me</h1>
          <a
            className="btn btn-primary text-neutral-200 hidden md:inline-flex"
            href="/#/work"
          >
            Learn more
          </a>
        </div>
        <div
          className="flex flex-col flex-[2] px-2 text-start text-neutral-200"
          data-aos="fade-left"
        >
          <p>
            I’m a passionate software developer with a knack for turning ideas
            into reality. My journey began with self-taught programming, and I
            specialize in building user-friendly applications using JavaScript,
            React, and Tailwind CSS.
            <br />
            I thrive on solving complex problems and enjoy collaborating with
            others to create innovative solutions. Constantly exploring new
            technologies, I aim to stay at the forefront of the ever-evolving
            tech landscape.
            <br />
            When I’m not coding, you’ll find me experimenting with design or
            diving into the latest programming trends.
          </p>
          <a
            className="btn btn-primary md:hidden mt-5 self-center"
            href="/#/about"
          >
            Learn more
          </a>
        </div>
      </div>
      <div className="max-w-full flex flex-col mt-3 md:flex-row md:flex-row-reverse flex-col mb-5 p-10">
        <div className="flex-1 text-neutral" data-aos="fade-left">
          <h1 className="text-5xl font-bold">Projects</h1>
          <p className="m-5">
            Take a look at my latest projects and see what I’m building.
          </p>
          <a
            className="btn btn-primary text-neutral-200 hidden md:inline-flex"
            href="/#/projects"
          >
            Explore Projects
          </a>
        </div>
        <div className="flex flex-col flex-[2] p-2 mb-1 md:text-start text-neutral-200">
          <ProjectList projects={projects} />

          <div data-aos="fade-right">
            <a
              className="btn btn-primary md:hidden mt-5 self-center"
              href="/#/projects"
            >
              Explore Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
