'use client'
import { Button } from "@/components/ui/button";
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Socials() {
    return (
        <div className="flex justify-center xl:justify-start items-center gap-8 xl:gap-12">
            <Button className="bg-accent cursor-disabled text-sm lg:text-md font-bold xl:p-6 xl:text-lg text-primary rounded-full hover:bg-accent-hover">My Fiverr</Button>
            <div className="flex gap-4 items-center">
                <a target="_blank" href="https://github.com/blckdrgn03/">
                    <FaGithub className="hover:text-accent-hover text-2xl xl:text-4xl lg:text-3xl text-accent"/>
                </a>
                <a target="_blank" href="">
                    <FaTwitter className="hover:text-accent-hover text-2xl xl:text-4xl lg:text-3xl text-accent cursor-disabled"/>
                </a>
                <a target="_blank" href="https://www.facebook.com/Sayef08536899">
                    <FaFacebook className="hover:text-accent-hover text-2xl lg:text-3xl xl:text-4xl text-accent"/>
                </a>
                <a target="_blank" href="">
                    <FaLinkedin className="hover:text-accent-hover text-2xl lg:text-3xl xl:text-4xl text-accent cursor-disabled"/>
                </a>
                
                
                
                
            </div>
        </div>
    );
}
