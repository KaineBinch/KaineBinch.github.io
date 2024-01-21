import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "../utils/splitText";

const HomePage = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.to(".char", {
        y: 0,
        stagger: 0.1,
        delay: 0.05,
        duration: 1,
      });
    },
    { scope: container }
  );
  return (
    <>
      <div className="pt-[68px] b-0 w-screen flex flex-col items-center">
        <div ref={container}>
          {SplitText("Kaine Binch", "text-6xl mt-10 font-bold text-white")}
        </div>
      </div>
    </>
  );
};
export default HomePage;
