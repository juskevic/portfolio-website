import React from "react";
import {
    Button, ButtonGroup,
    Navbar,
    NavbarContent,
} from "@nextui-org/react";
import {Link} from "react-scroll";
import {Inter} from "next/font/google";

const InterFont300 = Inter({
    weight: '300',
    style: 'normal',
    subsets: ['latin'],
});

export default function Header() {

    return (
        <Navbar className={`${InterFont300.className} bg-transparent blur-none backdrop-blur-none`}>
            <NavbarContent></NavbarContent>
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
                </ButtonGroup>
            </NavbarContent>
            <NavbarContent></NavbarContent>
        </Navbar>
    );
}