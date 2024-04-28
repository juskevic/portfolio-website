import React from 'react';
import Head from 'next/head';
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
    return (
        <>
            <header className="flex flex-row justify-center space-x-96 p-5 text-3xl">
                <h1 id="header-brand">makuyoshi.dev</h1>
                <Navbar />
            </header>
        </>
    )
}

const Navbar = () => {
    return (
        <>
            <nav className="space-x-10">
                <a className="relative group" href="#">
                    <span>about me</span>
                    <span
                        className="absolute bottom-0.5 left-0 w-0 h-0.5 bg-bg-silver transition-all group-hover:w-full"></span>
                </a>
                <a className="relative group" href="#">
                    <span>projects</span>
                    <span
                        className="absolute bottom-0.5 left-0 w-0 h-0.5 bg-bg-silver transition-all group-hover:w-full"></span>
                </a>
                <a className="relative group" href="#">
                    <span>blog</span>
                    <span
                        className="absolute bottom-0.5 left-0 w-0 h-0.5 bg-bg-silver transition-all group-hover:w-full"></span>
                </a>
                <a className="relative group" href="#">
                    <span>contact</span>
                    <span
                        className="absolute bottom-0.5 left-0 w-0 h-0.5 bg-bg-silver transition-all group-hover:w-full"></span>
                </a>
            </nav>
        </>
    )
}

const Main = () => {
    return (
        <>
            <main className="flex justify-start pl-52 pt-32">
                <div className="space-y-3">
                    <h2 className="text-4xl">Hi there! 👋</h2>
                    <p className="text-6xl">
                        <TypeAnimation
                            style={{ whiteSpace: 'pre-line' }}
                            sequence={[
                                `My name is Max,\n and I'm a Web Developer.`,
                                6000,
                                `Welcome to \nmy portfolio website!`,
                                6000,
                                `Take a look at my Projects! \n (the link is not working yet)`,
                                6000,
                                `Thanks for visiting 💖`,
                                6000
                            ]}
                            cursor={false}
                            speed={30}
                            repeat={Infinity}
                        />
                    </p>
                </div>
            </main>
        </>
    )
}

const HomePage = () => {
    return (
        <>
            <Head>
                <title>Home Page | makuyoshi.dev</title>

                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta property="og:title" content="Makuyoshi.dev"/>
                <meta property="og:description" content="Makuyoshi's portfolio website build using Next.js"/>
                <meta property="og:url" content="https://makuyoshi.dev"/>

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
    );
};

export default HomePage;
