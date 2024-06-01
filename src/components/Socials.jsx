import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedinIn, faTelegram, faXTwitter} from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
    return (
        <>
            <div>
                <div className="flex flex-row justify-center p-4 w-full space-x-8 text-2xl bottom-0 sticky animate-fade-up animate-once animate-delay-200 animate-ease-out">
                    <a href="https://github.com/makuyoshi" className="hover:scale-110"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://twitter.com/makuyoshi_dev" className="hover:scale-110"><FontAwesomeIcon icon={faXTwitter} /></a>
                    <a href="#" className="hover:scale-110"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    <a href="#" className="hover:scale-110"><FontAwesomeIcon icon={faTelegram} /></a>
                </div>
            </div>
        </>
    )
}

export default Socials;