import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CvLeftPane = () => {
  return (
    <>
      <div className="flex flex-col bg-white md:w-[300px] md:pl-16 md:mb-20">
        <div className="flex flex-col h-[244px]">
          <h1 className="text-center text-xl font-extrabold text-[#1c1a73] ">
            About Me
          </h1>
          <p className="text-[#1c1a73] text-left">
            Experienced Team Manager in the social care sector, adept at
            fostering teamwork and empowering others. I{"’"}m currently teaching
            myself JavaScript and React. Whilst maintaining a passion for
            personal growth, with a focus on integrating my leadership skills.
          </p>
        </div>
        <div className="flex flex-col mt-[25px]">
          <h1 className="text-center text-xl font-bold text-white bg-[#1c1a73]">
            CONTACT
          </h1>
          <div className="flex flex-col items-center text-[#1c1a73] text-[16px]">
            <div className="flex flex-row pt-[25px] place-content-between w-full">
              <FontAwesomeIcon
                className="w-[25px] h-[25px]"
                icon="fa-solid fa-phone"
              />
              <p className="">07802 766 962</p>
            </div>
            <div className="flex flex-row pt-[10px]  place-content-between w-full">
              <FontAwesomeIcon
                className="w-[25px] h-[25px]"
                icon="fa-solid fa-envelope"
              />
              <p>kainebinch@live.com</p>
            </div>
            <div className="flex flex-row pt-[10px]  place-content-between w-full">
              <FontAwesomeIcon
                className="w-[25px] h-[25px]"
                icon="fa-solid fa-house"
              />
              <p>Kimberley, Nottingham</p>
            </div>
            <div className="flex flex-row pt-[10px]  place-content-between w-full">
              <FontAwesomeIcon
                className="w-[25px] h-[25px]"
                icon="fa-solid fa-globe"
              />
              <p>kainebinch.dev</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-[25px]">
          <h1 className="text-center text-xl font-bold text-white bg-[#1c1a73]">
            ONLINE
          </h1>
          <div className="flex flex-col items-center text-[#1c1a73] text-[16px]">
            <div className="flex flex-row items-center pt-[25px] place-content-between w-full">
              <FontAwesomeIcon
                className="w-[25px] h-[25px]"
                icon="fa-brands fa-github"
                style={{ color: "#1c1a73" }}
              />
              <div>
                <p>kainebinch </p>
                <p> GitHub</p>
              </div>
            </div>
            <div className="flex flex-row items-center pt-[10px]  place-content-between w-full">
              <FontAwesomeIcon
                className="w-[25px] h-[25px]"
                icon="fa-brands fa-linkedin"
                style={{ color: "#1c1a73" }}
              />
              <div>
                <p>kainebinch </p>
                <p> LinkedIn</p>
              </div>
            </div>
            <div className="flex flex-row items-center pt-[10px]  place-content-between w-full">
              <FontAwesomeIcon
                className="w-[25px] h-[25px]"
                icon="fa-brands fa-hackerrank"
                style={{ color: "#1c1a73" }}
              />
              <div>
                <p>kainebinch </p>
                <p> HackerRank</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-[25px]">
          <h1 className="text-center text-xl font-bold text-white bg-[#1c1a73]">
            EDUCATION
          </h1>
          <div className="flex flex-col items-center text-[#1c1a73] text-[16px]">
            <div className="flex flex-row items-center pt-[25px] place-content-between w-full">
              <div>
                <p className="text-start font-bold">Higher Education:</p>
              </div>
              <div>
                <p className="text-end">Notts County FC 2013-2015</p>
              </div>
            </div>
            <div className="flex flex-row items-center pt-[25px] place-content-between w-full">
              <div>
                <p className="text-start">
                  BTEC Level 3 Extended Diploma in Sport
                </p>
              </div>
              <div>
                <p className="text-end font-bold">Merit Merit Merit</p>
              </div>
            </div>
            <div className="flex flex-row items-center pt-[25px] place-content-between w-full">
              <div>
                <p className="text-start font-bold">GCSE{"'"}s:</p>
              </div>
              <div>
                <p className="text-end">Bluecoat Academy 2007-2012</p>
              </div>
            </div>
            <div className="flex flex-row items-center pt-[25px] place-content-between w-full">
              <div>
                <p className="text-start">Maths</p>
              </div>
              <div>
                <p className="text-end font-bold">A</p>
              </div>
            </div>
            <div className="flex flex-row items-center pt-[25px] place-content-between w-full">
              <div>
                <p className="text-start">English</p>
              </div>
              <div>
                <p className="text-end font-bold">A</p>
              </div>
            </div>
            <div className="flex flex-row items-center pt-[25px] place-content-between w-full">
              <div>
                <p className="text-start">Science {"(Triple Award)"}</p>
              </div>
              <div>
                <p className="text-end font-bold">A</p>
              </div>
            </div>
            <div className="flex flex-row items-center pt-[25px] place-content-between w-full">
              <div>
                <p className="text-start">Physical Education</p>
              </div>
              <div>
                <p className="text-end font-bold">A</p>
              </div>
            </div>
            <div className="flex flex-row items-center pt-[25px] place-content-between w-full">
              <div>
                <p className="text-start">Religious Studies</p>
              </div>
              <div>
                <p className="text-end font-bold">A</p>
              </div>
            </div>
            <div className="flex flex-row items-center pt-[25px] place-content-between w-full">
              <div>
                <p className="text-start">Psychology</p>
              </div>
              <div>
                <p className="text-end font-bold">B</p>
              </div>
            </div>
            <div className="flex flex-row items-center pt-[25px] place-content-between w-full">
              <div>
                <p className="text-start">ICT</p>
              </div>
              <div>
                <p className="text-end font-bold">Merit</p>
              </div>
            </div>
            <div className="flex flex-row items-center pt-[25px] place-content-between w-full">
              <div>
                <p className="text-start">Histoy</p>
              </div>
              <div>
                <p className="text-end font-bold">C</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CvLeftPane;
