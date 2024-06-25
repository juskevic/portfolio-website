import React from "react";
import {Button, ButtonGroup} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn, faSquareUpwork, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function Socials() {
    return (
        <ButtonGroup size="lg" variant="light" fullWidth className="pt-3 animate-fade-up animate-once animate-delay-200 animate-ease-out">
            <Button isIconOnly><FontAwesomeIcon icon={faEnvelope} size="xl" className="text-neutral-400"/></Button>
            <Button isIconOnly><FontAwesomeIcon icon={faGithub} size="xl" className="text-neutral-400"/></Button>
            <Button isIconOnly><FontAwesomeIcon icon={faLinkedinIn} size="xl" className="text-neutral-400"/></Button>
            <Button isIconOnly><FontAwesomeIcon icon={faTelegram} size="xl" className="text-neutral-400"/></Button>
            <Button isIconOnly><FontAwesomeIcon icon={faSquareUpwork} size="xl" className="text-neutral-400"/></Button>
        </ButtonGroup>
    );
}
