import { jobs } from "../../constants/jobs";

const Jobs = () => {
  return (
    <>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {jobs.map((job, index) => (
          <li key={index}>
            <div className={`timeline-middle mx-5 `}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {index % 2 === 0 ? (
              <div className="timeline-start md:text-end mb-3 text-start pl-0 md:pl-5 md:pr-0 pr-10 ">
                <time className="font-mono italic">{job.dates}</time>
                <div className="text-lg font-black">{job.jobTitle}</div>
                <div className="text-justify">{job.fullDesc}</div>
              </div>
            ) : (
              <div className="timeline-end text-start mb-3 md:pr-5 pr-10">
                <time className="font-mono italic ">{job.dates}</time>
                <div className="text-lg font-black ">{job.jobTitle}</div>
                <div className="text-justify">{job.fullDesc}</div>
              </div>
            )}
            <hr className="rounded-full -mb-2" />
          </li>
        ))}
      </ul>
    </>
  );
};
export default Jobs;
