import { useState } from "react"
import Moon from "./assets/Pictures/moon.png"
import Mars from "./assets/Pictures/mars.png"
import Europa from "./assets/Pictures/europa.png"
import Titan from "./assets/Pictures/titan.png"


export default function Destination() {
    const [activeList, setIsActiveList] = useState("moon")

    return (
        <main className="space-y-10  p-10 text-white  bg-[#0B0D17] min-h-screen">
            <div className=" text-center md:text-left md:pl-15">
                <p className="text-xl"> PICK YOUR DESTINATION</p>
            </div>


            <section className="flex flex-col md:flex-row items-center gap-5 md:p-20 md:space-x-70 md:px-50 md:-mt-25  ">
                {activeList === "moon" && (<img className="w-30 h-30 md:w-70 md:h-70" src={Moon}></img>)}
                {activeList === "mars" && (<img className="w-30 h-30 md:w-70 md:h-70" src={Mars}></img>)}
                {activeList === "europa" && (<img className="w-30 h-30 md:w-70 md:h-70" src={Europa}></img>)}
                {activeList === "titan" && (<img className="w-30 h-30 md:w-70 md:h-70" src={Titan}></img>)}
                <div className="flex flex-col   text-center md:text-left text-white gap-5">

                    <ul className="flex gap-4 items-center justify-center md:justify-start text-[#D0D6F9]  text-lg ">
                        <li onClick={() => setIsActiveList("moon")} className={`cursor-pointer ${activeList === "moon" ? "text-white underline" : "text-[#D0D6F9] hover:underline hover:text-white"}`}>MOON</li>
                        <li onClick={() => setIsActiveList("mars")} className={`cursor-pointer ${activeList === "mars" ? "text-white underline" : "text-[#D0D6F9] hover:underline hover:text-white"}`}>MARS</li>
                        <li onClick={() => setIsActiveList("europa")} className={`cursor-pointer ${activeList === "europa" ? "text-white underline" : "text-[#D0D6F9] hover:underline hover:text-white"}`}>EUROPA</li>
                        <li onClick={() => setIsActiveList("titan")} className={`cursor-pointer ${activeList === "titan" ? "text-white underline" : "text-[#D0D6F9] hover:underline hover:text-white"}`}>TITAN</li>
                    </ul>
                    {activeList === "moon" && (
                        <div className="flex flex-col text-center md:text-left gap-5">
                            <h1 className="text-6xl text-center md:text-left">MOON</h1>
                            <p className="text-[#D0D6F9] text-sm">See our planet as you've never seen if before. A perfect relaxing trip away to help regain perspective and come back refreshed. while you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                        </div>
                    )}
                    {activeList === "mars" && (
                        <div className="flex flex-col text-center md:text-left gap-5">
                            <h1 className="text-6xl text-center md:text-left">MARS</h1>
                            <p className="text-[#D0D6F9]">Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest.</p>
                        </div>
                    )}
                    {activeList === "europa" && (
                        <div className="flex flex-col text-center md:text-left gap-5">
                            <h1 className="text-6xl text-center md:text-left">EUROPA</h1>
                            <p className="text-[#D0D6F9]">The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
                        </div>
                    )}
                    {activeList === "titan" && (
                        <div className="flex flex-col text-center md:text-left gap-5">
                            <h1 className="text-6xl text-center md:text-left">TITAN</h1>
                            <p className="text-[#D0D6F9]">The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
                        </div>
                    )}

                    <div className="flex-1 border-t border-gray-500 mx-6"></div>

                    {activeList === "moon" && (
                        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-5">
                            <div>
                                <p className="text-[#D0D6F9]">AVG. DISTANCE</p>
                                <h2 className="text-3xl">384,400 KM</h2>
                            </div>
                            <div>
                                <p className="text-[#D0D6F9]">EST. TRAVEL TIME</p>
                                <h2 className="text-3xl">3 DAYS</h2>
                            </div>
                        </div>
                    )}
                    {activeList === "mars" && (
                        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-5">
                            <div>
                                <p className="text-[#D0D6F9]">AVG. DISTANCE</p>
                                <h2 className="text-3xl">225 MIL. KM</h2>
                            </div>
                            <div>
                                <p className="text-[#D0D6F9]">EST. TRAVEL TIME</p>
                                <h2 className="text-3xl">9 MONTHS</h2>
                            </div>
                        </div>
                    )}
                    {activeList === "europa" && (
                        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-5">
                            <div>
                                <p className="text-[#D0D6F9]">AVG. DISTANCE</p>
                                <h2 className="text-3xl">628 MIL. KM</h2>
                            </div>
                            <div>
                                <p className="text-[#D0D6F9]">EST. TRAVEL TIME</p>
                                <h2 className="text-3xl">3 YEARS</h2>
                            </div>
                        </div>
                    )}
                    {activeList === "titan" && (
                        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-5">
                            <div>
                                <p className="text-[#D0D6F9]">AVG. DISTANCE</p>
                                <h2 className="text-3xl">1.6 BIL. KM</h2>
                            </div>
                            <div>
                                <p className="text-[#D0D6F9]">EST. TRAVEL TIME</p>
                                <h2 className="text-3xl">7 YEARS</h2>
                            </div>
                        </div>
                    )}
                </div>
            </section>

        </main>


    )
}