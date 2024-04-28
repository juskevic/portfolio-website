import React from 'react';
import Head from 'next/head';
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
    return (
        <>
            <header className="
            flex flex-row justify-center space-x-16 p-4 text-1xl
            xl:flex xl:flex-row xl:justify-center xl:p-5 xl:text-3xl xl:space-x-96">
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
                    <span className="hover:underline">about me</span>
                </a>
                <a className="relative group opacity-50" href="#">
                    <span>projects</span>
                </a>
                <a className="relative group opacity-50" href="#">
                    <span>blog</span>
                </a>
                <a className="relative group opacity-50" href="#">
                    <span>contact</span>
                </a>
            </nav>
        </>
    )
}

const Main = () => {
    return (
        <>
            <main className="
            flex justify-start pl-10 pt-16
            xl:flex xl:justify-start xl:pl-52 xl:pt-32">
                <div className="space-y-3">
                    <h2 className="text-3xl xl:text-4xl">Hi there! 👋</h2>
                    <p className="text-5xl xl:text-6xl">
                        <TypeAnimation
                            style={{ whiteSpace: 'pre-line' }}
                            sequence={[
                                `My name is Max,\n and I'm a Web Developer.`,
                                7000,
                                `I'm currently learning \nJavaScript`,
                                7000,
                                `I'm currently learning \nReact`,
                                7000,
                                `I'm currently learning \nBootstrap`,
                                7000,
                                `I'm currently learning \nTailwind`,
                                7000,
                                `I'm currently learning \nNext.js`,
                                7000
                            ]}
                            cursor={true}
                            speed={40}
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
                <title>Index | makuyoshi.dev</title>

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
