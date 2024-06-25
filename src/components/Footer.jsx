import React from "react";
import {Link} from "@nextui-org/react";

const Footer = () => {
    return (
        <>
            <footer className="flex flex-col justify-center p-5 space-y-2 pt-32">
                <p className="text-center text-stone-400">This website has been build on top of Next.js, using React & NextUI.</p>
                <p className="text-center text-stone-400">You can check out the source-code <Link href="https://github.com/makuyoshi/makuyoshi-web" showAnchorIcon color="foreground" underline="always">here.</Link></p>
                <p className="text-center text-stone-400">© 2024 Max Yushkevich. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Footer;
