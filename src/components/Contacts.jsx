import React from 'react';
import {Card, CardBody, Link} from "@nextui-org/react";
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
                                <Link href="mailto:contact@maxyushkevich.com" underline="always" color="foreground" isDisabled={true}
                                      className="md:text-xl" target="_blank">
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
                                      className="md:text-xl" target="_blank">
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
                                <Link href="https://t.me/maxyushkevich" underline="always" color="foreground"
                                      className="md:text-xl" target="_blank">
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
                                <Link href="https://www.linkedin.com/in/maxyushkevich/" underline="always" color="foreground"
                                      className="md:text-xl" target="_blank">
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
                                <Link href="https://www.upwork.com/freelancers/~01f6c71aea76152016" underline="always" color="foreground"
                                      className="md:text-xl" target="_blank">
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