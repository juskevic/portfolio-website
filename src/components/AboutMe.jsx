import React from 'react';
import {
    Accordion,
    AccordionItem,
    Button,
    Card,
    CardBody,
    CardHeader,
    Chip,
    ScrollShadow,
    Tab,
    Tabs
} from "@nextui-org/react";
import {Inter} from "next/font/google";
import {
    IconArrowUpRight,
    IconBrandHtml5, IconBrandReact, IconBrandJavascript, IconBrandCss3,
    IconBrandBootstrap, IconBrandNextjs,
    IconBrandTailwind, IconBrandFramerMotion, IconBrandNodejs,
    IconBrandGit, IconBrandNpm, IconSparkles, IconClock, IconNotes
} from "@tabler/icons-react"

const InterFont300 = Inter({
    weight: '300',
    style: 'normal',
    subsets: ['latin'],
});

export default function AboutMe() {

    const borderClassName = "border-1 border-gray-400 shadow bg-white"

    const strokeWidth = 1.5

    return (
        <>
            <div className="flex justify-center">
                <div
                    className={`${InterFont300.className} flex flex-col md:flex-row md:justify-center gap-5 max-w-[1000px]`}>
                    <div className="flex flex-col md:flex-row">
                        <div className="flex flex-col space-y-5">
                            <div className={`w-full md:w-[400px] md:max-w-[400px]`}>
                                <Card className={`${borderClassName}`}>
                                    <CardHeader className="flex-row justify-between pb-0">
                                        <div className={`my-auto text-xl md:text-2xl`}>{"Hello there! 👋"}</div>
                                        <div>
                                            <Button
                                                radius="full"
                                                variant="light"
                                                className={`border-1 border-gray-300 shadow-none bg-white`}
                                                endContent={
                                                    <IconArrowUpRight stroke={strokeWidth}/>
                                                }
                                            >
                                                Read my story
                                            </Button>
                                        </div>
                                    </CardHeader>
                                    <CardBody className="text-lg md:text-xl">
                                        {" I’m a front-end developer passionate about crafting beautiful, responsive websites with the latest tech."}
                                    </CardBody>
                                </Card>
                            </div>
                            <div className={`w-full md:max-w-[400px] md:max-h-40`}>
                                <Card className={`${borderClassName}`}>
                                    <CardHeader className="pb-0">
                                        <div className="flex flex-col">
                                            <p className="text-medium text-gray-400">
                                                Press to expand
                                            </p>
                                            <h2 className="text-2xl">Learn more about me</h2>
                                        </div>
                                    </CardHeader>
                                    <CardBody>
                                        <Accordion isCompact>
                                            <AccordionItem
                                                aria-label="Accordion 1"
                                                title={<span className="md:text-lg">{"What inspires you?"}</span>}
                                                indicator={<IconSparkles stroke={1}/>}
                                            >
                                                {"I find inspiration in solving problems, creating interfaces, and learning new things. Reading and music also influence my creativity. People like Steve Jobs and books such as \"Don’t Make Me Think\" have shaped my perspective. So has the open-source community. 🌟"}
                                            </AccordionItem>
                                            <AccordionItem
                                                aria-label="Accordion 2"
                                                title={<span
                                                    className="md:text-lg">{"How do you spend your free time?"}</span>}
                                                indicator={<IconClock stroke={1}/>}
                                            >
                                                {"Outside of my digital life, I enjoy cycling, reading, and listening to music. These activities help me relax and reflect. They’re my escape from screens and algorithms. 🌿🎶♟️"}
                                            </AccordionItem>
                                            <AccordionItem
                                                aria-label="Accordion 3"
                                                title={<span
                                                    className="md:text-lg">{"What are you currently learning?"}</span>}
                                                indicator={<IconNotes stroke={1}/>}
                                            >
                                                {"I'm currently learning the ins and outs of mobile app development using tools like React Native, Expo, and Firebase."}
                                            </AccordionItem>
                                        </Accordion>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col md:flex-row gap-5">
                            <div>
                                <Card className={`${borderClassName} w-full md:w-[400px] md:max-w-[400px]`}>
                                    <CardHeader className="pb-0">
                                        <div className="flex flex-col">
                                            <p className={`${InterFont300.className} text-medium text-gray-400`}>
                                                The tools behind stunning interfaces ✨
                                            </p>
                                            <h2 className="text-2xl">Tech Stack</h2>
                                        </div>
                                    </CardHeader>
                                    <CardBody className="h-[240px] pt-0">
                                        <Tabs
                                            size="md"
                                            variant="underlined"
                                        >
                                            <Tab title="Frontend">
                                                <ScrollShadow className="max-h-[180px]" hideScrollBar={true}>
                                                    <Card className="shadow-none bg-white">
                                                        <CardBody className="flex flex-row flex-wrap w-auto gap-2">
                                                            <Chip
                                                                className="border-2 border-orange-600"
                                                                variant="light"
                                                                endContent={
                                                                    <IconBrandHtml5 stroke={1}/>
                                                                }
                                                            >
                                                                HTML
                                                            </Chip>
                                                            <Chip
                                                                className="border-2 border-blue-500"
                                                                variant="light"
                                                                endContent={
                                                                    <IconBrandCss3 stroke={1}/>
                                                                }
                                                            >
                                                                CSS
                                                            </Chip>
                                                            <Chip
                                                                className="border-2 border-yellow-400"
                                                                variant="light"
                                                                endContent={
                                                                    <IconBrandJavascript stroke={1}/>
                                                                }
                                                            >
                                                                JavaScript
                                                            </Chip>
                                                            <Chip
                                                                className="border-2 border-purple-500"
                                                                variant="light"
                                                                endContent={
                                                                    <IconBrandBootstrap stroke={1}/>
                                                                }
                                                            >
                                                                Bootstrap
                                                            </Chip>
                                                            <Chip
                                                                className="border-2 border-cyan-700"
                                                                variant="light"
                                                                endContent={
                                                                    <IconBrandReact stroke={1}/>
                                                                }
                                                            >
                                                                React
                                                            </Chip>
                                                            <Chip
                                                                className="border-2 border-black"
                                                                variant="light"
                                                                endContent={
                                                                    <IconBrandNextjs stroke={1}/>
                                                                }
                                                            >
                                                                Next.js
                                                            </Chip>
                                                            <Chip
                                                                className="border-2 border-blue-400"
                                                                variant="light"
                                                                endContent={
                                                                    <IconBrandTailwind stroke={1}/>
                                                                }
                                                            >
                                                                Tailwind CSS
                                                            </Chip>
                                                            <Chip
                                                                className="border-2 border-gray-700"
                                                                variant="light"
                                                            >
                                                                NextUI
                                                            </Chip>
                                                            <Chip
                                                                className="border-2 border-stone-600"
                                                                variant="light"
                                                                endContent={
                                                                    <IconBrandFramerMotion stroke={1}/>
                                                                }
                                                            >
                                                                Framer Motion
                                                            </Chip>

                                                        </CardBody>
                                                    </Card>
                                                </ScrollShadow>
                                            </Tab>
                                            <Tab title="Other">
                                                <Card className="shadow-none bg-white">
                                                    <CardBody className="flex flex-row flex-wrap w-auto gap-2">
                                                        <Chip
                                                            className="border-2 border-green-700"
                                                            variant="light"
                                                            endContent={
                                                                <IconBrandNodejs stroke={1}/>
                                                            }
                                                        >
                                                            Node.js
                                                        </Chip>
                                                        <Chip
                                                            className="border-2 border-orange-700"
                                                            variant="light"
                                                            endContent={
                                                                <IconBrandGit stroke={1}/>
                                                            }
                                                        >
                                                            Git
                                                        </Chip>
                                                        <Chip
                                                            className="border-2 border-red-500"
                                                            variant="light"
                                                            endContent={
                                                                <IconBrandNpm stroke={1}/>
                                                            }
                                                        >
                                                            npm
                                                        </Chip>
                                                    </CardBody>
                                                </Card>
                                            </Tab>
                                        </Tabs>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className={`${InterFont300.className}`}>
                                <Card className={`${borderClassName} w-full md:w-[400px] md:max-w-[400px]`}>
                                    <CardHeader className="pb-0">
                                        <div className="flex flex-col">
                                            <p className="text-medium text-gray-400">
                                                Blog
                                            </p>
                                            <h2 className="text-2xl">Latest post</h2>
                                        </div>
                                    </CardHeader>
                                    <CardBody>
                                        <Card className="shadow-none">
                                            <CardBody>
                                                <Chip variant="dot" color="warning">
                                                    Available soon
                                                </Chip>
                                            </CardBody>
                                        </Card>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                        <div>
                            {/*Add something here later*/}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

