import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {Link} from "@nextui-org/react";

const CONTACTS_DETAILS = [
    {
        icon: faEnvelope,
        message: "Please don't hesitate to get in touch.",
        link: 'mailto:contact@maxyushkevich.com',
        linkContentMd: "contact@maxyushkevich.com",
        linkContentSm: "contact@maxyushkevich.com"
    },
    {
        icon: faGithub,
        message: "Take a look at my code on GitHub.",
        link: 'https://github.com/maxyushkevich',
        linkContentMd: "@maxyushkevich",
        linkContentSm: "@maxyushkevich"
    },
    {
        icon: faTelegram,
        message: "Feel free to get in touch on Telegram.",
        link: 'https://t.me/maxyushkevich',
        linkContentMd: "me/maxyushkevich",
        linkContentSm: "me/maxyushkevich"
    },
    {
        icon: faLinkedin,
        message: "Let's connect on LinkedIn.",
        link: 'https://www.linkedin.com/in/maxyushkevich/',
        linkContentMd: "in/maxyushkevich",
        linkContentSm: "in/maxyushkevich"
    }
];

const ContactInfo = ({icon, message, link, linkContentMd, linkContentSm, isSmallScreen}) => {
    const className = isSmallScreen ? "text-black" : "text-sm md:text-xl";
    const size = isSmallScreen ? "sm" : "lg";

    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-row space-x-2">
                <FontAwesomeIcon icon={icon} size="xl"/>
                <h2>{message}</h2>
            </div>
            <Link href={link} className={className} size={size} color="foreground" underline="hover">
                {isSmallScreen ? linkContentSm : linkContentMd}
            </Link>
        </div>
    );
};

const Contacts = () => {
    return (
        <>
            <div className="hidden md:flex justify-center pb-36">
                <div
                    className="flex flex-col space-y-7 p-3 text-xs md:text-lg bg-neutral-800 bg-opacity-25 backdrop-blur rounded-xl text-black w-2/3">
                    {CONTACTS_DETAILS.map((contactDetail, index) => (
                      <ContactInfo key={index} isSmallScreen={false} {...contactDetail} />
                    ))}
                </div>
            </div>
            <div className="flex flex-col space-y-5 md:hidden lg:hidden xl:hidden 2xl:hidden p-2 text-black bg-neutral-800 bg-opacity-15 backdrop-blur rounded-xl">
                {CONTACTS_DETAILS.map((contactDetail, index) => (
                  <ContactInfo key={index} isSmallScreen={true} {...contactDetail} />
                ))}
            </div>
        </>
    );
}
export default Contacts;