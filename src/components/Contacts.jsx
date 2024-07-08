import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {Link} from "@nextui-org/react";

const Contacts = () => {
    return (
        <>
            <div className="hidden md:flex justify-center pb-36">
                <div className="flex flex-col space-y-7 p-3 text-xs md:text-lg bg-neutral-800 bg-opacity-25 backdrop-blur rounded-xl text-black w-2/3">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row space-x-2">
                            <FontAwesomeIcon icon={faEnvelope} size="xl" className="brightness-75"/>
                            <h2 className="brightness-75">{"Please don't hesitate to get in touch."}</h2>
                        </div>
                        <Link href="mailto:example@example.com" className="text-sm md:text-xl" size={"lg"}
                              color="foreground" underline="always">
                            contact@maxyushkevich.com
                        </Link>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row space-x-2">
                            <FontAwesomeIcon icon={faGithub} size="xl" className="brightness-75"/>
                            <h2 className="brightness-75">{"Take a look at my code on GitHub."}</h2>
                        </div>
                        <Link href="https://github.com/maxyushkevich" size={"lg"} className="text-sm md:text-xl" color="foreground" underline="always">
                            @maxyushkevich
                        </Link>
                    </div>
                    <div className="flex flex-row justify-between">
                       <div className="flex flex-row space-x-2">
                           <FontAwesomeIcon icon={faTelegram} size="xl" className="brightness-75"/>
                           <h2 className="brightness-75">{"Feel free to get in touch on Telegram."}</h2>
                       </div>
                        <Link isDisabled href="#" className="text-sm md:text-xl" size={"lg"} color="foreground"
                              underline="always">
                            me/maxyushkevich
                        </Link>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row space-x-2">
                            <FontAwesomeIcon icon={faLinkedin} size="xl" className="brightness-75"/>
                            <h2 className="brightness-75">{"Let's connect on LinkedIn."}</h2>
                        </div>
                        <Link isDisabled href="#" className="text-sm md:text-xl" color="foreground" underline="always">
                            in/maxyushkevich
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col space-y-5 md:hidden lg:hidden xl:hidden 2xl:hidden text-black">
                <div>
                    <span className="brightness-75">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </span>
                    <span className="brightness-75">
                        {" Please don't hesitate to get in touch. Just send me an email at: "}
                    </span>
                    <span>
                        <Link underline="always" className="text-black">contact@maxyushkevich.com</Link>
                    </span>
                </div>
                <div>
                    <span className="brightness-75">
                        <FontAwesomeIcon icon={faGithub}/>
                    </span>
                    <span className="brightness-75">
                        {" Take a look at my code on GitHub: "}
                    </span>
                    <span>
                        <Link underline="always" className="text-black">@maxyushkevich</Link>
                    </span>
                </div>
                <div>
                    <span className="brightness-75">
                        <FontAwesomeIcon icon={faTelegram}/>
                    </span>
                    <span className="brightness-75">
                        {" Feel free to get in touch on Telegram: "}
                    </span>
                    <span>
                        <Link underline="always" className="text-black">me/maxyushkevich</Link>
                    </span>
                </div>
                <div>
                    <span className="brightness-75">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </span>
                    <span className="brightness-75">
                        {" Let's connect on LinkedIn: "}
                    </span>
                    <span>
                        <Link underline="always" className="text-black">in/maxyushkevich</Link>
                    </span>
                </div>
            </div>
        </>
    );
}

export default Contacts;