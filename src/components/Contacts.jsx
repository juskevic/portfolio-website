import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faHackerrank, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {Link} from "@nextui-org/react";

const Contacts = () => {
    return (
        <>
            <div className="hidden md:flex justify-center">
                <div className="flex flex-col space-y-7 text-xs md:text-lg">
                    <div className="flex flex-row space-x-3">
                        <FontAwesomeIcon icon={faEnvelope} size="xl" className="brightness-75"/>
                        <h2 className="brightness-75">{"Please don't hesitate to get in touch. Just send me an email at: "}</h2>
                        <Link href="mailto:example@example.com" className="text-sm md:text-xl" size={"lg"} color="foreground" underline="always">
                            contact@maxyushkevich.com
                        </Link>
                    </div>
                    <div className="flex flex-row space-x-3">
                        <FontAwesomeIcon icon={faGithub} size="xl" className="brightness-75"/>
                        <h2 className="brightness-75">{"Take a look at my code on GitHub: "}</h2>
                        <Link href="#" size={"lg"} className="text-sm md:text-xl" color="foreground" underline="always">
                            @maxyushkevich
                        </Link>
                    </div>
                    <div className="flex flex-row space-x-3">
                        <FontAwesomeIcon icon={faTelegram} size="xl" className="brightness-75"/>
                        <h2 className="brightness-75">{"Feel free to get in touch on Telegram: "}</h2>
                        <Link isDisabled href="#" className="text-sm md:text-xl" size={"lg"} color="foreground" underline="always">
                            me/maxyushkevich
                        </Link>
                    </div>
                    <div className="flex flex-row space-x-3">
                        <FontAwesomeIcon icon={faLinkedin} size="xl" className="brightness-75"/>
                        <h2 className="brightness-75">{"Let's connect on LinkedIn.: "}</h2>
                        <Link isDisabled href="#" className="text-sm md:text-xl" color="foreground" underline="always">
                            in/maxyushkevich
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contacts;