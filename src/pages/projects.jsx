import React from 'react';
import Head from 'next/head';
import Link from "next/link";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'font-awesome/css/font-awesome.min.css';

const Header = () => {
    return (
        <>
            <header className="
            flex flex-row justify-center space-x-16 p-4 text-1xl
            xl:flex xl:flex-row xl:justify-center xl:p-5 xl:text-3xl xl:space-x-96">
                <h1 id="header-brand">makuyoshi.dev / projects</h1>
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
            </nav>
        </>
    )
}

const Main = () => {
    return (
        <>
            <main className="flex">
                <div className=" flex flex-col justify-between space-y-7 pl-6 pt-10 mr-10 mb-10
                about-me-font xl:flex xl:flex-col xl:justify-between xl:pl-40 xl:pt-16 xl:space-y-10 xl:w-1/2 xl:mb-32">
                    <div className="space-y-3">
                        <h2 className="text-3xl xl:text-4xl">Portfolio Website</h2>
                        <h1 className="text-xl">Next.js | Tailwind | React</h1>
                        <p className="about-me-font-2 text-xl xl:text-2xl">...My website</p>
                    </div>
                    <div className="space-y-3">
                        <h2 className="text-3xl xl:text-4xl">Highstorm Weather</h2>
                        <h1 className="text-xl">Bootstrap</h1>
                        <p className="about-me-font-2 text-xl xl:text-2xl">...About</p>
                    </div>
                    <div className="space-y-3">
                        <h2 className="text-3xl xl:text-4xl">DC Helper</h2>
                        <h1 className="text-xl">React Native</h1>
                        <p className="about-me-font-2 text-xl xl:text-2xl">...</p>
                    </div>
                </div>
            </main>
        </>
    )
}

const ProjectsPage = () => {
    return (
        <>
            <Head>
                <title>Projects | makuyoshi.dev</title>

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

export default ProjectsPage;

