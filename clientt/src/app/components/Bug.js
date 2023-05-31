import { RxCross2 } from "react-icons/rx"
export default function Success({message}){
    return(
        <>
            <div className="w-full p-2 bg-yellow-50 font-medium flex justify-center items-center gap-3 border-2 border-red-300 mb-5">{message} <RxCross2 color="red"/></div>
        </>
    )
}