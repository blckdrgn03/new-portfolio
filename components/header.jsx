'use client'

import { ShootingStars } from "../components/ui/shooting-star";
import { motion } from "framer-motion"
import { HiMenuAlt4 } from "react-icons/hi";
import { Theme, ThemeMoblie } from "@/components/ui/theme";
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


    const [theme, setTheme] = useState('dark');
    const [accent, setAccent] = useState('34, 183, 247');

    const changeTheme = (tm) => {
      setTheme(tm)
    }

    const changeAccent = (acn, prm, slt, sdk) => {
      setAccent(acn);
      
      document.documentElement.style.setProperty(
        '--accent-color',
        acn
      ); 
      document.documentElement.style.setProperty(
        '--primary-color',
        prm
      ); 
      document.documentElement.style.setProperty(
        '--slate-color',
        slt
      );
      document.documentElement.style.setProperty(
        '--slate-dark-color',
        sdk
      );
    };

    const starColor = "rgb(" + accent + ")";
    const trailColor = "rgb(" + accent + ", 0.5" + ")";

    return (
        <>
        <div className="-z-50 fixed top-0 h-screen left-0 w-screen">
            <ShootingStars starColor={starColor} trailColor={trailColor} className=""/>
        </div>
        <motion.header
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.75, delay: 0.25 }}
            className={`transition-transform xl:bg-primary/[0.25] duration-500 fixed top-1 -translate-x-1/2 z-10 left-1/2 text-white my-4 py-2 xl:py-4  rounded-full xl:my-9 xl:py-3 container flex items-center justify-end md:justify-between ${isVisible ? "" : "-translate-y-[10rem]"} ${isScrolled ? "backdrop-blur-lg border border-white/[0.1] shadow-2xl transition-border transition-shadow" : "border border-white/[0] transition-border transition-shadow"}`}
        >
            <a className="group font-bold hidden md:block capitalize transition-all duration-300 hover:text-accent text-4xl" href="#home"><h1>sayef</h1></a>
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
                    <ThemeMoblie theme={theme} accent={accent} changeTheme={changeTheme} changeAccent={changeAccent} />
                </nav>
                
                {/* <Button className="font-semibold bg-accent text-primary rounded-full hover:bg-accent-hover cursor-disabled">Fiverr</Button> */}
            </div>
            <MobileMenu activeSection={activeSection} theme={theme} accent={accent} changeTheme={changeTheme} changeAccent={changeAccent} />
        </motion.header>
        </>
        
    )
}

function MobileMenu({ activeSection, theme, accent, changeTheme, changeAccent }) {
    const currentPath = usePathname();
  
    return (
        <Sheet>
            <SheetTrigger asChild>
                <HiMenuAlt4 className="text-4xl cursor-pointer transition-all duration-300 hover:text-accent text-white xl:hidden"/>
            </SheetTrigger>
            <SheetContent>
                <div className="flex h-screen flex-col justify-center items-center relative gap-16 py-4">
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
                        <ThemeMoblie theme={theme} accent={accent} changeTheme={changeTheme} changeAccent={changeAccent} />
                    </nav>
                    
                    <button className="absolute top-0 left-0"></button>
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
