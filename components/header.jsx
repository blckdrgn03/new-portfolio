'use client'

import { Button } from "@/components/ui/button";
import { HiMenuAlt4 } from "react-icons/hi";
import { usePathname } from 'next/navigation';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState, useCallback } from "react";

export default function Header() {
    const [activeSection, setActiveSection] = useState('');
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = useCallback(() => {
        const currentPosition = window.scrollY;
        const sections = document.querySelectorAll('section');

        if (currentPosition > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (currentPosition >= sectionTop - 100 && currentPosition < sectionTop + sectionHeight) {
                setActiveSection(section.getAttribute('id'));
            }
        });

        // Hide/Show Navbar
        setIsVisible(currentPosition <= scrollPosition || currentPosition < 100);
        setScrollPosition(currentPosition);
    }, [scrollPosition]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <header className={`transition-all bg-primary/[0.2] duration-200 fixed top-1 -translate-x-1/2 z-10 left-1/2 text-white my-4 py-2 xl:py-4 backdrop-blur-lg rounded-full xl:my-9 xl:py-3 container flex items-center justify-end md:justify-between ${isVisible ? "" : "-translate-y-[10rem]"} ${isScrolled ? "border border-white/[0.1] shadow-2xl" : ""}`}>
            <a className="group font-bold hidden md:block capitalize text-4xl" href="#home"><h1>sayef</h1></a>
            <div className="hidden xl:flex gap-8">
                <nav className="flex justify-center gap-8 items-center">
                    {links.map((link, i) => (
                        <a 
                            className={`${activeSection === link.name ? "text-accent font-semibold border-b-accent border-b-2" : ""} hover:text-accent transition-all duration-300 capitalize`} 
                            key={i} 
                            href={link.path}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
                <Button className="font-semibold bg-accent text-primary rounded-full hover:bg-accent-hover">Hire me</Button>
            </div>
            <MobileMenu activeSection={activeSection} />
        </header>
    )
}

function MobileMenu({ activeSection }) {
    const currentPath = usePathname();
    console.log(currentPath);
  
    return (
        <Sheet>
            <SheetTrigger asChild>
                <HiMenuAlt4 className="text-4xl cursor-pointer xl:hidden"/>
            </SheetTrigger>
            <SheetContent>
                <div className="flex h-screen flex-col justify-center items-center gap-16 py-4">
                    <nav className="flex flex-col justify-center items-center gap-6">
                        {links.map((link, i) => (
                            <a 
                                className={`${activeSection === link.name ? "text-accent font-semibold" : ""} hover:text-accent transition-all duration-300 capitalize text-2xl md:text-3xl`}  
                                key={i} 
                                href={link.path}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="https://thefileslocker.net/p9lcql3bf7i8.html">Get Dust</a>
                    </nav>
                    <Button className="font-semibold bg-accent text-xl md:text-2xl p-6 text-primary rounded-full hover:bg-accent-hover">Hire me</Button>
                </div>
            </SheetContent>
        </Sheet>
    )
}

const links = [
    { name: "home", path: "#home" },
    { name: "about", path: "#about" },
    { name: "services", path: "#services" },
    { name: "projects", path: "#projects" },
    { name: "contact", path: "#contact" }
];
