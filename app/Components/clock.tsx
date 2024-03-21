"use client";

import Image from "next/image";
import satellite from "../Components/image 8.png"
import { useEffect, useState } from "react";


export default function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
          setTime(new Date());
        }, 1000);
      
        return () => clearInterval(interval);
    }, []);
      


    return(
        <div className="cursor-pointer w-[120px] border-[2px] border-r-[3.5px]  border-l-[3.5px] border-r-white border-b-white border-l-black border-t-black px-0 py-[0px] flex flex-row justify-center items-center bg-slate-500 active:border-l-black active:border-t-black active:border-r-white active:border-b-white text-center">
                <div className='w-full  '>
                    <div className='bg-[#CED0CF] border-r-[2.5px] border-b-[2px] border-r-gray-500 border-b-gray-500 px-2 font-medium text-md flex flex-row justify-center items-center gap-2'>
                        <Image src={satellite} alt="Icon" />
                        <span>{`${time.getHours()} : ${time.getMinutes() < 10 ? `0${time.getMinutes()}` : `${time.getMinutes()}`}`}</span>
                    </div>
                </div>
            </div>


    )
}