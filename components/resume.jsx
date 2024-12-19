import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Progress } from '@/components/ui/progress'
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";


const smAbout = [
    ["Name", "Abdullah Al Sayef"],
    ["Age", "16 Years"],
    ["Phone", "+880 1305-638260"],
    ["Email", "abdullahalsayef03@gmail.com"],
    ["Nationality", "Bangladeshi"],
    ["Language", "English, Bangla"]
]
const mdAbout = [
    ["Name", "Abdullah Al Sayef"],
    ["Age", "16 Years"],
    ["Nationality", "Bangladeshi"],
    ["Phone", "+880 1305-638260"],
    ["Email", "abdullahalsayef03@gmail.com"],
    ["Language", "English, Bangla"]
]


export default function Resume() {
    const [aboutData, setIsMdwindow] = useState([]);
    
    useEffect(() => {
        setIsMdwindow(window.innerWidth >= 768 ? mdAbout : smAbout);
    }, [])

    useEffect(() => {
        
        const handleResize = () => {
            setIsMdwindow(window.innerWidth >= 768 ? mdAbout : smAbout);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    
    return (
        <section id="resume" className="mx-auto container pt-[1rem] mt-[4rem] md:mt-[6.5rem] lg:mt-[9rem] xl:pt-[2rem] xl:mt-[10.5rem]">
            <motion.h1 viewport={{ once:true }} transition={{ duration: 0.5 }} initial={{opacity: 0, x: "-100%"}} whileInView={{opacity: 1, x: "0px"}} className="md:text-4xl text-white text-3xl lg:text-5xl font-bold text-center xl:text-left pb-4 xl:pb-8">Resume</motion.h1>
            <motion.p viewport={{ once:true }} transition={{ duration: 0.5, delay: 0.25 }} initial={{opacity: 0, x: "-100%"}} whileInView={{opacity: 1, x: "0px"}} className="text-sm md:text-md lg:text-lg text-center xl:text-left mb-6 xl:mb-12">I am just a highschool student who loves to code! I have 2 years of experience of building cool projects such as weather app, portfoio, dashboard, e-commerce site etc. My tech stack is also very flexible.</motion.p>

            <Tabs defaultValue="about" className="xl:flex xl:gap-5">
                <TabsList className="">
                    <TabsTrigger value="about">About Me</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="technology">Technology</TabsTrigger>
                </TabsList>
                <TabsContent value="about">
                    <div className="">
                        <h2 className="text-2xl lg:text-4xl font-bold text-center md:text-3xl text-white pb-2 sm:pb-3">About Me</h2>
                        <p className="mb-8 text-center">I am a 16 year old student. I live in Bangladesh. I love painting. I also love cats and I have 2 myself!</p>

                        <div className="flex flex-wrap gap-3 md:gap-4">
                            {aboutData.map((data, i) => {
                                return (
                                    <div key={i} className={`   rounded-[8px] px-1 py-3 border border-1 shadow-xl bg-accent/[0.05] transition-all duration-300 hover:bg-accent/[0.1] border-accent/[0.25] ${(data[0] == "Name" || data[0] == "Email") ? "w-full" : "w-[calc(50%-6px)]" } ${(data[0] == "Phone" || data[0] == "Name" || data[0] == "Email") ? "md:w-[calc(66%-8px)]" : "md:w-[calc(34%-8px)]"}`}>
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
                        <p className="mb-8 text-center ">Besides school I am learning to code. Specifically frontend development. I want to learn a lot more about programming in general.</p>
                        <div className="flex flex-col gap-3 md:gap-4">
                            <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                                <div className="rounded-[8px] w-full md:w-[calc(50%-8px)] hover:md:w-[calc(66%-8px)] hover:md:shrink-0 py-3 border border-1 shadow-xl px-1 bg-accent/[0.05] transition-all duration-300 hover:bg-accent/[0.1] border-accent/[0.25] px-2 ">
                                    <h3 className="text-md text-white  text-center md:text-lg lg:text-xl">School (BCPSC)</h3>
                                    <p className=" text-center">2014-Present</p>
                                </div>
                                <div className="rounded-[8px] w-full w-full md:w-[calc(50%-8px)] md:w-[calc(50%-8px)] hover:md:w-[calc(66%-8px)] hover:md:shrink-0 py-3 border border-1 shadow-xl bg-accent/[0.05] transition-all duration-300 hover:bg-accent/[0.1] border-accent/[0.25] px-1 ">
                                    <h3 className="text-md text-white text-center md:text-lg lg:text-xl">
                                    Codecademy</h3>
                                    <p className=" text-center">2022-2024</p>
                                </div>
                            </div>
                            
                            <div className="rounded-[8px] w-full py-3 border border-1 border-accent/[0.25] shadow-xl bg-accent/[0.05] transition-all duration-300 hover:bg-accent/[0.1] px-1 ">
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
                        <p className="mb-8 text-center">I really don't have any real world experience. But I have experience in building projects that mimic the real world websites.</p>
                        <div className="flex flex-col flex-wrap gap-3 md:gap-4">
                            <div className="rounded-[8px] py-3 border border-1 shadow-xl bg-accent/[0.05] transition-all px-1  duration-300 hover:bg-accent/[0.1] border-accent/[0.25]">
                                <h3 className="text-md text-white text-center md:text-lg lg:text-xl">
                                Building Dummy Projects</h3>
                                <p className=" text-center">2024-Present</p>
                            </div>
                            <div className="rounded-[8px] py-4 px-2 border border-1 border-accent/[0.25] shadow-xl bg-accent/[0.05] transition-all duration-300 hover:bg-accent/[0.1]">
                                <p className="text-center">Let&apos;s work togerther so that I can fill this section...</p>
                            </div>
                        </div>
                        <div className="pt-8 flex flex-col gap-4">
                            <h3 className="text-md text-center text-white -mb-3 md:text-lg lg:text-xl">UI/UX Designing</h3>
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
                        <p className="mb-8 text-center ">I have the most flexible tech stack possible. From simple HTML to Next.js! These are needed to build fast, secure and modern websites </p>
                        
                        <div className="flex flex-col gap-3 md:gap-4">
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
        <div className="flex flex-col md:flex-row gap-3 md:gap-4">
        <div className="w-full group md:h-[88px] lg:h-[106px] xl:h-[101px] md:w-[calc(50%-8px)] md:hover:w-[calc(66%-8px)] md:hover:shrink-0 p-3 bg-accent/[0.05] rounded-[8px] border border-1 border-accent/[0.25] shadow-xl hover:bg-accent/[0.1] justify-between md:justify-start md:gap-8 transition-all duration-300 flex items-center overflow-hidden">
            <div className="aspect-square shrink-0 w-[20%] md:w-[62px] lg:w-[80px] xl:w-[75px] overflow-hidden rounded-[4px] relative ">
                <Image fill quality={100} alt={tech[0][0]} src={tech[0][2]} className="object-contain object-center" />
            </div>
            <div className="flex flex-col w-[75%] md:w-auto">
                <h3 className="text-white md:text-center group-hover:md:text-left transition-all duration-300  text-md md:text-lg lg:text-xl">{tech[0][0]}</h3>
                <p className="text-sm md:h-0 md:w-0 md:opacity-0 md:group-hover:h-auto md:group-hover:w-auto md:group-hover:opacity-100 transition-all duration-500">{tech[0][1]}</p>
            </div>    
        </div> 
        <div className="w-full md:h-[88px] lg:h-[106px] xl:h-[101px] group md:w-[calc(50%-8px)] md:hover:w-[calc(66%-8px)] md:hover:shrink-0 p-3 bg-accent/[0.05] rounded-[8px] border border-1 border-accent/[0.25] shadow-xl hover:bg-accent/[0.1] justify-between md:justify-start md:gap-8 transition-all duration-300 flex items-center overflow-hidden">
            <div className="aspect-square shrink-0 w-[20%] md:w-[62px] lg:w-[80px] xl:w-[75px] overflow-hidden rounded-[4px] relative ">
                <Image fill quality={100} alt={tech[1][0]} src={tech[1][2]} className="object-contain object-center" />
            </div>
            <div className="w-[75%] flex flex-col md:w-auto ">
                <h3 className="text-white md:text-center group-hover:md:text-left transition-all duration-300  text-md md:text-lg lg:text-xl">{tech[1][0]}</h3>
                <p className="text-sm md:h-0 md:w-0 md:opacity-0 md:group-hover:h-auto md:group-hover:w-auto md:group-hover:opacity-100  transition-all duration-500">{tech[1][1]}</p>
            </div>    
        </div> </div>
    )
}



const techData = [
    [
      ["HTML", "A markup language for structuring web content.", "/html.svg"],
      ["CSS", "A style sheet language used for describing the look and formatting of a document.", "/css.svg"]
    ],
    [
      ["JavaScript", "A programming language that adds interactivity to web pages.", "/javascript.svg"],
      ["React", "A JavaScript library for building user interfaces.", "/react.svg"]
    ],
    [
      ["Next.js", "A React framework for server-rendered or statically generated applications.", "/next.svg"],
      ["Framer Motion", "An animation library for React to create complex animations.", "/framer.svg"]
    ],
    [
      ["Figma", "A web-based tool for interface design and prototyping.", "/figma.svg"],
      ["Git", "A version control system for tracking changes in source code.", "/git.svg"]
    ]
  ];
  
  
  
