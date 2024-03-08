import CvHeader from "../components/cv/cvHeader";
import CvLeftPane from "../components/cv/cvLeftPane";
import CvRightPane from "../components/cv/cvRightPane";
import PdfIcon from "../components/pdfIcon";

const Cv = () => {
  return (
    <>
      <div className="flex justify-center pt-20 break-words drop-shadow">
        <div className="bg-white min-h-screen w-5/6 relative my-5 rounded-md pb-20 max-w-screen-lg">
          <div className="absolute md:top-10 md:right-8 top-6 right-4 md:w-16 md:h-16 w-12 h-12">
            <PdfIcon />
          </div>
          <CvHeader />
          <div className="flex md:flex-row flex-col justify-evenly md:mt-10">
            <CvLeftPane />
            <CvRightPane />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cv;
