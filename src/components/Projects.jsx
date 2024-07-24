import React  from 'react';
import {
    Card, CardHeader, CardBody,
    Link,
    Button,
    Tabs, Tab,
    Tooltip,
    Image,
} from "@nextui-org/react";
import {IconBrandGithub, IconArrowUpRight, IconCode, IconPhoto, IconPencil} from "@tabler/icons-react";

const Projects = () => {

    const githubBaseURL = "https://github.com/maxyushkevich/"
    const strokeWidth = 1.5

    return (
        <div className="flex justify-center md:pb-0 pb-40 md:h-[700px]">
            <Tabs
                className={`pb-3`}
                color={"default"}
                placement={"top"}
                size={"lg"}
                radius={"lg"}
                variant={"solid"}
                disabledKeys={[
                    "contributions"
                ]}
            >
                <Tab
                    key={"projects"}
                    title="Projects"
                >
                    <div className='flex flex-col xl:flex-row justify-center space-x-0 xl:space-x-10 xl:space-y-0 space-y-10'>
                        {/*LEFT*/}
                        <div className={`flex flex-col space-y-10`}>
                            <div>
                                <Card
                                    className="max-w-[400px] backdrop-blur border-1 border-gray-400 shadow"
                                    radius="lg"
                                >
                                    <CardHeader className="flex justify-between pb-0">
                                        <div className="flex flex-col">
                                            <Tooltip
                                                showArrow={true}
                                                color="warning"
                                                content="Project name might change in the future!"
                                            >
                                                <Link
                                                    className="text-2xl"
                                                    underline="under"
                                                    color="foreground"
                                                >
                                                    Tasken
                                                </Link>
                                            </Tooltip>
                                            <p className="opacity-70">Android, iOS</p>
                                        </div>
                                        <div className="space-x-1">
                                            <Tooltip
                                                closeDelay={3000}
                                                defaultOpen={true}
                                                isDismissable
                                                showArrow={true}
                                                color="warning"
                                                content="This project is in development! ⚒️"
                                            >
                                                <Button
                                                    radius="full"
                                                    size="sm"
                                                    isIconOnly
                                                    variant="light"
                                                    color="warning"
                                                >
                                                    <Link color="warning"><IconCode stroke={strokeWidth}/></Link>
                                                </Button>
                                            </Tooltip>
                                            <Button
                                                isDisabled={true}
                                                radius="full"
                                                size="sm"
                                                isIconOnly
                                                variant="light"
                                            >
                                                <Link
                                                    color="foreground"
                                                    href={`${githubBaseURL}`}
                                                >
                                                    <IconBrandGithub stroke={strokeWidth}/>
                                                </Link>
                                            </Button>
                                            <Button
                                                isDisabled={true}
                                                radius="full"
                                                size="sm"
                                                isIconOnly
                                                variant="light"
                                            >
                                                <Link
                                                    color="foreground"
                                                    href={"#"}
                                                >
                                                    <IconArrowUpRight stroke={strokeWidth}/>
                                                </Link>
                                            </Button>
                                        </div>
                                    </CardHeader>
                                    <CardBody className="pt-1">
                                        <Tabs
                                            size="md"
                                            variant="underlined"
                                        >
                                            <Tab
                                                title={
                                                <div className="flex items-center space-x-1">
                                                    <IconPencil stroke={strokeWidth}/>
                                                    <span>Description</span>
                                                </div>
                                            }>
                                                <p className={"p-1"}> Tasken is an innovative task management app
                                                    currently in <span className={"underline"}>early development</span>.
                                                    Designed to enhance productivity, it offers a range of features for
                                                    efficient task organization. Create, assign, and track tasks
                                                    seamlessly, and stay tuned for upcoming enhancements like subtasks,
                                                    Gantt chart visualization, and project templates. Whether you’re an
                                                    individual or part of a team, Tasken will revolutionize the way
                                                    you manage tasks! 🚀 </p>
                                            </Tab>
                                            <Tab
                                                isDisabled={true}
                                                title={
                                                <div className="flex items-center space-x-1">
                                                    <IconPhoto stroke={strokeWidth}/>
                                                    <span>Preview</span>
                                                </div>
                                            }>
                                                <Image
                                                    isZoomed
                                                    height={300}
                                                    src=""
                                                    alt="preview image">
                                                </Image>
                                            </Tab>
                                        </Tabs>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                        {/*MIDDLE*/}
                        <div className={`flex flex-col`}>
                            <Card className="max-w-[400px] backdrop-blur border-1 border-gray-400 shadow">
                                <CardHeader className="flex justify-between pb-0">
                                    <div className="flex flex-col">
                                        <Link
                                            className="text-2xl"
                                            href="#"
                                            underline="under"
                                            color="foreground"
                                        >
                                            Portfolio Website
                                        </Link>
                                        <p className="opacity-70">Website</p>
                                    </div>
                                    <div className="space-x-1">
                                        <Button
                                            radius="full"
                                            size="sm"
                                            isIconOnly
                                            variant="light"
                                        >
                                        <Link
                                            color="foreground"
                                            href={`${githubBaseURL}portfolio-website`}
                                        >
                                            <IconBrandGithub stroke={strokeWidth}/>
                                        </Link>
                                        </Button>
                                        <Button
                                            isDisabled={true}
                                            radius="full"
                                            size="sm"
                                            isIconOnly
                                            variant="light"
                                        >
                                            <Link
                                                color="foreground"
                                                href={"#"}
                                            >
                                                <IconArrowUpRight stroke={strokeWidth}/>
                                            </Link>
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardBody className="pt-1">
                                    <Tabs
                                        size="md"
                                        variant="underlined"
                                    >
                                        <Tab
                                            title={
                                            <div className="flex items-center space-x-1">
                                                <IconPencil stroke={strokeWidth}/>
                                                <span>Description</span>
                                            </div>
                                        }>
                                            <p className="p-1">
                                                My portfolio website is the first front-end project I have undertaken. Initially developed using basic HTML and CSS, it has since been enhanced with the use of modern frameworks such as Next.js and React. It incorporates multiple JavaScript libraries to achieve a contemporary look and feel. I am delighted with the result and continue to work on it to this day, despite having made over 500 commits.
                                            </p>
                                        </Tab>
                                        <Tab
                                            isDisabled={true}
                                            title={
                                            <div className="flex items-center space-x-1">
                                                <IconPhoto stroke={strokeWidth}/>
                                                <span>Preview</span>
                                            </div>
                                        }>
                                        </Tab>
                                    </Tabs>
                                </CardBody>
                            </Card>
                        </div>
                        {/*RIGHT*/}
                        <div className={`flex flex-col space-y-10`}>
                            <Card className="max-w-[400px] backdrop-blur border-1 border-gray-400 shadow">
                                <CardHeader className="flex justify-between pb-0">
                                    <div className="flex flex-col">
                                        <Link
                                            className="text-2xl"
                                            href="https://vycetka.makuyoshi.dev/"
                                            underline="under"
                                            color="foreground"
                                        >
                                            Výčetka
                                        </Link>
                                        <p className="opacity-70">Website</p>
                                    </div>
                                    <div className="space-x-1">
                                        <Button
                                            radius="full"
                                            size="sm"
                                            isIconOnly
                                            variant="light"
                                        >
                                            <Link
                                                color="foreground"
                                                href={`${githubBaseURL}vycetka`}
                                            >
                                                <IconBrandGithub stroke={strokeWidth}/>
                                            </Link>
                                        </Button>
                                        <Button
                                            radius="full"
                                            size="sm"
                                            isIconOnly
                                            variant="light"
                                        >
                                            <Link
                                                color="foreground"
                                                href={"https://vycetka.makuyoshi.dev/"}
                                            >
                                                <IconArrowUpRight stroke={strokeWidth}/>
                                            </Link>
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardBody className="pt-1">
                                    <Tabs
                                        size="md"
                                        variant="underlined"
                                    >
                                        <Tab
                                            title={
                                            <div className="flex items-center space-x-1">
                                                <IconPencil stroke={strokeWidth}/>
                                                <span>Description</span>
                                            </div>
                                        }>
                                            <p className="p-1">
                                                This is an accounting tool build using Bootstrap that allows you to count the amount of
                                                banknotes and coins that are in your cash register.
                                            </p>
                                        </Tab>
                                        <Tab
                                            title={
                                            <div className="flex items-center space-x-1">
                                                <IconPhoto stroke={strokeWidth}/>
                                                <span>Preview</span>
                                            </div>
                                        }>
                                            <Image
                                                isZoomed
                                                height={300}
                                                src="vycetka_preview.gif"
                                                alt="vycetka preview image"
                                            >
                                            </Image>
                                        </Tab>
                                    </Tabs>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </Tab>
                <Tab
                    key={"contributions"}
                    title={"Contributions"}
                >

                </Tab>
            </Tabs>
        </div>
    );
};


export default Projects;
