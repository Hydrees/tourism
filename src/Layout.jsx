import Navbar from "./NavBar"

export default function Layout({ children, bgClass = "" }) {
    return (
        <div className={`min-h-screen w-full ${bgClass} bg-no-repeat bg-center bg-cover`}>
            <Navbar />
            <main>{children}</main>
        </div>
    )
}