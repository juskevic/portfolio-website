import React from 'react';
import {Button, ButtonGroup, Link} from "@nextui-org/react";
import {IconBrandGithub, IconBrandTelegram, IconBrandLinkedin, IconMail, IconBrandUpwork } from "@tabler/icons-react";

export default function Socials() {
    const strokeWidth = 1.5
    return (
        <ButtonGroup
            size="md"
            variant="light"
            fullWidth
        >
            <Button isIconOnly>
                <Link href={"mailto:contact@maxyushkevich.com"}>
                    <IconMail stroke={strokeWidth}/>
                </Link>
            </Button>
            <Button isIconOnly>
                <Link href={"https://github.com/maxyushkevich"}>
                    <IconBrandGithub stroke={strokeWidth}/>
                </Link>
            </Button>
            <Button isIconOnly>
                <Link href={"https://www.linkedin.com/in/maxyushkevich/"}>
                    <IconBrandLinkedin stroke={1.5}/>
                </Link>
            </Button>
            <Button isIconOnly>
                <Link href={"https://t.me/maxyushkevich"}>
                    <IconBrandTelegram stroke={strokeWidth}/>
                </Link>
            </Button>
            <Button isIconOnly>
                <Link href={"#"}>
                    <IconBrandUpwork stroke={1.5} />
                </Link>
            </Button>
        </ButtonGroup>
    );
}