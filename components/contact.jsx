"use client";

import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useRef } from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
    const trigger = useRef(null);
    const isInView = useInView(trigger, {once: true});
    const [submitted, setSubmitted] = useState(false); // State to track form submission
    const [isError, setIsError] = useState(false)
    const errorMessage = "ERROR: An error occured while sending the message (Spam or random messages will be blocked automatically)."

    const [isMdWindow, setIsMdwindow] = useState(true);
    const [inView, setInView] = useState(false);

    function handleViewEnter() {
        setTimeout(() => {

            setInView(true)
        }, 1250)
    }
    useEffect(() => {
        setIsMdwindow(window.innerWidth >= 768);
    }, [])

    useEffect(() => {
        
        const handleResize = () => {
            setIsMdwindow(window.innerWidth >= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission
        const form = event.target; // Get the form element

        try {
            const response = await fetch(form.action, {
                method: form.method, // Use POST method
                body: new FormData(form), // Send form data
                headers: {
                    Accept: "application/json", // Set header for JSON response
                },
            });

            if (response.ok) {
                setSubmitted(true); // If successful, set submitted state to true
                setIsError(false);
            } else {
                throw new Error("Network response was not ok");
            }
        } catch (error) {
            setIsError(true);
            console.error("Error occurred:", error);
        }
    };

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
            <motion.h1 viewport={{ once:true }} transition={{ duration: 0.5}} initial={{opacity: 0, x: "-100%"}} whileInView={{opacity: 1, x: "0px"}} className="md:text-4xl text-white text-3xl lg:text-5xl font-bold text-center xl:text-left pb-4 xl:pb-8">
                Contact Me
            </motion.h1>
            <motion.p viewport={{ once:true }} transition={{ duration: 0.5, delay: 0.25 }} initial={{opacity: 0, x: "-100%"}} whileInView={{opacity: 1, x: "0px"}} className="text-sm md:text-md lg:text-lg text-center xl:text-left">
                I&apos;d love to hear from you! Whether you have a question, a project
                in mind, or just want to say hello, feel free to reach out using the
                form below or connect with me on social media.
            </motion.p>
            <div className="flex flex-col md:flex-row md:justify-center md:items-center mt-8 mb-20 md:gap-[2rem] lg:gap-[2.5rem] xl:gap-[5rem] w-full">
                {submitted ? ( // Show success message if submitted
                    <div className="mb-8 md:w-2/3 lg:w-3/5 xl:w-1/2 md:mb-0 flex flex-col justify-center px-4 pt-8 pb-5 md:px-6 md:pt-10 md:pb-10 aspect-[5/7] rounded-xl lg:shrink-0 bg-slate-dark">
                        <h2 className="text-2xl text-center lg:text-4xl font-semibold md:text-3xl text-white pb-1 sm:pb-2">The message was sent!</h2>
                        <p className="text-xs md:text-sm lg:text-md text-center sm:pb-8 pb-6">
                            Thanks for choosing to work with me. You will get an email from me soon!
                        </p>
                    </div>
                ) : (
                    <form
                        action="https://formspree.io/f/myzyybwe"
                        method="POST"
                        onSubmit={handleSubmit} // Attach the submit handler
                        className="mb-8 md:w-2/3 lg:w-3/5 xl:w-1/2 md:mb-0 flex lg:shrink-0 flex-col justify-between px-3 py-6 sm:px-4 sm:py-7 md:px-6 md:py-9 aspect-[5/7] lg:aspect-[55/70] rounded-xl bg-slate-dark relative"
                    >
                        <div ref={trigger} className="absolute h-1 top-2/3"></div>
                        <div>
                            <h2 className="text-2xl text-center xl:text-left lg:text-4xl font-semibold md:text-3xl text-white pb-2 sm:pb-3">
                                Let&apos;s work together!
                            </h2>
                            <p className="text-xs md:text-sm lg:text-md text-center xl:text-left sm:pb-8 pb-6">
                                Let me know how you feel.
                            </p>

                            <div className="flex flex-col lg:text-lg gap-3 sm:gap-4 text-sm md:text-md">
                                <input
                                    placeholder="Full name"
                                    name="name"
                                    required
                                    autoComplete="off"
                                    className="bg-primary border-primary focus:border-accent placeholder-slate/[0.4] focus:text-accent shadow-lg border-2 rounded-[8px] py-2 px-8 outline-none transition-all transition-700"
                                />
                                <input
                                    placeholder="Email address"
                                    name="email"
                                    required
                                    autoComplete="off"
                                    type="email"
                                    className="bg-primary placeholder-slate/[0.4] border-primary focus:border-accent focus:text-accent shadow-lg border-2 rounded-[8px] py-2 px-8 outline-none transition-all transition-700"
                                />
                                <input
                                    placeholder="Phone number"
                                    name="phone"
                                    type="tel"
                                    required
                                    autoComplete="off"
                                    className="bg-primary border-primary focus:border-accent placeholder-slate/[0.4] focus:text-accent shadow-lg border-2 rounded-[8px] py-2 px-8 outline-none transition-all transition-700"
                                />
                                <textarea
                                    placeholder="Write a message here..."
                                    name="message"
                                    required
                                    autoComplete="off"
                                    className="bg-primary border-primary placeholder-slate/[0.4] focus:border-accent shadow-lg border-2 rounded-[8px] focus:text-accent py-2 px-8 outline-none transition-all transition-700 h-[8rem] md:h-[10rem] resize-none"
                                ></textarea>
                                {isError && (
                                    <div className="rounded-[8px] hidden md:block text-md selection:bg-red-500 border border-red-500 hover:bg-red-200 hover:border-red-200 transition-all duration-300 g-red-200 text-red-500 font-semibold p-3 lg:p-4">
                                        {errorMessage} 
                                    </div>
                                )}
                            </div>
                        </div>
                        <button type="submit" className="bg-accent text-primary text-sm lg:text-md font-bold px-4 py-2 md:px-6 md:py-3 xl:text-lg self-end rounded-full hover:bg-accent-hover">
                            Send message
                        </button>
                    </form>
                )}
                <motion.div 
                    initial={isMdWindow ? { marginLeft: "-300px", opacity: 0 } : { marginTop: "-200px", opacity: 0 }} 
                    animate={isInView ? (isMdWindow ? { marginLeft: "0px", opacity: 1 } : { marginTop: "0px", opacity: 1 }) : {}} 
                    onViewportEnter={handleViewEnter}
                     
                    transition={{ duration: 0.75, delay: 0.25 }}
                    key={isMdWindow}
                    className={`flex flex-col mt-2 gap-3 md:gap-6 xl:gap-8   md:w-1/3 lg:w-2/5 xl:w-1/21 ${isInView ? "z-10 bg-red" : "-z-20"}`}
                >
                    {isError && (
                        <div className="rounded-xl md:hidden text-sm selection:text-red-200 
                        bg-red-200 selection:bg-red-500 g-red-200 text-red-500 font-semibold p-3 -mt-4 mb-2">
                            {errorMessage} 
                        </div>
                    )}
                    <div className="flex md:flex-col xl:flex-row md:items-center gap-4 md:gap-2 xl:gap-6">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <IoMdMail
                                        onClick={() => CopyToClipboard("abdullahalsayef17@gmail.com")}
                                        className="bg-[#171d26] text-accent hover:bg-accent cursor-pointer active:bg-[#171d26] active:text-accent hover:text-[#171d26]  rounded-[8px] p-3 transition-all duration-300 h-14 w-14 md:h-16 md:w-16 xl:h-20 xl:w-20 xl:p-4"
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

                    <div className="flex md:flex-col xl:flex-row md:items-center gap-4 md:gap-2 xl:gap-6">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <FaPhoneAlt
                                        onClick={() => CopyToClipboard("+880 13056 38260")}
                                        className="bg-[#171d26] cursor-pointer active:bg-[#171d26] active:text-accent text-accent hover:bg-accent hover:text-[#171d26]  rounded-[8px] p-4 transition-all transition-500 h-14 w-14 md:h-16 md:w-16 xl:h-20 xl:w-20 xl:p-5"
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

                    <div className="flex md:flex-col xl:flex-row md:items-center gap-4 md:gap-2 xl:gap-6">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <FaLocationDot
                                        onClick={() => CopyToClipboard("Bogura, Bangladesh")}
                                        className="bg-[#171d26] text-accent cursor-pointer active:bg-[#171d26] active:text-accent hover:bg-accent hover:text-[#171d26]  rounded-[8px] p-3 transition-all transition-500 h-14 w-14 md:h-16 md:w-16 xl:h-20 xl:w-20 xl:p-4"
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
                </motion.div>
            </div>
        </section>
    );
}
