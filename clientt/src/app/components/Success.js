import { AiOutlineCheck } from "react-icons/ai"
export default function Success({message}){
    return(
        <>
            <div className="w-full p-2 bg-yellow-50 font-medium flex justify-center items-center gap-3 border-2 border-green-300 mb-5">{message} <AiOutlineCheck color="green"/></div>
        </>
    )
}