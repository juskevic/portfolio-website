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
    Switch
} from "@nextui-org/react";
import {Link} from 'react-scroll'
import { Exo, Sometype_Mono } from "next/font/google";
import TypingAnimation from "@/components/TypingAnimation.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";

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



export default function Header({isSelected, setIsSelected}) {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className={`${exo.className} animate-fade-down animate-once animate-delay-200 animate-ease-out`}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className={`${sometypeMono.className} text-md xl:text-xl`}><TypingAnimation /></p>
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
                <NavbarItem className="hidden sm:flex">
                    <Switch color="secondary" isSelected={isSelected} onValueChange={setIsSelected}
                            startContent={<FontAwesomeIcon icon={faMoon}/>} endContent={<FontAwesomeIcon icon={faSun}/>}>
                    </Switch>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="default" href="#" variant="bordered">
                        blog ✏️
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className="dark text-foreground bg-background">
                <NavbarMenuItem>
                    <Link href="/#hello" activeClass="active" to="hello" spy={true} smooth={true} offset={-200} duration={500} className="hover:text-stone-700">hello</Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link href="/#about" activeClass="active" to="about" spy={true} smooth={true} offset={-90} duration={500} className="hover:text-stone-700">about</Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link className="brightness-50 cursor-not-allowed">testimonials</Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link href="/#projects" activeClass="active" to="projects" spy={true} smooth={true} offset={-120} duration={500} className="hover:text-stone-700">projects</Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link href="/#contact" activeClass="active" to="contact" spy={true} smooth={true} offset={-250} duration={500} className="hover:text-stone-700">contact</Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}
