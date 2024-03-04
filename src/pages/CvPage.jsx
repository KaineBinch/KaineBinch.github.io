import CvHeader from "../components/cv/cvHeader";
import CvLeftPane from "../components/cv/cvLeftPane";
import CvRightPane from "../components/cv/cvRightPane";

const Cv = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center drop-shadow-2xl">
        <CvHeader />
        <div className="flex w-screen bg-white max-w-[755px] max-h-[1067px]">
          <CvLeftPane />
          <CvRightPane />
        </div>
      </div>
    </>
  );
};

export default Cv;
