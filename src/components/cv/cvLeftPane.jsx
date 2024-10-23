import { motion as m } from "framer-motion";
import InfoRow from "./infoRow";
import ExercismIcon from "../../assets/exercismLogo.png";

const CvLeftPane = () => {
  return (
    <>
      <m.div
        initial={{ opacity: 0, x: -20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.3 + 0.1 * Math.random(),
          ease: "easeInOut",
        }}
        exit={{ opacity: 0, x: 6, y: 10 }}
        className="flex flex-col bg-white md:w-[300px] md:mb-20"
      >
        <div className="flex flex-col mb-[10px] md:mb-[25px]">
          <hr className="md:hidden border-gray-300 w-4/5 mx-auto my-6" />
          <h1 className="text-center text-xl font-extrabold text-[#1c1a73] mb-2">
            About Me
          </h1>
          <p className="text-[#1c1a73] text-left md:pl-5 lg:pl-0 md:px-0 px-10 mb-8">
            Experienced Team Manager with a proven track record in the social
            care sector, specializing in fostering teamwork, empowering teams,
            and driving performance. Currently expanding my skill set into
            software development, with a focus on modern programming languages
            and frameworks. Passionate about continuous personal growth, I am
            eager to integrate my strong leadership and management skills into
            the tech industry, bringing a commitment to learning, innovation,
            and adaptability across various technologies.
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-center text-xl font-bold text-white bg-[#1c1a73]">
            TECHNICAL SKILLS
          </h1>
          <div className="flex flex-col items-center text-[#1c1a73] text-[16px] md:pl-5 lg:pl-0 md:px-0 px-10">
            <InfoRow
              title="Launguages"
              text="JavaScript, TypeScript (Learning), Go (Learning), SQL (Learning) HTML, CSS, Markdown"
              isHeader={true}
            />
            <InfoRow
              title="Frameworks/ Libraries"
              text="React, Node.js, p5.js, Tailwind CSS, Framer Motion, GSAP"
              isHeader={true}
            />
            <InfoRow
              title="Tools/Tech"
              text="Git & Github, Visual Studio, Figma, REST API's, JSON, Yarn/npm, Prettier, Postman"
              isHeader={true}
            />
            <InfoRow
              title="Version Control"
              text="Git (proficient with GitHub workflows, branches, pull requests)"
              isHeader={true}
            />
            <InfoRow
              title="Databases/ CMS"
              text="Strapi Headless CMS, PostreSQL(Learning)"
              isHeader={true}
            />
            <InfoRow
              title="Deployment/ Hosting"
              text="Github Pages, Hostinger"
              isHeader={true}
            />
            <InfoRow
              title="UI/UX Design"
              text="Figma, Pixso (excellent proficiency in wireframing, prototyping), Material UI, DasiyUI"
              isHeader={true}
            />
            <InfoRow title="Testing/ Debugging" text="Jest" isHeader={true} />
            <InfoRow
              title="Collaboration Tools"
              text="Trello, MS Teams, Zoom, Confluence"
              isHeader={true}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-center text-xl font-bold text-white bg-[#1c1a73] mt-[25px]">
            CONTACT
          </h1>
          <div className="flex flex-col items-center text-[#1c1a73] text-[16px] md:pl-5 lg:pl-0 md:px-0 px-10">
            <div className="w-full md:hidden flex">
              <InfoRow
                icon="fa-solid fa-phone"
                text="07802 766962"
                link="tel:07802766962"
              />
            </div>
            <div className="w-full md:flex hidden">
              <InfoRow icon="fa-solid fa-phone" text="07802 766962" />
            </div>
            <InfoRow
              icon="fa-solid fa-envelope"
              text="kainebinch@live.com"
              link="mailto:kainebinch@live.com"
            />
            <InfoRow
              icon="fa-solid fa-house"
              text="Kimberley, Nottingham"
              link="https://google.com/maps/place/Kimberley,+Nottingham/@52.9966447,-1.2752485,14.5z/data=!4m6!3m5!1s0x4879ea535219591b:0x92f219209af9e8f5!8m2!3d52.994062!4d-1.253579!16zL20vMDI4Nnli"
            />
            <InfoRow
              icon="fa-solid fa-globe"
              text="kainebinch.dev"
              link="https://kainebinch.dev"
            />
          </div>
        </div>
        <div className="flex flex-col mt-[25px]">
          <h1 className="text-center text-xl font-bold text-white bg-[#1c1a73]">
            ONLINE
          </h1>
          <div className="flex flex-col items-center text-[#1c1a73] text-[16px] md:pl-5 lg:pl-0 md:px-0 px-10">
            <InfoRow
              icon="fa-brands fa-github"
              text={["kainebinch", "GitHub"]}
              link="https://github.com/KaineBinch"
            />
            <InfoRow
              icon="fa-brands fa-linkedin"
              text={["kainebinch", "LinkedIn"]}
              link="https://linkedin.com/in/kainebinch"
            />
            <InfoRow
              icon="fa-brands fa-hackerrank"
              text={["kainebinch", "HackerRank"]}
              link="https://hackerrank.com/profile/kainebinch"
            />
            <InfoRow
              iconOverride={ExercismIcon}
              text={["kainebinch", "Exercism"]}
              link="https://exercism.org/profiles/KaineBinch"
            />
          </div>
        </div>
        <div className="flex flex-col mt-[25px]">
          <h1 className="text-center text-xl font-bold text-white bg-[#1c1a73]">
            EDUCATION
          </h1>
          <div className="flex flex-col items-center text-[#1c1a73] text-[16px] md:pl-5 lg:pl-0 md:px-0 px-10 mb-[25px]">
            <InfoRow
              title="Higher Education:"
              text="Notts County FC 2013-2015"
              isHeader={true}
            />
            <InfoRow
              title="BTEC Level 3 Extended Diploma in Sport"
              text="Merit Merit Merit"
            />
            <InfoRow
              title="GCSE's:"
              text="Bluecoat Academy 2007-2012"
              isHeader={true}
            />
            <InfoRow title="Maths" text="A" />
            <InfoRow title="English" text="A" />
            <InfoRow title="Science (Triple Award)" text="A" />
            <InfoRow title="Physical Education" text="A" />
            <InfoRow title="Religious Studies" text="A" />
            <InfoRow title="Psychology" text="B" />
            <InfoRow title="ICT" text="Merit" />
            <InfoRow title="History" text="C" />
          </div>
        </div>
      </m.div>
    </>
  );
};
export default CvLeftPane;
