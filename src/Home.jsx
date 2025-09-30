import React from "react"
import Deskhome from "./assets/Pictures/deskhome.jpg"
import Mobilehome from "./assets/Pictures/mobilehome.jpg"
import Layout from "./Layout";


export default function Home() {
    const mobile = "bg-[url('./assets/Pictures/mobilehome.jpg')]";
    const desktop = "bg-[url('./assets/Pictures/deskhome.jpg')]";

    const bgClass = `${mobile} md:${desktop} h-screen`;
    return (
        <Layout bgClass={bgClass}>
            <section className=" flex flex-col md:flex-row  items-center  justify-center md:items-end md:justify-center  h-screen  bg-cover bg-no-repeat w-full gap-15  md:gap-20 p-3 mb-15 -mt-15 md:-mt-20  md:p-10  md:space-x-80   md: ">
                <div className="flex flex-col p-  text-center md:text-left text-white gap-6 ">
                    <h2 className="text-lg text-[#D0D6F9]">SO, YOU WANT TO TRAVEL TO</h2>
                    <h1 className="text-7xl md:text-9xl md:w-fit font-serif font-thin">SPACE</h1>
                    <p className="text-lg md:text-base md:w-[400px] text-[#D0D6F9]">Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we will give you a truly out of this world experience!</p>
                </div>
                <div>
                    <div className=" flex text-[#0B0D17] rounded-full bg-[#FFFFFF] w-40 h-40 items-center justify-center ">
                        <h1 className="text-xl font-serif">EXPLORE</h1>
                    </div>
                </div>
            </section>
        </Layout>
    )
}