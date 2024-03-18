import { jobs } from "../../constants/jobs";
import CvJobs from "./cvJobs";

const CvRightPane = () => {
  return (
    <>
      <div className="flex flex-col bg-white md:w-[400px] lg:pl-4 md:pl-8 md:mb-20">
        <div className="flex flex-col ">
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
        </div>
      </div>
    </>
  );
};
export default CvRightPane;
