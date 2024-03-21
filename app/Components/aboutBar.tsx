"use client";


export const AboutBar = () => {
    return(
        <div className="cursor-pointer w-[110px] border-[2px] border-r-[3.5px]  border-l-[3.5px] border-r-white border-b-white border-l-black border-t-black px-0 py-[0px] flex flex-row justify-center items-center bg-slate-500 active:border-l-black active:border-t-black active:border-r-white active:border-b-white text-center">
            <div className='w-full'>
                <div className='bg-[#CED0CF] border-r-[2.5px] border-b-[2px]  border-r-gray-500 flex-row flex justify-center items-center gap-1 border-b-gray-500 px-2 '>
                    <span>📃</span>
                    <span>About</span>
                </div>
            </div>
        </div>
    )
}