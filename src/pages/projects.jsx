import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from "@/components/Footer.jsx"
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = () => {
    return (
        <>
            <header className="
            flex flex-row justify-center space-x-16 p-4 text-xl
            xl:flex xl:flex-row xl:justify-center xl:p-5 xl:text-4xl xl:space-x-96">
                <h1 id="header-brand">makuyoshi.dev / projects</h1>
                <nav className="
            space-x-4
            xl:space-x-10">
                    <Link href="/" className="hover:underline">
                        <i className="bi bi-arrow-left-short"></i> go back
                    </Link>
                </nav>
            </header>
        </>
    )
}

const Main = () => {
    return (
        <>
            <main className="flex pl-12">
                <div className=" flex flex-col justify-between space-y-7 pl-6 pt-10 mr-10 mb-10
                about-me-font xl:flex xl:flex-col xl:justify-between xl:pl-40 xl:pt-16 xl:space-y-10 xl:w-1/2 xl:mb-32">
                    <div className="space-y-3">
                        <h2 className="text-3xl xl:text-4xl">Portfolio Website</h2>
                        <h1 className="text-xl space-x-3 italic">
                            <i className="bi bi-code-slash"></i>
                            <span>Next.js</span>
                            <span>React</span>
                            <span>Tailwind</span>
                        </h1>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p className="about-me-font-2 text-xl xl:text-2xl">My first project was my portfolio website. You're looking at it right now! I built it originally using vanilla HTML and CSS. It has a home page, an about page, projects page and a blog page. It is fully responsive and can be viewed on both mobile and large screens. As of writing this, it is built using Next.js with Tailwind.<span className="pl-2 text-xl italic opacity-50">6/5/2024</span>
                        </p>
                        <a href="https://github.com/makuyoshi/makuyoshi-web"
                           className="text-lg xl:text-xl opacity-70 hover:underline">
                            makuyoshi-web <i className="bi bi-github"></i>
                        </a>
                        <a href="https://www.makuyoshi.dev/" className="pl-3 xl:pl-4 text-lg xl:text-xl opacity-70 hover:underline">
                            makuyoshi.dev <i className="bi bi-box-arrow-up-right"></i>
                        </a>
                    </div>
                    <div className="space-y-3">
                        <h2 className="text-3xl xl:text-4xl">Highstorm</h2>
                        <h1 className="text-xl italic space-x-3">
                            <i className="bi bi-code-slash"></i>
                            <span>Bootstrap</span>
                        </h1>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p className="about-me-font-2 text-xl xl:text-2xl">Highstorm (formerly Highstorm Weather) is a weather web app built using Bootstrap I have gained valuable experience in using API's during the development process. As of the time of writing, it is still in its early stages of development. However, the backend code is mostly complete. <span className="pl-2 text-xl italic opacity-50">18/5/2024</span></p>
                        <a href="https://github.com/makuyoshi/highstorm"
                           className="pl-2 xl:pl-0 text-lg xl:text-xl opacity-70 hover:underline">
                            Highstorm <i className="bi bi-github"></i>
                        </a>
                        <a href="https://highstorm.makuyoshi.dev/" className="pl-2 xl:pl-4 text-lg xl:text-xl opacity-70 hover:underline">
                            highstorm.makuyoshi.dev <i className="bi bi-box-arrow-up-right"></i>
                        </a>
                    </div>
                    <div className="space-y-3">
                        <h2 className="text-3xl xl:text-4xl">DC Helper</h2>
                        <h1 className="text-xl space-x-3 italic">
                            <i className="bi bi-code-slash"></i>
                            <span>React Native</span>
                            <span>Bootstrap</span>
                        </h1>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p className="about-me-font-2 text-xl xl:text-2xl">This is a closed-source mobile web app that I'm developing as an assistant for my part-time job. It's currently in the early stages of development, but I've already built a beta version using Bootstrap, which is open-source and available to the public.<span className="pl-2 text-xl italic opacity-50">6/5/2024</span></p>
                        <a href="https://github.com/makuyoshi/DCHelper-beta"
                           className="text-xl opacity-70 hover:underline">DCHelper-beta <i className="bi bi-github"></i></a>
                    </div>
                </div>
            </main>
        </>
    )
}

const ProjectsPage = () => {
    return (
        <>
            <Head>
                <title>Projects | makuyoshi.dev</title>

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
                {/* eslint-disable-next-line @next/next/no-page-custom-font */}
                <link href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap" rel="stylesheet"/>
            </Head>
            <Header/>
            <Main/>
            <Footer/>
        </>
    )
}

export default ProjectsPage;

