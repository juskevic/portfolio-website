import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Button,
} from "@nextui-org/react";
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

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className={`${exo.className}`}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className={`${sometypeMono.className} text-lg xl:text-xl`}><TypingAnimation /></p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link href="/#hello" activeClass="active" to="hello" spy={true} smooth={true} offset={-200} duration={500} className="hover:text-stone-400">hello</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/#about" activeClass="active" to="about" spy={true} smooth={true} offset={-90} duration={500} className="hover:text-stone-400">about</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/#projects" activeClass="active" to="projects" spy={true} smooth={true} offset={-120} duration={500} className="hover:text-stone-400">projects</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/#contact" activeClass="active" to="contact" spy={true} smooth={true} offset={-250} duration={500} className="hover:text-stone-400">contact</Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    {/*Remove isDisabled later ;)*/}
                    <Button isDisabled as={Link} color="default" href="#" variant="bordered" radius={"full"}>
                        blog ✏️
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className="dark text-foreground bg-background opacity-70">
                <NavbarMenuItem>
                    <Link href="/#hello" activeClass="active" to="hello" spy={true} smooth={true} offset={-200} duration={500} className="hover:text-stone-400">hello</Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link href="/#about" activeClass="active" to="about" spy={true} smooth={true} offset={-90} duration={500} className="hover:text-stone-400">about</Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link href="/#projects" activeClass="active" to="projects" spy={true} smooth={true} offset={-120} duration={500} className="hover:text-stone-400">projects</Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link href="/#contact" activeClass="active" to="contact" spy={true} smooth={true} offset={-250} duration={500} className="hover:text-stone-400">contact</Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}
