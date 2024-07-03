import React, {useState} from 'react';
import { handleViewport } from 'react-in-viewport';
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Chip, Button} from "@nextui-org/react";

const Projects = (props) => {
    const { inViewport, forwardedRef } = props;
    const [animationClass, setAnimation] = useState('invisible');
    const [animationClassRight, setAnimationRight] = useState('invisible');
    const [animationClassLeft, setAnimationLeft] = useState('invisible');
    const [hasEnteredView, setHasEnteredView] = useState(false);

    if (inViewport && !hasEnteredView) {
        setAnimation('visible animate-fade-up animate-once animate-delay-550 animate-ease-out');
        setAnimationRight('visible animate-fade-right animate-once animate-delay-530 animate-ease-out');
        setAnimationLeft('visible animate-fade-left animate-once animate-delay-510 animate-ease-out');
        setHasEnteredView(true);
    }

    return (
        <div ref={forwardedRef}>
            <div className='flex flex-col xl:flex-row justify-center space-x-0 xl:space-x-10 xl:space-y-0 space-y-10 ${animationClass2}'>
                {/*LEFT*/}
                <div ref={forwardedRef} className={`flex flex-col space-y-10 ${animationClassRight}`}>
                    <div className="">
                        <Card className="max-w-[400px]">
                            <CardHeader className="flex gap-3">
                                <Image
                                    alt="libro logo"
                                    height={40}
                                    radius="sm"
                                    src="libroLogo.jpeg"
                                    width={40}
                                />
                                <div className="flex flex-col">
                                    <p className="text-md">Libro</p>
                                    <p className="text-small text-default-500"></p>
                                </div>
                                <Chip color="warning" variant="flat">Archived</Chip>
                            </CardHeader>
                            <Divider/>
                            <CardBody>
                                <p>Libro was a Discord bot crafted with Discord.js and Node.js, designed to enhance your
                                    server’s reading experience. It allowed users to search, share, and discuss books
                                    seamlessly within your Discord community.</p>
                            </CardBody>
                            <Divider/>
                            <CardFooter>
                                <Link
                                    color="foreground"
                                    className="brightness-75"
                                    isExternal
                                    showAnchorIcon
                                    href="https://github.com/makuyoshi/Libro"
                                >
                                    Visit source code on GitHub.
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="">
                        <Card className="max-w-[400px]">
                            <CardHeader className="flex gap-3">
                                <div className="flex flex-col">
                                    <p className="text-md">Highstorm</p>
                                    <Link href="https://highstorm.makuyoshi.dev/"
                                          className="text-small text-default-500"
                                          underline="hover">highstorm.makuyoshi.dev</Link>
                                </div>
                                <Chip color="warning" variant="flat">Archived</Chip>
                            </CardHeader>
                            <Divider/>
                            <CardBody>
                                <p>
                                    Highstorm was a web application that I developed in 2024. It was my first attempt at
                                    utilizing an API, and it was built using Bootstrap. The app showed basic weather
                                    information for a given location, including temperature, humidity, clouds, sunset,
                                    and sunrise.
                                </p>
                            </CardBody>
                            <Divider/>
                            <CardFooter>
                                <Link
                                    color="foreground"
                                    className="brightness-75"
                                    isExternal
                                    showAnchorIcon
                                    href="https://github.com/makuyoshi/highstorm"
                                >
                                    Visit source code on GitHub.
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
                {/*MIDDLE*/}
                <div ref={forwardedRef} className={`flex flex-col ${animationClass}`}>
                    <Card className="max-w-[400px]">
                        <CardHeader className="flex gap-3">
                            <Image
                                alt="website logo"
                                height={40}
                                radius="sm"
                                src="favicon.ico"
                                width={40}
                            />
                            <div className="flex flex-col">
                                <p className="text-md">Portfolio Website</p>
                                <p className="text-small text-default-500">makuyoshi.dev</p>
                            </div>
                        </CardHeader>
                        <Divider/>
                        <CardBody>
                            <p> My portfolio website is the first front-end project I have undertaken. Initially
                                developed using basic HTML and CSS, it has since been enhanced with the use of
                                modern frameworks such as Next.js and React. It incorporates multiple JavaScript
                                libraries to achieve a contemporary look and feel. I am delighted with the result
                                and continue to work on it to this day, despite having made over 500 commits.</p>
                        </CardBody>
                        <Divider/>
                        <CardFooter>
                            <Link
                                color="foreground"
                                className="brightness-75"
                                isExternal
                                showAnchorIcon
                                href="https://github.com/makuyoshi/makuyoshi-web"
                            >
                                Visit source code on GitHub.
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
                {/*RIGHT*/}
                <div ref={forwardedRef} className={`flex flex-col space-y-10 ${animationClassLeft}`}>
                    <Card className="max-w-[400px]">
                        <CardHeader className="flex gap-3">
                            <Image
                                alt="vycetka logo"
                                height={40}
                                radius="sm"
                                src="vycetkaLogo.png"
                                width={40}
                            />
                            <div className="flex flex-col">
                                <p className="text-md">Výčetka</p>
                                <Link href="https://vycetka.makuyoshi.dev/" className="text-small text-default-500"
                                      underline="hover">vycetka.makuyoshi.dev</Link>
                            </div>
                        </CardHeader>
                        <Divider/>
                        <CardBody>
                            <p>This is an accounting tool build using Bootstrap that allows you to count the amount of
                                banknotes and coins that are in your cash register.</p>
                        </CardBody>
                        <Divider/>
                        <CardFooter>
                            <Link
                                className="brightness-75"
                                color="foreground"
                                isExternal
                                showAnchorIcon
                                href="https://github.com/makuyoshi/vycetka"
                            >
                                Visit source code on GitHub.
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
};

const ViewportProjects = handleViewport(Projects, {rootMargin: '-1.0px'});

export default ViewportProjects;