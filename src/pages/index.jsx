import React from 'react';
import Head from 'next/head';

const Header = () => {
    return (
        <>
            <div className="flex items-center justify-center">
                <header className="flex flex-col sm:flex-row justify-start items-center p-4">
                    <h1 id="header-brand"
                        className="text-2xl sm:text-4xl md:text-4xl mr-10 text-amber-50">makuyoshi.dev</h1>
                    <nav className="pt-2">
                        <a className="text-amber-50 text-xl sm:text-3xl p-4 hover:underline" href="#">
                            About
                        </a>
                        <a className="text-amber-50 text-xl sm:text-3xl p-4 hover:underline" href="#">
                            Projects
                        </a>
                    </nav>
                </header>
            </div>

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
        </>
    );
};

export default HomePage;
