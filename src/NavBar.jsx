import { NavLink, Link } from "react-router-dom";
import { useState } from "react"
import Logo from "./assets/Pictures/logo.svg"

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    function handleClick() {
        setIsOpen(prev => !prev)
    }

    return (
        <nav className="flex sticky w-full top-0 z-50 items-center justify-between bg-transparent text-white shadow-sm px-5 pt-7  ">

            <NavLink
                to="/">
                <img src={Logo} />
            </NavLink>

            <div className=" hidden md:block flex-1 border-t border-white mx-6"></div>

            {/*navbar links*/}
            <ul className="hidden md:flex space-x-6 px-10 py-2 font-thin text-md text-white font-medium bg-black/50">

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

            {isOpen && (<ul className="absolute top-16 left-20  bg-black/50 flex flex-col items-center gap-4 py-4 text-md text-black p-5 font-medium md:hidden rounded-md shadow-md">

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
                    <li>Crew</li></NavLink>
                <NavLink
                    to="/Technology"
                    className={({ isActive }) => isActive ? "text-white font-black border-b-3 " : "text-white"}>
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