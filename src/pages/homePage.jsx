import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "../utils/splitText";
import { motion as m } from "framer-motion";

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

  return (
    <>
      <div className="">
        <div className="hero min-h-[92vh] bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-full">
              <div className="" style={styles.clipPath} ref={container}>
                {SplitText(
                  "Kaine Binch",
                  "md:text-8xl text-6xl font-bold -translate-y-full"
                )}
              </div>
              <m.p
                className="py-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                Nottingham based software engineer... Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Repellat, quam eius molestias
                eveniet nobis provident animi pariatur, quo, repudiandae
                inventore ipsum deserunt. Pariatur totam iusto laborum hic
                excepturi laboriosam? Veniam.
              </m.p>
            </div>
          </div>
        </div>
        <hr className="border-neutral-300" />
        <div className="max-w-full flex bg-neutral md:flex-row flex-col p-10">
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-5">About me</h1>
            <a
              className="btn btn-primary hidden md:inline-flex"
              href="/#/about"
            >
              Learn more
            </a>
          </div>
          <div className="flex flex-col flex-[2] px-2 text-start ">
            <p>
              I am currently focusing on javascript. This website has been built
              with react, and I have also used a sprinkling of tailwind css and
              daisyUI.
            </p>
            <p>
              So, why the shift to software engineering? In recent years, i{"'"}
              ve been moving into more technical roles, and it has been evident
              that this is where my skills are best suited.
            </p>
            <a
              className="btn btn-primary md:hidden mt-5 self-center"
              href="/#/about"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
