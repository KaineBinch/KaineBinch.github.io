import { motion as m } from "framer-motion";

const HomeProject = ({ title }) => {
  return (
    <>
      <div className="md:my-4 my-5 ">
        <m.a
          whileHover={{
            originX: 0,
            scale: 1.1,
          }}
          whileTap={{ scale: 0.8 }}
          className="text-neutral text-xl  md:inline-flex border-neutral-400"
          href="https://kainebinch.dev/adminDashboard"
          rel="noreferrer"
          target="_blank"
        >
          {title}
        </m.a>
      </div>
      <hr className="border-neutral" />
    </>
  );
};
export default HomeProject;
