import React from 'react';
import Head from 'next/head';
import Link from "next/link";
import FooterExtended from "@/components/FooterExtended.jsx";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'font-awesome/css/font-awesome.min.css';

const Header = () => {
    return (
        <>
            <header className="
            flex flex-row justify-center space-x-16 p-4 text-1xl
            xl:flex xl:flex-row xl:justify-center xl:p-5 xl:text-3xl xl:space-x-96">
                <h1 id="header-brand">makuyoshi.dev / about</h1>
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
            </header>
        </>
    )
}

const Main = () => {
    return (
        <>
            <main className="flex">
                <div className=" flex flex-col justify-between space-y-7 pl-6 pt-10 mr-10 mb-10
                about-me-font xl:flex xl:flex-col xl:justify-between xl:pl-40 xl:pt-16 xl:space-y-5 xl:w-1/2 xl:mb-32">
                    <h2 className="text-3xl xl:text-4xl">ABOUT ME</h2>
                    <p className="about-me-font-2 text-xl xl:text-2xl">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Hi there! 👋 My name is Max. I'm a 19-year-old student from the Czech Republic.<br/> I'm currently trying to master the art of web development. More specifically, I'm learning various JavaScript frameworks like Next.js and React Native.<br/> I spend most of my free time developing various web applications that come to my mind.<br/>Apart from that, I like to listen to 70's progressive rock and read fantasy books.
                    </p>
                    <h2 className="text-3xl xl:text-3xl">TECH STACK</h2>
                    <h3 className="text-2xl xl:text-2xl">Languages</h3>
                    <p className="about-me-font-2 text-2xl xl:text-2xl"><a href="https://html.spec.whatwg.org/" className="hover:underline">HTML</a>, <a href="https://www.w3.org/TR/CSS/#css" className="hover:underline">CSS</a>, <a href="https://ecma-international.org/publications-and-standards/standards/ecma-262/" className="hover:underline">JavaScript</a>
                    </p>
                    <h3 className="text-2xl xl:text-2xl">Frontend Development</h3>
                    <p className="about-me-font-2 text-2xl xl:text-2xl"><a href="https://getbootstrap.com/" className="hover:underline">Bootstrap</a>, <a href="https://tailwindcss.com/" className="hover:underline">Tailwind</a>, <a href="https://react.dev/" className="hover:underline">React</a>, <a href="https://nextjs.org/" className="hover:underline">Next.js</a>
                    </p>
                    <h3 className="text-2xl xl:text-2xl">Backend Development</h3>
                    <a href="https://nodejs.org/en" className="about-me-font-2 hover:underline text-2xl xl:text-2xl">Node.js
                    </a>
                    <h3 className="text-2xl xl:text-2xl">Other</h3>
                    <p className="about-me-font-2 text-2xl xl:text-2xl"><a href="https://git-scm.com/" className="hover:underline">Git</a>, <a href="https://github.com/torvalds/linux" className="hover:underline">GNU/Linux</a>
                    </p>
                    <h2 className="opacity-50 text-3xl xl:text-3xl">EXPERIENCE</h2>
                    <h2 className="opacity-50 text-3xl xl:text-3xl">EDUCATION</h2>
                </div>
                <div className="hidden xl:w-1/2 xl:pl-32 xl:pt-16 xl:block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
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
            <FooterExtended />
        </>
    )
}

export default AboutMePage;
