import React from "react";
import {Button, ButtonGroup} from "@nextui-org/react";
import {IconMail, IconBrandGithub, IconBrandLinkedin, IconBrandTelegram, IconBrandUpwork} from '@tabler/icons-react';

export default function Socials() {
    return (
        <ButtonGroup size="md" variant="light">

            <Button as="a" target="_blank" isIconOnly href="mailto:contact@maxyushkevich.com">
                <IconMail stroke={1.5} color="black"/>
            </Button>

            <Button as="a" target="_blank" isIconOnly href="https://github.com/maxyushkevich">
                <IconBrandGithub stroke={1.5} color="black"/>
            </Button>

            <Button as="a" target="_blank" isIconOnly href="https://www.linkedin.com/in/maxyushkevich/">
                <IconBrandLinkedin stroke={1.5} color="black"/>
            </Button>

            <Button as="a" target="_blank" isIconOnly href="https://t.me/maxyushkevic">
                <IconBrandTelegram stroke={1.5} color="black"/>
            </Button>

            <Button as="a" target="_blank" isIconOnly href="" isDisabled={true}>
                <IconBrandUpwork stroke={1.5} color="black"/>
            </Button>

        </ButtonGroup>
    );
}