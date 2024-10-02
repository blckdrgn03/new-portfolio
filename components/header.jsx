'use client'

import { Button } from "@/components/ui/button"
import { HiMenuAlt4 } from "react-icons/hi";
import { usePathname } from 'next/navigation';

export default function Header() {
    const currentPath = usePathname();
    let links = [
        {
            name: "home",
            path: "#home"
        },
        {
            name: "services",
            path: "#services"
        },
        {
            name: "resume",
            path: "#resume"
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

   
    return (
        <header className="my-4 mx-auto py-4 rounded-full xl:my-9 xl:py-3 container flex items-center justify-end md:justify-between">
            <a className="group font-bold hidden md:block capitalize text-4xl" href="#home"><h1>sayef<span className={`${currentPath == '/' && "text-accent"} group-hover:text-accent transition-all`}>.</span></h1></a>
            <div className="hidden xl:flex gap-8">
                <nav className="flex justify-center gap-8 items-center">
                    {links.map((link, i) => {
                        return <a className={`${currentPath == link.path && "text-accent border-b-accent border-b-2"} hover:text-accent transition-all duration-300 capitalize`}  key={i} href={link.path}>{link.name}</a>;
                    })}
                </nav>
                <Button className="font-semibold bg-accent text-primary rounded-full hover:bg-accent-hover">Hire me</Button>
            </div>
            <HiMenuAlt4 className="text-4xl cursor-pointer xl:hidden"/>
        </header>
    )
}
