import React from 'react';
import Head from 'next/head';

const Header = () => {
    return (
        <>
            <header className="flex flex-row justify-center space-x-0 p-8 text-3xl">
                <h1 id="header-brand" className="pr-5">makuyoshi.dev /</h1>
                <nav className="space-x-7 text-2xl">
                    <a className="hover:underline" href="#">
                        <span>about me</span>
                    </a>
                    <a className="hover:underline" href="#">
                        <span>projects</span>
                    </a>
                </nav>
            </header>
        </>
    )
}

const Main = () => {
    return (
        <>
            <main>
                <div>
                    <h2>Hi there 👋</h2>
                    <p>Hi, my name is Max and Im a web developer.</p>
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
            </Head>
            <Header/>
            <Main/>
        </>
    );
};

export default HomePage;
