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
                <Navbar/>
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
            <main className="flex">
                <div className="about-me-font flex flex-col justify-between pl-40 pt-16 space-y-5 w-1/2">
                    <h2 className="text-4xl">ABOUT ME</h2>
                    <p className="about-me-font-2 text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborum.</p>
                    <h2 className="text-3xl">TECH STACK</h2>
                    <h3 className="text-2xl">Languages:</h3>
                    <p className="about-me-font-2 text-2xl">HTML, CSS, JavaScript</p>
                    <h3 className="text-2xl">Frameworks:</h3>
                    <p className="about-me-font-2 text-2xl">Bootstrap, Tailwind CSS, React, Next.js</p>
                    <h3 className="text-2xl">Other:</h3>
                    <p className="about-me-font-2 text-2xl">Git, Linux (Arch, Mint)</p>
                    <h2 className="opacity-50 text-2xl">EXPERIENCE</h2>
                    <h2 className="opacity-50 text-2xl">EDUCATION</h2>
                </div>
                <div className="w-1/2 pl-32 pt-16">
                    <a href="https://github.com/JeffreyCA/lastfm-recently-played-readme"><img
                        src="https://lastfm-recently-played.vercel.app/api?user=makuyoshi&show_user=header&count=7&header_style=compact_stats_only"
                        alt="last.fm scrobbles"
                        className="border-2 border-border-silver rounded-2xl"/>
                    </a>
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
                {/* eslint-disable-next-line @next/next/no-page-custom-font */}
                <link href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap"
                      rel="stylesheet"/>
            </Head>
            <Header/>
            <Main/>
        </>
    )
}

export default AboutMePage;
