import React from "react";
import {Button, ButtonGroup} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn, faSquareUpwork, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function Socials() {
    return (
        <ButtonGroup size="md" variant="light" fullWidth>
            <Button isIconOnly><FontAwesomeIcon icon={faEnvelope} size="xl" color={"black"}/></Button>
            <Button isIconOnly><FontAwesomeIcon icon={faGithub} size="xl" color={"black"}/></Button>
            <Button isIconOnly><FontAwesomeIcon icon={faLinkedinIn} size="xl" color={"black"}/></Button>
            <Button isIconOnly><FontAwesomeIcon icon={faTelegram} size="xl" color={"black"}/></Button>
            <Button isIconOnly><FontAwesomeIcon icon={faSquareUpwork} size="xl" color={"black"}/></Button>
        </ButtonGroup>
    );
}
