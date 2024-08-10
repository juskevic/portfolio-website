import React from "react";
import {Divider} from "@nextui-org/react";

const Footer = () => {
    return (
        <>
            <footer className="flex flex-col justify-center p-5 space-y-2 pt-72 text-black bg-white">
                <Divider />
                <p className="text-center opacity-70">© 2024 Max Juškevič. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Footer;
