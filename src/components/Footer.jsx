import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedinIn, faTelegram, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-scroll";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="flex flex-col justify-center p-4 w-full space-x-8 text-lg bottom-0 opacity-90 space-y-3">
                    <p className="text-center">
                        This website has been built using <span className="text-gray-200">Next.js</span>, React and Tailwind CSS. <br />
                        Check out the <a href="https://github.com/makuyoshi/makuyoshi-web" className="text-gray-200 underline underline-offset-2">source-code on my GitHub page. <i
                        className="bi bi-box-arrow-up-right"></i></a>
                    </p>
                    <p className="text-center">
                        &copy; {new Date().getFullYear()} Max Yushkevich
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer;
