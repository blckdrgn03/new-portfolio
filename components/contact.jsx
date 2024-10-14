"use client"

import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "./ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Contact() {
    const CopyToClipboard = (textToCopy) => {
        navigator.clipboard
            .writeText(textToCopy)
            .then(() => {
                alert("Text copied to clipboard!");
            })
            .catch((err) => {
                alert("Failed to copy text: ", err);
            });
    };

    return (
        <section
            id="contact"
            className="mx-auto container pt-[1rem] mt-[4rem] md:mt-[6.5rem] lg:mt-[9rem] xl:pt-[2rem] xl:mt-[10.5rem]"
        >
            <h1 className="md:text-4xl text-white text-3xl lg:text-5xl font-bold text-center xl:text-left pb-4 xl:pb-8">
                Contact Me
            </h1>
            <p className="text-sm md:text-md lg:text-lg text-center xl:text-left">
                I&apos;d love to hear from you! Whether you have a question, a project
                in mind, or just want to say hello, feel free to reach out using the
                form below or connect with me on social media.
            </p>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-8 mb-20">
                <form
                    action="https://formspree.io/f/mgveekya"
                    method="POST"
                    className="mb-8 md:w-2/3 lg:w-3/5 xl:w-1/2 md:mb-0 flex flex-col justify-between px-4 pt-8 pb-5 md:px-6 md:pt-10 md:pb-10 aspect-[5/7] rounded-xl bg-[#171d26]"
                >
                    <div>
                        <h2 className="text-2xl lg:text-4xl font-bold md:text-3xl text-white pb-1 sm:pb-2">
                            Let&apos;s work together!
                        </h2>
                        <p className="text-sm md:text-md lg:text-lg sm:pb-8 pb-6">
                            Let me know how you feel.
                        </p>

                        <div className="flex flex-col lg:text-lg gap-2 sm:gap-4 text-sm md:text-md">
                            <input
                                placeholder="Full name"
                                name="name"
                                required
                                className="bg-primary border-primary focus:border-accent placeholder-slate/[0.4] focus:text-accent shadow-lg border-2 rounded-[8px] py-2 px-8 outline-none transition-all transition-700"
                            />
                            {/* <input
                                placeholder="Last name"
                                className="bg-primary border-primary focus:border-accent placeholder-slate/[0.4] focus:text-accent shadow-lg border-2 rounded-[8px] py-2 px-8 outline-none transition-all transition-700"
                            /> */}
                            <input
                                placeholder="Email address"
                                name="email"
                                required
                                type="email"
                                className="bg-primary placeholder-slate/[0.4] border-primary focus:border-accent focus:text-accent shadow-lg border-2 rounded-[8px] py-2 px-8 outline-none transition-all transition-700"
                            />
                            <input
                                placeholder="Phone number"
                                name="phone"
                                type="tel"
                                required
                                className="bg-primary border-primary focus:border-accent placeholder-slate/[0.4] focus:text-accent shadow-lg border-2 rounded-[8px] py-2 px-8 outline-none transition-all transition-700"
                            />
                            <textarea
                                placeholder="Write a message here..."
                                name="message"
                                required
                                className="bg-primary border-primary placeholder-slate/[0.4] focus:border-accent shadow-lg border-2 rounded-[8px] focus:text-accent py-2 px-8 outline-none transition-all transition-700 h-[7rem] sm:h-[10rem] resize-none"
                            ></textarea>
                        </div>
                    </div>
                    <button type="submit" className="bg-accent text-primary text-sm lg:text-md font-semibold px-6 py-3 xl:text-lg self-end rounded-full hover:bg-accent-hover">
                        Send message
                    </button>
                </form>
                <div className="flex flex-col mt-2 gap-3 xl:gap-6">
                    <div className="flex md:flex-col xl:flex-row md:items-center gap-4">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <IoMdMail
                                        onClick={() => CopyToClipboard("abdullahalsayef17@gmail.com")}
                                        className="bg-[#171d26] text-accent hover:bg-accent cursor-pointer active:bg-[#171d26] active:text-accent hover:text-[#171d26]  rounded-[8px] p-3 transition-all transition-500 h-14 w-14 md:h-16 md:w-16 xl:h-18 xl:w-18 xl:p-4"
                                    />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Copy to clipboard</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <div className="flex flex-col justify-center">
                            <span className="text-lg lg:text-xl md:text-center xl:text-left text-white xl:text-2xl">
                                Email
                            </span>
                            <span className="md:text-center xl:text-left xl:text-xl">
                                abdullahalsayef17@gmail<br className="hidden md:block lg:hidden" />
                                .com
                            </span>
                        </div>
                    </div>

                    <div className="flex md:flex-col xl:flex-row md:items-center gap-4">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <FaPhoneAlt
                                        onClick={() => CopyToClipboard("+880 13056 38260")}
                                        className="bg-[#171d26] cursor-pointer active:bg-[#171d26] active:text-accent text-accent hover:bg-accent hover:text-[#171d26]  rounded-[8px] p-4 transition-all transition-500 h-14 w-14 md:h-16 md:w-16 xl:h-18 xl:w-18 xl:p-5"
                                    />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Copy to clipboard</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <div className="flex flex-col justify-center">
                            <span className="text-lg md:text-center xl:text-left lg:text-xl xl:text-2xl text-white">
                                Phone
                            </span>
                            <span className="xl:text-xl md:text-center xl:text-left">
                                (+880) 13056 38260
                            </span>
                        </div>
                    </div>

                    <div className="flex md:flex-col xl:flex-row md:items-center gap-4">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <FaLocationDot
                                        onClick={() => CopyToClipboard("Bogura, Bangladesh")}
                                        className="bg-[#171d26] text-accent cursor-pointer active:bg-[#171d26] active:text-accent hover:bg-accent hover:text-[#171d26]  rounded-[8px] p-3 transition-all transition-500 h-14 w-14 md:h-16 md:w-16 xl:h-18 xl:w-18 xl:p-4"
                                    />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Copy to clipboard</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <div className="flex flex-col justify-center">
                            <span className="text-lg text-white md:text-center lg:text-xl xl:text-2xl xl:text-left">
                                Location
                            </span>
                            <span className="md:text-center  xl:text-left xl:text-xl">
                                Bogura, Bangladesh
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
