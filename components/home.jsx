"use client"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect.jsx";
import Socials from "@/components/ui/socials.jsx";
import Stats from "@/components/ui/stats.jsx";
import Image from "next/image";import { TextGenerateEffect } from "@/components/ui/text-generate-effect.jsx";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [windowSize, setWindowSize] = useState(true);

    useEffect(() => {
        setWindowSize(window.innerWidth >= 768);
    }, [])

    useEffect(() => {
        
        const handleResize = () => {
            setWindowSize(window.innerWidth >= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const words = [
        {
          text: "Front-end ",
        },
        {
          text: "Developer ",
        },
        {
          text: "and ",
        },
        
        {
          text: "Designer ",
        },
      ];
    return (
        <>
            <section id="home" className="container pt-[7rem] md:pt-[8.5rem] xl:pt-[9rem] overflow-x-hidden w-screen md:overflow-x-visible md:w-auto">
                <div className=" flex flex-col items-center xl:flex-row-reverse justify-between mx-auto">
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5, delay: 1}} className="relative xl:pb-0 h-[200px] w-[200px] md:h-[250px] md:w-[250px] md:h-[300px] md:w-[300px] xl:h-[420px] xl:w-[420px] mb-14 md:mb-20 ">
                        <Image className="object-cover rounded-full absolute" alt="Sayef" fill quality={100} src="/pic.png"/>

                        <div className="w-full -z-20 h-full absolute top-1/2 left-1/2  spinning-animation box-content opacity-35 border-accent/[0.5] border-[0.5px] p-[2.2rem] md:p-[3.25rem] xl:p-[3rem] rounded-full opacity-66 ">
                          <div className="w-full relative h-full">
                            <Image height={windowSize ? 35 : 30} width={windowSize ? 35 : 30} src="/html.svg" className="absolute spinning-animation-x xl:top-2 xl:left-2 -top-3 -left-3 " />
                            <Image   height={windowSize ? 35 : 30} width={windowSize ? 35 : 30} src="/javascript.svg" className="absolute spinning-animation-x  xl:top-2 xl:right-2  -top-3 -right-3 " />
                            <Image   height={windowSize ? 35 : 30} width={windowSize ? 35 : 30} src="/react.svg" className="absolute spinning-animation-x  xl:bottom-2 xl:right-2  -bottom-3 -right-3 " />
                            <Image   height={windowSize ? 35 : 30} width={windowSize ? 35 : 30} src="/framer.svg" className="absolute spinning-animation-x  xl:bottom-2 xl:left-2  -bottom-3 -left-3 " />
                            
                          </div> 
                        </div>
                        <div className="w-full -z-10 h-full absolute top-1/2 left-1/2  spinning-animation-y box-content p-[3.25rem] rounded-full opacity-66">
                          <div className="w-full relative h-full">
                            <Image   height={windowSize ? 35 : 30} width={windowSize ? 35 : 30} src="/css.svg" className="absolute spinning-animation-xy  xl:top-2 xl:left-2  -top-3 -left-3 " />
                            <Image   height={windowSize ? 35 : 30} width={windowSize ? 35 : 30} src="/typescript.svg" className="absolute spinning-animation-xy  xl:top-2 xl:right-2  -top-3 -right-3 " />
                            <Image   height={windowSize ? 35 : 30} width={windowSize ? 35 : 30} src="/next.svg" className="absolute spinning-animation-xy  xl:bottom-2 xl:right-2  -bottom-3 -right-3 " />
                            <Image   height={windowSize ? 35 : 30} width={windowSize ? 35 : 30} src="/git.svg" className="absolute spinning-animation-xy  xl:bottom-2 xl:left-2  -bottom-3 -left-3 " />
                            
                          </div> 
                        </div>
                    </motion.div>
                    <div>
                        <TypewriterEffectSmooth words={words} />
                        <h1 className="md:leading-tight md:text-4xl xl:leading-tight text-3xl lg:text-5xl xl:text-6xl font-bold text-center xl:text-left text-white">Hello I&apos;m</h1>
                        <TextGenerateEffect words="Abdullah Al Sayef" delay={1000} />
                        <p className="xl:w-[54ch] text-sm md:text-md lg:text-lg text-center xl:text-left pb-8 xl:pb-8">I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.</p>
                        <Socials />
                    </div>
                </div>
                <Stats />
            </section>
            

        </>
        
    )
}
