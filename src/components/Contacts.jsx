import React from 'react';
import {Card, CardBody, CardHeader, Link} from "@nextui-org/react";
import {IconBrandGithub, IconBrandTelegram, IconBrandLinkedin, IconMail, IconBrandUpwork, IconBrandMedium } from "@tabler/icons-react";

export default function Socials() {

    const commonStroke = 1.5

    return (
        <>
            <div className="flex justify-center max-w-screen-2xl">
                <Card className="shadow-none bg-opacity-25 md:w-[600px]">
                    <CardHeader>
                        <h2 className="font-medium text-2xl md:text-3xl xl:text-4xl !text-left">{"Let's get in touch"}</h2>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-5">
                        <div className="flex flex-row flew-wrap justify-between">
                            <div className="flex flex-row md:gap-1">
                                <IconMail stroke={1.5} size="30"/>
                                <p className="text-xl">{"Email me. "}</p>
                            </div>
                            <div>
                                <Link color="foreground" className="text-xl" underline="always" href="#">hello@juskevic.com</Link>
                            </div>
                        </div>
                        <div className="flex flex-row flew-wrap justify-between">
                            <div className="flex flex-row md:gap-1">
                                <IconBrandGithub stroke={1.5} size="30"/>
                                <p className="text-xl">{"See my work. "}</p>
                            </div>
                            <div>
                                <Link color="foreground" className="text-xl" underline="always" href="#">@juskevic</Link>
                            </div>
                        </div>
                        <div className="flex flex-row flew-wrap justify-between">
                            <div className="flex flex-row md:gap-1">
                                <IconBrandLinkedin stroke={1.5} size="30"/>
                                <p className="text-xl">{"Connect with my network. "}</p>
                            </div>
                            <div>
                                <Link color="foreground" className="text-xl" underline="always" href="#">in/maxjuskevic</Link>
                            </div>
                        </div>
                        <div className="flex flex-row flew-wrap justify-between">
                            <div className="flex flex-row md:gap-1">
                                <IconBrandTelegram stroke={1.5} size="30"/>
                                <p className="text-xl">{"Message me. "}</p>
                            </div>
                            <div>
                                <Link color="foreground" className="text-xl" underline="always" href="#">me/juskevic</Link>
                            </div>
                        </div>
                        <div className="flex flex-row flew-wrap justify-between">
                            <div className="flex flex-row md:gap-1">
                                <IconBrandUpwork stroke={1.5} size="30"/>
                                <p className="text-xl">{"Do you need a website? "}</p>
                            </div>
                            <div>
                                <Link color="foreground" className="text-xl" underline="always" href="#">maxjuskevic</Link>
                            </div>
                        </div>
                        <div className="flex flex-row flew-wrap justify-between">
                            <div className="flex flex-row md:gap-1">
                                <IconBrandMedium stroke={1.5} size="30"/>
                                <p className="text-xl">{"Read my blog."}</p>
                            </div>
                            <div>
                                <Link color="foreground" className="text-xl" underline="always" href="#">@juskevic</Link>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </>
    );
}