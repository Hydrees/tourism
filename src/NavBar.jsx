import { NavLink, Link } from "react-router-dom";
import { useState } from "react"
import Logo from "./assets/Pictures/logo.svg"

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    function handleClick() {
        setIsOpen(prev => !prev)
    }

    return (
        <nav className="flex sticky w-full top-0 z-50 items-center justify-between bg-[#0B0D17] text-white shadow-sm px-10 py-10">

            <NavLink
                to="/">
                <img src={Logo} />
            </NavLink>

            <div className="flex-1 border-t border-white mx-6"></div>

            {/*navbar links*/}
            <ul className="hidden md:flex space-x-6 px-10 text-md text-green-800 font-medium bg-transparent">

                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "text-white font-black border-b-3 " : "text-white"}>
                    <li>Home</li>
                </NavLink>

                <NavLink
                    to="/Destination"
                    className={({ isActive }) => isActive ? "text-white font-black border-b-3 " : "text-white"}>
                    <li>Destination</li>
                </NavLink>
                <NavLink
                    to="/Crew"
                    className={({ isActive }) => isActive ? "text-white font-black border-b-3 " : "text-white"}>
                    <li>Crew</li>
                </NavLink>
                <NavLink
                    to="/Technology"
                    className={({ isActive }) => isActive ? "text-white font-black border-b-3 " : "text-white"}>
                    <li>Technology</li></NavLink>

            </ul>

            {isOpen && (<ul className="absolute top-16 left-20  bg-white flex flex-col items-center gap-4 py-4 text-md text-green-800 p-5 font-medium md:hidden rounded-md shadow-md">

                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "text-green-900 font-black border-b-3 " : "text-gray-700"}>
                    <li>Home</li>
                </NavLink>

                <NavLink
                    to="/Destination"
                    className={({ isActive }) => isActive ? "text-green-900 font-black border-b-3 " : "text-gray-700"}>
                    <li>Destination</li>
                </NavLink>
                <NavLink
                    to="/Crew"
                    className={({ isActive }) => isActive ? "text-green-900 font-black border-b-3 " : "text-gray-700"}>
                    <li>Crew</li></NavLink>
                <NavLink
                    to="/Technology"
                    className={({ isActive }) => isActive ? "text-green-900 font-black border-b-3 " : "text-gray-700"}>
                    <li>Technology</li>
                </NavLink>


            </ul>

            )}

            <div onClick={handleClick} className="flex items-center ">
                {/*navbar buttons*/}

                <div className="md:hidden">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox=" 0 0 25 25"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>

            </div>



        </nav>
    )
}