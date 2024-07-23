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
import {Exo, Sometype_Mono} from "next/font/google";


const exoFont = Exo({
    weight: '300',
    style: 'normal',
    subsets: ['latin'],
});

const sometypeMonoFont = Sometype_Mono({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
});

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar
            isBlurred={false}
            onMenuOpenChange={setIsMenuOpen}
            className={`${exoFont.className} bg-transparent`}
        >
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="md:hidden"
                />
            </NavbarContent>
            <NavbarContent
                className="hidden sm:flex gap-4"
                justify="center"
            >
                <ButtonGroup
                    variant="flat"
                    size="md"
                >
                    <Button
                        as={Link}
                        activeClass="opacity-50"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-110}
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
                        offset={-110}
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
                        offset={-110}
                        duration={500}
                        className="text-lg"
                        radius="full"
                    >
                        contact
                    </Button>
                </ButtonGroup>
            </NavbarContent>
            <NavbarContent justify="end">
                <Button
                    variant="flat"
                    as={Link}
                    activeClass="opacity-50"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="text-lg"
                    radius="full"
                >
                    blog ✏️
                </Button>
            </NavbarContent>

            <NavbarMenu className="dark text-foreground bg-background opacity-70">

                <NavbarMenuItem>
                    <Link
                        href="/#hello"
                        activeClass="active"
                        to="hello"
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={500}
                    >
                        hello
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link
                        href="/#about"
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={500}
                    >
                        about
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link
                        href="/#projects"
                        activeClass="projects"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={500}
                    >
                        projects
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link
                        href="/#contact"
                        activeClass="contact"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={500}
                    >
                        contact
                    </Link>
                </NavbarMenuItem>

            </NavbarMenu>
        </Navbar>
    );
}