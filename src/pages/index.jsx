// React related imports
import React, { useEffect } from 'react';
import Head from 'next/head';
import { Element, Events } from 'react-scroll';

// NextUI components
import { Chip, Image } from "@nextui-org/react";
import { Caveat, Exo } from "next/font/google";

// Components imports grouped by their usage
// Common components
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
// Contacts related component
import Contacts from "@/components/Contacts.jsx";
//  Projects related component
import Projects from "@/components/Projects.jsx";
// Animation related component
import Socials from "@/components/Socials.jsx";
// AboutMe component
import AboutMe from "@/components/AboutMe.jsx";

const caveat = Caveat({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
});

const exo = Exo({
    weight: '300',
    style: 'normal',
    subsets: ['latin'],
});

const Main = () => {
    return (
        <>
            <main className="p-6 pt-40 space-y-56 xl:p-56 xl:space-y-80">

                <Element name="hello" className="element flex flex-row justify-center space-x-20">
                    <div>
                        <div className="space-y-1">
                            <h1 className={`${caveat.className} text-4xl xl:text-5xl text-stone-300 animate-fade-left animate-once bold`}>
                                Max Yushkevich
                            </h1>
                            <h2 className={`${exo.className} text-xl xl:text-2xl text-stone-500 animate-fade-right animate-once`}>
                                Frontend Engineer
                            </h2>
                            <Socials/>
                        </div>
                    </div>
                    <div className="hidden xl:pl-24 xl:block animate-fade-left animate-delay-200 animate-ease-out">
                       <Image isZoomed isBlurred width={170} alt="makuyoshi pfp" src="helloAvatar.jpg"></Image>
                    </div>
                </Element>

                <Element name="about" className={`${exo.className} animate-fade-down animate-once animate-delay-500 animate-ease-out`}>
                    <AboutMe />
                    <div className="text-center pt-10"> {/*remove later*/}
                        <Chip color="warning" variant="dot">This section is under development</Chip>
                    </div>
                </Element>

                <Element name="projects" className={`${exo.className} element`}>
                    <Projects/>
                    <div className="text-center"> {/*remove later*/}
                        <Chip color="warning" variant="dot">This section is under development</Chip>
                    </div>
                </Element>

                <Element name="contact" className={`${exo.className} element space-y-8`}>
                    <Contacts/>
                    <div className="text-center"> {/*remove later*/}
                        <Chip color="warning" variant="dot">This section is under development</Chip>
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
    })

    return (
        <>
            <Head>
                <title>Max Yushkevich</title>

                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>

                <meta name="description" content="Max's portfolio website. Build on top of Next.js, using React & NextUI."/>
                <meta name="robots" content="index, follow"/>
                <link rel="canonical" href="https://www.makuyoshi.dev"/>
                <link rel="alternate" hrefLang="en-us" href="https://wwww.makuyoshi.dev"/>
                <link rel="icon" href="/favicon.ico"/>

                <meta property="og:title" content="Max Yushkevich: Frontend Web Developer"/>
                <meta property="og:description" content="Max's portfolio website. Build on top of Next.js, using React & NextUI."/>
                <meta property="og:url" content="https://makuyoshi.dev"/>
                <meta property="og:image" content="/makuPreview.png"/>
            </Head>
            <div className="dark text-foreground bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </>
    );
};

export default HomePage;
