import React from 'react';
import Head from 'next/head';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'font-awesome/css/font-awesome.min.css';
import Link from "next/link";

const Header = () => {
    return (
        <>
            <header className="
            flex flex-row justify-center space-x-16 p-4 text-1xl
            xl:flex xl:flex-row xl:justify-center xl:p-5 xl:text-3xl xl:space-x-96">
                <h1 id="header-brand">makuyoshi.dev / about</h1>
                <Navbar />
            </header>
        </>
    )
}

const Navbar = () => {
    return (
        <>
            <nav className="
            space-x-4
            xl:space-x-10">
                <Link href="/" className="hover:underline">
                    home
                </Link>
                <Link href="#" className="hover:underline">
                    contact
                </Link>
            </nav>
        </>
    )
}

const Main = () => {
    return (
        <>
            <main>
                <div className="flex flex-col justify-between pl-40 pt-16 text-2xl space-y-3">
                    <h2>ABOUT ME</h2>
                        <p>...About me text</p>
                    <h2>TECH STACK</h2>
                        <h3>Languages:</h3>
                            <p>HTML, CSS, JavaScript</p>
                        <h3>Frameworks:</h3>
                            <p>Bootstrap, Tailwind CSS, React, Next.js</p>
                        <h3>Other:</h3>
                            <p>Git, Linux (Arch, Mint)</p>
                    <h2>EXPERIENCE</h2>
                    <h2>EDUCATION</h2>
                </div>
                <div>
                    {/*Last.fm*/}
                </div>
            </main>
        </>
    )
}

const AboutMePage = () => {
    return (
        <>
            <Head>
                <title>About | makuyoshi.dev</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                {/* eslint-disable-next-line @next/next/no-page-custom-font */}
                <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap" rel="stylesheet"/>
                {/* eslint-disable-next-line @next/next/no-page-custom-font */}
                <link href="https://fonts.googleapis.com/css2?family=Exo:wght@300&display=swap" rel="stylesheet"/>
                {/* eslint-disable-next-line @next/next/no-page-custom-font */}
                <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet"/>
            </Head>
            <Header/>
            <Main/>
        </>
    )
}

export default AboutMePage;
