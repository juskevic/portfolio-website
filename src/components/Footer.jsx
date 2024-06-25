import React from "react";
import { Button } from '@nextui-org/react';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="flex flex-col justify-center
                    p-3 text-sm bottom-0 opacity-70 space-y-2 pt-40 text-center
                    xl:p-4 xl:w-full xl:space-x-8 xl:text-lg xl:space-y-3 xl:pt-40">
                    <p className="text-center">
                        This website has been built on top of <span className="text-gray-200">Next.js</span>, NextUI, React & Tailwind CSS. <br />
                        Check out the <a href="https://github.com/makuyoshi/makuyoshi-web" className="text-gray-200 underline underline-offset-2">source-code on my GitHub page.</a>
                    </p>
                    <p className="text-center">
                        &copy; {new Date().getFullYear()} Max Yushkevich. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer;
