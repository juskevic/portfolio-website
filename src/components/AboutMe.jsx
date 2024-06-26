import React from 'react';
import {Card, CardBody, ScrollShadow} from "@nextui-org/react";

export default function AboutMe() {
    return (
        <>
            <div className="flex flex-row justify-center space-x-10">
                <div className="flex flex-col w-2/3">
                    <Card>
                        <CardBody>
                            <ScrollShadow className="p-3 text-xl h-40 max-h-40">
                                <p>
                                    Hello! I’m Max, a front-end developer passionate about crafting beautiful,
                                    responsive
                                    websites with the latest tech. I focus on design and user experience, ensuring
                                    interfaces
                                    are both attractive and intuitive. Skilled in HTML, CSS, JavaScript, plus frameworks
                                    like
                                    React and Next.js, I’m committed to continuous learning to keep pace with industry
                                    innovations. Take a look at my portfolio, and let’s connect to explore how we can
                                    collaborate!
                                </p>
                            </ScrollShadow>
                        </CardBody>
                    </Card>
                </div>
                <div className="flex flex-col w-2/3">
                    <Card>
                        <CardBody>

                        </CardBody>
                    </Card>
                </div>
            </div>
        </>
    )
}