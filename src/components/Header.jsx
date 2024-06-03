import React from "react";
import {Link} from 'react-scroll'

const Header = () => {
    return (
        <>
            <header className="">
                <nav className="flex flex-row justify-center pt-4 p-4 w-full text-2xl space-x-32 fixed text-stone-400">
                    <div className="flex flex-row space-x-8 outline outline-1 rounded-2xl p-2 bg-black shadow-sm shadow-stone-500/20 animate-fade-down animate-once animate-delay-200 animate-ease-out">
                        <Link href="/#hello" activeClass="active" className="text-stone-600" to="hello" spy={true} smooth={true} offset={-200} duration={500}>hello</Link>
                        <Link href="/#about" activeClass="active" className="text-stone-600" to="about" spy={true} smooth={true} offset={-120} duration={500}>about</Link>
                        <Link href="/#projects" activeClass="active" className="text-stone-600" to="projects" spy={true} smooth={true} offset={-120} duration={500}>projects</Link>
                        <Link href="/#contact" activeClass="active" className="text-stone-600" to="contact" spy={true} smooth={true} offset={-120} duration={500}>contact</Link>
                    </div>
                    <Link href="#" className="outline outline-1 rounded-2xl p-2 bg-black shadow-stone-300 shadow hover:scale-105 hover:cursor-not-allowed animate-fade-down animate-once animate-delay-200 animate-ease-out">
                        blog<i className="bi bi-arrow-right-short"></i>
                    </Link>
                </nav>
            </header>
        </>
    )
}

export default Header;