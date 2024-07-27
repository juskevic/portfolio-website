import React from 'react';
import {Button, ButtonGroup, Card, CardBody, CardHeader, Chip, Link} from "@nextui-org/react";
import {IconBrandGithub, IconBrandTelegram, IconBrandLinkedin, IconMail, IconBrandUpwork } from "@tabler/icons-react";
import {Inter} from "next/font/google";

const InterFont300 = Inter({
    weight: '300',
    style: 'normal',
    subsets: ['latin'],
});


export default function Socials() {

    const commonStroke = 1.5

    return (
        <>
            <div className={`${InterFont300.className} flex justify-center`}>
                <Card className="border-1 border-gray-400 shadow">
                    <CardBody className="flex flex-col gap-3">
                        <div className="flex flex-row justify-between gap-15 md:gap-20 md:text-xl">
                            <div className="flex flex-row">
                                <IconMail stroke={commonStroke}></IconMail>
                                <p>Mail</p>
                            </div>
                            <div className="flex flex-row">
                                <Link href="https://github.com/maxyushkevich" underline="always" color="foreground" isDisabled={true}
                                      className="md:text-xl">
                                    contact@maxyushkevich.com
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between gap-20 md:text-xl">
                            <div className="flex flex-row">
                                <IconBrandGithub stroke={commonStroke}></IconBrandGithub>
                                <p>GitHub</p>
                            </div>
                            <div className="flex flex-row">
                                <Link href="https://github.com/maxyushkevich" underline="always" color="foreground"
                                      className="md:text-xl">
                                    @maxyushkevich
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between gap-20 md:text-xl">
                            <div className="flex flex-row">
                                <IconBrandTelegram stroke={commonStroke}></IconBrandTelegram>
                                <p>Telegram</p>
                            </div>
                            <div className="flex flex-row">
                                <Link href="https://github.com/maxyushkevich" underline="always" color="foreground"
                                      className="md:text-xl">
                                    me/maxyushkevich
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between gap-20 md:text-xl">
                            <div className="flex flex-row">
                                <IconBrandLinkedin stroke={commonStroke}></IconBrandLinkedin>
                                <p>LinkedIn</p>
                            </div>
                            <div className="flex flex-row">
                                <Link href="https://github.com/maxyushkevich" underline="always" color="foreground"
                                      className="md:text-xl">
                                    in/maxyushkevich
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between gap-20 md:text-xl">
                            <div className="flex flex-row">
                                <IconBrandUpwork stroke={commonStroke}></IconBrandUpwork>
                                <p>Upwork</p>
                            </div>
                            <div className="flex flex-row">
                                <Link href="https://github.com/maxyushkevich" underline="always" color="foreground"
                                      className="md:text-xl" isDisabled={true}>
                                    maxyushkevich
                                </Link>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </>
    );
}