import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Progress } from '@/components/ui/progress'
import Image from "next/image";
import { motion } from "framer-motion";

export default function Resume() {
    
    return (
        <section id="resume" className="mx-auto container pt-[1rem] mt-[4rem] md:mt-[6.5rem] lg:mt-[9rem] xl:pt-[2rem] xl:mt-[10.5rem] pb-32">
            <motion.h1 className="md:text-4xl text-white text-3xl lg:text-5xl font-bold text-center xl:text-left pb-4 xl:pb-8">Resume</motion.h1>
            <motion.p className="text-sm md:text-md lg:text-lg text-center xl:text-left mb-6 xl:mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime odio deleniti amet iusto, omnis, laudantium quasi ipsum facilis explicabo inventore animi nam. Iusto nobis nemo maiores voluptate, numquam ex laudantium?</motion.p>

            <Tabs defaultValue="about" className="xl:flex xl:gap-5">
                <TabsList className="">
                    <TabsTrigger value="about">About</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="technology">Technology</TabsTrigger>
                </TabsList>
                <TabsContent value="about">
                    <div className="">
                        <h2 className="text-2xl lg:text-4xl font-bold text-center md:text-3xl text-white pb-2 sm:pb-3">About</h2>
                        <p className="mb-8 text-center">tetur adipisicing elit. Maxime odio deleniti amet iusto, omnis, laudantium quasi</p>

                        <div className="flex flex-wrap gap-3 md:gap-4 lg:gap-5">
                            {aboutData.map((data, i) => {
                                return (
                                    <div key={i} className={`   rounded-[4px] px-1 py-3 border border-1 shadow-xl bg-accent/[0.05] transition-all duration-300 hover:bg-accent/[0.1] border-accent/[0.25] ${(data[0] == "Name" || data[0] == "Email") ? "w-full md:w-[calc(50%-8px)] lg:w-[calc(50%-12px)]" : "w-[calc(50%-6px)] md:w-[calc(50%-8px)] lg:w-[calc(50%-12px)]" }`}>
                                        <h3 className="text-md md:text-lg lg:text-xl  text-white text-center">{data[0]}</h3>
                                        <p className={`text-center`}>{data[1]}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="pt-8 flex flex-col gap-4">
                            <h3 className="text-center text-white -mb-3 text-md md:text-lg lg:text-xl">Bangla</h3>
                            <Progress value={100} />
                            <h3 className="text-center text-white -mb-3 text-md md:text-lg lg:text-xl">English</h3>
                            <Progress value={80} />
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="education">
                    <div className="">
                        <h2 className="text-2xl lg:text-4xl font-bold text-center md:text-3xl text-white pb-2 sm:pb-3">Education</h2>
                        <p className="mb-8 text-center ">tetur adipisicing elit. Maxime odio deleniti amet iusto, omnis, laudantium quasi</p>
                        <div className="flex flex-col flex-wrap gap-3 md:gap-4 lg:gap-5">
                            <div className="rounded-[4px] py-3 border border-1 shadow-xl px-1 bg-accent/[0.05] transition-all duration-300 hover:bg-accent/[0.1] border-accent/[0.25] px-2 ">
                                <h3 className="text-md text-white  text-center md:text-lg lg:text-xl">School (BCPSC)</h3>
                                <p className=" text-center">2014-Present</p>
                            </div>
                            <div className="rounded-[4px] py-3 border border-1 shadow-xl bg-accent/[0.05] transition-all duration-300 hover:bg-accent/[0.1] border-accent/[0.25] px-1 ">
                                <h3 className="text-md text-white text-center md:text-lg lg:text-xl">
                                Codecademy</h3>
                                <p className=" text-center">2022-2024</p>
                            </div>
                            <div className="rounded-[4px] py-3 border border-1 border-accent/[0.25] shadow-xl bg-accent/[0.05] transition-all duration-300 hover:bg-accent/[0.1] px-1 ">
                                <h3 className="text-md text-center text-white md:text-lg lg:text-xl ">Reading Documentaries and Coding</h3>
                                <p className=" text-center">2022-Present</p>
                            </div>
                        </div>
                        <div className="pt-8 flex flex-col gap-4">
                            <h3 className="text-md text-center text-white -mb-3 md:text-lg lg:text-xl">UI/UX Designing</h3>
                            <Progress value={70} />
                            <h3 className="text-md text-center text-white -mb-3 md:text-lg lg:text-xl">Front-end Development</h3>
                            <Progress value={90} />
                            <h3 className="text-md text-center text-white -mb-3 md:text-lg lg:text-xl">SEO</h3>
                            <Progress value={80} />
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="experience">
                    <div className="">
                        <h2 className="text-2xl lg:text-4xl font-bold text-center md:text-3xl text-white pb-2 sm:pb-3">Experience</h2>
                        <p className="mb-8 text-center">tetur adipisicing elit. Maxime odio deleniti amet iusto, omnis, laudantium quasi</p>
                        <div className="flex flex-col flex-wrap gap-3 md:gap-4 lg:gap-5">
                            <div className="rounded-[4px] py-3 border border-1 shadow-xl bg-accent/[0.05] transition-all px-1  duration-300 hover:bg-accent/[0.1] border-accent/[0.25]">
                                <h3 className="text-md text-white text-center md:text-lg lg:text-xl">
                                Building Dummy Projects</h3>
                                <p className=" text-center">2024-Present</p>
                            </div>
                            <div className="rounded-[4px] py-4 px-2 border border-1 border-accent/[0.25] shadow-xl bg-accent/[0.05] transition-all duration-300 hover:bg-accent/[0.1]">
                                <p className="text-center">Let&apos;s work togerther so that I can fill this section...</p>
                            </div>
                        </div>
                        <div className="pt-8 flex flex-col gap-4">
                            <h3 className="text-md text-center text-white -mb-3">UI/UX Designing</h3>
                            <Progress value={20} />
                            <h3 className="text-md text-center text-white -mb-3 md:text-lg lg:text-xl">Front-end Development</h3>
                            <Progress value={40} />
                            <h3 className="text-md text-center text-white -mb-3 md:text-lg lg:text-xl">SEO</h3>
                            <Progress value={30} />
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="technology">
                    <div className="">
                        <h2 className="text-2xl lg:text-4xl font-bold text-center md:text-3xl text-white pb-2 sm:pb-3">Technology</h2>
                        <p className="mb-8 text-center ">tetur adipisicing elit. Maxime odio deleniti amet iusto, omnis, laudantium quasi</p>
                        
                        <div className="flex flex-wrap gap-3 md:gap-4 lg:gap-5">
                            {techData.map((tech, i) => {
                                return (
                                    <Technology key={i} tech={tech}/>                       
                                )
                            })}
                        </div>

                        
                    </div>
                </TabsContent>
            </Tabs>
        </section>
    );
}

function Technology({ tech }) {
    return (
        <div className="w-full md:w-[calc(50%-8px)] lg:w-[calc(50%-12px)] p-3 bg-accent/[0.05] rounded-[4px] border border-1 border-accent/[0.25] shadow-xl hover:bg-accent/[0.1] justify-between transition-all duration-300 flex items-center">
            <div className="aspect-square w-[20%] overflow-hidden rounded-[4px] relative ">
                <Image fill quality={100} alt={tech[0]} src={tech[2]} className="object-contain object-center" />
            </div>
            <div className="w-[75%]">
                <h3 className="text-white text-md md:text-lg lg:text-xl">{tech[0]}</h3>
                <p className="text-sm">{tech[1]}</p>
            </div>    
        </div> 
    )
}

const aboutData = [
    ["Name", "Abdullah Al Sayef"],
    ["Age", "16 Years"],
    ["Phone", "+880 1305-638260"],
    ["Email", "abdullahalsayef03@gmail.com"],
    ["Nationality", "Bangladeshi"],
    ["Language", "English, Bangla"]
]

const techData = [
    ["HTML", "A markup language for structuring web content.", "/html.svg"],
    ["CSS", "A style sheet language used for describing the look and formatting of a document.", "/css.svg"],
    ["JavaScript", "A programming language that brings interactivity to web pages.", "/javascript.svg"],
    ["React", "A JavaScript library for building user interfaces.", "/react.svg"],
    ["Next.js", "A React framework for building server-rendered or statically generated applications.", "/next.svg"],
    ["Framer Motion", "An animation library for React for creating complex animations.", "/framer.svg"],
    ["Figma", "A web-based design tool for interface design and prototyping.", "/figma.svg"],
    ["Git", "A version control system for tracking changes in source code during software development.", "/git.svg"],
  ];
  
