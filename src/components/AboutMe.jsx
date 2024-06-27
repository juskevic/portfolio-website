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
    ScrollShadow,
    Accordion, AccordionItem
} from "@nextui-org/react";

export default function AboutMe() {
    return (
        <>
            <div className="flex items-center justify-center">
                <div className="flex flex-col w-full xl:w-3/5 space-y-5">
                    <div className="flex flex-col xl:flex-row justify-center space-x-0 xl:space-x-5 space-y-5 xl:space-y-0">
                        <Card className="w-full xl:w-2/3">
                            <CardBody>
                                <CardHeader className="flex flex-col z-10 !items-start">
                                    <p className="text-sm text-white/60 uppercase">ABOUT ME</p>
                                    <h4 className="text-xl">
                                        Hello! I’m Max 👋
                                    </h4>
                                </CardHeader>
                                <ScrollShadow hideScrollBar>
                                    <p className="text-lg max-h-40 p-2">
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
                                <CardHeader className="flex flex-col z-10 !items-start">
                                    <p className="text-sm text-white/60 uppercase">BLOG</p>
                                    <h4 className="text-xl">
                                        Last post
                                    </h4>
                                </CardHeader>

                                <CardFooter>

                                </CardFooter>
                            </CardBody>
                        </Card>
                    </div>
                    <div
                        className="flex flex-col xl:flex-row justify-center space-x-0 xl:space-x-5 space-y-5 xl:space-y-0">
                        <Card>
                            <CardBody>
                            <CardHeader>

                                </CardHeader>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis sapien nunc, commodo
                                    et, interdum suscipit, sollicitudin et, dolor. Duis bibendum, lectus ut viverra
                                    rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Aliquam id
                                    dolor.
                                </p>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <CardHeader>

                                </CardHeader>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis sapien nunc, commodo
                                    et,
                                    interdum suscipit, sollicitudin et, dolor. Duis bibendum, lectus ut viverra rhoncus,
                                    dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Aliquam id dolor.
                                </p>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <CardHeader>

                                </CardHeader>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis sapien nunc, commodo
                                    et,
                                    interdum suscipit, sollicitudin et, dolor. Duis bibendum, lectus ut viverra rhoncus,
                                    dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Aliquam id dolor.
                                </p>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}