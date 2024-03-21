"use client";

import Image from "next/image";
import Link from "next/link";
import Draggable from "react-draggable";
import user from "../Components/user.png"
import twitter from "../Components/Twitter icon.png"
import linkedIn from "../Components/Linkedin icon.png"
import youTube from "../Components/YouTube icon.png"

export default function Hero() {
    return(
        <Draggable cancel="button">
            <div className={`absolute top-8 left-[300px] flex max-h-screen min-h-[70vh] h-auto flex-col w-[30vw] min-w-[600px] items-center justify-start gap-2 border-[1px] border-l-white border-t-white border-r-black border-b-black bg-[#CED0CF] px-1`}>
                <div className="mb-1 mt-1 min-w-[395px] w-full h-[5vh] bg-[#070C80] flex flex-row justify-between items-center pl-4 pr-2">
                    <div className="flex flex-row justify-center items-center gap-2">
                        <span className="border-2 border-black rounded-full w-[20px] h-[20px] flex flex-row justify-center items-center bg-white">ℹ️</span>
                        <span className="text-white text-lg">Origins...</span>
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

                <div className="flex flex-col justify-between items-start h-[60vh] w-11/12">
                    <p className="mb-2 mt-4">YTRobin has a simple mission:</p>

                    <p className="mb-2 font-bold">{`“To be the Robin to your YouTube Channel’s Batman”`}</p> 
                    <p>Currently we want to help you make better Titles & Thumbnails (TTs) in a fun way.TTs can make or break your video.</p> 

                    <div className="flex flex-col justify-center items-start font-bold">
                        <p>Good TT + Good Video = Viral</p>
                        <p>Bad TT + Good Video = 200 view jail</p>
                        <p>Good TT + Bad Video = 100 view jail</p>
                        <p>Bad TT + Bad Video = try harder bruh...</p>
                    </div>

                    <p>Countless times I find myself wondering, </p>

                    <p className=" italic">“I’m 2min into a video...but what did the thumbnail look like that sucked me in??”</p>

                    <p>With this game, my hope is to help you iterate on that art, and make better videos. Because if you won’t make the best shit you can, why even bother?</p>
                </div>

                <div className="w-11/12 border-t-4 border-t-gray-500 border-b-2 border-b-white mb-4"></div>

                <div className="flex flex-row justify-between items-center w-full mb-8 px-6 h-[10vh]">
                    <div className="flex flex-row gap-2">
                        <Image src={user} alt="User" />
                        <div className="flex flex-col items-start justify-center">
                            <button>
                            <a href="https://twitter.com/aadilrverma" target="_blank">
                                <span className="text-[#191d9e] font-semibold text-lg underline">AV</span>
                            </a>
                            </button>
                            <span className="font-light">Admin User</span>
                        </div>
                    </div>
                    {/* <div className="flex flex-row items-end h-full justify-center w-1/3 gap-1">
                        <Image alt="Twitter" src={twitter}  />
                        <Image alt="LinkedIn" src={linkedIn} className="mb-1" />
                        <Image alt="YouTube" src={youTube} />
                    </div> */}
                </div>

            </div>
        </Draggable>
    )
}