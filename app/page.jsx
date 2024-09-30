import Socials from "@/components/socials";
import Stats from "@/components/stats";
import Image from "next/image";



export default function Home() {
    return (
        <main>
                <section className="container flex flex-col items-center xl:flex-row-reverse justify-between">
                <div className="relative rounded-full overflow-hidden xl:pb-0 h-[250px] w-[250px] xl:h-[475px] xl:w-[475px] mb-8">
                    <Image className="object-cover absolute" alt="Sayef" fill quality={100} src="/pic.png"/>
                </div>
                <div>
                    <span className="text-center xl:text-left pb-1 block text-lg xl:text-3xl xl:pb-4">Front-end React Developer</span>
                    <h1 className="md:leading-tight xl:leading-tight text-3xl xl:text-6xl font-bold text-center xl:text-left pb-4">Hello I&apos;m <br />Abdullah Al Sayef</h1>
                    <p className="xl:w-[54ch] text-sm text-center xl:text-left pb-8 xl:text-lg xl:pb-8">I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.</p>
                    <Socials />
                </div>
                
            </section>
            <Stats />
        </main>
        
    );
}
