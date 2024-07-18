import React, { useEffect } from 'react';
import {Caveat, Exo} from "next/font/google";
import {Image} from "@nextui-org/react";
import Socials from "@/components/Socials.jsx";
import { motion } from 'framer-motion';

const COMMON_TEXT_COLOR = 'text-black';

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

    useEffect(() => {}, []);

    return (
        <>
            <div className="flex flex-row justify-center sm:space-x-5">
                <motion.div className="hidden sm:flex sm:w-2/3" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, ease: "easeIn"}}>
                    <h1 className="font-bold text-5xl text-wrap w-3/4
                    bg-gradient-to-br from-neutral-800 via-neutral-500 to-neutral-100 bg-clip-text text-transparent">
                        {'Crafting web magic: responsive, user-friendly, and lightning-fast.'}
                    </h1>
                </motion.div>
                <Image isZoomed isBlurred radius="full" width={300} height={300} alt="makuyoshi pfp" src="DSCF4717.webp" />
            </div>
            <div className="flex flex-row justify-start sm:pt-0 pt-16 sm:pl-10 pl-3">
                <motion.div className="space-y-1" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, ease: "easeIn", delay: 1, staggerChildren: 0.5}}>
                    <h1 className={`${caveat.className} text-4xl sm:text-4xl ${COMMON_TEXT_COLOR}`}>
                        {"Max Yushkevich"}
                    </h1>
                    <p className={`${exo.className} text-xl sm:text-xl ${COMMON_TEXT_COLOR}`}>
                        {"Frontend Engineer"}
                    </p>
                    <Socials />
                </motion.div>
            </div>
        </>
    );
}