import React from "react";
import {Button, ButtonGroup} from "@nextui-org/react";
import {IconMail, IconBrandGithub, IconBrandLinkedin, IconBrandTelegram, IconBrandUpwork} from '@tabler/icons-react';

export default function Socials() {
    return (
        <ButtonGroup size="md" variant="light">

            <Button isIconOnly href="mailto:contact@maxyushkevich.com">
                <IconMail stroke={1.5} color="black"/>
            </Button>

            <Button isIconOnly href="https://github.com/maxyushkevich">
                <IconBrandGithub stroke={1.5} color="black"/>
            </Button>

            <Button isIconOnly href="https://www.linkedin.com/in/maxyushkevich/">
                <IconBrandLinkedin stroke={1.5} color="black"/>
            </Button>

            <Button isIconOnly href="https://t.me/maxyushkevic">
                <IconBrandTelegram stroke={1.5} color="black"/>
            </Button>

            <Button isIconOnly href="">
                <IconBrandUpwork stroke={1.5} color="black"/>
            </Button>

        </ButtonGroup>
    );
}