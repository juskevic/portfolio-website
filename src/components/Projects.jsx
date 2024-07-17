import React  from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Divider,
    Link,
    Button, Tabs, Tab, Tooltip,
    Image, Chip
} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faFont, faImage, faLink, faPen, faScrewdriverWrench} from "@fortawesome/free-solid-svg-icons";

const Projects = () => {

    const githubBaseURL = "https://github.com/maxyushkevich/"

    return (
        <div className="flex justify-center md:pb-0 pb-40 md:h-[700px]">
            <Tabs className={`pb-3`} color={"default"} placement={"top"} size={"lg"} radius={"lg"} variant={"solid"} disabledKeys={["contributions"]}>
                <Tab key={"projects"} title="Projects">
                    <div className='flex flex-col xl:flex-row justify-center space-x-0 xl:space-x-10 xl:space-y-0 space-y-10'>
                        {/*LEFT*/}
                        <div className={`flex flex-col space-y-10`}>
                            <div>
                                <Card className="max-w-[400px] bg-neutral-950 opacity-85 backdrop-blur">
                                    <CardHeader className="flex justify-between">
                                        <div className="space-x-4">
                                            <Tooltip showArrow={true} color="warning" content="Project name might change in the future!">
                                                <Link className="text-2xl" underline="under" color="foreground">Task Hive</Link>
                                            </Tooltip>
                                        </div>
                                        <div className="space-x-1">
                                            <Tooltip closeDelay={3000} defaultOpen={true} isDismissable showArrow={true} color="warning" content="This project is in development! ⚒️">
                                                <Button radius="full" size="sm" isIconOnly variant="bordered" color="warning">
                                                    <Link color="warning"><FontAwesomeIcon icon={faScrewdriverWrench} size="md"/></Link>
                                                </Button>
                                            </Tooltip>
                                            <Button isDisabled radius="full" size="sm" isIconOnly variant="ghost">
                                                <Link color="foreground" href={`${githubBaseURL}vycetka`}><FontAwesomeIcon icon={faGithub} size="md"/></Link>
                                            </Button>
                                            <Button isDisabled radius="full" size="sm" isIconOnly variant="ghost">
                                                <Link color="foreground" href={"https://vycetka.makuyoshi.dev/"}><FontAwesomeIcon icon={faLink} size="md"/></Link>
                                            </Button>
                                        </div>
                                    </CardHeader>
                                    <Divider/>
                                    <CardBody className={"space-y-3"}>
                                        <p className={"p-1"}>
                                            Task Hive is an innovative task management app currently in <span className={"underline"}>early
                                            development</span>. Designed to enhance productivity, it offers a range of
                                            features for efficient task organization. Create, assign, and track
                                            tasks seamlessly, and stay tuned for upcoming enhancements like
                                            subtasks, Gantt chart visualization, and project templates. Whether
                                            you’re an individual or part of a team, Task Hive will revolutionize the
                                            way you manage tasks! 🚀
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
                                        <Button radius="full" size="sm" isIconOnly variant="ghost">
                                        <Link color="foreground" href={`${githubBaseURL}portfolio-website`}><FontAwesomeIcon icon={faGithub} size="md"/></Link>
                                        </Button>
                                        <Button radius="full" size="sm" isIconOnly variant="ghost">
                                            <Link color="foreground" href={"#"}><FontAwesomeIcon icon={faLink} size="md"/></Link>
                                        </Button>
                                    </div>
                                </CardHeader>
                                <Divider/>
                                <CardBody>
                                    <Tabs size="md" variant="underlined">
                                        <Tab title={
                                            <div className="flex items-center space-x-2">
                                                <FontAwesomeIcon icon={faPen} />
                                                <span>Description</span>
                                            </div>
                                        }>
                                            <p className="p-1">
                                                My portfolio website is the first front-end project I have undertaken. Initially developed using basic HTML and CSS, it has since been enhanced with the use of modern frameworks such as Next.js and React. It incorporates multiple JavaScript libraries to achieve a contemporary look and feel. I am delighted with the result and continue to work on it to this day, despite having made over 500 commits.
                                            </p>
                                        </Tab>
                                        <Tab title={
                                            <div className="flex items-center space-x-2">
                                                <FontAwesomeIcon icon={faImage} />
                                                <span>Preview</span>
                                            </div>
                                        }>
                                            <Image isZoomed height={300} src="portfolio_previwed.png" alt="vycetka preview image"></Image>
                                        </Tab>
                                    </Tabs>
                                </CardBody>
                            </Card>
                        </div>
                        {/*RIGHT*/}
                        <div className={`flex flex-col space-y-10`}>
                            <Card className="max-w-[400px] bg-neutral-950 opacity-85 backdrop-blur">
                                <CardHeader className="flex justify-between">
                                    <div className="space-x-4">
                                        <Link className="text-2xl" href="https://vycetka.makuyoshi.dev/" underline="under" color="foreground">Výčetka</Link>
                                    </div>
                                    <div className="space-x-1">
                                        <Button radius="full" size="sm" isIconOnly variant="ghost">
                                            <Link color="foreground" href={`${githubBaseURL}vycetka`}><FontAwesomeIcon icon={faGithub} size="md"/></Link>
                                        </Button>
                                        <Button radius="full" size="sm" isIconOnly variant="ghost">
                                            <Link color="foreground" href={"https://vycetka.makuyoshi.dev/"}><FontAwesomeIcon icon={faLink} size="md"/></Link>
                                        </Button>
                                    </div>
                                </CardHeader>
                                <Divider />
                                <CardBody>
                                    <Tabs size="md" variant="underlined">
                                        <Tab title={
                                            <div className="flex items-center space-x-2">
                                                <FontAwesomeIcon icon={faPen} />
                                                <span>Description</span>
                                            </div>
                                        }>
                                            <p className="p-1">
                                                This is an accounting tool build using Bootstrap that allows you to count the amount of
                                                banknotes and coins that are in your cash register.
                                            </p>
                                        </Tab>
                                        <Tab title={
                                            <div className="flex items-center space-x-2">
                                                <FontAwesomeIcon icon={faImage} />
                                                <span>Preview</span>
                                            </div>
                                        }>
                                            <Image isZoomed height={300} src="vycetka_previewed.png" alt="vycetka preview image"></Image>
                                        </Tab>
                                    </Tabs>
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

// My portfolio website is the first front-end project I have undertaken. Initially developed using basic HTML and CSS, it has since been enhanced with the use of modern frameworks such as Next.js and React. It incorporates multiple JavaScript libraries to achieve a contemporary look and feel. I am delighted with the result and continue to work on it to this day, despite having made over 500 commits.