import mobileImage from "../../assets/middlePicture.png";
import image from "../../assets/cvHeadPicture.jpg";

const CvHeader = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row place-content-start">
        <img className="items-center md:hidden flex" src={mobileImage} />
        <img
          className="md:block md:relative top-0 left-0 z-10 w-2/5 hidden max-w-[900px] max-h-[900px]"
          src={image}
        />
        <div className="pt-0 md:pt-0 lg:pt-5 items-center justify-center place-content-evenly flex">
          <div className="flex flex-col md:h-64 justify-center lg:mt-5 text-[#1c1a73]">
            <div className="hidden md:block">
              <div className="text-6xl lg:text-8xl font-extrabold">KAINE</div>
              <div className="pl-[50px] lg:pl-[100px] pt-2 text-6xl lg:text-8xl font-extrabold">
                BINCH
              </div>
            </div>
            <div className="md:hidden text-4xl font-extrabold">KAINE BINCH</div>
            <div className="md:pl-[100px] lg:pl-[130px] pt-2 md:text-md lg:text-xl text-sm ">
              Software Engineer
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CvHeader;
