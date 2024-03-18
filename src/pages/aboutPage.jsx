import image from "../assets/kaineRiverWeb.jpg";
import mobileImage from "../assets/kaineRiverMobile.jpg";
import MyFace from "../components/myFace";
import { useState } from "react";
import Jobs from "../components/jobs";

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
        className="bg-base-300 bg-opacity-60 rounded-md backdrop-blur-[3px] mx-4 my-4 max-w-screen-lg pb-[24px] "
        style={styles.box}
      >
        <div className="flex flex-col text-base">
          <div className="flex mb-14">
            <div
              className="flex-1 text-left pl-6 md:pl-10 pt-14 "
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
            <div className="px-5 font-semibold">
              <p>
                Here you will find a shortened version of my job history. For a
                more detailed version please click on my CV at the top of the
                screen.
              </p>
            </div>
            <div className="flex mt-8">
              <div
                className="flex flex-col items-center flex-1"
                style={styles.rightText}
              >
                <Jobs />
                <a className="btn btn-outline btn-neutral mb-3 mt-8" href="/">
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
