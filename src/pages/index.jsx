import React from 'react';
import Head from 'next/head';
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx"
import 'bootstrap-icons/font/bootstrap-icons.css';

const Main = () => {
    return (
        <>
            <main className="p-60 space-y-60">
                <div id="hello" className="flex flex-row justify-start text-4xl">
                    <div className="">
                        <h1 className="bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent">Max Yushkevich</h1>
                        <h2 className="opacity-50">Front-end web developer</h2>
                    </div>
                    <div>
                        <img src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" className="rounded-full h-24 w-24 object-cover" alt="Profile"/>
                    </div>
                </div>
                <div id="about">...</div>
                <div id="projects">...</div>
                <div id="contact">...</div>
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

                <meta name="description"
                      content="Makuyoshi's portfolio website build using Next.js ✨"/>
                <meta name="robots" content="index, follow"/>
                <link rel="canonical" href="https://www.makuyoshi.dev"/>
                <link rel="alternate" hrefLang="en-us" href="https://wwww.makuyoshi.dev"/>

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
                {/* eslint-disable-next-line @next/next/no-page-custom-font */}
                <link href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap"
                      rel="stylesheet"/>
                {/* eslint-disable-next-line @next/next/no-page-custom-font */}
                <link href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap" rel="stylesheet"/>
            </Head>
            <Header/>
            <Main/>
            <Footer/>
        </>
    );
};

export default HomePage;
