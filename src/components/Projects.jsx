import React  from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Divider,
    Link,
    Chip,
    Button, Tabs, Tab,
} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLink} from "@fortawesome/free-solid-svg-icons";

const Projects = () => {

    return (
        <div className="flex justify-center">
            <Tabs className={`pb-3`} color={"default"} placement={"top"} size={"lg"} radius={"lg"} variant={"light"} disabledKeys={["contributions"]}>
                <Tab key={"projects"} title="Projects">
                    <div className='flex flex-col xl:flex-row justify-center space-x-0 xl:space-x-10 xl:space-y-0 space-y-10'>
                        {/*LEFT*/}
                        <div className={`flex flex-col space-y-10`}>
                            <div>
                                <Card className="max-w-[400px] bg-neutral-950 opacity-85 backdrop-blur">
                                    <CardHeader className="flex justify-between">
                                        <div className="space-x-4">
                                            <Link className="text-2xl" underline="under"
                                                  color="foreground">Libro</Link>
                                        </div>
                                        <Chip color="warning" variant="flat">Archive</Chip>
                                        <div className="space-x-1">
                                            <Button isIconOnly variant="ghost">
                                                <Link color="foreground" href={"https://github.com/maxyushkevich/Libro"}><FontAwesomeIcon icon={faGithub} size="lg"/></Link>
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
                                <Card className="max-w-[400px] bg-neutral-950 opacity-85 backdrop-blur">
                                    <CardHeader className="flex justify-between">
                                        <div className="space-x-4">
                                            <Link className="text-2xl" href="https://highstorm.makuyoshi.dev/" underline="under"
                                                  color="foreground">Highstorm</Link>
                                        </div>
                                        <Chip color="warning" variant="flat">Archive</Chip>
                                        <div className="space-x-1">
                                            <Button isIconOnly variant="ghost">
                                                <Link color="foreground" href={"https://github.com/maxyushkevich/highstorm"}><FontAwesomeIcon icon={faGithub} size="lg"/></Link>
                                            </Button>
                                            <Button isIconOnly variant="ghost">
                                                <Link color="foreground" href={"https://highstorm.makuyoshi.dev/"}><FontAwesomeIcon icon={faLink} size="lg"/></Link>
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
                        <div className={`flex flex-col`}>
                            <Card className="max-w-[400px] bg-neutral-950 opacity-85 backdrop-blur">
                                <CardHeader className="flex justify-between">
                                    <div className="space-x-4">
                                        <Link className="text-2xl" href="#" underline="under" color="foreground">Portfolio Website</Link>
                                    </div>
                                    <div className="space-x-1">
                                        <Button isIconOnly variant="ghost">
                                            <Link color="foreground" href={"https://github.com/maxyushkevich/portfolio-website"}><FontAwesomeIcon icon={faGithub} size="lg"/></Link>
                                        </Button>
                                        <Button isIconOnly variant="ghost">
                                            <Link color="foreground" href={"#"}><FontAwesomeIcon icon={faLink} size="lg"/></Link>
                                        </Button>
                                    </div>
                                </CardHeader>
                                <Divider/>
                                <CardBody>
                                    <p>
                                        My portfolio website is the first front-end project I have undertaken. Initially
                                        developed using basic HTML and CSS, it has since been enhanced with the use of
                                        modern frameworks such as Next.js and React. It incorporates multiple JavaScript
                                        libraries to achieve a contemporary look and feel. I am delighted with the
                                        result
                                        and continue to work on it to this day, despite having made over 500 commits.
                                    </p>
                                </CardBody>
                            </Card>
                        </div>
                        {/*RIGHT*/}
                        <div className={`flex flex-col space-y-10`}>
                            <Card isHoverable className="max-w-[400px] bg-neutral-950 opacity-85 backdrop-blur">
                                <CardHeader className="flex justify-between">
                                    <div className="space-x-4">
                                        <Link className="text-2xl" href="https://vycetka.makuyoshi.dev/" underline="under"
                                              color="foreground">Výčetka</Link>
                                    </div>
                                    <div className="space-x-1">
                                        <Button isIconOnly variant="ghost">
                                            <Link color="foreground" href={"https://github.com/maxyushkevich/vycetka"}><FontAwesomeIcon icon={faGithub} size="lg"/></Link>
                                        </Button>
                                        <Button isIconOnly variant="ghost">
                                            <Link color="foreground" href={"https://vycetka.makuyoshi.dev/"}><FontAwesomeIcon icon={faLink} size="lg"/></Link>
                                        </Button>
                                    </div>
                                </CardHeader>
                                <Divider/>
                                <CardBody>
                                    <p>
                                        This is an accounting tool build using Bootstrap that allows you to count the
                                        amount of
                                        banknotes and coins that are in your cash register.
                                    </p>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </Tab>
                <Tab key={"contributions"} title={"Contributions"}></Tab>
            </Tabs>
        </div>
    );
};



export default Projects;
