import image from "../assets/kaineRiverWeb.jpg";
import mobileImage from "../assets/kaineRiverMobile.jpg";
import MyFace from "../components/myFace";
import { useState } from "react";

const HomePage = () => {
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
    <div className="pt-[68px] b-0 w-screen flex flex-col items-center">
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
      <h1 className="text-6xl mt-10 font-bold text-base-300 opacity-60">
        Kaine Binch
      </h1>
      <div
        className="bg-base-300 bg-opacity-60 rounded-md backdrop-blur-[3px] mx-4 mt-4 max-w-screen-lg h-[77vh] pb-[24px]"
        style={styles.box}
      >
        <div className="flex flex-col text-white">
          <div className="flex mb-14">
            <div
              className="flex-1 text-left pl-6 md:pl-14 pt-14 "
              style={styles.leftText}
            >
              <h1 className="text-4xl md:text-6xl pb-4">Hi! 👋🏻</h1>
              <h1 className="text-3xl md:text-4xl">I{"'"}m Kaine,</h1>
            </div>
            <div
              className="flex flex-1 flex-col justify-end items-center -mb-3 -ml-16 md:-ml-40"
              style={styles.avatar}
            >
              <MyFace />
            </div>
          </div>
          <div className="flex">
            <div className="md:flex-1" />
            <div
              className="flex flex-col flex-1 text-left pr-4 md:pr-8 md:pl-0 items-center pl-4"
              style={styles.rightText}
            >
              <p>
                I{"'"}m diving into the exciting world of software engineering,
                and my journey{"'"}s got a little bit of everything. I am
                currently focusing on javascript. This website has been built
                with react, and I have also used a sprinkling of tailwind css
                and daisyUI.
                <br />I am currently a team manager in the social care sector,
                handling various different projects and teams. I{"'"}ve got an
                amazing partner and an energetic son who keep me busy.
                <br />
                So, why the shift to software engineering? In recent years, i
                {"'"}ve been moving into more technical roles, and it has been
                evident that this is where my skills are best suited.
              </p>
              <a className="btn btn-outline btn-neutral mt-3" href="/#/about">
                About me...
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
