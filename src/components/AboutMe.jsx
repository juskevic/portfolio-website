import React from 'react';
import {Button, Card, CardBody, CardHeader} from "@nextui-org/react";
import {Inter} from "next/font/google";
import {IconArrowUpRight} from "@tabler/icons-react";

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
                    {/*TEXT CARD*/}
                    <div className={`${InterFont300.className} w-full md:w-[380px] md:max-w-[380px]`}>
                        <Card className={`${borderClassName}`}>
                            <CardBody className="flex-row justify-between">
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
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

