import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button} from "@nextui-org/react";
import {Link} from 'react-scroll'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Hello",
        "About",
        "Projects",
        "Contact",
        "Blog"
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="animate-fade-down animate-once animate-delay-200 animate-ease-out">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className="font-bold text-inherit">MAKU</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4 animate-fade-down animate-once animate-delay-200 animate-ease-out" justify="center">
                <NavbarItem>
                    <Link href="/#hello" activeClass="active" to="hello" spy={true} smooth={true} offset={-200} duration={500}>hello</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/#about" activeClass="active" to="about" spy={true} smooth={true} offset={-120} duration={500}>about</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/#projects" activeClass="active" to="projects" spy={true} smooth={true} offset={-120} duration={500}>projects</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/#contact" activeClass="active" to="contact" spy={true} smooth={true} offset={-120} duration={500}>contact</Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end" className="animate-fade-down animate-once animate-delay-200 animate-ease-out">
                <NavbarItem>
                    <Button as={Link} color="default" href="#" variant="flat">
                        Let's Talk
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
