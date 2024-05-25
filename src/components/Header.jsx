import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <>
            <header className="">
                <nav className="flex flex-row justify-center pt-2 p-1 xl:p-4 w-full text-lg xl:text-2xl space-x-3 xl:space-x-32 fixed">
                    <div className="flex flex-row space-x-2 xl:space-x-10 outline outline-1 rounded-2xl p-2 bg-bg-eerie shadow-2xl">
                        <p>about</p>
                        <p>experience</p>
                        <p>projects</p>
                        <p>contact</p>
                    </div>
                    <Link href="#" className="outline outline-1 rounded-2xl p-2 bg-bg-eerie shadow-2xl">
                        blog<i className="bi bi-arrow-right-short"></i>
                    </Link>
                </nav>
            </header>
        </>
    )
}

export default Header;