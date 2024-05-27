import React, {useEffect} from 'react';
import Head from 'next/head';
import Header from "@/components/Header.jsx";
import Socials from "@/components/Socials.jsx"
import 'bootstrap-icons/font/bootstrap-icons.css';
import Image from "next/image";
import {Element} from 'react-scroll'
import {Events} from 'react-scroll';
import Footer from "@/components/Footer.jsx";

const Main = () => {
    return (
        <>
            <main className="p-60 space-y-60">
                <Element name="hello" className="element flex flex-row justify-start text-4xl">
                    <div className="">
                        <div>
                            <h1 className="bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent">
                                Max Yushkevich
                            </h1>
                            <h2 className="opacity-50">Front-end web developer</h2>
                            <Socials/>
                        </div>
                    </div>
                    <div className="pl-32">
                        <Image src="/makuyoshiLogo.png" className="rounded-full object-cover shadow-2xl shadow-stone-500/20" alt="Profile" height="150"
                               width="150"/>
                    </div>
                </Element>
                <Element name="about" className="element">
                    <div className="space-y-5">
                        <h1 className="text-3xl opacity-60 ">Let me tell you a bit about myself</h1>
                        <p className="text-2xl break-words w-full md:w-1/2 outline outline-1 outline-stone-600 rounded-xl p-5 shadow-2xl shadow-stone-500/20">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Hi, I’m Max. I’m a front-end web developer. I specialise in creating beautiful and responsive websites using modern technologies. I love design and user experience, so I try to create visually appealing and intuitive interfaces. I’ve worked with HTML, CSS, JavaScript, and various front-end frameworks such as React and Next.js. I’m always learning and improving my skills to stay up-to-date with the latest trends and technologies in the industry. Feel free to check out my portfolio and get in touch if you have any questions or want to work together.
                        </p>
                    </div>
                </Element>
                <Element name="projects" className="element">
                    <div className="space-y-5">
                        <h1 className="text-4xl opacity-60">Check out my projects</h1>
                        <div className="flex flex-row space-x-20">
                            <div
                                className="flex flex-col justify-start space-y-2 outline outline-1 outline-stone-600 rounded-xl p-5 shadow-2xl shadow-stone-500/20">
                                <h2 className="text-2xl">Portfolio website</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                                <a className="opacity-75">makuyoshi-web <i className="bi bi-github"></i></a>
                                <a className="opacity-75">makuyoshi.dev <i className="bi bi-box-arrow-up-right"></i></a>
                            </div>
                            <div
                                className="flex flex-col justify-start space-y-2 outline outline-1 outline-stone-600 rounded-xl p-5 shadow-2xl shadow-stone-500/20">
                                <h2 className="text-2xl">Highstorm</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                                <a className="opacity-75" href="https://github.com/makuyoshi/highstorm">highstorm <i className="bi bi-github"></i></a>
                                <a className="opacity-75">highstorm.makuyoshi.dev <i className="bi bi-box-arrow-up-right"></i></a>
                            </div>
                            <div
                                className="flex flex-col justify-start space-y-2 outline outline-1 outline-stone-600 rounded-xl p-5 shadow-2xl shadow-stone-500/20">
                                <h2 className="text-2xl">DC Helper</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                </Element>
                <Element name="contact" className="element">
                    <div className="space-y-5">
                        <h1 className="text-4xl opacity-60">Contact</h1>
                        <p className="text-2xl break-words w-full md:w-1/2 outline outline-1 rounded-xl p-5 opacity-50">
                            Under construction ⚒️
                        </p>
                    </div>
                </Element>
            </main>
        </>
    )
}

const HomePage = () => {
    useEffect(() => {
        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);

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
