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
                            <h1 className="bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent animate-fade-left animate-once bold">
                                Max Yushkevich
                            </h1>
                            <h2 className="text-stone-500 animate-fade-right animate-once">Front-end web developer</h2>
                            <Socials/>
                        </div>
                    </div>
                    <div className="pl-32 animate-fade-left animate-once animate-delay-200 animate-ease-out">
                        <Image src="/Profile_avatar_placeholder_large.png" className="rounded-full object-cover shadow-2xl shadow-stone-500/20 outline outline-3 outline-stone-600" alt="Profile" height="150" width="150"/>
                    </div>
                </Element>
                <Element name="about" className="element space-y-5 animate-fade-right animate-once animate-delay-500 animate-ease-out">
                    <h1 className="text-3xl opacity-70">Let me tell you a bit about myself 👇</h1>
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
                                className="text-2xl h-2/3 rounded-xl p-4 shadow-2xl shadow-stone-500/20 outline outline-1 outline-stone-600">
                                <Image className="rounded-2xl" src="" alt="Image" width={300} height={300}>
                                </Image>
                            </div>
                            <div>
                                <p className="text-2xl w-full outline outline-1 outline-stone-600 rounded-xl p-3 shadow-2xl shadow-stone-500/20">
                                    <span className="opacity-50">skills include… </span><TypingAnimation/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex flex-col space-y-1 w-2/3 outline outline-1 outline-stone-600 rounded-xl p-5 shadow-2xl shadow-stone-500/20">
                        <h2 className="text-2xl opacity-70">Latest blog posts </h2>
                        <div className="flex justify-between items-center p-2 opacity-90">
                            <h3 className="text-lg">31.12.2024</h3>
                            <div className="border w-2/3 border-stone-800 rounded-xl"></div>
                            <h3 className="text-lg text-right">Coming soon <i className="bi bi-arrow-up-right opacity-40"></i></h3>
                        </div>
                        <div className="flex justify-between items-center p-2 opacity-70">
                            <h3 className="text-lg">31.12.2024</h3>
                            <div className="border w-2/3 border-stone-800 rounded-xl"></div>
                            <h3 className="text-lg text-right">Coming soon <i className="bi bi-arrow-up-right opacity-40"></i></h3>
                        </div>
                        <div className="flex justify-between items-center p-2 opacity-50">
                            <h3 className="text-lg">31.12.2024</h3>
                            <div className="border w-2/3 border-stone-800 rounded-xl"></div>
                            <h3 className="text-lg text-right">Coming soon <i className="bi bi-arrow-up-right opacity-40"></i></h3>
                        </div>
                        <div className="flex justify-between items-center p-2 opacity-20">
                            <h3 className="text-lg">31.12.2024</h3>
                            <div className="border w-2/3 border-stone-800 rounded-xl"></div>
                            <h3 className="text-lg text-right">Coming soon <i className="bi bi-arrow-up-right opacity-40"></i></h3>
                        </div>
                    </div>
                    <div> {/*remove later*/}
                        <div
                            className="flex flex-col text-center">
                            <div className="text-stone-500 text-center">
                                About Me section is still under development <i
                                className="bi bi-exclamation-circle align-middle"></i>
                            </div>
                        </div>
                    </div>
                </Element>
                <Element name="projects" className="element">
                    <div className="space-y-5">
                        <h1 className="text-4xl opacity-70">Check out my projects ✨</h1>
                        <div className="flex flex-row space-x-8">
                            {/* Project: Highstorm*/}
                            <div className="flex flex-col h-1/2 w-full space-y-4 outline outline-1 outline-stone-600 rounded-xl p-6 shadow-2xl shadow-stone-500/20">
                                <div className="flex flex-row justify-between">
                                    <h2 id="project-highstorm" className="text-2xl">Highstorm</h2>
                                    <a className="outline outline-1 rounded-2xl w-8 text-2xl pl-1 hover:text-gray-900 hover:bg-stone-50"
                                       href="https://highstorm.makuyoshi.dev/">
                                        <i className="bi bi-arrow-up-right"></i>
                                    </a>
                                </div>
                                <p>
                                    Highstorm is a web application that I developed in 2024. It was my first attempt at
                                    utilising an API, and it was built using Bootstrap. The app shows basic weather info
                                    for a given location, including temperature, humidity, clouds, sunset, and sunrise.
                                </p>
                            </div>
                            {/*Project: Portfolio Website*/}
                            <div className="flex flex-col h-1/2 w-full space-y-2 outline outline-2 outline-stone-600 rounded-xl p-6 shadow-2xl shadow-stone-500/20">
                                <div className="flex flex-row justify-between">
                                    <h2 className="text-2xl">Portfolio Website</h2>
                                    <a className="outline outline-1 rounded-2xl w-8 text-2xl pl-1 hover:text-gray-900 hover:bg-stone-50"
                                       href="https://www.makuyoshi.dev/">
                                        <i className="bi bi-arrow-up-right"></i>
                                    </a>
                                </div>
                                <p>
                                    My portfolio website is the first front-end project I have undertaken. Initially
                                    developed using basic HTML and CSS, it has since been enhanced with the use of
                                    modern frameworks such as Next.js and React. It incorporates multiple JavaScript
                                    libraries to achieve a contemporary look and feel. I am delighted with the result
                                    and continue to work on it to this day, despite having made over 500 commits.
                                </p>
                            </div>
                            {/* Project: Vycetka*/}
                            <div
                                className="flex flex-col h-1/2 w-full space-y-2 outline outline-1 outline-stone-600 rounded-xl p-5 shadow-2xl shadow-stone-500/20">
                                <div className="flex flex-row justify-between">
                                    <Image src="/header-nav-vycatkaLogo.png" alt="vycetka logo" width={220}
                                           height={220}></Image>
                                    <a className="outline outline-1 rounded-2xl w-8 text-2xl pl-1 hover:text-gray-900 hover:bg-stone-50"
                                       href="https://vycetka.makuyoshi.dev/">
                                        <i className="bi bi-arrow-up-right"></i>
                                    </a>
                                </div>
                                <p>
                                    This is an accounting tool build using Bootstrap that allows you to count the amount
                                    of banknotes and coins that are in your cash register.
                                </p>
                            </div>
                        </div>
                    </div>
                </Element>
                <Element name="contact" className="element">
                    <div className="space-y-6">
                        <h1 className="text-4xl opacity-70 pb-6">Let’s get in touch</h1>
                        {/*Main container*/}
                        <div className="flex flex-row justify-center space-x-8 w-6/7 text-xl break-words p-5">
                            {/*Right side*/}
                            <div className="space-y-5">
                                <div>
                                    <i className="bi bi-github"></i>
                                    <span className="opacity-90"> Take a look at my code and projects. </span>
                                </div>
                                <div>
                                    <i className="bi bi-stack-overflow"></i>
                                    <span className="opacity-90"> Visit my Stack Overflow for my coding contributions and queries. </span>
                                </div>
                                <div>
                                    <i className="bi bi-linkedin"></i>
                                    <span className="opacity-90"> Let’s connect on LinkedIn and expand our professional networks. </span>
                                </div>
                                <div>
                                    <i className="bi bi-telegram"></i>
                                    <span className="opacity-90"> Contact me on Telegram for direct messaging. </span>
                                </div>
                            </div>
                            {/*Left side*/}
                            <div className="space-y-5">
                                <div>
                                    <a className="hover:underline text-right" href="https://github.com/makuyoshi">
                                        <button
                                            className="outline outline-1 pl-3 pr-3 rounded-2xl align-middle hover:text-gray-900 hover:bg-stone-50">
                                            GITHUB <i className="bi bi-arrow-up-right"></i>
                                        </button>
                                    </a>
                                </div>
                                <div>
                                    <a className="hover:underline"
                                       href="https://stackoverflow.com/users/21579330/makuyoshi">
                                        <button
                                            className="outline outline-1 pl-3 pr-3 rounded-2xl align-middle hover:text-gray-900 hover:bg-stone-50">
                                            STACK OVERFLOW <i className="bi bi-arrow-up-right"></i>
                                        </button>
                                    </a>
                                </div>
                                <div>
                                    <a className="hover:underline" href="#">
                                        <button
                                            className="outline outline-1 pl-3 pr-3 rounded-2xl align-middle hover:text-gray-900 hover:bg-stone-50">
                                            LINKED IN <i className="bi bi-arrow-up-right"></i>
                                        </button>
                                    </a>
                                </div>
                                <div>
                                    <a className="hover:underline" href="#">
                                        <button
                                            className="outline outline-1 pl-3 pr-3 rounded-2xl align-middle hover:text-gray-900 hover:bg-stone-50">
                                            TELEGRAM <i className="bi bi-arrow-up-right"></i>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center space-x-4 text-lg opacity-80">
                            <a className="hover:underline" href="https://codepen.io/makuyoshi">
                                <button
                                    className="outline outline-1 pl-3 pr-3 rounded-2xl align-middle hover:text-gray-900 hover:bg-stone-50">
                                    CODEPEN <i className="bi bi-arrow-up-right"></i>
                                </button>
                            </a>
                            <a className="hover:underline" href="https://leetcode.com/u/makuyoshi/">
                                <button
                                    className="outline outline-1 pl-3 pr-3 rounded-2xl align-middle hover:text-gray-900 hover:bg-stone-50">
                                    LEETCODE <i className="bi bi-arrow-up-right"></i>
                                </button>
                            </a>
                            <a className="hover:underline" href="https://www.hackerrank.com/profile/makuyoshi">
                                <button
                                    className="outline outline-1 pl-3 pr-3 rounded-2xl align-middle hover:text-gray-900 hover:bg-stone-50">
                                    HACKERRANK <i className="bi bi-arrow-up-right"></i>
                                </button>
                            </a>
                        </div>
                        <div className="text-stone-500 text-center">
                            Contact section is still under development <i
                            className="bi bi-exclamation-circle align-middle"></i>
                        </div>
                    </div>
                </Element>
            </main>
        </>
    )
}

/**
 * Represents the home page of the portfolio website.
 * @function HomePage
 *
 * @returns {JSX.Element} The home page component.
 */
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
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <title>Max's Portfolio</title>

                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

                <meta name="description"
                      content="Max's amazing portfolio website ✨"/>
                <meta name="robots" content="index, follow"/>
                <link rel="canonical" href="https://www.makuyoshi.dev"/>
                <link rel="alternate" hrefLang="en-us" href="https://wwww.makuyoshi.dev"/>
                <link rel="icon" href="/coffee-9.gif" />

                <meta property="og:title" content="Max's Portfolio"/>
                <meta property="og:description" content="Max's amazing portfolio website ✨"/>
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
