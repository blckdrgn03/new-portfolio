'use client'

import { Button } from "@/components/ui/button"
import { HiMenuAlt4 } from "react-icons/hi";
import { usePathname } from 'next/navigation';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useEffect, useState } from "react";

export default function Header() {
    const [activeSection, setActiveSection] = useState('');
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

  // Detect the current section
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (currentPosition >= sectionTop - 150) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);

      // Hide/Show Navbar
      if (currentPosition > scrollPosition && currentPosition > 75) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else {
        setIsVisible(true); // Show navbar when scrolling up
      }
      setScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);
   
    return (
        <header className={`${isVisible ? "" : "-translate-y-[10rem]"} transition-all duration-200 fixed top-1 -translate-x-1/2 z-10 left-1/2 text-white py-4 bg-primary rounded-full xl:my-9 xl:py-3 container flex items-center justify-end md:justify-between`}>
            <a className="group font-bold hidden md:block capitalize text-4xl" href="#home"><h1>sayef</h1></a>
            <div className="hidden xl:flex gap-8">
                <nav className="flex justify-center gap-8 items-center">
                    {links.map((link, i) => {
                        return <a className={`${activeSection == link.name && "text-accent font-semibold border-b-accent border-b-2"} hover:text-accent transition-all duration-300 capitalize`}  key={i} href={link.path}>{link.name}</a>;
                    })}
                </nav>
                <Button className="font-semibold bg-accent text-primary rounded-full hover:bg-accent-hover">Hire me</Button>
            </div>
            <MobileMenu activeSection={activeSection}/>
        </header>
    )
}

function MobileMenu({ activeSection }) {
    const currentPath = usePathname();
    console.log(currentPath)
  return (
    <Sheet>
      <SheetTrigger asChild>
        <HiMenuAlt4 className="text-4xl cursor-pointer xl:hidden"/>
      </SheetTrigger>
      
      <SheetContent>
        
        <div className="flex h-screen flex-col justify-center items-center gap-8 py-4">
            {links.map((link, i) => {
                        return <a className={`${activeSection == link.name && "text-accent font-semibold"} hover:text-accent transition-all duration-300 capitalize text-2xl md:text-3xl`}  key={i} href={link.path}>{link.name}</a>;
                    })}
        </div>
        
      </SheetContent>
    </Sheet>
  )
}

let links = [
        {
            name: "home",
            path: "#home"
        },
        {
            name: "about",
            path: "#about"
        },
        {
            name: "services",
            path: "#services"
        },
        
        {
            name: "projects",
            path: "#projects"
        },
        {
            name: "contact",
            path: "#contact"
        }
    ] 