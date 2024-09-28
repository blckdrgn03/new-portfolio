import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
    return (
        <main className="container flex flex-col items-center">
            <div className="relative border-2 rounded-full overflow-hidden h-[298px] w-[298px] xl:h-[498px] xl:w-[498px] bg-primary mb-4">
                <Image className="opacity-90 object-cover absolute" alt="Sayef" fill quality={100} src="/pic.png"/>
            </div>
            <div>
                <span className="text-center block pb-4">Front-end React Developer</span>
                <h1 className="text-4xl text-center pb-4">I am Abdullah Al Sayef</h1>
                <p className="text-center pb-4">I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.</p>
                <div>
                    <Button>Download Resume</Button>
                    <div>

                    </div>
                </div>
            </div>
            
        </main>
    );
}
