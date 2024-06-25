import React, {useEffect} from 'react';
import Head from 'next/head';
import Image from "next/image";
import {Element, Events} from 'react-scroll';

// Header/Footer components
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

// Contacts components
import Contacts from "@/components/Contacts.jsx";

// Content Components
import LatestBlogPosts from "@/components/LatestBlogPosts.jsx";
import Projects from "@/components/Projects.jsx";

// Animation components
import TypingAnimation from "@/components/TypingAnimation.jsx";
import Socials from "@/components/Socials.jsx";

const Main = () => {
    return (
        <>
            <main className="p-6 pt-60 space-y-56 xl:p-64 xl:space-y-80">

                <Element name="hello" className="element flex flex-row justify-center text-3xl xl:text-4xl">
                    <div>
                        <div>
                            <h1 className="text-stone-300 animate-fade-left animate-once bold">
                                Max Yushkevich
                            </h1>
                            <h2 className="text-stone-600 animate-fade-right animate-once text-2xl xl:text-3xl xl:pb-2">
                                Front-end Web Developer
                            </h2>
                            <Socials/>
                        </div>
                    </div>
                    <div className="hidden xl:pl-24 xl:block animate-fade-left animate-delay-200 animate-ease-out">
                        <Image src="/helloAvatar.jpg" className="rounded-full object-cover shadow-2xl shadow-stone-500/20 outline outline-2 outline-stone-300" alt="Profile" height="150" width="150"/>
                    </div>
                </Element>

                <Element name="about" className="element space-y-6 xl:space-y-10 animate-fade-down animate-once animate-delay-500 animate-ease-out">
                    <h1 className="text-center text-xl xl:text-3xl">Let me tell you a bit about myself 👇</h1>
                    <div className="flex flex-col justify-center space-x-0 xl:space-x-8 xl:space-y-0 space-y-8 xl:flex-row">
                        <div className="flex flex-col w-full space-y-10 xl:w-1/2 xl:space-y-8
                        animate-fade-right animate-once animate-delay-500 animate-ease-out">
                            <div>
                                <p className="
                                text-lg p-5
                                xl:text-xl xl:p-5
                                bg-stone-950 outline outline-1 outline-stone-500 rounded-xl shadow-2xl shadow-stone-500/20">
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    Hello! I’m Max, a front-end developer passionate about crafting beautiful,
                                    responsive
                                    websites with the latest tech. I focus on design and user experience, ensuring
                                    interfaces
                                    are both attractive and intuitive. Skilled in HTML, CSS, JavaScript, plus frameworks
                                    like
                                    React and Next.js, I’m committed to continuous learning to keep pace with industry
                                    innovations. Take a look at my portfolio, and let’s connect to explore how we can
                                    collaborate!
                                </p>
                            </div>
                            <div className="flex flex-col p-5
                                bg-stone-950 outline outline-1 outline-stone-500 rounded-xl shadow-2xl shadow-stone-500/20">
                                <LatestBlogPosts/>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-8 xl:flex xl:flex-col xl:space-y-8
                        animate-fade-left animate-once animate-delay-500 animate-ease-out">
                            <div>
                                <p className="text-2xl w-full p-3 bg-stone-950 outline outline-1 outline-stone-500 rounded-xl shadow-2xl shadow-stone-500/20">
                                    <span className="opacity-65">I work with… </span><TypingAnimation/>
                                </p>
                            </div>
                            <div
                                className="text-2xl h-1/2 bg-stone-950 outline outline-1 outline-stone-500 rounded-xl shadow-2xl shadow-stone-500/20">
                                <Image className="rounded-2xl" src="" alt="Image" width={300} height={300}>
                                </Image>
                            </div>
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
                    <Projects  />
                </Element>

                <Element name="contact" className="element space-y-8">
                    <h1 className="text-left text-2xl xl:text-4xl pb-6">Let’s get in touch 👋</h1>
                    <Contacts />
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
    })

    return (
        <>
            <Head>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <title>Max Yushkevich</title>

                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>


                <meta name="description"
                      content="Max's amazing portfolio website ✨"/>
                <meta name="robots" content="index, follow"/>
                <link rel="canonical" href="https://www.makuyoshi.dev"/>
                <link rel="alternate" hrefLang="en-us" href="https://wwww.makuyoshi.dev"/>
                <link rel="icon" href="/coffee-9.gif"/>

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
                <link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&amp;display=swap"
                      rel="stylesheet"/>
                {/* eslint-disable-next-line @next/next/no-page-custom-font */}
                <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet"/>
                {/* eslint-disable-next-line @next/next/no-page-custom-font */}
                <link href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap"
                      rel="stylesheet"/>
                {/* eslint-disable-next-line @next/next/no-page-custom-font */}
                <link href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap" rel="stylesheet"/>
            </Head>
            <div className="dark text-foreground bg-background">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </>
    );
};

export default HomePage;
