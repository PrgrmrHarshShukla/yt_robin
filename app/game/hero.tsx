"use client";

import { useEffect, useState } from "react";
import data from "../Components/data";
import Link from "next/link";
import Draggable from 'react-draggable';
import Image from "next/image";
import smallIcon from "../Components/iconL.png"

export default function Hero() {

  const [change, setChange] = useState(true);
  const [url, setUrl] = useState("");
  const [dpUrl, setDpUrl] = useState("");
  const [title, setTitle] = useState("");
  const [publishedOn, setPublishedOn] = useState("");
  const [channelName, setChannelName] = useState("");
  const [userTitle, setUserTitle] = useState("");
  const [index, setIndex] = useState(0);
  const [showRes, setShowRes] = useState(false);
  const [resStat, setResStat] = useState<string>("");
  const [percent, setPercent] = useState<any>("...");
  const [titleArray, setTitleArray] = useState<string[]>([]);
  const [count, setCount] = useState(0);


  const videoIDs = data.map((oldUrl: string) => {
    if (!oldUrl.includes("://")) {
        oldUrl = "https://" + oldUrl;
    }
    const url = new URL(oldUrl);
    const vidID: any = url.searchParams.get("v");
    return vidID
  })


  useEffect(() => {
    // To get thumbnail and title
    const getData = async () => {
      const res1 = await fetch(`http://localhost:3000/api/getThumbnail?id=${videoIDs[index]}`);
      const response1 = await res1.json();
      const res2 = await fetch(`http://localhost:3000/api/getDP?id=${response1.channelID}`);
      const response2 = await res2.json();
      setIndex(prev => (prev + 1) % videoIDs.length);
      setUrl(response1.thumbnailMed);
      setTitle(response1.title);
      setDpUrl(response2.dp);
      setChannelName(response2.name);

      const timestampStr: string = response1.publishedAt;
      const timestamp: Date = new Date(timestampStr);
      const options: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit', year: 'numeric' };
      const dateStr: string = timestamp.toLocaleDateString('en-US', options);
      setPublishedOn(dateStr);

      const arr = response1.title.split(/\s+/);
      setTitleArray(arr);
    }
    getData()
    setCount(0)
    // console.log(videoIDs);
    
  }, [change])

  useEffect(() => {
    // To toggle showing of result
    if(resStat == "show"){
      setShowRes(true);
      setPercent((p: any) => p);
    }
    else if(resStat == "hide"){
      setShowRes(false);
      setPercent(" ...");
    }
  }, [resStat])

  useEffect(() => {
    setCount(p => p);
  }, [count])

  const handleButtonDrag = (e: any) => {
    e.stopPropagation();
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    

    if(userTitle == ""){
      alert("Please enter a title.")
      return;
    }

    try {
      const words1 = title.toLowerCase().split(/\s+/);
      const words2 = userTitle.toLowerCase().split(/\s+/);

      const commonWords = words1.filter((word : any) => words2.includes(word));
      const matchPercentage = (commonWords.length / Math.max(words1.length, words2.length)) * 100;

      const val = Math.round(matchPercentage);


      setPercent(val);       
    } 
    catch (error: any) {
      console.log("OpenAI API error:\n", error.message);      
    }

    setResStat("show");

  }

  const handleRefresh = async (e: any) => {
    e.preventDefault();
    setResStat("hide")
    setChange(prev => !prev)
  }

  const titleList = titleArray.map((part, ind) => {
    return <span key={ind} className={`mr-1  ${(showRes || count > ind) ? "block" : "hidden"}`}>{part}</span>
  })


  const handleHint = () => {
    setCount(p => p+1);
  }




  return (
    <Draggable cancel="button">
      <div className={`absolute top-20 left-[300px] flex max-h-screen min-h-[70vh] h-auto flex-col w-[30vw] min-w-[500px] items-center justify-center gap-2 border-[1px] border-l-white border-t-white border-r-black border-b-black bg-[#CED0CF] px-1 z-10`}>

        <div className="mb-1 mt-1 min-w-[395px] w-full h-[5vh] bg-[#070C80] flex flex-row justify-between items-center pl-4 pr-2">
          <div className="flex flex-row justify-center items-center gap-2">
              <Image src={smallIcon} alt="Icon" className="w-[20px] h-[20px]" />
              <span className="text-white text-xl">WutsThatTitle??</span>
          </div>
          <button className='w-[25px] h-[25px] border-t-[3px] border-l-[3px] border-l-gray-200 border-t-gray-200 cursor-pointer  active:border-l-black active:border-t-black z-30'>
            <Link href="/">
                <div className='bg-[#CED0CF] border-r-[3px] w-full h-full  active:border-r-white active:border-b-white border-b-[3px] border-r-gray-500 border-b-gray-500 font-medium flex flex-row justify-center items-center cursor-pointer'>
                  <span>X</span>
                </div>
            </Link>
          </button>
        </div>

        <div className="w-3/4 h-auto flex flex-col gap-2 justify-center items-start border-[1px] border-l-white border-t-white border-r-black border-b-black p-1">
          <img src={url} alt="" className="w-full h-[25vh] overflow-hidden" />
          <div className="flex flex-row justify-center items-center gap-2">
            <img src={dpUrl} className="bg-white rounded-full w-[5vh] h-[5vh]" />
            <div className="flex flex-col justify-center items-start text-[12px] gap-0.2 opacity-50 font-bold">
              <div>{channelName}</div>
              <div>{publishedOn}</div>
            </div>
          </div>
        </div>

        

        <div className="border-[1px] border-l-white border-t-white border-r-black border-b-black py-1 flex flex-col justify-center items-center w-3/4 h-[11vh]">        
            <div className={` flex flex-col justify-start items-start h-full w-full px-1 `}>
              <span>
                <span className="opacity-50 font-bold">Video Title...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 
                <span className={`${parseInt(percent) >= 50 ? "text-green-700 font-semibold" : "text-red-700 font-semibold"} ${showRes ? " " : "hidden"}`}>{percent}% match</span>
              </span>

              <div className={`w-full font-semibold text-white text-left text-[13px] flex flex-row flex-wrap`}>
                {titleList}
              </div>
            </div>
        </div>

        
        <div className="border-[1px] border-l-white border-t-white border-r-black border-b-black p-1 w-3/4">
          <div className={`border-[1px] border-r-white border-b-white border-l-black border-t-black w-full h-auto flex flex-col justify-center items-center`}>
            <button className="w-full h-[10vh]">
              <textarea value={userTitle} onChange={(e) => setUserTitle(e.target.value)} placeholder="Enter your video title guess here..." className="border-2 text-black  bg-[#FFFFFF] outline-none h-full resize-none px-2 py-1 w-full " />
            </button>
          </div>
        </div>



        <div className="w-3/4 h-auto flex flex-row justify-between items-center">
          <div className="w-1/3 h-auto my-4 flex flex-col justify-center items-center">
            <button
              onClick={handleRefresh}
            >
              <div className={`cursor-pointer w-[80px] sm:w-[100px] border-[1.5px] border-r-[2px] border-l-[2px] border-l-white border-t-white border-r-black border-b-black px-0 py-[0px] flex flex-row justify-center items-center bg-slate-500 active:border-l-black active:border-t-black active:border-r-white active:border-b-white`}>
                  <div className='w-full border-t-[1.5px] border-l-[2.2px] border-l-gray-200 border-t-gray-200 '>
                      <div className={`bg-[#CED0CF] active:bg-yellow-400 border-r-[2.2px] border-b-[1px] border-r-gray-500 border-b-gray-500 px-2  text-[10px] h-[20px] flex flex-row justify-center items-center`}>
                          Refresh
                      </div>
                  </div>
              </div>
            </button>
          </div>
          <div className="w-1/3 h-auto my-4 flex flex-col justify-center items-center">
            <button
              onClick={handleHint}
            >
              <div className={`cursor-pointer w-[80px] sm:w-[100px] border-[1.5px] border-r-[2px] border-l-[2px] border-l-white border-t-white border-r-black border-b-black px-0 py-[0px] flex flex-row justify-center items-center bg-slate-500 active:border-l-black active:border-t-black active:border-r-white active:border-b-white`}>
                  <div className='w-full border-t-[1.5px] border-l-[2.2px] border-l-gray-200 border-t-gray-200 '>
                      <div className={`bg-[#CED0CF] active:bg-orange-400 border-r-[2.2px] border-b-[1px] border-r-gray-500 border-b-gray-500 px-2  text-[10px] h-[20px] flex flex-row justify-center items-center`}>
                          Hint
                      </div>
                  </div>
              </div>
            </button>
          </div>
          <div className="w-1/3 h-auto my-4 flex flex-col justify-center items-center">
            <button
              onClick={handleSubmit}
            >
              <div className={`cursor-pointer w-[80px] sm:w-[100px] border-[1.5px] border-r-[2px] border-l-[2px] border-l-white border-t-white border-r-black border-b-black px-0 py-[0px] flex flex-row justify-center items-center bg-slate-500 active:border-l-black active:border-t-black active:border-r-white active:border-b-white`}>
                  <div className='w-full border-t-[1.5px] border-l-[2.2px] border-l-gray-200 border-t-gray-200 '>
                      <div className={`bg-[#CED0CF] active:bg-green-400 border-r-[2.2px] border-b-[1px] border-r-gray-500 border-b-gray-500 px-2  text-[10px] h-[20px] flex flex-row justify-center items-center`}>
                          Submit
                      </div>
                  </div>
              </div>
            </button>
          </div>
        </div>

      </div>
    </Draggable>
  );
}
