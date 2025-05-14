import { useEffect } from "react"

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen])

    return <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-xl font-bold text-white bg-[rgba(10,10,10,0.3)] px-10 py-2 rounded-full">D.C. <span className="text-blue-500  transition duration-500 ease-in-out bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-500 hover:from-yellow-500 hover:to-orange-600">García</span></a>
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>
                <div className="hidden md:flex items-center space-x-8 bg-[rgba(10,10,10,0.3)] px-10 py-2 rounded-full">
                    <a href="#home" className="from-gray-300 to-gray-300 transition duration-500 ease-in-out bg-clip-text text-transparent bg-gradient-to-r  hover:from-yellow-500 hover:to-orange-600"> Home </a>
                    <a href="#about" className="from-gray-300 to-gray-300 transition duration-500 ease-in-out bg-clip-text text-transparent bg-gradient-to-r hover:from-yellow-500 hover:to-orange-600"> About </a>
                    <a href="#projects" className="from-gray-300 to-gray-300 transition duration-500 ease-in-out bg-clip-text text-transparent bg-gradient-to-r hover:from-yellow-500 hover:to-orange-600"> Projects </a>
                    <a href="#contact" className="from-gray-300 to-gray-300 transition duration-500 ease-in-out bg-clip-text text-transparent bg-gradient-to-r hover:from-yellow-500 hover:to-orange-600"> Contact </a>
                </div>
            </div>
        </div>
    </nav>
}