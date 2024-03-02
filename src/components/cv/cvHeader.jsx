import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "../../assets/cvHeadPicture.jpg";
import cvPdf from "../../assets/KaineCV.pdf";

const CvHeader = () => {
  return (
    <>
      <div className="flex place-content-between md:mt-32 h-[310px] w-screen mt-24 bg-white max-w-[755px] max-h-[1067px]">
        <div className="flex flex-row">
          <img className="md:h-[300px] md:w-[300px]" src={image} />
          <div className="flex flex-col w-[310px] md:h-64 justify-center items-start text-[#1c1a73]">
            <div className="text-6xl font-extrabold">KAINE</div>
            <div className="pl-[50px] pt-2 text-6xl font-extrabold">BINCH</div>
            <div className="pl-[100px] pt-2 text-xl">Software Engineer</div>
          </div>
        </div>
        <a href={cvPdf} className="h-[85px] w-[85px] ">
          <FontAwesomeIcon
            className="mt-10 mr-10 w-[40px] h-[40px]"
            icon="fa-solid fa-file-pdf"
            style={{ color: "#1c1a73" }}
          />
        </a>
      </div>
    </>
  );
};

export default CvHeader;
