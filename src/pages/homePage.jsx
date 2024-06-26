import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "../utils/splitText";
import { motion as m } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeProject from "../components/homeProject";
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

  return (
    <>
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
                Nottingham based software engineer dedicated to transforming
                ideas into efficient, user-centric solutions. With a fresh
                perspective and a passion for innovation, my portfolio showcases
                projects that reflect my commitment to excellence in coding.
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
              href="/#/about"
            >
              Learn more
            </a>
          </div>
          <div
            className="flex flex-col flex-[2] px-2 text-start text-neutral-200"
            data-aos="fade-left"
          >
            <p>
              Right now I am focusing on mastering javascript. This website has
              been built with react, I have also used tailwind css, framer
              motion and daisyUI for various elements. However, I do aspire to
              broaden my skills by learning a diverse range of programming
              languages.
            </p>
            <p>
              I currently work in the social care sector as a team manager, but
              in recent years, i{"'"}ve been moving into more technical roles,
              and it has been evident that this is where my skills are best
              suited.
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
            <h1 className="text-5xl font-bold mb-5">Projects</h1>
            <a
              className="btn btn-primary text-neutral-200 hidden md:inline-flex"
              href="/#/projects"
            >
              Explore Projects
            </a>
          </div>
          <div className="flex flex-col flex-[2] p-2 mb-1 md:text-start text-neutral-200">
            <div data-aos="fade-right">
              <hr className="border-neutral" />
              {projects.map((project, i) => (
                <HomeProject
                  key={i}
                  title={project.title}
                  link={project.link}
                />
              ))}
            </div>

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
    </>
  );
};
export default HomePage;
