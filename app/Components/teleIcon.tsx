"use client";

import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.css'
import Image from "next/image";
import largeIcon from "../Components/tele.png"


export default function TeleIcon() {


    return(
        <Link href="/ttSupport">
            <div className="flex flex-col justify-center items-center gap-1">
                <Image src={largeIcon} alt="Icon" className="w-[50px] h-[50px]" />
                <span className="text-[13px] text-white">TT Support</span>
            </div>
        </Link>
    )
}