'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link";
import { HiMenuAlt4 } from "react-icons/hi";
import { usePathname } from 'next/navigation';

export default function Header() {
    const currentPath = usePathname();
    let links = [
        {
            name: "about",
            path: "/about"
        },
        {
            name: "services",
            path: "/services"
        },
        {
            name: "resume",
            path: "/resume"
        },
        {
            name: "work",
            path: "/work"
        },
        {
            name: "contact",
            path: "/contact"
        }
    ]

   
    return (
        <header className="py-8 xl:py-12 container flex items-center justify-end md:justify-between">
            <Link className="group hidden md:block capitalize text-4xl" href="/"><h1>sayef<span className={`${currentPath == '/' && "text-accent"} group-hover:text-accent transition-all`}>.</span></h1></Link>
            <div className="hidden xl:flex gap-8">
                <nav className="flex justify-center gap-8 items-center">
                    {links.map((link, i) => {
                        return <Link className={`${currentPath == link.path && "text-accent border-b-accent border-b-2"} hover:text-accent transition-all capitalize`}  key={i} href={link.path}>{link.name}</Link>;
                    })}
                </nav>
                <Button className="bg-accent text-primary rounded-full hover:bg-accent-hover">Hire me</Button>
            </div>
            <HiMenuAlt4 className="text-4xl cursor-pointer xl:hidden"/>
        </header>
    )
}
