import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {Link} from "@nextui-org/react";

const Contacts = () => {
    return (
        <>
            <div className="flex flex-col text-lg space-y-5">
                <div className="flex flex-col xl:flex-row justify-start space-x-2">
                    <FontAwesomeIcon icon={faEnvelope} size="lg" className="text-stone-400"/>
                    <p className="text-stone-400">Drop me an email for collaborations or just to say hello: </p>
                    <Link href="#" color="foreground" underline="always" size="lg">
                        contact@maxyushkevich.com
                    </Link>
                </div>
                <div className="flex flex-col xl:flex-row space-x-2">
                    <FontAwesomeIcon icon={faGithub} size="lg" className="text-stone-400"/>
                    <p className="text-stone-400">Take a look at my code and projects: </p>
                    <Link href="#" color="foreground" underline="always" size="lg">
                        @maxyushkevich
                    </Link>
                </div>
                <div className="flex flex-col xl:flex-row space-x-2">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" className="text-stone-400"/>
                    <p className="text-stone-400">{`Let's connect on LinkedIn and expand our professional networks:`} </p>
                    <Link href="#" color="foreground" underline="always" size="lg">
                        in/maxyushkevich
                    </Link>
                </div>
                <div className="flex flex-col xl:flex-row space-x-2">
                    <FontAwesomeIcon icon={faTelegram} size="lg" className="text-stone-400"/>
                    <p className="text-stone-400">Contact me on Telegram for direct messaging: </p>
                    <Link href="#" color="foreground" underline="always" size="lg">
                        me/maku
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Contacts;