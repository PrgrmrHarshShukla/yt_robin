"use client";

import { useEffect, useState } from "react";
import data from "./data";
import { Button } from "./button";

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
  const [close, setClose] = useState(false);
  const [closeControl, setCloseControl] = useState(false);
  const [resStat, setResStat] = useState<string>("");
  const [percent, setPercent] = useState<any>("...");

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

      // console.log("Date:", dateStr);
      setPublishedOn(dateStr)



      
    }
    getData()
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
    setClose(p => p ? false : true);
  }, [closeControl])

  const wait = async (ms: any) => {
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setResStat("show");

    if(userTitle == ""){
      alert("Please enter a title.")
      return;
    }

    try {
      const apiUrl = 'http://localhost:3000/api/compare';
      const reqBody = {
        userTitle,
        orgTitle: title
      }
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqBody),
      });
      const response = await res.json();
      if(response.percent.length > 5){
        response.percent = response.percent.substring(response.percent.length - 5);
        response.percent = response.percent.slice(0, -1);
      }
      setPercent(response.percent);       
    } 
    catch (error: any) {
      console.log("OpenAI API error:\n", error.message);      
    }

  }

  const handleRefresh = async (e: any) => {
    e.preventDefault();
    setResStat("hide")
    setChange(prev => !prev)
  }

  const handleClose = async () => {
    setCloseControl(p => !p);
  }






  return (
    <div className={`${close ? "hidden" : ""} draggable flex max-h-screen min-h-[70vh] h-auto flex-col w-[95vw] min-w-[450px] sm:w-[30vw] items-center justify-center gap-2 border-[1px] border-l-white border-t-white border-r-black border-b-black bg-slate-400 -mt-20`}>

      <div className="mb-1 mt-1 w-[94.6vw] sm:w-[29.6vw] mx-[0.2vw] h-[5vh] bg-blue-900 flex flex-row justify-between items-center pl-4 pr-2">
        <span className="text-white text-xl">Thumbnails</span>
        <div 
          onClick={handleClose}
          className='w-[2vw] border-t-[3px] border-l-[3px] border-l-gray-200 border-t-gray-200 cursor-pointer  active:border-l-black active:border-t-black'
        >
            <div className='bg-slate-300 border-r-[3px] w-full h-full  active:border-r-white active:border-b-white border-b-[3px] border-r-gray-500 border-b-gray-500 font-medium pl-[7px]'>
              X
            </div>
        </div>
      </div>

      <div className="w-[95vw] sm:w-[21vw] h-auto flex flex-col gap-2 justify-center items-start border-[1px] border-l-white border-t-white border-r-black border-b-black p-1">
        <img src={url} alt="" className="w-[95vw] sm:w-[21vw] h-[25vh] overflow-hidden" />
        <div className="flex flex-row justify-center items-center gap-2">
          <img src={dpUrl} className="bg-white rounded-full w-[5vh] h-[5vh]" />
          <div className="flex flex-col justify-center items-start text-[12px] gap-0.2 opacity-50 font-bold">
            <div>{channelName}</div>
            <div>{publishedOn}</div>
          </div>
        </div>
      </div>

      

      <div className="border-[1px] border-l-white border-t-white border-r-black border-b-black p-1 flex flex-col justify-center items-center w-[95vw] sm:w-[21vw] h-[14vh]">        
          <div className={` flex flex-col justify-center items-center w-[95vw] sm:w-[40vw]`}>
            <span>
              <span className="font-semibold">Video Title...&nbsp;</span> 
              <span className={`${parseInt(percent.slice(0, -1)) > 50 ? "text-green-700 font-semibold" : "text-red-700 font-semibold"} ${showRes ? " " : "hidden"}`}>{percent} match</span>
            </span>
            <p className={`w-[95vw] sm:w-[20vw] text-center ${showRes ? "" : "blur-sm"}`}>
              {title}
            </p>
          </div>
      </div>

      
      <div className="border-[1px] border-l-white border-t-white border-r-black border-b-black p-1">
        <div className={`border-[1px] border-r-white border-b-white border-l-black border-t-black w-[95vw] sm:w-[20.4vw] h-auto flex flex-col justify-center items-center`}>
          <textarea value={userTitle} onChange={(e) => setUserTitle(e.target.value)} placeholder="Enter your video title guess here..." className="border-2  bg-slate-300 outline-none h-[10vh] resize-none px-2 py-1 w-full " />
        </div>
      </div>



      <div className="w-[95vw] sm:w-[20vw] h-auto flex flex-row justify-between items-center">
        <div className="w-{1/3} h-auto my-4 flex flex-col justify-center items-center">
          <button
            onClick={handleRefresh}
          >
            <Button 
              name="Refresh" 
              width={6} 
              color="yellow-400"
            />
          </button>
        </div>
        <div className="w-{1/3} h-auto my-4 flex flex-col justify-center items-center">
          <button
          >
            <Button 
              name="Hint" 
              width={6} 
              color="red-800"
            />
          </button>
        </div>
        <div className="w-{1/3} h-auto my-4 flex flex-col justify-center items-center">
          <button
            onClick={handleSubmit}
          >
            <Button 
              name="Submit" 
              width={5.2} 
              color="green-300"
            />
          </button>
        </div>
      </div>

    </div>
  );
}
