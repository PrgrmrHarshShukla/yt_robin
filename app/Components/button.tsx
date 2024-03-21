"use client";
type StartProps = {
    name: string,
    width: number,
    color: string
}



export const Button: React.FC<StartProps> = (props) => {
    console.log(props);
    return(
        <div className={`cursor-pointer w-[${props.width}vw] border-[3px] border-l-white border-t-white border-r-black border-b-black px-0 py-[0px] flex flex-row justify-center items-center bg-slate-500 active:border-l-black active:border-t-black active:border-r-white active:border-b-white`}>
            <div className='w-full border-t-4 border-l-4 border-l-gray-200 border-t-gray-200 '>
                <div className={`bg-slate-300 active:bg-${props.color} border-r-4 border-b-4 border-r-gray-500 border-b-gray-500 px-2 font-medium`}>
                    {props.name}
                </div>
            </div>
        </div>
    )
}