import React from "react";
import {Button, ButtonGroup, Link} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn, faSquareUpwork, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function Socials() {
    return (
        <ButtonGroup size="md" variant="light" fullWidth>
            {createSocialButton("mailto:contact@maxyushkevich.com", faEnvelope)}
            {createSocialButton("https://github.com/maxyushkevich", faGithub)}
            {createSocialButton("https://www.linkedin.com/in/maxyushkevich/", faLinkedinIn)}
            {createSocialButton("https://t.me/maxyushkevich", faTelegram)}
            {createSocialButton("#", faSquareUpwork)}
        </ButtonGroup>
    );
}

function createSocialButton(href, icon) {
    return (
        <Button isIconOnly>
            <Link href={href}>
                <FontAwesomeIcon icon={icon} size="xl" color={"black"}/>
            </Link>
        </Button>
    );
}