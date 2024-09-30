'use client'
import { Button } from "@/components/ui/button";
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Socials() {
    return (
        <div className="flex justify-center xl:justify-start items-center gap-8 xl:gap-12">
            <Button className="bg-accent text-sm font-semibold xl:p-6 xl:text-lg text-primary rounded-full hover:bg-accent-hover">Download Resume</Button>
            <div className="flex gap-4 items-center">
                <a href="">
                    <FaGithub className="hover:text-accent-hover text-2xl xl:text-4xl text-accent"/>
                </a>
                <a href="">
                    <FaTwitter className="hover:text-accent-hover text-2xl xl:text-4xl text-accent"/>
                </a>
                <a href="">
                    <FaFacebook className="hover:text-accent-hover text-2xl xl:text-4xl text-accent"/>
                </a>
                <a href="">
                    <FaLinkedin className="hover:text-accent-hover text-2xl xl:text-4xl text-accent"/>
                </a>
                
                
                
                
            </div>
        </div>
    );
}
