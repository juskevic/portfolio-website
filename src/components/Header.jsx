import React from "react";
import {Link} from 'react-scroll'

/**
 * Represents the Header component.
 *
 * @returns {React.Component} The rendered component.
 */
const Header = () => {
    return (
        <>
            <header>
                <nav className="flex flex-row justify-center pt-5 w-full text-xl fixed z-50 scroll xl:pt-6 xl:p-4 xl:w-full xl:text-xl xl:space-x-20
                text-stone-400">
                    <div className="flex flex-row space-x-5 p-2 xl:p-2 xl:space-x-8
                    bg-stone-950 outline outline-1 outline-stone-400 rounded-2xl shadow-2xl shadow-stone-500/20
                    animate-fade-down animate-once animate-delay-200 animate-ease-out">
                        <Link href="/#hello" activeClass="active" to="hello" spy={true} smooth={true} offset={-200} duration={500}>hello</Link>
                        <Link href="/#about" activeClass="active" to="about" spy={true} smooth={true} offset={-120} duration={500}>about</Link>
                        <Link href="/#projects" activeClass="active" to="projects" spy={true} smooth={true} offset={-120} duration={500}>projects</Link>
                        <Link href="/#contact" activeClass="active" to="contact" spy={true} smooth={true} offset={-120} duration={500}>contact</Link>
                    </div>
                    {/*Blog button is HIDDEN from mobile view!! fix later pls :)*/}
                    <Link href="#" className="hidden xl:p-2 xl:block
                    bg-stone-950 outline outline-1 outline-stone-400 rounded-2xl shadow-2xl shadow-stone-500/20
                    hover:scale-105 hover:cursor-not-allowed
                    animate-fade-down animate-once animate-delay-200 animate-ease-out
                    brightness-50">
                        blog<i className="bi bi-arrow-right-short"></i>
                    </Link>
                </nav>
            </header>
        </>
    )
}

export default Header;