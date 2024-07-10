import React from "react";
import {Button, ButtonGroup, Link} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn, faSquareUpwork, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function Socials() {
    return (
        <ButtonGroup size="md" variant="light" fullWidth>
            <Button isIconOnly>
                <Link href={"mailto:contact@maxyushkevich.com"}><FontAwesomeIcon icon={faEnvelope} size="xl" color={"black"}/></Link>
            </Button>
            <Button isIconOnly>
                <Link href={"https://github.com/maxyushkevich"}><FontAwesomeIcon icon={faGithub} size="xl" color={"black"}/></Link>
            </Button>
            <Button isIconOnly>
                <Link href={"https://www.linkedin.com/in/maxyushkevich/"}><FontAwesomeIcon icon={faLinkedinIn} size="xl" color={"black"}/></Link>
            </Button>
            <Button isIconOnly>
                <Link href={"https://t.me/maxyushkevich"}><FontAwesomeIcon icon={faTelegram} size="xl" color={"black"}/></Link>
            </Button>
            <Button isIconOnly>
                <Link href={"#"}><FontAwesomeIcon icon={faSquareUpwork} size="xl" color={"black"}/></Link>
            </Button>
        </ButtonGroup>
    );
}
