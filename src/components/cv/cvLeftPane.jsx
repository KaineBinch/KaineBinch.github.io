import { motion as m } from "framer-motion"
import InfoRow from "./infoRow"
import ExercismIcon from "../../assets/exercismLogo.png"
import {
  personalInfo,
  contactInfo,
  onlineProfiles,
  technicalSkillsArray,
  education,
} from "../../constants/cvData"

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
        className="flex flex-col bg-white md:w-[300px] md:mb-20">
        <div className="flex flex-col mb-[10px] md:mb-[25px]">
          <hr className="md:hidden border-gray-300 w-4/5 mx-auto my-6" />
          <h1 className="text-center text-xl font-extrabold text-[#1c1a73] mb-2">
            About Me
          </h1>
          <p className="text-[#1c1a73] text-left md:pl-5 lg:pl-0 md:px-0 px-10 mb-8">
            {personalInfo.aboutMe}
          </p>
        </div>

        <div className="print-mt-10">
          <div className="flex flex-col">
            <h1 className="text-center text-xl font-bold text-white bg-[#1c1a73]">
              TECHNICAL SKILLS
            </h1>
            <div className="flex flex-col items-center text-[#1c1a73] text-[16px] md:pl-5 lg:pl-0 md:px-0 px-10">
              {technicalSkillsArray.map((skill, index) => (
                <InfoRow
                  key={index}
                  title={skill.title}
                  text={skill.text}
                  isHeader={true}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="print-mt-5">
          <div className="flex flex-col">
            <h1 className="text-center text-xl font-bold text-white bg-[#1c1a73] mt-[25px]">
              CONTACT
            </h1>
            <div className="flex flex-col items-center text-[#1c1a73] text-[16px] md:pl-5 lg:pl-0 md:px-0 px-10">
              <div className="w-full md:hidden flex">
                <InfoRow
                  icon="fa-solid fa-phone"
                  text={contactInfo.phone.number}
                  link={contactInfo.phone.link}
                />
              </div>
              <div className="w-full md:flex hidden">
                <InfoRow
                  icon="fa-solid fa-phone"
                  text={contactInfo.phone.number}
                />
              </div>
              <InfoRow
                icon="fa-solid fa-envelope"
                text={contactInfo.email.address}
                link={contactInfo.email.link}
              />
              <InfoRow
                icon="fa-solid fa-house"
                text={contactInfo.location.address}
                link={contactInfo.location.link}
              />
              <InfoRow
                icon="fa-solid fa-globe"
                text={contactInfo.website.url}
                link={contactInfo.website.link}
              />
            </div>
          </div>
        </div>

        <div className="print-mt-30">
          <div className="flex flex-col mt-[25px]">
            <h1 className="text-center text-xl font-bold text-white bg-[#1c1a73]">
              ONLINE
            </h1>
            <div className="flex flex-col items-center text-[#1c1a73] text-[16px] md:pl-5 lg:pl-0 md:px-0 px-10">
              {onlineProfiles.map((profile, index) => (
                <InfoRow
                  key={index}
                  icon={profile.iconOverride ? undefined : profile.icon}
                  iconOverride={profile.iconOverride ? ExercismIcon : undefined}
                  text={[profile.username, profile.platform]}
                  link={profile.link}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="print-mt-5">
          <div className="flex flex-col mt-[25px]">
            <h1 className="text-center text-xl font-bold text-white bg-[#1c1a73]">
              EDUCATION
            </h1>
            <div className="flex flex-col items-center text-[#1c1a73] text-[16px] md:pl-5 lg:pl-0 md:px-0 px-10 mb-[25px]">
              <InfoRow
                title="Higher Education:"
                text={`${education.higherEducation.institution} ${education.higherEducation.period}`}
                isHeader={true}
              />
              <InfoRow
                title={education.higherEducation.qualification}
                text={education.higherEducation.grade}
              />
              <InfoRow
                title="GCSE's:"
                text={`${education.gcses.institution} ${education.gcses.period}`}
                isHeader={true}
              />
              {education.gcses.subjects.map((subject, index) => (
                <InfoRow
                  key={index}
                  title={subject.subject}
                  text={subject.grade}
                />
              ))}
            </div>
          </div>
        </div>
      </m.div>
    </>
  )
}
export default CvLeftPane
