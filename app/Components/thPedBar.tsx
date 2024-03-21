"use client";

import Image from "next/image";
import icon from "../Components/book.png"


export const ThPedBar = () => {
    return(
        // <div className="absolute bottom-0 w-screen bg-slate-300 py-[2px] pl-[2px]">
            <div className="cursor-pointer w-[140px] border-[2px] border-r-[3.5px]  border-l-[3.5px] border-r-white border-b-white border-l-black border-t-black px-0 py-[0px] flex flex-row justify-center items-center bg-slate-500 active:border-l-black active:border-t-black active:border-r-white active:border-b-white text-center">
                <div className='w-full  '>
                    <div className='bg-[#CED0CF] border-r-[2.5px] border-b-[2px] border-r-gray-500 border-b-gray-500 px-2 font-medium text-md flex flex-row justify-center items-center gap-1'>
                        <Image src={icon} alt="Icon" className="w-[19px] h-[19px]" />
                        <span>ThumbPedia</span>
                    </div>
                </div>
            </div>





        // </div>
    )
}