import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedinIn, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const Socials = () => {
    return (
        <>
            <div>
                <div className="flex flex-row justify-start brightness-75 xl:justify-center
                p-3 w-full space-x-8 text-xl bottom-0 sticky
                xl:p-4 xl:w-full xl:space-x-8 xl:text-2xl xl:bottom-0 xl:sticky
                animate-fade-up animate-once animate-delay-200 animate-ease-out">
                    <a href="https://github.com/makuyoshi" className="hover:scale-110"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="mailto:contact@makuyoshi.dev" className="hover:scale-110"><FontAwesomeIcon icon={faEnvelope} /></a>
                    <a href="#" className="hover:scale-110"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    <a href="#" className="hover:scale-110"><FontAwesomeIcon icon={faTelegram} /></a>
                </div>
            </div>
        </>
    )
}

export default Socials;