import image from "../assets/kaineRiverWeb.jpg";
import mobileImage from "../assets/kaineRiverMobile.jpg";
import MyFace from "../components/myFace";
import { useState } from "react";

const AboutPage = () => {
  const [boxOpacity, setBoxOpacity] = useState(0);
  const [avatarOpacity, setAvatarOpacity] = useState(0);
  const [leftTextOpacity, setLeftTextOpacity] = useState(0);
  const [rightTextOpacity, setRightTextOpacity] = useState(0);
  const styles = {
    box: { opacity: boxOpacity, transition: "all 0.8s ease-in-out" },
    avatar: {
      opacity: avatarOpacity,
      transition: "opacity 0.8s ease-in-out, transform 0.4s ease-in-out",
      transform: `scale(${avatarOpacity * 0.1 + 0.9}) translate(${
        avatarOpacity * -10 + 10
      }%, ${avatarOpacity * 5 - 5}%)`,
    },
    leftText: {
      opacity: leftTextOpacity,
      transition: "opacity 0.8s ease-in-out, transform 0.4s ease-in-out",
      transform: `scale(${leftTextOpacity * 0.1 + 0.9}) translate(${
        leftTextOpacity * 10 - 10
      }%, ${leftTextOpacity * 5 - 5}%)`,
    },
    rightText: {
      opacity: rightTextOpacity,
      transition: "opacity 0.8s ease-in-out, transform 0.4s ease-in-out",
      transform: `scale(${rightTextOpacity * 0.1 + 0.9}) translate(${
        rightTextOpacity * -10 + 10
      }%, ${rightTextOpacity * -5 + 5}%)`,
    },
  };
  if (boxOpacity == 0) {
    setTimeout(() => setBoxOpacity(1), 150);
  }
  if (leftTextOpacity == 0) {
    setTimeout(() => setLeftTextOpacity(1), 300);
  }
  if (avatarOpacity == 0) {
    setTimeout(() => setAvatarOpacity(1), 450);
  }
  if (rightTextOpacity == 0) {
    setTimeout(() => setRightTextOpacity(1), 600);
  }
  return (
    <div className="pt-[68px] b-0 flex flex-col items-center">
      <div
        className="fixed top-0 h-screen w-screen z-[-1] invisible md:visible"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />

      <div
        className="fixed top-0 h-screen w-screen z-[-1] visible md:invisible"
        style={{
          backgroundImage: `url(${mobileImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />

      <div
        className="bg-base-300 bg-opacity-60 rounded-md backdrop-blur-[3px] mx-4 mt-4 max-w-screen-lg pb-[24px] "
        style={styles.box}
      >
        <div className="flex flex-col text-base">
          <div className="flex mb-14">
            <div
              className="flex-1 text-left pl-6 md:pl-14 pt-14 "
              style={styles.leftText}
            >
              <h1 className="text-4xl md:text-6xl pb-4">Hi! 👋🏻</h1>
              <h1 className="text-3xl md:text-4xl">I{"'"}m Kaine,</h1>
            </div>
            <div
              className="flex flex-1 flex-col justify-end items-center -mb-3 -ml-16 md:-ml-40 "
              style={styles.avatar}
            >
              <MyFace />
            </div>
          </div>
          <div>
            <div className="font-semibold">
              <p>
                Here you will find a shortened version of my job history. For a
                more detailed version please click on my CV at the top of the
                screen.
              </p>
            </div>
            <div className="flex mt-4">
              <div
                className="flex flex-col flex-1 text-left pr-4 md:pr-8 md:pl-0 items-center pl-4 "
                style={styles.rightText}
              >
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                  <li>
                    <div className="timeline-middle">
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
                    <div className="timeline-start md:text-end mb-10">
                      <time className="font-mono italic">
                        Sep 2020 - Current
                      </time>
                      <div className="text-lg font-black">Care Team Leader</div>
                      As a care team leader, I have the responsibilities of
                      managing a team of staff, conducting audits and
                      performance tasks. With extensive experience in a role
                      impacting people{"'"}s lives, I emphasize logical
                      justifications for decisions. Building positive
                      relationships at all organizational levels and excellent
                      communication skills are crucial aspects of my job. In my
                      current position, I revamped the Spot Contracting
                      framework, facilitating access for homecare agencies to
                      the City Council{"'"}s list. This involved creating
                      auditing procedures, negotiating hourly rates, and
                      establishing a secure bidding system. Implementing LEAN
                      principles, I iteratively improved the system,
                      significantly reducing wait times in Nottingham City by
                      over 90%.
                    </div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-middle">
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
                    <div className="timeline-end mb-10">
                      <time className="font-mono italic">
                        January 2017 - Sep 2020
                      </time>
                      <div className="text-lg font-black">
                        Business Support Officer
                      </div>
                      In my role as a Business Support Officer, I played a
                      crucial part in crafting reports for senior management and
                      actively contributed to strategic meetings that shaped the
                      social care department{"'"}s direction. Managing
                      lower-level staff involved overseeing performance,
                      conducting supervisions, and handling appraisals.
                      Additionally, I nurtured relationships with suppliers,
                      ensuring the cost-effective and safe procurement of
                      essential equipment during the challenging times of the
                      COVID pandemic. My responsibilities extended to onboarding
                      new staff, providing access to databases and remote
                      working facilities, and offering clear instructions as a
                      mobile phone champion for a workforce exceeding 250
                      individuals. Embracing change, I adeptly navigated
                      evolving roles and responsibilities at Nottingham City
                      Council, aligning seamlessly with government directives
                      and service adaptations.
                    </div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-middle">
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
                    <div className="timeline-start md:text-end mb-10">
                      <time className="font-mono italic">
                        July 2015 - January 2017
                      </time>
                      <div className="text-lg font-black">
                        Homecare Co-ordinator
                      </div>
                      In my position as a coordinator for Nottingham City
                      Council{"'"}s Home Care Service, I managed the workload
                      for a team of 40+ Care Workers, ensuring citizen safety
                      and efficient service delivery. Coordinating over 50
                      service users daily, many requiring timely medication,
                      demanded meticulous attention to detail. Collaboration
                      within the team was essential, emphasizing effective
                      communication, active listening, empathy, and respectful
                      feedback. Regular team meetings fostered problem-solving
                      and maintained good team morale. Handling diverse phone
                      calls involving colleagues, Health and Social Care
                      professionals, and the public, I honed conflict resolution
                      skills, relying on communication and service knowledge to
                      defuse challenging situations.
                    </div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-middle">
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
                    <div className="timeline-end mb-10">
                      <time className="font-mono italic">
                        March 2015 - July 2015
                      </time>
                      <div className="text-lg font-black">
                        Care Bureau Advisor
                      </div>
                      As a Care Bureau Advisor, I sourced external agencies for
                      long-term home care, coordinating with professionals and
                      handling inquiries for over 100 citizens. Prioritizing
                      urgent cases, I maintained constant communication and
                      built strong relationships with providers. My performance
                      directly impacted daily homecare figures, reflecting
                      positive outcomes for service users. Representing
                      Nottingham City Council, I upheld professionalism and
                      ensured compliance with the Data Protection Act in all
                      dealings.
                    </div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-middle">
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
                    <div className="timeline-start md:text-end mb-10">
                      <time className="font-mono italic">
                        June 2013 - March 2015
                      </time>
                      <div className="text-lg font-black">
                        McDonald{"'"}s Restaurants
                      </div>
                      Working as a Crew Member at McDonald{"'"}s Restaurants
                      during my studies, I honed time management skills,
                      balancing work and academics. From taking orders to food
                      preparation, attention to detail was crucial. Handling
                      cash transactions, I prioritized trustworthiness to avoid
                      discrepancies. Upholding exceptional customer service, I
                      managed complaints and defused aggressive situations with
                      composure. This role improved my multitasking abilities,
                      adhering to health regulations and maintaining a high
                      service standard. It also provided insights into conflict
                      resolution, communication, and financial accuracy,
                      contributing to a well-rounded skill set.
                    </div>
                  </li>
                </ul>
                <a className="btn btn-outline btn-neutral mt-3" href="/">
                  Back home...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
