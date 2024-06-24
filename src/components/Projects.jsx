import Image from "next/image";
import React, {useState} from 'react';
import { handleViewport } from 'react-in-viewport';
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

/**
 * Renders a list of projects with animation effects.
 *
 * @param {object} props - The props object containing the following properties:
 *   - inViewport {boolean} - Indicates whether the component is in the viewport.
 *   - forwardedRef {object} - The reference to the component.
 *
 * @returns {JSX.Element} - The rendered projects component.
 */
const Projects = (props) => {
    const { inViewport, forwardedRef } = props;
    const [animationClass, setAnimation] = useState('invisible');
    const [animationClassRight, setAnimationRight] = useState('invisible');
    const [animationClassLeft, setAnimationLeft] = useState('invisible');
    const [animationClassTop, setAnimationTop] = useState('invisible');
    const [hasEnteredView, setHasEnteredView] = useState(false);

    if (inViewport && !hasEnteredView) {
        setAnimation('visible animate-fade-up animate-once animate-delay-550 animate-ease-out');
        setAnimationRight('visible animate-fade-right animate-once animate-delay-530 animate-ease-out');
        setAnimationLeft('visible animate-fade-left animate-once animate-delay-510 animate-ease-out');
        setAnimationTop('visible animate-fade-down animate-once animate-delay-500 animate-ease-out');
        setHasEnteredView(true);
    }

    return (
        <div className="space-y-10">
            <h1 ref={forwardedRef} className={`text-center text-2xl xl:text-3xl ${animationClassTop}`}>Check out my projects ✨</h1>
            <div className='flex flex-col xl:flex-row xl:justify-between space-y-8 xl:space-y-0 xl:space-x-8 ${animationClass2}'>
                {/*RIGHT*/}
                <div ref={forwardedRef} className={`flex flex-col w-full xl:w-3/4 space-y-8 ${animationClassRight}`}>
                    {/* Project: Highstorm*/}
                    <div
                        className="w-full space-y-4 p-6 bg-stone-950 outline outline-1 outline-stone-500 rounded-xl shadow-2xl shadow-stone-500/20">
                        <div className="flex flex-row justify-between">
                            <h2 id="project-highstorm" className="text-2xl">Highstorm</h2>
                            <a className="w-8 text-2xl pl-1 rounded hover:text-gray-900 hover:bg-stone-50"
                               href="https://highstorm.makuyoshi.dev/">
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
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
                        className="w-full space-y-2 p-6 bg-stone-950 outline outline-1 outline-stone-500 rounded-xl shadow-2xl shadow-stone-500/20">
                        <div className="flex flex-row justify-between">
                            <h2 className="text-2xl">Libro (Beta)</h2>
                            <a className="w-8 text-2xl pl-1 rounded hover:text-gray-900 hover:bg-stone-50"
                               href="#">
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
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
                {/*MIDDLE*/}
                <div ref={forwardedRef} className={`flex flex-col w-full xl:w-5/6 ${animationClass}`}>
                    {/*Project: Portfolio Website*/}
                    <div
                        className="space-y-2 p-6 bg-stone-950 outline outline-1 outline-stone-500 rounded-xl shadow-2xl shadow-stone-500/20">
                        <div className="flex flex-row justify-between">
                            <h2 className="text-2xl">Portfolio Website</h2>
                            <a className="w-8 text-2xl pl-1 rounded hover:text-gray-900 hover:bg-stone-50"
                               href="https://www.makuyoshi.dev/">
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
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
                {/*LEFT*/}
                <div ref={forwardedRef} className={`flex flex-col w-full xl:w-3/4 ${animationClassLeft}`}>
                    {/* Project: Vycetka*/}
                    <div
                        className="space-y-2 p-6 bg-stone-950 outline outline-1 outline-stone-500 rounded-xl shadow-2xl shadow-stone-500/20">
                        <div className="flex flex-row justify-between">
                            <Image src="/header-nav-vycatkaLogo.png" alt="vycetka logo" width={220}
                                   height={220}></Image>
                            <a className="w-8 text-2xl pl-1 rounded hover:text-gray-900 hover:bg-stone-50"
                               href="https://vycetka.makuyoshi.dev/">
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
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

const ViewportProjects = handleViewport(Projects, {rootMargin: '-1.0px'});

export default ViewportProjects;