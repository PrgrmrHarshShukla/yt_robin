"use client";
type StartProps = {
    name: string
    index: number
}



export const Start: React.FC<StartProps> = (props) => {
    return(
        // <div className="absolute bottom-0 w-screen bg-slate-300 py-[2px] pl-[2px]">
            <div className="cursor-pointer h-full w-[80px] border-[2px] border-r-[2.2px] border-l-white border-t-white border-r-black border-b-black px-0 py-[0px] flex flex-row justify-center items-center bg-[#CED0CF] active:border-l-black active:border-t-black active:border-r-white active:border-b-white text-center">
                <div className='w-full border-t-[2px] border-l-[2px] border-l-gray-200 border-t-gray-200 '>
                    <div className='bg-[#CED0CF] border-r-[2px] border-b-[2px] border-r-gray-500 border-b-gray-500 px-2 flex flex-row justify-center items-center'>
                        {props.name}
                    </div>
                </div>
            </div>





        // </div>
    )
}