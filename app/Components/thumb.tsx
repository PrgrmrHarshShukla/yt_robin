"use client";

import { useEffect, useState } from "react";
import data from "./data";

export default function Thumb() {

  const [change, setChange] = useState(true);
  const [title, setTitle] = useState("");
  const [index, setIndex] = useState(0);

  const videoIDs = data.map((oldUrl: string) => {
    if (!oldUrl.includes("://")) {
        oldUrl = "https://" + oldUrl;
    }
    const url = new URL(oldUrl);
    const vidID: any = url.searchParams.get("v");
    return vidID
  })


  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://localhost:3000/api/getThumbnail?id=${videoIDs[index]}`);
      const response = await res.json();
      setIndex(prev => (prev + 1) % videoIDs.length);
      setTitle(response.title);
      // console.log(response);
      
    }
    getData()
    console.log(videoIDs);
    
  }, [change])


  return (
    <div className="flex min-h-screen h-auto flex-col items-center justify-around">

      <h1 className="text-5xl font-bold text-purple mt-4 mb-8">
        Thumbnail Guessing
      </h1>

      <div className="w-[95vw] sm:w-[40vw] h-[50vh] flex flex-col justify-center items-center">
        <textarea placeholder="Describe the thumbnail..." className="py-4 px-4 outline-none border-2 border-blue-300 rounded-[10px] h-[30vh] w-[95vw] sm:w-[40vw]" />
      </div>

      <div className="w-auto min-w-[40vw] flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center border-2 border-blue-500 bg-slate-300 outline-none h-[8vh] px-2 rounded-[10px] min-w-[40vw] w-auto text-center text-lg font-semibold">
            {title}
        </div>
      </div>

      <div className="w-[95vw] sm:w-[40vw] h-[50vh] flex flex-col justify-center items-center">
        <button
          onClick={() => {
            setChange(prev => !prev)
          }}
          className="h-[5vh] w-auto px-12 rounded-full border-2 border-blue-500 text-xl font-bold active:bg-blue-200"
        >
          Shuffle
        </button>
      </div>


    </div>
  );
}
