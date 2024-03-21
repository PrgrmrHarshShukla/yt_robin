"use client";

import Link from "next/link";

export default function StartPopUp() {
    return(
        <div className="absolute bottom-12 left-1 z-30 border-r-2 border-b-2 border-black h-[150px] w-[200px]">
            <div className="border-r-4 border-b-2 border-gray-500 h-full w-full bg-slate-300 flex flex-col justify-around items-center p-1">
                <Link href="/reachUs" className="flex flex-row justify-start items-center w-11/12 py-1 h-1/3 gap-2 pl-1  active:bg-[#090580]">
                    <span>🌲</span>
                    <span>Reach Us</span>
                </Link>
                <Link href="/about" className="flex flex-row justify-start items-center w-11/12 py-1 h-1/3 gap-2 pl-1  active:bg-[#090580]">
                    <span>📃</span>
                    <span>About</span>
                </Link>
                <div className="w-11/12 border-t-4 border-t-gray-500 border-b-2 border-b-white">

                </div>
                <Link href="/origins" className="flex flex-row justify-start items-center w-11/12 py-1 h-1/3 gap-2 pl-1  active:bg-[#090580]">
                    <span className="border-2 border-black rounded-full w-[20px] h-[20px] flex flex-row justify-center items-center bg-white">ℹ️</span>
                    <span>Origins...</span>
                </Link>
            </div>
        </div>
    )
}