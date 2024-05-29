import React, {useEffect} from 'react';
import Head from 'next/head';
import Header from "@/components/Header.jsx";
import Socials from "@/components/Socials.jsx"
import 'bootstrap-icons/font/bootstrap-icons.css';
import Image from "next/image";
import {Element} from 'react-scroll'
import {Events} from 'react-scroll';
import Footer from "@/components/Footer.jsx";
import TypingAnimation from "@/components/TypingAnimation.jsx";
import {faCodepen} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

/**
 * Represents the main component of the application.
 * @returns {ReactNode} The rendered JSX elements.
 */
const Main = () => {
    return (
        <>
            <main className="p-72 space-y-80">
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
                <Element name="about" className="element space-y-5">
                    <h1 className="text-3xl opacity-60 ">Let me tell you a bit about myself</h1>
                    <div className="space-x-8 flex flex-row">
                        <p className="text-2xl break-words h-1/2 w-1/2 outline outline-2 outline-stone-600 rounded-xl p-7 shadow-2xl shadow-stone-500/20">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Hello! I’m Max, a front-end developer passionate about crafting beautiful, responsive
                            websites with the latest tech. I focus on design and user experience, ensuring interfaces
                            are both attractive and intuitive. Skilled in HTML, CSS, JavaScript, plus frameworks like
                            React and Next.js, I’m committed to continuous learning to keep pace with industry
                            innovations. Take a look at my portfolio, and let’s connect to explore how we can
                            collaborate!
                        </p>
                        <div className="flex flex-col space-y-7">
                            <div
                                className="text-2xl h-2/3 outline outline-1 outline-stone-600 rounded-xl p-4 shadow-2xl shadow-stone-500/20">
                                <Image className="rounded-2xl" src="" alt="Image" width={300} height={300}>
                                </Image>
                            </div>
                            <div>
                                <p className="text-2xl w-full outline outline-1 outline-stone-600 rounded-xl p-3 shadow-2xl shadow-stone-500/20">
                                    <span className="opacity-50">I’m good at… </span><TypingAnimation/>
                                </p>
                            </div>
                        </div>
                    </div>
                </Element>
                <Element name="projects" className="element">
                    <div className="space-y-5">
                        <h1 className="text-4xl opacity-60">Check out my projects</h1>
                        <div className="flex flex-row space-x-8">
                            {/* Project: Portfolio website*/}
                            <div className="flex flex-col h-1/2 w-full space-y-2 outline outline-1 outline-stone-600 rounded-xl p-5 shadow-2xl shadow-stone-500/20">
                                <h2 className="text-2xl">Portfolio website</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                                <a className="opacity-75 hover:underline" href="https://github.com/makuyoshi/makuyoshi-web">
                                    makuyoshi-web <i className="bi bi-github"></i>
                                </a>
                                <a className="opacity-75 hover:underline" href="https://www.makuyoshi.dev/">
                                    makuyoshi.dev <i className="bi bi-box-arrow-up-right"></i>
                                </a>
                            </div>
                            {/* Project: Highstorm*/}
                            <div className="flex flex-col h-1/2 w-full space-y-2 outline outline-2 outline-stone-600 rounded-xl p-5 shadow-2xl shadow-stone-500/20">
                                <h2 id="project-highstorm" className="text-2xl">Highstorm</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                                <a className="opacity-75 hover:underline" href="https://github.com/makuyoshi/highstorm">
                                    highstorm <i className="bi bi-github"></i>
                                </a>
                                <a className="opacity-75 hover:underline" href="https://highstorm.makuyoshi.dev/">
                                    highstorm.makuyoshi.dev <i className="bi bi-box-arrow-up-right"></i>
                                </a>
                            </div>
                            {/* Project: DC Helper*/}
                            <div className="flex flex-col h-1/2 w-full space-y-2 outline outline-1 outline-stone-600 rounded-xl p-5 shadow-2xl shadow-stone-500/20">
                                <h2 className="text-2xl">DC Helper</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                                <a className="opacity-75">
                                    Private <i className="bi bi-lock-fill"></i></a>
                                <a className="opacity-75 hover:underline" href="https://github.com/makuyoshi/DCHelper-beta">
                                    DCHelper-beta <i className="bi bi-github"></i></a>
                            </div>
                        </div>
                        <div
                            className="flex flex-col text-center w-1/6 outline outline-1 outline-stone-600 rounded-xl p-2 shadow-2xl shadow-stone-500/20 hover:outline-1 hover:outline-stone-400">
                            <a href="#">View more <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </Element>
                <Element name="contact" className="element">
                    <div className="space-y-6">
                    <h1 className="text-4xl opacity-60">Let’s get in touch</h1>
                        <div className="text-xl break-words space-y-6 text-center outline outline-1 outline-stone-900 rounded-xl p-5 shadow-xl shadow-stone-500/20">
                            <div>
                                {/*GitHub*/}
                                <i className="bi bi-github opacity-60"></i>
                                <span className="opacity-75"> Explore my code and projects on GitHub: </span>
                                <a className="hover:underline" href="https://github.com/makuyoshi">
                                    @makuyoshi
                                </a>
                            </div>
                            <div>
                                {/*X*/}
                                <i className="bi bi-twitter-x opacity-75"></i>
                                <span className="opacity-75"> Follow me on X for bite-sized thoughts and updates: </span>
                                <a className="hover:underline" href="https://twitter.com/makuyoshi_dev">
                                    @makuyoshi_dev
                                </a>
                            </div>
                            <div>
                                {/*LinkedIn*/}
                                <i className="bi bi-linkedin opacity-75"></i>
                                <span className="opacity-75"> Let’s connect on LinkedIn and expand our professional networks: </span>
                                <a className="hover:underline" href="#">

                                </a>
                            </div>
                            <div>
                                {/*Telegram*/}
                                <i className="bi bi-telegram opacity-75"></i>
                                <span className="opacity-75"> Reach out to me on Telegram for direct messaging: </span>
                                <a className="hover:underline" href="#">

                                </a>
                            </div>
                            <div>
                                {/*Mail*/}
                                <i className="bi bi-envelope-fill opacity-75"></i>
                                <span className="opacity-75"> Drop me an email for collaboration or just to say hello: </span>
                                <a className="hover:underline" href="mailto:hello@makuyoshi.dev">
                                    contact@makuyoshi.dev
                                </a>
                            </div>
                            <div>
                                {/*CodePen*/}
                                <FontAwesomeIcon icon={faCodepen} className="opacity-75"/>
                                <span className="opacity-75"> Explore my creative side on CodePen: </span>
                                <a className="hover:underline" href="https://codepen.io/makuyoshi">
                                    @makuyoshi
                                </a>
                            </div>
                            <div>
                                {/*LeetCode*/}
                                <i className="bi bi-code-slash opacity-75"></i>
                                <span className="opacity-75"> Solving coding puzzles? Check out my LeetCode profile: </span>
                                <a className="hover:underline" href="https://leetcode.com/u/makuyoshi/">
                                    makuyoshi
                                </a>
                            </div>
                        </div>
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
                <link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&amp;display=swap" rel="stylesheet"/>
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
