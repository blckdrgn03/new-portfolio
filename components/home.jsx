import Socials from "@/components/ui/socials";
import Stats from "@/components/ui/stats";
import { TextGenerateEffectDemo } from "@/components/ui/heading";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <section id="home" className="container mx-auto flex flex-col items-center xl:flex-row-reverse justify-between">
                <div className="relative rounded-full overflow-hidden xl:pb-0 h-[250px] w-[250px] md:h-[275px] md:w-[275px] md:h-[300px] md:w-[300px] xl:h-[475px] xl:w-[475px] mb-8">
                    <Image className="object-cover absolute" alt="Sayef" fill quality={100} src="/pic.png"/>
                </div>
                <div>
                    <span className="text-center xl:text-left pb-1 block text-lg lg:text-xl xl:text-3xl xl:pb-4">Front-end React Developer</span>
                    <h1 className="md:leading-tight md:text-4xl xl:leading-tight text-3xl lg:text-5xl xl:text-6xl font-bold text-center xl:text-left">Hello I&apos;m</h1>
                    <TextGenerateEffectDemo />
                    <p className="xl:w-[54ch] text-sm md:text-md lg:text-lg text-center xl:text-left pb-8 xl:pb-8">I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.</p>
                    <Socials />
                </div>
            </section>
            <Stats />

        </>
        
    )
}