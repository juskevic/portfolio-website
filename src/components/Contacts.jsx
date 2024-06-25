import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {Button} from "@nextui-org/react";

const Contacts = () => {

    return (
        <div className="flex flex-row justify-center break-words
        text
        xl:space-x-14 xl:w-full xl:text-xl x:p-5">
            {/*Left side*/}
            <div className="space-y-5 text-left">
                <div className="pb-2 space-y-2">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span className="opacity-90"> Drop me an email for collaboration or just to say hello. </span>
                    <a className="xl:hidden block">
                        contact@makuyoshi.dev
                    </a>
                </div>
                <div className="space-y-2">
                    <FontAwesomeIcon icon={faGithub} />
                    <span className="opacity-90"> Take a look at my code and projects. </span>
                </div>
                <div className="space-y-2">
                    <FontAwesomeIcon icon={faLinkedin} />
                    <span
                        className="opacity-90"> Let’s connect on LinkedIn and expand our professional networks. </span>
                    <a className="xl:hidden flex hover:underline" href="#">
                        <button
                            className="outline outline-1 pl-3 pr-3 rounded-2xl align-middle hover:text-gray-900 hover:bg-stone-50">
                            LINKED IN <i className="bi bi-arrow-up-right"></i>
                        </button>
                    </a>
                </div>
                <div className="space-y-2">
                    <FontAwesomeIcon icon={faTelegram} />
                    <span className="opacity-90"> Contact me on Telegram for direct messaging. </span>
                    <a className="xl:hidden flex hover:underline" href="#">
                        <button
                            className="outline outline-1 pl-3 pr-3 rounded-2xl align-middle hover:text-gray-900 hover:bg-stone-50">
                            TELEGRAM <i className="bi bi-arrow-up-right"></i>
                        </button>
                    </a>
                </div>
            </div>
            {/*Right side*/}
            {/*HIDDEN for mobiles!!*/}
            <div className="space-y-5 text-right xl:block hidden">
                <div className="pb-2">
                    <Button className="bg-stone-950" variant="light" radius="md">
                        <FontAwesomeIcon icon={faEnvelope} size="xl"/>
                    </Button>
                </div>
                <div>
                <a className="hover:underline text-right" href="https://github.com/makuyoshi">
                    <Button className="bg-stone-950" variant="light" radius="md">
                        <FontAwesomeIcon icon={faGithub} size="xl"/>
                    </Button>
                </a>
                </div>
                <div>
                    <a className="hover:underline" href="#">
                        <Button className="bg-stone-950" variant="light" radius="md">
                            <FontAwesomeIcon icon={faLinkedin} size="xl"/>
                        </Button>
                    </a>
                </div>
                <div>
                    <a className="hover:underline" href="#">
                        <Button className="bg-stone-950" variant="light" radius="md">
                            <FontAwesomeIcon icon={faTelegram} size="xl"/>
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contacts;