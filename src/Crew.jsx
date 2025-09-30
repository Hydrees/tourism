import { useState } from "react"
import Douglas from "./assets/Pictures/douglas.png"
import Mark from "./assets/Pictures/mark.png"
import Victor from "./assets/Pictures/victor.png"
import Ansari from "./assets/Pictures/ansari.png"
import Crewbg from "./assets/Pictures/crew.jpg"
import Layout from "./Layout"

export default function Crew() {
    const [activeDot, setIsActiveDot] = useState("a")

    return (
        <Layout>
            <main className=" flex flex-col items-center justify-end md:items-start md:justify-center  space-y-10 -mt-20 px-10 text-white  min-h-screen" style={{ backgroundImage: `url(${Crewbg})` }}>
                <div className=" text-center md:text-left md:pl-15 pt-15 md-pt-25">
                    <p className="text-xl"> MEET YOUR CREW</p>
                </div>


                <section className="flex flex-col md:flex-row-reverse items-center gap-5 md:p-30 md:gap-50  md:-mt-50  ">
                    {activeDot === "a" && (<img className="w-50 h-60 md:w-100 md:h-110" src={Douglas}></img>)}
                    {activeDot === "b" && (<img className="w-50 h-60 md:w-100 md:h-110" src={Mark}></img>)}
                    {activeDot === "c" && (<img className="w-50 h-60 md:w-100 md:h-110" src={Victor}></img>)}
                    {activeDot === "d" && (<img className="w-50 h-60 md:w-100 md:h-110" src={Ansari}></img>)}

                    <div className="flex flex-col md:flex-col-reverse   text-center md:text-left text-white gap-5 md:gap-10">
                        <ul className="flex md:flex-row gap-4 md:gap-7 items-center justify-center md:justify-start text-[#D0D6F9] hover:text-white text-lg ">
                            <li onClick={() => setIsActiveDot("a")} className={`cursor-pointer ${activeDot === "a" ? "flex text-[#0B0D17] rounded-full bg-[#FFFFFF] w-5 h-5 items-center justify-center" : "flex text-[#D0D6F9] rounded-full bg-[##0B0D17] w-5 h-5 items-center justify-center border-2 border-gray-500 hover:border-gray-300 hover:text-white"}`}></li>
                            <li onClick={() => setIsActiveDot("b")} className={`cursor-pointer ${activeDot === "b" ? "flex text-[#0B0D17] rounded-full bg-[#FFFFFF] w-5 h-5 items-center justify-center" : "flex text-[#D0D6F9] rounded-full bg-[##0B0D17] w-5 h-5 items-center justify-center border-2 border-gray-500 hover:border-gray-300 hover:text-white"}`}></li>
                            <li onClick={() => setIsActiveDot("c")} className={`cursor-pointer ${activeDot === "c" ? "flex text-[#0B0D17] rounded-full bg-[#FFFFFF] w-5 h-5 items-center justify-center" : "flex text-[#D0D6F9] rounded-full bg-[##0B0D17] w-5 h-5 items-center justify-center border-2 border-gray-500 hover:border-gray-300 hover:text-white"}`}></li>
                            <li onClick={() => setIsActiveDot("d")} className={`cursor-pointer ${activeDot === "d" ? "flex text-[#0B0D17] rounded-full bg-[#FFFFFF] w-5 h-5 items-center justify-center" : "flex text-[#D0D6F9] rounded-full bg-[##0B0D17] w-5 h-5 items-center justify-center border-2 border-gray-500 hover:border-gray-300 hover:text-white"}`}></li>
                        </ul>
                        {activeDot === "a" && (
                            <div className="flex flex-col text-center md:text-left gap-5 md:gap-2">
                                <h3 className="text-[#D0D6F9]">COMMANDER</h3>
                                <h1 className="text-3xl md:text-3xl font-serif md:w-fit text-center md:text-left">DOUGLAS HURLEY</h1>
                                <p className="text-[#D0D6F9] md:w-[400px]">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                            </div>
                        )}
                        {activeDot === "b" && (
                            <div className="flex flex-col text-center md:text-left gap-5 md:gap-2">
                                <h3 className="text-[#D0D6F9]">MISSION SPECIALIST</h3>
                                <h1 className="text-2xl md:text-3xl font-serif md:w-fit text-center md:text-left">MARK SHUTTLEWORTH</h1>
                                <p className="text-[#D0D6F9] md:w-[400px]">Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
                            </div>
                        )}
                        {activeDot === "c" && (
                            <div className="flex flex-col text-center md:text-left gap-5 md:gap-2">
                                <h3 className="text-[#D0D6F9]">PILOT</h3>
                                <h1 className="text-2xl md:text-3xl font-serif md:w-fit text-center md:text-left">VICTOR GLOVER</h1>
                                <p className="text-[#D0D6F9] md:w-[400px]">Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.</p>
                            </div>
                        )}
                        {activeDot === "d" && (
                            <div className="flex flex-col text-center md:text-left gap-5 md:gap-2">
                                <h3 className="text-[#D0D6F9]">FLIGHT ENGINEER</h3>
                                <h1 className="text-2xl md:text-3xl font-serif md:w-fit text-center md:text-left">ANOUSHEH ANSARI</h1>
                                <p className="text-[#D0D6F9] md:w-[400px]">Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.</p>
                            </div>
                        )}


                    </div>
                </section>

            </main>
        </Layout>
    )
}