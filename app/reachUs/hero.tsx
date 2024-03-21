"use client";

import Image from "next/image";
import Link from "next/link";
import Draggable from "react-draggable";
import user from "../Components/user.png"
import me from "../Components/me.jpeg"
import twitter from "../Components/Twitter icon.png"
import linkedIn from "../Components/Linkedin icon.png"
import youTube from "../Components/YouTube icon.png"

export default function Hero() {
    return(
        <Draggable cancel="button">
            <div className={`absolute top-20 left-[300px] flex max-h-screen min-h-[35vh] h-auto flex-col w-[30vw] min-w-[500px] items-center justify-start gap-2 border-[1px] border-l-white border-t-white border-r-black border-b-black bg-[#CED0CF] px-1`}>
                <div className="mb-1 mt-1 min-w-[395px] w-full h-[5vh] bg-[#070C80] flex flex-row justify-between items-center pl-4 pr-2">
                    <div className="flex flex-row justify-center items-center gap-2">
                        <span>🌲</span>
                        <span className="text-white text-lg">Reach Us</span>
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


                <div className="flex flex-row justify-between items-center w-full mb-4 px-5 h-[10vh] mt-4">
                    <div className="flex flex-row gap-3">
                        <Image src={user} alt="User" className="w-[55px] h-[60px]" />
                        <div className="flex flex-col items-start justify-center text-sm">
                            <span className="text-[#191d9e] text-md underline">AV</span>
                            <span className="font-semibold">Admin User</span>
                            <span className="font-light text-[12px]">aadil@gyaancentral.in</span>
                        </div>
                    </div>
                    <div className="flex flex-row items-center h-full justify-end w-1/3 gap-4">
                        <button>
                        <a href="https://www.youtube.com/@aadilverma100" target="_blank">
                            <Image alt="YouTube" src={youTube} className="h-[30px] w-[30px]" />
                        </a>
                        </button>
                        <button>
                        <a href="https://twitter.com/aadilrverma" target="_blank">
                            <Image alt="Twitter" src={twitter} className="h-[30px] w-[30px]"  />
                        </a>
                        </button>
                        <button>
                        <a href="https://www.linkedin.com/in/aadilverma/" target="_blank">
                            <Image alt="LinkedIn" src={linkedIn} className=" h-[23px] w-[23px]" />
                        </a>
                        </button>
                    </div>
                </div>

                <div className="w-11/12 border-t-[2px] border-t-gray-500 border-b-[1px] border-b-white"></div>

                <div className="flex flex-row justify-between items-center w-full mb-12 px-5 h-[10vh] mt-4">
                    <div className="flex flex-row gap-3">
                        <Image src={me} alt="Me" className="w-[55px] h-[60px] rounded-[12px]" />
                        <div className="flex flex-col items-start justify-center text-sm gap-0">
                            <button>
                            <a href="https://github.com/PrgrmrHarshShukla" target="_blank">
                                <span className="text-[#191d9e] text-md underline">Harsh</span>
                            </a>
                            </button>
                            <span className="font-semibold">Tech Support</span>
                            <span className="font-light text-[12px]">ashuklaharsh2005@gmail.com</span>
                        </div>
                    </div>
                    <div className="flex flex-row items-center h-full justify-end w-1/3 gap-4">   
                        <button>             
                        <a href="https://twitter.com/PrgrmrShukla" target="_blank">
                            <Image alt="Twitter" src={twitter} className="h-[30px] w-[30px]"  />
                        </a>
                        </button>                     
                        <button>
                        <a href="https://www.linkedin.com/in/harsh-shukla-274277255" target="_blank">
                            <Image alt="LinkedIn" src={linkedIn} className="  h-[23px] w-[23px]" />
                        </a>
                        </button>                     
                    </div>
                </div>
            </div>
        </Draggable>
    )
}