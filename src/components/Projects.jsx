import React, {useState} from 'react';
import {handleViewport} from 'react-in-viewport';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Link,
    Chip,
    Button,
    Tabs,
    Tab,
    ScrollShadow,
    Image
} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLink} from "@fortawesome/free-solid-svg-icons";

const Projects = (props) => {
    const {inViewport, forwardedRef} = props;
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
            <div
                className='flex flex-col xl:flex-row justify-center space-x-0 xl:space-x-10 xl:space-y-0 space-y-10 ${animationClass2}'>
                {/*LEFT*/}
                <div ref={forwardedRef} className={`flex flex-col space-y-10 ${animationClassRight}`}>
                    <div className="">
                        <Card className="max-w-[400px]">
                            <CardHeader className="flex justify-between">
                                <div className="space-x-4">
                                    <Link className="text-2xl" href="#" underline="under"
                                          color="foreground">Libro</Link>
                                </div>
                                <Chip color="warning" variant="flat">Archive</Chip>
                                <div className="space-x-1">
                                    <Button isIconOnly variant="ghost">
                                        <FontAwesomeIcon icon={faGithub} size="lg"/>
                                    </Button>
                                </div>
                            </CardHeader>
                            <Divider/>
                            <CardBody>
                                <p>
                                    Libro was a Discord bot crafted with Discord.js and Node.js, designed to
                                    enhance your
                                    server’s reading experience. It allowed users to search, share, and discuss
                                    books
                                    seamlessly within your Discord community
                                </p>
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                        <Card className="max-w-[400px]">
                            <CardHeader className="flex justify-between">
                                <div className="space-x-4">
                                    <Link className="text-xl" href="#" underline="under"
                                          color="foreground">Highstorm</Link>
                                </div>
                                <Chip color="warning" variant="flat">Archive</Chip>
                                <div className="space-x-1">
                                    <Button isIconOnly variant="ghost">
                                        <FontAwesomeIcon icon={faGithub} size="lg"/>
                                    </Button>
                                    <Button isIconOnly variant="ghost">
                                        <FontAwesomeIcon icon={faLink} size="lg"/>
                                    </Button>
                                </div>
                            </CardHeader>
                            <Divider/>
                            <CardBody>
                                <p>
                                    Highstorm was a web application that I developed in 2024. It was my
                                    first attempt at
                                    utilizing an API, and it was built using Bootstrap. The app showed basic
                                    weather
                                    information for a given location, including temperature, humidity,
                                    clouds, sunset,
                                    and sunrise.
                                </p>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                {/*MIDDLE*/}
                <div ref={forwardedRef} className={`flex flex-col ${animationClass}`}>
                    <Card className="max-w-[400px]">
                        <CardHeader className="flex justify-between">
                            <div className="space-x-4">
                                <Link className="text-2xl" href="#" underline="under"color="foreground">Portfolio Website</Link>
                            </div>
                            <div className="space-x-1">
                                <Button isIconOnly variant="ghost">
                                    <FontAwesomeIcon icon={faGithub} size="lg"/>
                                </Button>
                                <Button isIconOnly variant="ghost">
                                    <FontAwesomeIcon icon={faLink} size="lg"/>
                                </Button>
                            </div>
                        </CardHeader>
                        <Divider/>
                        <CardBody>
                            <p>
                                My portfolio website is the first front-end project I have undertaken. Initially
                                developed using basic HTML and CSS, it has since been enhanced with the use of
                                modern frameworks such as Next.js and React. It incorporates multiple JavaScript
                                libraries to achieve a contemporary look and feel. I am delighted with the result
                                and continue to work on it to this day, despite having made over 500 commits.
                            </p>
                        </CardBody>
                    </Card>
                </div>
                {/*RIGHT*/}
                <div ref={forwardedRef} className={`flex flex-col space-y-10 ${animationClassLeft}`}>
                    <Card className="max-w-[400px]">
                        <CardHeader className="flex justify-between">
                            <div className="space-x-4">
                                <Link className="text-2xl" href="#" underline="under"color="foreground">Výčetka</Link>
                            </div>
                            <div className="space-x-1">
                                <Button isIconOnly variant="ghost">
                                    <FontAwesomeIcon icon={faGithub} size="lg"/>
                                </Button>
                                <Button isIconOnly variant="ghost">
                                    <FontAwesomeIcon icon={faLink} size="lg"/>
                                </Button>
                            </div>
                        </CardHeader>
                        <Divider/>
                        <CardBody>
                            <p>
                                This is an accounting tool build using Bootstrap that allows you to count the amount of
                                banknotes and coins that are in your cash register.
                            </p>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
};

const ViewportProjects = handleViewport(Projects, {rootMargin: '-1.0px'});

export default ViewportProjects;
