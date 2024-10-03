import { motion as m } from "framer-motion";

const HomeProject = ({ title, link }) => {
  return (
    <>
      <div className="md:my-4 my-5 ">
        <m.a
          whileHover={{
            originX: 0,
            scale: 1.2,
          }}
          whileTap={{ scale: 0.8 }}
          className="text-neutral text-xl  md:inline-flex border-neutral-400"
          href={link}
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
