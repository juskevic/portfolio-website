// React and Next related imports
import React, { useEffect } from 'react';
import Head from 'next/head';
import { Element, Events } from 'react-scroll';

// Common components imports
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

// Animation related components imports
import Hello from "@/components/Hello.jsx";

// Page specific components imports
import AboutMe from "@/components/AboutMe.jsx";
import Projects from "@/components/Projects.jsx";
import Contacts from "@/components/Contacts.jsx";

const Main = () => {
    return (
        <>
            <main className="pt-16 p-6 md:p-20 xl:p-36 space-y-64 md:space-y-[300px]">
                <Element name="hello" className="element">
                    <Hello />
                </Element>
                <Element name="about" className={`element`}>
                    <AboutMe />
                </Element>
                <Element name="projects" className={`element`}>
                    <Projects/>
                </Element>
                <Element name="contact" className={`element`}>
                    <Contacts/>
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
                <title>Max Juškevič</title>

                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>

                <meta name="description"
                      content="Max's portfolio website. Built on top of Next.js, using React & NextUI."/>
                <meta name="robots" content="index, follow"/>
                <link rel="canonical" href="https://wwww.juskevic.com"/>
                <link rel="alternate" hrefLang="en-us" href="https://wwww.juskevic.com"/>
                <link rel="icon" href="/favicon.ico"/>

                <meta property="og:title" content="Max Juškevič: Frontend Engineer"/>
                <meta property="og:description" content="Max's portfolio website. Build on top of Next.js, using React & NextUI. 💫"/>
                <meta property="og:url" content="https://www.juskevic.com"/>
            </Head>
            <div className="light text-foreground inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    );
};

export default HomePage;

// light: inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]