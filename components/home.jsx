import Socials from "@/components/ui/socials";
import Stats from "@/components/ui/stats";
import Image from "next/image";import { TextGenerateEffect } from "@/components/ui/text-generate-effect.jsx";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <>
            <section id="home" className="container pt-[7rem] md:pt-[8.5rem]">
                <div className=" flex flex-col items-center xl:flex-row-reverse justify-between mx-auto">
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5, delay: 2}} className="relative rounded-full overflow-hidden xl:pb-0 h-[250px] w-[250px] md:h-[275px] md:w-[275px] md:h-[300px] md:w-[300px] xl:h-[475px] xl:w-[475px] mb-8">
                        <Image className="object-cover absolute" alt="Sayef" fill quality={100} src="/pic.png"/>
                    </motion.div>
                    <div>
                        <span className="text-center xl:text-left pb-1 block text-lg lg:text-xl xl:text-3xl xl:pb-4">Front-end React Developer</span>
                        <h1 className="md:leading-tight md:text-4xl xl:leading-tight text-3xl lg:text-5xl xl:text-6xl font-bold text-center xl:text-left text-white">Hello I&apos;m</h1>
                        <TextGenerateEffect words="Abdullah Al Sayef" delay={2} />
                        <p className="xl:w-[54ch] text-sm md:text-md lg:text-lg text-center xl:text-left pb-8 xl:pb-8">I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.</p>
                        <Socials />
                    </div>
                </div>
                <Stats />
            </section>
            

        </>
        
    )
}