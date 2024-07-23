import React from 'react';
import {
    Link,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Button,
    ScrollShadow,
    Chip,
    Accordion,
    AccordionItem,
    Tabs,
    Tab,
    Spacer,
    Tooltip
} from "@nextui-org/react";
import { IconArrowUpRight, IconBrandUpwork } from '@tabler/icons-react';

export default function AboutMe() {
    return (
        <>
            <div className="flex items-center justify-center ">
                <div className="flex flex-col space-y-10">
                    <div className="flex flex-col xl:flex-row justify-center space-x-0 xl:space-x-10 xl:space-y-0 space-y-10">
                        <Card className="w-full md:w-2/3 bg-neutral-950 opacity-85 backdrop-blur max-w-[700px]">
                            <CardBody>
                                <CardHeader className="flex justify-between z-10 !items-start">
                                    <div className="flex flex-col">
                                        <p className="text-sm text-default-500 uppercase">ABOUT ME</p>
                                        <h4 className="text-xl">
                                            {"Hi, I’m Max 👋"}
                                        </h4>
                                    </div>
                                    <div className="hidden md:flex">
                                        <Button
                                            variant="ghost"
                                            radius="full"
                                            size="md"
                                            className="text-medium"
                                            endContent={<IconArrowUpRight stroke={1.5} />}
                                        >
                                            Read my story
                                        </Button>
                                    </div>
                                </CardHeader>
                                <ScrollShadow hideScrollBar>
                                    <p className="text-lg max-h-[200px] p-2">
                                        {"I’m a front-end developer passionate about creating beautiful and responsive websites with the latest tech. I focus on design and user experience. I’m skilled in HTML, CSS, JavaScript, and frameworks like React and Next.js. I’m committed to learning to keep pace with industry innovations. Take a look at my portfolio, and let’s connect!"}
                                    </p>
                                </ScrollShadow>
                            </CardBody>
                        </Card>
                        <Card className="w-full xl:w-1/2 bg-neutral-950 opacity-85 backdrop-blur max-w-[700px]">
                            <CardBody>
                                <CardHeader className="flex flex-col max-h-[200px] z-10 !items-start">
                                    <p className="text-sm text-default-500 uppercase">BLOG</p>
                                    <h4 className="text-xl">
                                        Latest post
                                    </h4>
                                </CardHeader>
                                <Card className="h-full">
                                    <CardBody>
                                        <Chip color="warning" variant="dot">Available soon</Chip>
                                    </CardBody>
                                </Card>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="flex flex-col xl:flex-row justify-between space-x-0 xl:space-x-10 space-y-10 xl:space-y-0">
                        <Card className="w-full xl:w-2/3 h-[400px] bg-neutral-950 opacity-85 backdrop-blur max-w-[700px] max-h-[500px]">
                           <ScrollShadow hideScrollBar>
                               <CardBody>
                                   <CardHeader>
                                       <p className="text-sm text-default-500 uppercase">PRESS TO EXPAND</p>
                                   </CardHeader>
                                   <Accordion isCompact defaultExpandedKeys={["2"]}>
                                       <AccordionItem key="1" aria-label="Accordion 1" title="Can you tell us about your expertise and experience?">
                                           <p>
                                               At the moment I am still a student trying to gain experience in web development by freelancing.
                                           </p>
                                       </AccordionItem>
                                       <AccordionItem  key="2" aria-label="Accordion 2" title="How can someone hire you or collaborate on a project?">
                                           <p>
                                               Please do not hesitate to contact me via my <Link href="#" underline="always" color="foreground"> Upwork</Link> profile should you require a website.
                                               You are also welcome to contribute to my open-source projects on <Link href="#" underline="always" color="foreground"> GitHub</Link>.
                                           </p>
                                       </AccordionItem>
                                       <AccordionItem key="3" aria-label="Accordion 3" title="How can we get in touch with you?">
                                           <p>
                                               Should you require direct communication, please contact me on <Link href="#" underline="always" color="foreground"> Telegram</Link> or <Link href="#" underline="always" color="foreground"> Email</Link>.
                                           </p>
                                       </AccordionItem>
                                   </Accordion>
                               </CardBody>
                           </ScrollShadow>
                        </Card>
                        <Card className="w-full xl:w-2/3 h-[330px] bg-neutral-950 opacity-85 backdrop-blur max-w-[700px]">
                            <ScrollShadow hideScrollBar>
                                <CardBody>
                                    <CardHeader className="flex flex-col z-10 !items-start">
                                        <p className="text-sm text-default-500 uppercase">The Tools Behind Stunning Interfaces</p>
                                        <h4 className="text-xl">
                                            Tech stack
                                        </h4>
                                    </CardHeader>
                                    <div>
                                        <Tabs aria-label="Options" variant="underlined" size="md">
                                            <Tab key="frontend" title="Frontend">
                                                <Card className={"bg-neutral-950"}>
                                                    <CardBody className="flex flex-row flex-wrap space-x-2 space-y-2">
                                                        <Spacer y={2} />
                                                        <Tooltip showArrow={true} color="foreground" content="Used for structuring content on the web.">
                                                            <Chip variant="faded" className="border-red-400">HTML</Chip>
                                                        </Tooltip>
                                                        <Tooltip showArrow={true} color="foreground" content="Used for styling and layout of web pages.">
                                                            <Chip variant="faded" className="border-blue-500">CSS</Chip>
                                                        </Tooltip>
                                                        <Tooltip showArrow={true} color="foreground" content="Used for making web pages interactive.">
                                                            <Chip variant="faded" className="border-yellow-400">JavaScript</Chip>
                                                        </Tooltip>
                                                        <Tooltip showArrow={true} color="foreground" content="A popular framework for developing responsive and mobile-first websites.">
                                                            <Chip variant="faded" className="border-purple-500">Bootstrap</Chip>
                                                        </Tooltip>
                                                        <Tooltip showArrow={true} color="foreground" content="A JavaScript library for building user interfaces.">
                                                            <Chip variant="faded" className="border-cyan-700">React</Chip>
                                                        </Tooltip>
                                                        <Tooltip showArrow={true} color="foreground" content="A React framework for server-rendered React apps.">
                                                            <Chip variant="faded" className="border-black">Next.js</Chip>
                                                        </Tooltip>
                                                        <Tooltip showArrow={true} color="foreground" content="A utility-first CSS framework for rapidly building custom designs.">
                                                            <Chip variant="faded" className="border-blue-400">Tailwind CSS</Chip>
                                                        </Tooltip>
                                                        <Tooltip showArrow={true} color="foreground" content="A React-based component library for building user interfaces.">
                                                            <Chip variant="faded" className="border-black">NextUI</Chip>
                                                        </Tooltip>
                                                        <Tooltip showArrow={true} color="foreground" content="A production-ready motion library for React, enabling animations and gestures in web and mobile apps.">
                                                            <Chip variant="faded" className="border-gray-700">Framer Motion</Chip>
                                                        </Tooltip>
                                                    </CardBody>
                                                </Card>
                                            </Tab>
                                            <Tab key="other" title="Other">
                                                <Card className="bg-neutral-950">
                                                    <CardBody className="flex flex-row flex-wrap space-x-2 space-y-2">
                                                        <Spacer y={2} />
                                                        <Tooltip showArrow={true} color="foreground" content=" An open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.">
                                                            <Chip variant="faded" className="border-green-700">Node.js</Chip>
                                                        </Tooltip>
                                                        <Tooltip showArrow={true} color="foreground" content=" A distributed version control system designed to handle everything from small to very large projects with speed and efficiency.">
                                                            <Chip variant="faded" className="border-orange-700">Git</Chip>
                                                        </Tooltip>
                                                        <Tooltip showArrow={true} color="foreground" content="Stands for Node Package Manager, which is the default package manager for the JavaScript runtime environment Node.js.">
                                                            <Chip variant="faded" className="border-red-700">npm</Chip>
                                                        </Tooltip>
                                                    </CardBody>
                                                </Card>
                                            </Tab>
                                        </Tabs>
                                    </div>
                                </CardBody>
                            </ScrollShadow>
                        </Card>
                        <Card isFooterBlurred className="h-[300px] max-h-[300px] w-full max-w-[300px] opacity-85 backdrop-blur">
                            <Image
                                removeWrapper
                                alt="Card example background"
                                className="z-0 w-full h-full scale-105 -translate-y-6 object-cover"
                                src="https://images.pexels.com/photos/20853116/pexels-photo-20853116/free-photo-of-programming-code-on-a-screen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                height={300}
                                width={300}
                            />
                            <CardFooter className="absolute bottom-0 z-10 justify-between">
                                <div>
                                    <p className="text-xs">Need a new website?</p>
                                    <p className="text-medium">{`I’ll make you one.`}</p>
                                </div>
                                {/* Remove isDisabled later ;)*/}
                                <Button
                                    aria-label="let's talk button"
                                    isDisabled className="text-tiny"
                                    variant="bordered"
                                    color="foreground"
                                    radius="full"
                                    size="sm"
                                    endContent={<IconBrandUpwork stroke={1.5} />}>
                                    {`Let's Talk`}
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

