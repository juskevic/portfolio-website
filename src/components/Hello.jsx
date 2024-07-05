import React from 'react';
import {Caveat, Exo} from "next/font/google";
import {Image} from "@nextui-org/react";
import Socials from "@/components/Socials.jsx";

const caveat = Caveat({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
});

const exo = Exo({
    weight: '300',
    style: 'normal',
    subsets: ['latin'],
});

export default function Hello() {
    return (
        <>
            <div className="flex flex-row justify-center space-x-5">
                <div className="hidden sm:flex sm:w-2/3">
                    <h1 className="font-bold text-6xl text-wrap
                    bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-transparent">
                        {` I’m passionate about creating responsive and user-friendly websites.`}
                    </h1>
                </div>
                <div className="flex flex-col space-y-2">
                    <Image isZoomed isBlurred width={250} alt="makuyoshi pfp" src="helloAvatar.jpg"></Image>
                    <div className="space-y-1 text-center">
                        <h1 className={`${caveat.className} text-4xl sm:text-4xl`}>
                            Max Yushkevich
                        </h1>
                        <p className={`${exo.className} text-xl sm:text-xl brightness-50`}>
                            Frontend Engineer
                        </p>
                    </div>
                    <Socials/>
                </div>
            </div>
        </>
    )
}