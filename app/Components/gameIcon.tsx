"use client";

import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.css'
import Image from "next/image";
import largeIcon from "../Components/iconL.png"


export default function GameIcon() {


    return(
        <Link href="/game">
            <div className="flex flex-col justify-center items-center gap-1">
                <Image src={largeIcon} alt="Icon" className="w-[50px] h-[50px]" />
                <span className="text-[13px] text-white">WutsThatTitle??</span>
            </div>
        </Link>
    )
}