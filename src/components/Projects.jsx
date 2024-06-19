import Image from "next/image";
import React from 'react';

const Projects = ({className}) => {
    return (
        <div className={className}>
            <h1 className="text-center text-2xl xl:text-3xl">Check out my projects ✨</h1>
            {/*A*/}
            <div className="flex flex-col xl:flex-row xl:justify-between space-y-8 xl:space-y-0 xl:space-x-8">
                <div className="flex flex-col w-full xl:w-3/4 space-y-8">
                    {/* Project: Highstorm*/}
                    <div
                        className="w-full space-y-4 p-6 bg-stone-950 outline outline-1 outline-stone-600 rounded-xl shadow-2xl shadow-stone-500/20">
                        <div className="flex flex-row justify-between">
                            <h2 id="project-highstorm" className="text-2xl">Highstorm</h2>
                            <a className="outline outline-1 rounded-2xl w-8 text-2xl pl-1 hover:text-gray-900 hover:bg-stone-50"
                               href="https://highstorm.makuyoshi.dev/">
                                <i className="bi bi-arrow-up-right"></i>
                            </a>
                        </div>
                        <p>
                            Highstorm is a web application that I developed in 2024. It was my first attempt
                            at
                            utilising an API, and it was built using Bootstrap. The app shows basic weather
                            info
                            for a given location, including temperature, humidity, clouds, sunset, and
                            sunrise.
                        </p>
                    </div>
                    {/*Project: Libro*/}
                    <div
                        className="w-full space-y-2 p-6 bg-stone-950 outline outline-1 outline-stone-600 rounded-xl shadow-2xl shadow-stone-500/20">
                        <div className="flex flex-row justify-between">
                            <h2 className="text-2xl">Libro (Beta)</h2>
                            <a className="outline outline-1 rounded-2xl w-8 text-2xl pl-1 hover:text-gray-900 hover:bg-stone-50"
                               href="#">
                                <i className="bi bi-arrow-up-right"></i>
                            </a>
                        </div>
                        <p>
                            Libro is a <span className="underline underline-offset-2">Discord</span> bot crafted with
                            Discord.js and Node.js,
                            designed to enhance your server’s reading experience.
                            It allows users to search, share, and discuss books seamlessly within your Discord
                            community.
                        </p>
                    </div>
                </div>
                {/*B*/}
                <div className="flex flex-col w-full xl:w-5/6">
                    {/*Project: Portfolio Website*/}
                    <div
                        className="space-y-2 p-6 bg-stone-950 outline outline-1 outline-stone-600 rounded-xl shadow-2xl shadow-stone-500/20">
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
                </div>
                {/*C*/}
                <div className="flex flex-col w-full xl:w-3/4">
                    {/* Project: Vycetka*/}
                    <div
                        className="space-y-2 p-6 bg-stone-950 outline outline-1 outline-stone-600 rounded-xl shadow-2xl shadow-stone-500/20">
                        <div className="flex flex-row justify-between">
                            <Image src="/header-nav-vycatkaLogo.png" alt="vycetka logo" width={220}
                                   height={220}></Image>
                            <a className="outline outline-1 rounded-2xl w-8 text-2xl pl-1 hover:text-gray-900 hover:bg-stone-50"
                               href="https://vycetka.makuyoshi.dev/">
                                <i className="bi bi-arrow-up-right"></i>
                            </a>
                        </div>
                        <p>
                            This is an accounting tool build using Bootstrap that allows you to count the amount of
                            banknotes and coins that are in your cash register.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;