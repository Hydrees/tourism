import { useState } from "react"
import Vehicle from "./assets/Pictures/vehicle.jpg"
import Port from "./assets/Pictures/port.jpg"
import Capsule from "./assets/Pictures/capsule.jpg"
import Techbg from "./assets/Pictures/tech.jpg"
import Layout from "./Layout"

export default function Technology() {
    const [activeNumber, setIsActiveNumber] = useState("1")


    return (
        <Layout>
            <main className="flex flex-col items-center justify-end md:items-start space-y-10 -mt-20 p-5 md:pl-1 text-white min-h-screen" style={{ backgroundImage: `url(${Techbg})` }}>
                <div className=" text-center md:text-left md:pl-20">
                    <p className="text-xl"> SPACE LAUNCH 101</p>
                </div>


                <section className="flex flex-col md:flex-row-reverse items-center gap-7 md:pl-30 md:gap-80  md:  ">
                    {activeNumber === "1" && (<img className="w-full h-50 md:w-100 md:h-90" src={Vehicle}></img>)}
                    {activeNumber === "2" && (<img className="w-full h-50 md:w-100 md:h-90" src={Port}></img>)}
                    {activeNumber === "3" && (<img className="w-full h-50 md:w-100 md:h-90" src={Capsule}></img>)}

                    <div className="flex flex-col md:flex-row  text-center md:text-left text-white gap-5 md:gap-10">
                        <ul className="flex md:flex-col gap-5 md:gap-7 items-center justify-center md:justify-start text-[#D0D6F9] hover:text-white text-lg ">
                            <li onClick={() => setIsActiveNumber("1")} className={`cursor-pointer ${activeNumber === "1" ? "flex text-[#0B0D17] rounded-full bg-[#FFFFFF] w-12 h-12 items-center justify-center" : "flex text-[#D0D6F9] rounded-full bg-[##0B0D17] w-12 h-12 items-center justify-center border-2 border-gray-500 hover:border-gray-300 hover:text-white"}`}>1</li>
                            <li onClick={() => setIsActiveNumber("2")} className={`cursor-pointer ${activeNumber === "2" ? "flex text-[#0B0D17] rounded-full bg-[#FFFFFF] w-12 h-12 items-center justify-center" : "flex text-[#D0D6F9] rounded-full bg-[##0B0D17] w-12 h-12 items-center justify-center border-2 border-gray-500 hover:border-gray-300 hover:text-white"}`}>2</li>
                            <li onClick={() => setIsActiveNumber("3")} className={`cursor-pointer ${activeNumber === "3" ? "flex text-[#0B0D17] rounded-full bg-[#FFFFFF] w-12 h-12 items-center justify-center" : "flex text-[#D0D6F9] rounded-full bg-[##0B0D17] w-12 h-12 items-center justify-center border-2 border-gray-500 hover:border-gray-300 hover:text-white"}`}>3</li>
                        </ul>
                        {activeNumber === "1" && (
                            <div className="flex flex-col text-center md:text-left gap-3 md:gap-2">
                                <h3 className="text-[#D0D6F9]">THE TERMINOLOGY...</h3>
                                <h1 className="text-3xl md:text-3xl font-serif md:w-fit text-center md:text-left">LAUNCH VEHICLE</h1>
                                <p className="text-[#D0D6F9] md:w-[400px] text-sm md:text-base">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 meters tall, it's quite an awe-inspiring sight on the launch.</p>
                            </div>
                        )}
                        {activeNumber === "2" && (
                            <div className="flex flex-col text-center md:text-left gap-5 md:gap-2">
                                <h3 className="text-[#D0D6F9]">THE TERMINOLOGY...</h3>
                                <h1 className="text-3xl md:text-3xl font-serif md:w-fit text-center md:text-left">SPACEPORT</h1>
                                <p className="text-[#D0D6F9] md:w-[400px] text-sm md:text-base">A spaceport or cosmodrome is a site for launching (or receiving)spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.</p>
                            </div>
                        )}
                        {activeNumber === "3" && (
                            <div className="flex flex-col text-center md:text-left gap-5 md:gap-2">
                                <h3 className="text-[#D0D6F9]">THE TERMINOLOGY...</h3>
                                <h1 className="text-3xl md:text-3xl font-serif md:w-fit text-center md:text-left">SPACE CAPSULE</h1>
                                <p className="text-[#D0D6F9] md:w-[400px] text-sm md:text-base">A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
                            </div>
                        )}


                    </div>
                </section>

            </main>
        </Layout>
    )
}