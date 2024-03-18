const CvJobs = ({ jobTitle, dates, bulletDesc }) => {
  return (
    <>
      <div className="px-10 md:px-0 md:pr-5 lg:pr-0">
        <div className="text-[#1c1a73] py-5 ">
          <h2 className="text-xl font-bold text-start">{jobTitle}</h2>
          <h3 className="text-lg font-bold italic text-end">{dates}</h3>
        </div>
        <div className="text-[#1c1a73] text-left ml-6">
          <ul className="list-disc">
            {bulletDesc.map((point, j) => (
              <li key={j}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default CvJobs;
