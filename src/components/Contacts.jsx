import React from 'react';
import {Button, ButtonGroup, Card, CardBody, CardHeader, Chip, Link} from "@nextui-org/react";
import {IconBrandGithub, IconBrandTelegram, IconBrandLinkedin, IconMail, IconBrandUpwork } from "@tabler/icons-react";

export default function Socials() {
    return (
        <div className="flex justify-center mx-auto">
            <Chip
                size="lg"
                variant="shadow"
                color="warning"
            >
                {"The \"Contact\" section is being reworked ⚒️"}
            </Chip>
        </div>
    );
}