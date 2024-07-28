import React from "react";
import {
    Button, ButtonGroup,
    Navbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle
} from "@nextui-org/react";
import {Link} from "react-scroll";
import {Work_Sans} from "next/font/google";

const workSansFont = Work_Sans({
    weight: '300',
    style: 'normal',
    subsets: ['latin'],
});

export default function Header() {

    return (
        <Navbar className={`${workSansFont.className} bg-transparent blur-0 backdrop-blur-0`}>
            <NavbarContent className="md:flex hidden"></NavbarContent>
            <NavbarContent justify="center">
                <ButtonGroup
                    variant="light"
                    size="md"
                    className="border-1 border-gray-400 shadow rounded-full bg-white"
                >
                    <Button
                        as={Link}
                        activeClass="opacity-50"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-90}
                        duration={500}
                        className="text-lg"
                        radius="full"
                    >
                        about
                    </Button>
                    <Button
                        as={Link}
                        activeClass="opacity-50"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-90}
                        duration={500}
                        className="text-lg"
                    >
                        projects
                    </Button>
                    <Button
                        as={Link}
                        activeClass="opacity-50"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-90}
                        duration={500}
                        className="text-lg"
                        radius="full"
                    >
                        contact
                    </Button>
                    <Button
                        as={Link}
                        className="text-lg"
                        radius="full"
                    >
                        blog ✏️
                    </Button>
                </ButtonGroup>
            </NavbarContent>
            <NavbarContent className="md:flex hidden"></NavbarContent>
        </Navbar>
    );
}