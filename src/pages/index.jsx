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
                        <Image src="/makuyoshiLogo.png" className="rounded-full object-cover" alt="Profile" height="150"
                               width="150"/>
                    </div>
                </Element>
                <Element name="about" className="element">
                    <div className="space-y-5">
                        <h1 className="text-4xl opacity-60">hi</h1>
                        <p className="text-2xl break-words w-1/2 outline outline-1 rounded-xl p-5">
                            My name is Max and I'm a front-end web developer. I specialize in creating beautiful and
                            responsive websites using modern technologies. With a strong passion for design and user
                            experience, I strive to create visually appealing and intuitive interfaces. I have
                            experience working with HTML, CSS, JavaScript, and various front-end frameworks such as
                            React and Next.js. I am constantly learning and improving my skills to stay up-to-date with
                            the latest trends and technologies in the industry. Feel free to explore my portfolio and
                            get in touch with me for any inquiries or collaborations.
                        </p>
                    </div>
                </Element>
                <Element name="projects" className="element">
                    <div className="space-y-5">
                        <h1 className="text-4xl opacity-60">Projects</h1>
                        <p className="text-2xl break-words w-1/2 outline outline-1 rounded-xl p-5 opacity-50">
                            Under construction ⚒️
                        </p>
                    </div>
                </Element>
                <Element name="contact" className="element">
                    <div className="space-y-5">
                        <h1 className="text-4xl opacity-60">Contact</h1>
                        <p className="text-2xl break-words w-1/2 outline outline-1 rounded-xl p-5 opacity-50">
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
