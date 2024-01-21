import Image from "next/image";
import logo from "@/assets/Logoapx.png";
import StepLine from "./StepLine";
import { useRouter } from "next/router";
import Countdown from "react-countdown";
// import { useRef } from "react";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";

// Random component
const Completionist = () => <span>You are good to go!</span>;
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <b>
        {+minutes < 10 ? `0${minutes}` : minutes}:
        {+seconds < 10 ? `0${seconds}` : seconds}
      </b>
    );
  }
};

export default function Sidebar() {
  const { state } = useContext(UserContext);
  const { clockRef } = state;
  const router = useRouter();
  const { pathname } = router;
  // const clockRef = useRef();
  // const handleStart = () => clockRef.current.start();
  return (
    <div className="h-full lg:flex flex-col bg-white fixed hidden min-w-[230px] shadow-lg">
      {/* logo */}
      <div className="py-6 px-7 bg-primary shadow-md">
        <Image src={logo} alt="logo" width={90} height={90} />
      </div>
      <div className="p-7">
        <p className="text-sm text-gray-400/90">Sisa waktu</p>
        <Countdown
          date={Date.now() + 150000}
          renderer={renderer}
          ref={clockRef}
          autoStart={false}
        />
        {/* <button type="button" onClick={handleStart}>
          gas
        </button> */}
        {/* <b>02 : 40</b> */}
      </div>
      <div className="px-7 flex space-x-5 mt-5">
        <StepLine />
        <div className="flex-col space-y-6 text-sm text-gray-400/90 font-semibold">
          <p className="-mt-1 text-primary">BRD Test</p>
          <p
            className={`${
              pathname.includes("/mgwb-test") ||
              pathname.includes("/result-test")
                ? "text-primary"
                : "text-gray-400/90"
            } pt-3`}
          >
            M.G.W.B Test
          </p>
          <p
            className={`pt-4 ${
              pathname.includes("/result-test") && "text-primary"
            }`}
          >
            Hasil Test
          </p>
        </div>
      </div>
    </div>
  );
}
