"use client";

import { Start } from "./Components/start";
import GameIcon from "./Components/gameIcon";
import StartPopUp from "./Components/startPopUp";
import { useEffect, useState } from "react";
import Clock from "./Components/clock";
import DetIcon from "./Components/detIcon";
import TeleIcon from "./Components/teleIcon";
import ThumbPediaIcon from "./Components/thumbPediaIcon";

export default function Home() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  useEffect(() => {
    setShowMenu(p => p);
  }, [showMenu])

  return (
    <main  className="bg-[#298080] flex w-screen min-h-screen h-auto flex-col items-center justify-around">

      <div className="absolute top-[30vh] left-6 h-[5vh] w-auto px-4   flex flex-col justify-center items-center cursor-pointer gap-[4vh]">
        <GameIcon />
        <ThumbPediaIcon />
        <DetIcon />
        <TeleIcon />
      </div>
      

      <div className={`${showMenu ? "" : "hidden"}`}>
        <StartPopUp />
      </div>
      <div
        onClick={() => {
          setShowMenu(p => !p);
        }}
        className="absolute bottom-0 w-screen bg-slate-300 py-[1px] px-[2px] flex flex-row justify-between items-center"
      >
        <Start name="Start" index={0} />
        <Clock />
      </div>
    </main>
  );
}
