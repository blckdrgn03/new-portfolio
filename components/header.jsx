'use client'

import { motion } from "framer-motion"
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
    const [activeSection, setActiveSection] = useState('home');
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const currentPosition = window.scrollY;
        
        setIsVisible(currentPosition < 100);
        setScrollPosition(currentPosition);
    }, [])

    const handleScroll = useCallback(() => {
        const currentPosition = window.scrollY;
        const sections = document.querySelectorAll('section');

        setIsScrolled(currentPosition > 0);

        for (const section of sections) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
    
            if (currentPosition >= sectionTop - 100 && currentPosition < sectionTop + sectionHeight) {
                setActiveSection(section.getAttribute('id'));
                break;
            }
        }

        setIsVisible(currentPosition <= scrollPosition || currentPosition < 100);
        setScrollPosition(currentPosition);
    }, [scrollPosition]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <motion.header
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.75, delay: 0.25 }}
            className={`transition-transform bg-primary/[0.25] duration-300 fixed top-1 -translate-x-1/2 z-10 left-1/2 text-white my-4 py-2 xl:py-4  rounded-full xl:my-9 xl:py-3 container flex items-center justify-end md:justify-between ${isVisible ? "" : "-translate-y-[10rem]"} ${isScrolled ? "border border-white/[0.1] shadow-2xl transition-border transition-shadow" : "border border-white/[0] transition-border transition-shadow"} ${scrollPosition > 0 && "backdrop-blur-lg"}`}
        >
            <a className="group font-bold hidden md:block capitalize text-4xl" href="#home"><h1>sayef</h1></a>
            <div className="hidden xl:flex gap-8">
                <nav className="flex justify-center gap-8 items-center">
                    {links.map((link, i) => (
                        <a 
                            className={`${activeSection === link.name ? "text-accent font-semibold border-b-accent border-b-2" : "border-b-transparent border-b-2"} hover:text-accent transition-all duration-300 capitalize`} 
                            key={i} 
                            href={link.path}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
                <Button className="font-semibold bg-accent text-primary rounded-full hover:bg-accent-hover cursor-disabled">Fiverr</Button>
            </div>
            <MobileMenu activeSection={activeSection} />
        </motion.header>
    )
}

function MobileMenu({ activeSection }) {
    const currentPath = usePathname();
  
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
                        
                    </nav>
                    <Button className="font-semibold bg-accent text-xl md:text-2xl p-6 text-primary rounded-full hover:bg-accent-hover cursor-disabled">Fiverr</Button>
                </div>
            </SheetContent>
        </Sheet>
    )
}

const links = [
    { name: "home", path: "#home" },
    { name: "services", path: "#services" },
    { name: "resume", path: "#resume" },
    { name: "projects", path: "#projects" },
    { name: "contact", path: "#contact" }
];
