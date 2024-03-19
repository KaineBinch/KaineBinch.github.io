import mobileImage from "../../assets/middlePicture.png";
import image from "../../assets/cvHeadPicture.jpg";
import { motion as m } from "framer-motion";

const CvHeader = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row place-content-start">
        <m.img
          initial={{ opacity: 0, x: -10, y: -6 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.15 + 0.1 * Math.random(),
            ease: "easeInOut",
          }}
          exit={{ opacity: 0, x: 6, y: 10 }}
          className="items-center md:hidden flex"
          src={mobileImage}
        />
        <m.img
          initial={{ opacity: 0, x: -10, y: -6 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.15 + 0.1 * Math.random(),
            ease: "easeInOut",
          }}
          exit={{ opacity: 0, x: 6, y: 10 }}
          className="md:block md:relative top-0 left-0 z-10 w-2/5 hidden max-w-[900px] max-h-[900px]"
          src={image}
        />
        <div className="pt-0 md:pt-0 lg:pt-5 items-center justify-center place-content-evenly flex">
          <div className="flex flex-col md:h-64 justify-center lg:mt-5 text-[#1c1a73]">
            <div className="hidden md:block">
              <m.div
                initial={{ opacity: 0, x: 20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.3 + 0.1 * Math.random(),
                  ease: "easeInOut",
                }}
                exit={{ opacity: 0, x: 6, y: 10 }}
                className="text-6xl lg:text-8xl font-extrabold"
              >
                KAINE
              </m.div>
              <m.div
                initial={{ opacity: 0, x: 20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.3 + 0.1 * Math.random(),
                  ease: "easeInOut",
                }}
                exit={{ opacity: 0, x: 6, y: 10 }}
                className="pl-[50px] lg:pl-[100px] pt-2 text-6xl lg:text-8xl font-extrabold"
              >
                BINCH
              </m.div>
            </div>
            <m.div
              initial={{ opacity: 0, x: 20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.3 + 0.1 * Math.random(),
                ease: "easeInOut",
              }}
              exit={{ opacity: 0, x: 6, y: 10 }}
              className="md:hidden text-4xl font-extrabold"
            >
              KAINE BINCH
            </m.div>
            <m.div
              initial={{ opacity: 0, x: 20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.3 + 0.1 * Math.random(),
                ease: "easeInOut",
              }}
              exit={{ opacity: 0, x: 6, y: 10 }}
              className="md:pl-[100px] lg:pl-[130px] pt-2 md:text-md lg:text-xl text-sm "
            >
              Software Engineer
            </m.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CvHeader;
