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
            <div className="flex flex-row justify-center sm:space-x-5">
                <div className="hidden sm:flex sm:w-2/3">
                    <h1 className="font-bold text-6xl text-wrap animate-fade animate-ease-in
                    bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text text-transparent">
                        {` "I’m passionate about creating responsive and user-friendly websites."`}
                    </h1>
                </div>
                <Image isZoomed isBlurred radius={"full"} width={300} alt="makuyoshi pfp" src="DSCF4717.JPG"></Image>
            </div>
            <div className="flex flex-row justify-start w-full sm:pt-0 pt-16 sm:pl-0 pl-3">
                <div className="space-y-1">
                    <h1 className={`${caveat.className} text-4xl sm:text-4xl animate-fade-right animate-delay-600 animate-ease-in`}>
                        {`Max Yushkevich`}
                    </h1>
                    <p className={`${exo.className} text-xl sm:text-xl brightness-50 animate-fade-right animate-delay-400 animate-ease-in`}>
                        Frontend Engineer
                    </p>
                    <Socials />
                </div>
            </div>
        </>
    )
}