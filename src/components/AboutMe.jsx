import React from 'react';
import {Button, Card, CardBody, CardHeader, Chip, Tab, Tabs} from "@nextui-org/react";
import {Inter} from "next/font/google";
import {
    IconArrowUpRight,
    IconBrandHtml5, IconBrandReact, IconBrandJavascript, IconBrandCss3, IconBrandBootstrap, IconBrandNextjs,
    IconBrandTailwind, IconBrandFramerMotion
} from "@tabler/icons-react"

const InterFont300 = Inter({
    weight: '300',
    style: 'normal',
    subsets: ['latin'],
});

const InterFont400 = Inter({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
});

export default function AboutMe() {

    const borderClassName = "border-1 border-gray-400 shadow bg-white"

    const strokeWidth = 1.5

    return (
        <>
            <div className="flex flex-col md:justify-start">
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col space-y-5">
                        <div className={`${InterFont300.className} w-full md:w-[400px] md:max-w-[400px]`}>
                            <Card className={`${borderClassName}`}>
                                <CardHeader className="flex-row justify-between pb-0">
                                    <div className={`my-auto text-xl md:text-2xl`}>{"Hi, I'm Max 👋"}</div>
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
                        <div className={`${InterFont300.className} w-full md:w-[400px] md:max-w-[400px]`}>
                            <Card className={`${borderClassName}`}>
                                <CardHeader className="pb-0">
                                    <div className="flex flex-col">
                                        <p className={`${InterFont300.className} text-medium text-gray-400`}>THE TOOLS BEHIND STUNNING INTERFACES</p>
                                        <h2 className="text-2xl">Tech Stack</h2>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <Tabs
                                        size="md"
                                        variant="underlined"
                                    >
                                        <Tab title="Frontend">
                                            <Card className="shadow-none bg-white">
                                                <CardBody className="flex flex-row flex-wrap w-auto gap-2">
                                                    <Chip
                                                        className="border-2 border-orange-600"
                                                        variant="light"
                                                        endContent={
                                                            <IconBrandHtml5 stroke={1} />
                                                        }
                                                    >
                                                        HTML
                                                    </Chip>
                                                    <Chip
                                                        className="border-2 border-blue-500"
                                                        variant="light"
                                                        endContent={
                                                            <IconBrandCss3 stroke={1} />
                                                        }
                                                    >
                                                        CSS
                                                    </Chip>
                                                    <Chip
                                                        className="border-2 border-yellow-400"
                                                        variant="light"
                                                        endContent={
                                                            <IconBrandJavascript stroke={1} />
                                                        }
                                                    >
                                                        JavaScript
                                                    </Chip>
                                                    <Chip
                                                        className="border-2 border-purple-500"
                                                        variant="light"
                                                        endContent={
                                                            <IconBrandBootstrap stroke={1} />
                                                        }
                                                    >
                                                        Bootstrap
                                                    </Chip>
                                                    <Chip
                                                        className="border-2 border-cyan-700"
                                                        variant="light"
                                                        endContent={
                                                            <IconBrandReact stroke={1} />
                                                        }
                                                    >
                                                        React
                                                    </Chip>
                                                    <Chip
                                                        className="border-2 border-black"
                                                        variant="light"
                                                        endContent={
                                                            <IconBrandNextjs stroke={1} />
                                                        }
                                                    >
                                                        Next.js
                                                    </Chip>
                                                    <Chip
                                                        className="border-2 border-blue-400"
                                                        variant="light"
                                                        endContent={
                                                            <IconBrandTailwind stroke={1} />
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
                                                            <IconBrandFramerMotion stroke={1} />
                                                        }
                                                    >
                                                        Framer Motion
                                                    </Chip>
                                                </CardBody>
                                            </Card>
                                        </Tab>
                                        <Tab title="Other">
                                            <Card>
                                                <CardBody>

                                                </CardBody>
                                            </Card>
                                        </Tab>
                                    </Tabs>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

