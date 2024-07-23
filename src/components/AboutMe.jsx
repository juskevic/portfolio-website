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
                        {/*ABOUT*/}
                        <Card className="w-full md:w-2/3 max-w-[700px] backdrop-blur border-1 border-gray-300 shadow">
                            <CardBody>
                                <CardHeader className="flex justify-between z-10 !items-start">
                                    <div className="flex flex-col">
                                        <p className="text-sm text-default-500 uppercase">WHO ARE YOU?</p>
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
                        {/*BLOG*/}
                        <Card className="w-full md:w-1/2 max-w-[700px] backdrop-blur border-1 border-gray-200 shadow">
                            <CardBody>
                                <CardHeader className="flex flex-col max-h-[200px] z-10 !items-start">
                                    <p className="text-sm text-default-500 uppercase">BLOG</p>
                                    <h4 className="text-xl">
                                        Latest post
                                    </h4>
                                </CardHeader>
                                <Card className="h-full backdrop-blur border-1 border-gray-100 shadow-none">
                                    <CardBody>
                                        <Chip color="warning" variant="dot">Available soon</Chip>
                                    </CardBody>
                                </Card>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="flex flex-col xl:flex-row justify-between space-x-0 xl:space-x-10 space-y-10 xl:space-y-0">
                        {/*ACCORDION*/}
                        <Card
                            className="
                            w-full xl:w-2/3 h-[400px] max-w-[700px] max-h-[500px]
                            bg-neutral-350 backdrop-blur border-1 border-gray-300 shadow"
                        >
                           <ScrollShadow hideScrollBar>
                               <CardBody>
                                   <CardHeader>
                                       <p className="text-sm text-default-500 uppercase">PRESS TO EXPAND</p>
                                   </CardHeader>
                                   <Accordion isCompact defaultExpandedKeys={["2"]}>
                                       <AccordionItem
                                           key="1"
                                           aria-label="Accordion 1"
                                           title="Can you tell us about your expertise and experience?"
                                       >
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
                        {/*TECH STACK*/}
                        <Card className="
                        w-full xl:w-2/3 h-[330px] max-w-[700px]
                        bg-neutral-350 backdrop-blur border-1 border-gray-300 shadow"
                        >
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
                                                <Card className="backdrop-blur border-1 border-gray-200 shadow-none">
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
                                                <Card className="backdrop-blur border-1 border-gray-200 shadow-none">
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
                        {/*AD*/}
                        <Card
                            isFooterBlurred
                            className="
                            h-[300px] max-h-[300px] w-full max-w-[400px] md:max-w-[300px] text-white
                            backdrop-blur border-1 border-gray-300 shadow"
                        >
                            <Image
                                removeWrapper
                                alt="Card example background"
                                className="z-0 w-full h-full scale-105 -translate-y-6 object-cover"
                                src="https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                height={300}
                                width={300}
                            />
                            <CardFooter className="absolute bottom-0 z-10 justify-between">
                                <div>
                                    <p className="text-xs">Need a new website?</p>
                                    <p className="text-medium">{`I’ll make you one.`}</p>
                                </div>
                                <Button
                                    aria-label="let's talk button"
                                    isDisabled
                                    className="text-tiny text-white"
                                    variant="bordered"
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

