"use client";


export const OriginsBar = () => {
    return(
        // <div className="absolute bottom-0 w-screen bg-slate-300 py-[2px] pl-[2px]">
            <div className="cursor-pointer w-[120px]  border-[2px] border-r-[3.5px]  border-l-[3.5px]border-r-white border-b-white border-l-black border-t-black px-0 py-[0px] flex flex-row justify-center items-center bg-slate-500 active:border-l-black active:border-t-black active:border-r-white active:border-b-white text-center">
                <div className='w-full border-t-4 border-l-4 border-l-gray-200 border-t-gray-200 '>
                    <div className='bg-[#CED0CF] border-r-[2.5px] border-b-[2px]  border-r-gray-500 border-b-gray-500 flex-row flex justify-center items-center gap-1 px-2 '>
                        <span className="border-2 border-black rounded-full w-[20px] h-[20px] flex flex-row justify-center items-center bg-white">ℹ️</span>
                        Origins
                    </div>
                </div>
            </div>





        // </div>
    )
}