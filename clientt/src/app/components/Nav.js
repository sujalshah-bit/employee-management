export default function Nav(){
    return(
        <>
            <nav className="w-full text-white bg-black py-4 px-2">
                <div className="xl:w-[1200px] m-auto flex justify-between items-center">
                    <h1 className="md:text-xl">Employee Manger</h1>
                    <div className="flex gap-[20px] md:text-xl">
                        <button  className="w-[60px] md:w-[100px] md:h-[40px] rounded-2xl  bg-white text-black hover:bg-gray-600 hover:text-white"> Sign In </button>
                        <button className="w-[60px] md:w-[100px] md:h-[40px] rounded-2xl  bg-white text-black hover:bg-gray-600 hover:text-white"> Log In</button>
                    </div>
                </div>
            </nav>
        </>
    )
}