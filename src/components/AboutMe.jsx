import React from 'react';
import {
    Link,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Button,
    Divider,
    ScrollShadow, Chip, Accordion, AccordionItem,
} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquareUpwork} from "@fortawesome/free-brands-svg-icons";

export default function AboutMe() {
    return (
        <>
            <div className="flex items-center justify-center">
                <div className="flex flex-col w-full xl:w-4/5 space-y-10">
                    <div className="flex flex-col xl:flex-row justify-center space-x-0 xl:space-x-10 space-y-10 xl:space-y-0">
                        <Card className="w-full xl:w-2/3">
                            <CardBody>
                                <CardHeader className="flex flex-col z-10 !items-start">
                                    <p className="text-sm text-white/60 uppercase">ABOUT ME</p>
                                    <h4 className="text-xl">
                                        Hello! I’m Max 👋
                                    </h4>
                                </CardHeader>
                                <ScrollShadow hideScrollBar>
                                    <p className="text-lg max-h-[200px] p-2">
                                        I’m a front-end developer passionate about crafting beautiful,
                                        responsive
                                        websites with the latest tech. I focus on design and user experience, ensuring
                                        interfaces
                                        are both attractive and intuitive. Skilled in HTML, CSS, JavaScript, plus
                                        frameworks
                                        like
                                        React and Next.js, I’m committed to continuous learning to keep pace with
                                        industry
                                        innovations. Take a look at my portfolio, and let’s connect to explore how we
                                        can
                                        collaborate!
                                    </p>
                                </ScrollShadow>
                            </CardBody>
                        </Card>
                        <Card className="w-full xl:w-1/2">
                            <CardBody>
                                <CardHeader className="flex flex-col max-h-[200px] z-10 !items-start">
                                    <p className="text-sm text-white/60 uppercase">BLOG</p>
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
                        <Card className="w-full xl:w-1/3 h-[380px]">
                            <CardBody>
                                <CardHeader>
                                    <p className="text-sm text-white/60 uppercase">PRESS TO EXPAND</p>
                                </CardHeader>
                                <Accordion isCompact defaultExpandedKeys={["2"]}>
                                <AccordionItem key="1" aria-label="Accordion 1" title="Can you tell us about your expertise and experience?">
                                        <p>
                                            At the moment I am still a student trying to gain experience in web development by freelancing.
                                        </p>
                                    </AccordionItem>
                                    <AccordionItem  key="2" aria-label="Accordion 2" title="How can someone hire you or collaborate on a project?">
                                        <p>
                                            Please do not hesitate to contact me via my
                                            <Link isBlock href="#" underline="always" color="foreground">Upwork</Link>
                                            profile should you require a website.
                                            You are also welcome to contribute to my open-source projects on
                                            <Link isBlock href="#" underline="always" color="foreground">GitHub</Link>.
                                        </p>
                                    </AccordionItem>
                                    <AccordionItem key="3" aria-label="Accordion 3" title="How can we get in touch with you?">
                                        <p>
                                            Should you require direct communication, please contact me on<Link isBlock href="#" underline="always" color="foreground">Telegram</Link>.
                                        </p>
                                    </AccordionItem>
                                </Accordion>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <CardHeader>

                                </CardHeader>
                            </CardBody>
                        </Card>
                        <Card isFooterBlurred className="h-[300px] max-h-[300px] w-full max-w-[300px]">
                            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                <p className="text-tiny text-white/60">WANT A WEBSITE LIKE THIS?</p>
                                <h4 className="text-xl">Let me make you one</h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Relaxing app background"
                                className="z-0 object-cover"
                                src=""
                            />
                            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                                <div className="flex flex-grow gap-2 items-center">
                                    <Image
                                        alt="makuyoshi icon"
                                        className="rounded-full w-10 h-11 bg-black"
                                        src=""
                                    />
                                </div>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <Button color="default" variant="bordered" endContent={<FontAwesomeIcon icon={faSquareUpwork} size={"xl"}/>}>Let's Talk</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}