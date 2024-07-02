import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button} from "@nextui-org/react";
import {Link} from 'react-scroll'
import { Exo, Sometype_Mono } from "next/font/google";
import TypingAnimation from "@/components/TypingAnimation.jsx";

const exo = Exo({
    weight: '300',
    style: 'normal',
    subsets: ['latin'],
});

const sometypeMono = Sometype_Mono({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
});



export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Hello",
        "About",
        "Projects",
        "Contact",
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className={`${exo.className} animate-fade-down animate-once animate-delay-200 animate-ease-out`}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className={`${sometypeMono.className} italic text-inherit text-md xl:text-xl`}><TypingAnimation /></p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4 animate-fade-down animate-once animate-delay-200 animate-ease-out" justify="center">
                <NavbarItem>
                    <Link href="/#hello" activeClass="active" to="hello" spy={true} smooth={true} offset={-200} duration={500} className="hover:text-stone-700">hello</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/#about" activeClass="active" to="about" spy={true} smooth={true} offset={-90} duration={500} className="hover:text-stone-700">about</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="brightness-50 cursor-not-allowed">testimonials</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/#projects" activeClass="active" to="projects" spy={true} smooth={true} offset={-120} duration={500} className="hover:text-stone-700">projects</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/#contact" activeClass="active" to="contact" spy={true} smooth={true} offset={-250} duration={500} className="hover:text-stone-700">contact</Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end" className="animate-fade-down animate-once animate-delay-200 animate-ease-out">
                <NavbarItem>
                    <Button as={Link} color="default" href="#" variant="bordered">
                        blog ✏️
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
