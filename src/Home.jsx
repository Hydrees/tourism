export default function Home() {
    return (
        <section className="flex flex-col md:flex-row items-center  justify-center  min-h-screen bg-gradient-to-r from-[#0B0D17] to-[#D0D6F9] gap-15 p-3 -mt-10 md:p-30 md:-mt-15 md:space-x-80 ">
            <div className="flex flex-col p-  text-center md:text-left text-white gap-7">
                <h2 className="text-xl text-[#D0D6F9]">SO, YOU WANT TO TRAVEL TO</h2>
                <h1 className="text-8xl md:text-9xl md:w-fit font-serif font-thin">SPACE</h1>
                <p className="text-lg md:text-base md:w-[400px] text-[#D0D6F9]">Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we will give you a truly out of this world experience!</p>
            </div>
            <div>
                <div className=" flex text-[#0B0D17] rounded-full bg-[#FFFFFF] w-40 h-40 items-center justify-center ">
                    <h1 className="text-xl font-serif">EXPLORE</h1>
                </div>
            </div>
        </section>
    )
}