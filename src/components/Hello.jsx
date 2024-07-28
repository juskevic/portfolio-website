import React, {useEffect, useRef} from 'react';
import {Caveat, Poppins, Work_Sans, Inter} from "next/font/google";
import {Button, Image, Tooltip} from "@nextui-org/react";
import Socials from "@/components/Socials.jsx";
import { IconVolume, IconArrowDown } from '@tabler/icons-react';

const COMMON_TEXT_COLOR = 'text-black';

const caveat = Caveat({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
});

const workSansFont = Work_Sans({
    weight: '300',
    style: 'normal',
    subsets: ['latin'],
});

const poppinsFont = Poppins({
    weight: '500',
    style: 'normal',
    subsets: ['latin'],
});

const InterFont300 = Inter({
    weight: '300',
    style: 'normal',
    subsets: ['latin'],
});


export default function Hello() {

    useEffect(() => {}, []);

    const audioRef = useRef(null);

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    return (
        <>
            <div className="flex flex-row justify-between max-w-screen-xl mx-auto md:pt-0 pt-20">
                <div className="flex flex-col md:space-y-0 space-y-10">
                    <div className="max-w-[700px]">
                        <h1 className={`${poppinsFont.className} font-bold text-2xl md:text-5xl space-y-0.5`}>
                            {/*{'Crafting web magic: responsive, user-friendly, and lightning-fast.'}*/}
                            <div>{"Crafting web magic: "}</div>
                            <div className="opacity-90 animate-fade-down animate-delay-[400ms]">{"responsive, user-friendly, "}</div>
                            <div className="opacity-90 animate-fade-down animate-delay-[800ms]">{"and lightning-fast."}</div>
                        </h1>
                    </div>
                    <div className="flex flex-col pt-10 md:pt-14 justify-start">
                        <div>
                            <div className="w-[350px] md:w-[380px] pb-8">
                                <p className={`${InterFont300.className} text-lg text-gray-400 animate-fade animate-delay-[2000ms]`}>
                                    {"I love creating great user experiences through UI and UX design."}
                                </p>
                            </div>
                            <div className="flex flex-row space-x-1">
                                <h1 className={`${caveat.className} text-3xl sm:text-4xl ${COMMON_TEXT_COLOR}`}>
                                    {"Max Yushkevich"}
                                </h1>
                                <audio
                                    ref={audioRef}
                                    src="/MaxYushkevich.mp3"
                                    preload="auto"
                                >
                                </audio>
                                <Tooltip content="Listen to the pronaucination" showArrow={true}>
                                    <Button
                                        radius="full"
                                        isIconOnly
                                        onClick={playAudio}
                                        variant="light"
                                        size="sm"
                                        as="button"
                                        className="text-gray-400 mt-1"
                                    >
                                        <IconVolume stroke={1.5} />
                                    </Button>
                                </Tooltip>
                            </div>
                            <p className={`${workSansFont.className} text-lg sm:text-xl ${COMMON_TEXT_COLOR} animate-fade-down animate-delay-[1200ms]`}>
                                {"Frontend Engineer"}
                            </p>
                        </div>
                        <div className="pt-1 animate-fade-down animate-delay-[1600ms]">
                            <Socials/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center align-middle pt-32 md:pt-16 animate-fade-down animate-delay-[2500ms]">
                <IconArrowDown stroke={1.5} size={60} className="animate-bounce animate-infinite animate-duration-[1700ms] animate-ease-in"/>
            </div>
        </>
    );
}