"use client";

import Link from "next/link";
import Draggable from "react-draggable";

export default function Hero() {
    return(
        <Draggable cancel="button">
            <div className={`absolute top-20 left-[300px] flex max-h-screen min-h-[60vh] h-auto flex-col w-[30vw] min-w-[600px] items-center justify-start gap-2 border-[1px] border-l-white border-t-white border-r-black border-b-black bg-[#CED0CF] px-1 text-left`}>
                <div className="mb-1 mt-1 min-w-[395px] w-full h-[5vh] bg-[#070C80] flex flex-row justify-between items-center pl-4 pr-2">
                    <div className="flex flex-row justify-center items-center gap-2">
                        <span>📃</span> 
                        <span className="text-white text-lg">About</span>
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
                    <h1>Release Notes</h1>
                </div>
                <div className="w-11/12 border-t-[2px] border-t-gray-500 border-b-[1px] border-b-white "></div>
                <div className="w-full px-6">
                    <div className="font-bold text-lg">
                        v0.0.1 - 20.03.24
                    </div>
                    <div className="text-md">
                        Our very first public version lets you use our curated catalogue of 50+ thumbnails, play the guessing game on them and learn more about what made them so popular. 
                        <p className="mt-2">
                            More varied thumbnails from across niches and formats coming soon.
                        </p>
                    </div>
                </div>

                <div className="w-11/12 border-t-[2px] border-t-gray-500 border-b-[1px] border-b-white"></div>
                <div className="w-full px-6 text-left">
                    <div className="font-bold text-lg">                        
                        v0.0.2 (Upcoming)
                    </div>
                    <div className="text-md">
                        AI assistance while guessing to help you better understand what makes a great Title. 
                    </div>
                </div>
                <div className="w-11/12 border-t-[2px] border-t-gray-500 border-b-[1px] border-b-white"></div>


            </div>
        </Draggable>
    )
}