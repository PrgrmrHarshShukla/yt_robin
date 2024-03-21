"use client";

import { useEffect, useState } from "react";
import { Start } from "../Components/start";
import GameIcon from "../Components/gameIcon";
import Hero from "./hero";
import StartPopUp from "../Components/startPopUp";
import { GameBar } from "../Components/gameBar";
import Clock from "../Components/clock";
import ThumbPediaIcon from "../Components/thumbPediaIcon";
import DetIcon from "../Components/detIcon";
import TeleIcon from "../Components/teleIcon";
import { TtSuppBar } from "../Components/ttSupBar";

export default function Home() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  useEffect(() => {
    setShowMenu(p => p);
  }, [showMenu])




  return (
    <main  className="bg-[#298080]  w-screen min-h-screen h-auto overflow-hidden relative">

      <div className="absolute top-[30vh] left-6 h-[5vh] w-auto px-4   flex flex-col justify-center items-center cursor-pointer gap-[4vh]">
        <GameIcon />
        <ThumbPediaIcon />
        <DetIcon />
        <TeleIcon />
      </div>

      
      <Hero />
      <div className={`${showMenu ? "" : "hidden"}`}>
        <StartPopUp />
      </div>
      <div
        onClick={() => {
          setShowMenu(p => !p);
        }}
        className="flex flex-row justify-between items-center gap-2 absolute bottom-0 w-screen bg-slate-300 py-[2px] pl-[2px]"
      >
        <div className="flex flex-row justify-center items-center gap-1">
          <Start name="Start" index={0} />
          <TtSuppBar />
        </div>
        <Clock />
      </div>
    </main>
  );
}
