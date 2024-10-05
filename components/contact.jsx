import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "./ui/button";

export default function Contact() {
    
    return (
        <section id="contact" className="mx-auto container pt-[1rem] mt-[4rem] md:mt-[6.5rem] lg:mt-[9rem] xl:pt-[2rem] xl:mt-[10.5rem]">
            <h1 className="md:text-4xl text-white text-3xl lg:text-5xl font-bold text-center xl:text-left pb-4 xl:pb-8">Contact Me</h1>
            <p className="text-sm md:text-md lg:text-lg text-center xl:text-left">I’d love to hear from you! Whether you have a question, a project in mind, or just want to say hello, feel free to reach out using the form below or connect with me on social media.</p>
            <div className="flex flex-col md:flex-row">
                <form action="" className="my-8 flex flex-col justify-between px-6 py-10 aspect-[5/7] rounded-xl bg-[#171d26]">
                    <div>

                        <h2 className="text-2xl text-white pb-2">Let&apos;s work together!</h2>
                        <p className="text-sm md:text-md lg:text-lg pb-4">Let me know how you feel.</p>

                        <div className="flex flex-col gap-4 text-sm">
                            <input placeholder="First name" className="bg-primary border-primary focus:border-accent placeholder-slate/[0.4] focus:text-accent shadow-lg border-2 rounded-xl py-2 px-8 outline-none transition-all transition-700"/>
                            <input placeholder="Last name" className="bg-primary border-primary focus:border-accent placeholder-slate/[0.4] focus:text-accent shadow-lg border-2 rounded-xl py-2 px-8 outline-none transition-all transition-700"/>
                            <input placeholder="Email address" className="bg-primary placeholder-slate/[0.4] border-primary focus:border-accent focus:text-accent shadow-lg border-2 rounded-xl py-2 px-8 outline-none transition-all transition-700"/>
                            <input placeholder="Phone number" className="bg-primary border-primary focus:border-accent placeholder-slate/[0.4] focus:text-accent shadow-lg border-2 rounded-xl py-2 px-8 outline-none transition-all transition-700"/>
                            <textarea name="" id="" placeholder="Write something here..." className="bg-primary border-primary placeholder-slate/[0.4] focus:border-accent shadow-lg border-2 rounded-xl focus:text-accent py-2 px-8 outline-none transition-all transition-700 h-[10rem] resize-none" ></textarea>
                        </div>
                    </div>
                    <Button className="bg-accent  text-sm lg:text-md font-semibold xl:p-6 xl:text-lg self-end text-primary rounded-full hover:bg-accent-hover">Sent message</Button>
                </form>
                <div>
                    <div className="h-16 border border-accent text-accent w-16 flex justify-center items-center rounded-[8px]"><IoMdMail /></div>
                    <div className="h-16 border border-accent text-accent w-16 flex justify-center items-center rounded-[8px]"><FaPhoneAlt /></div>
                    <div className="h-16 border border-accent text-accent w-16 flex justify-center items-center rounded-[8px]"><FaLocationDot /></div>
                </div>
            </div>
        </section>
    );
}


