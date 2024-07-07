import React from 'react';
import {
    Link,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Button,
    ScrollShadow, Chip, Accordion, AccordionItem, Tabs, Tab, Spacer, Tooltip,
} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquareUpwork} from "@fortawesome/free-brands-svg-icons";

export default function AboutMe() {
    return (
        <>
            <div className="flex items-center justify-center ">
                <div className="flex flex-col space-y-10">
                    <div className="flex flex-col xl:flex-row justify-center space-x-0 xl:space-x-10 xl:space-y-0 space-y-10">
                        <Card className="w-full xl:w-2/3">
                            <CardBody>
                                <CardHeader className="flex flex-col z-10 !items-start">
                                    <p className="text-sm text-default-500 uppercase">ABOUT ME</p>
                                    <h4 className="text-xl">
                                        Hello! I’m Max 👋
                                    </h4>
                                </CardHeader>
                                <ScrollShadow hideScrollBar>
                                    <p className="text-lg max-h-[200px] p-2">
                                        I’m a front-end developer passionate about crafting beautiful,
                                        responsive websites with the latest tech. I focus on design and user experience, ensuring
                                        interfaces are both attractive and intuitive. Skilled in HTML, CSS, JavaScript, plus
                                        frameworks like React and Next.js, I’m committed to continuous learning to keep pace with
                                        industry innovations. Take a look at my portfolio, and let’s connect to explore how we
                                        can collaborate!
                                    </p>
                                </ScrollShadow>
                            </CardBody>
                        </Card>
                        <Card className="w-full xl:w-1/2">
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
                        <Card className="w-full xl:w-2/3 h-[400px]">
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
                        <Card className="w-full xl:w-2/3 h-[330px]">
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
                                                <Card>
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
                                                    </CardBody>
                                                </Card>
                                            </Tab>
                                            <Tab key="other" title="Other">
                                                <Card>
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
                        <Card isFooterBlurred className="h-[300px] max-h-[300px] w-full max-w-[300px]">
                            <Image
                                removeWrapper
                                alt="Card example background"
                                className="z-0 w-full h-full scale-105 -translate-y-6 object-cover"
                                src="index.jsx.png"
                            />
                            <CardFooter className="absolute bottom-0 z-10 justify-between">
                                <div>
                                    <p className="text-xs">Do you want a website like this?</p>
                                    <p className="text-medium">{`I’ll make you one.`}</p>
                                </div>
                                <Button className="text-tiny" variant="bordered" color="foreground" radius="full" size="sm" endContent={<FontAwesomeIcon icon={faSquareUpwork}  size={"lg"}/>}>
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