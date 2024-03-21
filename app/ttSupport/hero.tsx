"use client";

import Image from "next/image";
import Link from "next/link";
import Draggable from "react-draggable";
import icon from "../Components/tele.png"

export default function Hero() {
    return(
        <Draggable cancel="button">
            <div className={`absolute top-20 left-[300px] flex max-h-screen min-h-[40vh] h-auto flex-col w-[30vw] min-w-[600px] items-center justify-start gap-2 border-[1px] border-l-white border-t-white border-r-black border-b-black bg-[#CED0CF] px-1 text-left`}>
                <div className="mb-1 mt-1 min-w-[395px] w-full h-[5vh] bg-[#070C80] flex flex-row justify-between items-center pl-4 pr-2">
                    <div className="flex flex-row justify-center items-center gap-2">
                        <Image src={icon} alt="ThumbPedia" className="w-[20px] h-[20px]" />
                        <span className="text-white text-lg">TT Support <span className="text-[12px]">(wip)</span></span>
                    </div>
                    <button className='w-[25px] h-[25px] border-t-[3px] border-l-[3px] border-l-gray-200 border-t-gray-200 cursor-pointer  active:border-l-black active:border-t-black'>
                    <Link 
                        href="/"
                        
                    >
                        <div className='bg-[#CED0CF] border-r-[3px] w-full h-full  active:border-r-white active:border-b-white border-b-[3px] border-r-gray-500 border-b-gray-500 font-medium flex flex-row justify-center items-center'>
                            <span>X</span>
                        </div>
                    </Link>
                    </button>
                </div>


                <div className="w-full text-left px-6 text-xl font-bold mt-2">
                    <h1>COMING SOON</h1>
                </div>
                <div className="w-11/12 border-t-[2px] border-t-gray-500 border-b-[1px] border-b-white "></div>
                <div className="w-full px-6">
                    <div className="mb-2">
                        Title & Thumbnail Support
                    </div>
                    <div className="text-md">
                        Your all-in-one solution to learning all things Titles and Thumbnails. A mini university for the one thing your videos need to reach the viewers they deserve
                        <p className="mt-2">
                            Coming later this 2024...
                        </p>
                    </div>
                </div>

                
                
                <div className="w-11/12 border-t-[2px] border-t-gray-500 border-b-[1px] border-b-white"></div>


            </div>
        </Draggable>
    )
}