import { jobs } from "../../constants/jobs";
import CvJobs from "./cvJobs";
import { motion as m } from "framer-motion";

const CvRightPane = () => {
  return (
    <>
      <div className="flex flex-col bg-white md:w-[400px] lg:pl-4 md:pl-8 md:mb-20">
        <m.div
          initial={{ opacity: 0, x: 20, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.3 + 0.1 * Math.random(),
            ease: "easeInOut",
          }}
          exit={{ opacity: 0, x: 6, y: 10 }}
          className="flex flex-col "
        >
          <h1 className="text-center text-xl font-bold text-white bg-[#1c1a73]">
            EXPERIENCE
          </h1>
          <div className="">
            {jobs.map((job, i) => (
              <CvJobs
                key={i}
                jobTitle={job.jobTitle}
                dates={job.dates}
                bulletDesc={job.bulletDesc}
              />
            ))}
          </div>
        </m.div>
      </div>
    </>
  );
};
export default CvRightPane;
