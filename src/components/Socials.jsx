import React from "react";
import {Button, ButtonGroup} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn, faSquareUpwork, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function Socials() {
    return (
        <ButtonGroup size="md" variant="light" fullWidth className="brightness-75 animate-fade-down animate-once animate-delay-500">
            <Button isIconOnly><FontAwesomeIcon icon={faEnvelope} size="xl"/></Button>
            <Button isIconOnly><FontAwesomeIcon icon={faGithub} size="xl"/></Button>
            <Button isIconOnly><FontAwesomeIcon icon={faLinkedinIn} size="xl"/></Button>
            <Button isIconOnly><FontAwesomeIcon icon={faTelegram} size="xl"/></Button>
            <Button isIconOnly><FontAwesomeIcon icon={faSquareUpwork} size="xl"/></Button>
        </ButtonGroup>
    );
}
