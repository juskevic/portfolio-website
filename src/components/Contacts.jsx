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
                            <FontAwesomeIcon icon={faEnvelope} size="xl"/>
                            <h2>{"Please don't hesitate to get in touch."}</h2>
                        </div>
                        <Link href="mailto:contact@maxyushkevich.com" className="text-sm md:text-xl" size={"lg"} color="foreground" underline="hover">
                            contact@maxyushkevich.com
                        </Link>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row space-x-2">
                            <FontAwesomeIcon icon={faGithub} size="xl"/>
                            <h2>{"Take a look at my code on GitHub."}</h2>
                        </div>
                        <Link href="https://github.com/maxyushkevich" size={"lg"} className="text-sm md:text-xl" color="foreground" underline="hover">
                            @maxyushkevich
                        </Link>
                    </div>
                    <div className="flex flex-row justify-between">
                       <div className="flex flex-row space-x-2">
                           <FontAwesomeIcon icon={faTelegram} size="xl"/>
                           <h2>{"Feel free to get in touch on Telegram."}</h2>
                       </div>
                        <Link href="https://t.me/maxyushkevich" className="text-sm md:text-xl" size={"lg"} color="foreground" underline="hover">
                            me/maxyushkevich
                        </Link>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row space-x-2">
                            <FontAwesomeIcon icon={faLinkedin} size="xl"/>
                            <h2>{"Let's connect on LinkedIn."}</h2>
                        </div>
                        <Link href="https://www.linkedin.com/in/maxyushkevich/" className="text-sm md:text-xl" color="foreground" underline="hover">
                            in/maxyushkevich
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col space-y-5 md:hidden lg:hidden xl:hidden 2xl:hidden p-2 text-black bg-neutral-800 bg-opacity-15 backdrop-blur rounded-xl">
                <div>
                    <span>
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </span>
                    <span>
                        {" Please don't hesitate to get in touch."}
                    </span>
                    <span>
                        <Link href="mailto:contact@maxyushkevich.com" underline="always" className="text-black">contact@maxyushkevich.com</Link>
                    </span>
                </div>
                <div>
                    <span>
                        <FontAwesomeIcon icon={faGithub}/>
                    </span>
                    <span>
                        {" Take a look at my code on GitHub."}
                    </span>
                    <span>
                        <Link href={"https://github.com/maxyushkevich"} underline="always" className="text-black">@maxyushkevich</Link>
                    </span>
                </div>
                <div>
                    <span>
                        <FontAwesomeIcon icon={faTelegram}/>
                    </span>
                    <span>
                        {" Feel free to get in touch on Telegram."}
                    </span>
                    <span>
                        <Link href={"https://t.me/maxyushkevich"} underline="always" className="text-black">me/maxyushkevich</Link>
                    </span>
                </div>
                <div>
                    <span>
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </span>
                    <span>
                        {" Let's connect on LinkedIn."}
                    </span>
                    <span>
                        <Link href={"https://www.linkedin.com/in/maxyushkevich/"} underline="always" className="text-black">in/maxyushkevich</Link>
                    </span>
                </div>
            </div>
        </>
    );
}

export default Contacts;