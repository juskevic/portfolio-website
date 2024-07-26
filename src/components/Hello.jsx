import React, {useEffect, useRef} from 'react';
import {Caveat, Poppins, Work_Sans} from "next/font/google";
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
            <div className="flex flex-row justify-between max-w-screen-xl mx-auto">
                <div className="flex flex-col">
                    <div className="max-w-[700px]">
                        <h1 className={`${poppinsFont.className} font-bold text-2xl md:text-5xl space-y-0.5`}>
                            {/*{'Crafting web magic: responsive, user-friendly, and lightning-fast.'}*/}
                            <div>{"Crafting web magic: "}</div>
                            <div className="opacity-90">{"responsive, user-friendly, "}</div>
                            <div className="opacity-90">{"and lightning-fast."}</div>
                        </h1>
                    </div>
                    <div className="flex flex-col pt-10 md:pt-20 justify-start">
                        <div>
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
                            <p className={`${workSansFont.className} text-lg sm:text-xl ${COMMON_TEXT_COLOR}`}>
                                {"Frontend Engineer"}
                            </p>
                        </div>
                        <div className="pt-1">
                            <Socials/>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex">
                    <Image
                        isBlurred
                        radius="lg"
                        width={350}
                        isZoomed
                        src="DSCF4717.webp"
                        alt="portrait photo"
                    />
                </div>
            </div>
            <div className="flex justify-center align-middle pt-32 md:pt-20 animate-bounce animate-infinite animate-duration-[1700ms] animate-ease-in">
                <IconArrowDown stroke={1.5} size={60}/>
            </div>
        </>
    );
}