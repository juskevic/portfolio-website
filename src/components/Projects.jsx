import React  from 'react';
import {Card, CardHeader, CardBody, Button, Tabs, Tab, Image, Chip} from "@nextui-org/react";
import {IconBrandGithub, IconArrowUpRight, IconBrandGooglePlay, IconBrandAppstore, IconAlertCircle} from "@tabler/icons-react";

const Projects = () => {

    const cardClassName = "shadow-none bg-opacity-25 xl:w-1/3"

    return (
        <>
            <div className="flex flex-center max-w-screen-2xl">
                <div className="flex flex-col">
                    <div className="flex flex-col xl:flex-row justify-evenly">
                        <Card className={cardClassName}>
                            <CardHeader className="flex gap-3 pb-1">
                                <Image alt="tasken logo" height={50} radius="md" src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4" width={50}/>
                                <div className="flex flex-col">
                                    <p className="text-2xl">Tasken</p>
                                    <p className="text-lg text-gray-600">Android, iOS</p>
                                </div>
                            </CardHeader>
                            <CardBody className="pt-0">
                                <Tabs size="md" variant="underlined">
                                    <Tab title={<span className="text-medium md:text-lg">Description</span>}>
                                        <p className="text-medium md:text-lg"> Tasken is an innovative task management app
                                            currently in <span
                                                className={"underline"}>early development</span>.
                                            Designed to enhance productivity, it offers a range of features
                                            for
                                            efficient task organization. Create, assign, and track tasks
                                            seamlessly, and stay tuned for upcoming enhancements like
                                            subtasks,
                                            Gantt chart visualization, and project templates. Whether you’re
                                            an
                                            individual or part of a team, Tasken will revolutionize the way
                                            you manage tasks! 🚀 </p>
                                    </Tab>
                                    <Tab title={<span className="text-medium md:text-lg">Preview</span>}>
                                        <Image isZoomed height={300} src="" alt="preview image"></Image>
                                    </Tab>
                                    <Tab title={<span className="text-medium md:text-lg">Links</span>}>
                                        <div className="space-x-3 space-y-3 md:flex-row xl:flex-col flex-col pb-5">
                                            <Button isDisabled={true} as="a" href="" className="border-1 border-gray-800 shadow-none bg-white text-medium" radius="md" variant="ghost" size="sm" endContent={<IconBrandGithub stroke={1.5}/>}>
                                                source-code
                                            </Button>
                                            <Button isDisabled={true} as="a" href="" className="border-1 border-gray-800 shadow-none bg-white text-medium" radius="md" variant="ghost" size="sm" endContent={<IconArrowUpRight stroke={1.5}/>}>
                                                website
                                            </Button>
                                            <Button isDisabled={true} as="a" href="" className="border-1 border-gray-800 shadow-none bg-white text-medium" radius="md" variant="ghost" size="sm" endContent={<IconBrandAppstore stroke={1.5}/>}>
                                                app store
                                            </Button>
                                            <Button isDisabled={true} as="a" href="" className="border-1 border-gray-800 shadow-none bg-white text-medium" radius="md" variant="ghost" size="sm" endContent={<IconBrandGooglePlay stroke={1.5}/>}>
                                                google play
                                            </Button>
                                        </div>
                                        <Chip className="!text-center" startContent={<IconAlertCircle stroke={1.5}/>} color="warning" variant="flat">This project is currently under development.</Chip>
                                    </Tab>
                                </Tabs>
                            </CardBody>
                        </Card>
                        <Card className={cardClassName}>
                            <CardHeader className="flex gap-3 pb-1">
                                <Image alt="tasken logo" height={50} radius="md" src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4" width={50}/>
                                <div className="flex flex-col">
                                    <p className="text-2xl">Portfolio Website</p>
                                    <p className="text-lg text-gray-600">Website</p>
                                </div>
                            </CardHeader>
                            <CardBody className="pt-0">
                                <Tabs size="md" variant="underlined">
                                    <Tab title={<span className="text-medium md:text-lg">Description</span>}>
                                        <p className="text-medium md:text-lg">
                                            My portfolio website is the first front-end project I have
                                            undertaken. Initially developed using basic HTML and CSS, it has
                                            since been enhanced with the use of modern frameworks such as
                                            Next.js and React. It incorporates multiple JavaScript libraries to
                                            achieve a contemporary look and feel. I am delighted with the result
                                            and continue to work on it to this day, despite having made over 500
                                            commits.
                                        </p>
                                    </Tab>
                                    <Tab title={<span className="text-medium md:text-lg">Preview</span>}>
                                        <Image isZoomed height={300} src="" alt="preview image"></Image>
                                    </Tab>
                                    <Tab title={<span className="text-medium md:text-lg">Links</span>}>
                                        <div className="space-x-3 space-y-3 md:flex-row xl:flex-col flex-col">
                                            <Button as="a" href="https://github.com/juskevic/portfolio-website" className="border-1 border-gray-800 shadow-none bg-white text-medium" radius="md" variant="ghost" size="sm" endContent={<IconBrandGithub stroke={1.5}/>}>
                                                source-code
                                            </Button>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </CardBody>
                        </Card>
                        <Card className={cardClassName}>
                            <CardHeader className="flex gap-3 pb-1">
                                <Image alt="vycetka logo" height={50} radius="md" src="vycetkaLogo.png" width={50}/>
                                <div className="flex flex-col">
                                    <p className="text-2xl">Výčetka</p>
                                    <p className="text-lg text-gray-600">Android, iOS</p>
                                </div>
                            </CardHeader>
                            <CardBody className="pt-0">
                                <Tabs size="md" variant="underlined">
                                    <Tab title={<span className="text-medium md:text-lg">Description</span>}>
                                        <p className="text-medium md:text-lg">
                                            {"Vyčetka is a mobile app built with Expo, React Native, and React Native Paper UI. It quickly and accurately counts banknotes and coins, originally starting as a web app with Bootstrap. Now, it's a handy way to manage currency denominations on the go. 💰📱"}
                                        </p>
                                    </Tab>
                                    <Tab title={<span className="text-medium md:text-lg">Preview</span>}>
                                        <Image isZoomed height={300} src="/vycetka_preview_1.png" alt="preview image"></Image>
                                    </Tab>
                                    <Tab title={<span className="text-medium md:text-lg">Links</span>}>
                                        <div className="space-x-3 space-y-3 md:flex-row xl:flex-col flex-col pb-5">
                                            <Button as="a" href="https://vycetka.juskevic.com/" className="border-1 border-gray-800 shadow-none bg-white text-medium" radius="md" variant="ghost" size="sm" endContent={<IconArrowUpRight stroke={1.5}/>}>
                                                website
                                            </Button>
                                            <Button isDisabled={true} as="a" href="" className="border-1 border-gray-800 shadow-none bg-white text-medium" radius="md" variant="ghost" size="sm" endContent={<IconBrandAppstore stroke={1.5}/>}>
                                                app store
                                            </Button>
                                            <Button isDisabled={true} as="a" href="" className="border-1 border-gray-800 shadow-none bg-white text-medium" radius="md" variant="ghost" size="sm" endContent={<IconBrandGooglePlay stroke={1.5}/>}>
                                                google play
                                            </Button>
                                        </div>
                                        <Chip className="!text-center" startContent={<IconAlertCircle stroke={1.5}/>} color="warning" variant="flat">This project is currently under development.</Chip>
                                    </Tab>
                                </Tabs>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="flex flex-row"></div>
                </div>
            </div>
        </>
    );
};


export default Projects;

