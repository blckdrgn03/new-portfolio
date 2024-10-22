import RealProjects from "./ui/real-project";
import { motion } from "framer-motion";



export default function Projects() {
    
    
    return (
        <section id="projects" className="mx-auto pt-[1rem] mt-[4rem] md:mt-[6.5rem] lg:mt-[9rem] xl:pt-[2rem] xl:mt-[10.5rem]">
            <motion.h1 viewport={{ once:true }} transition={{ duration: 0.5 }} initial={{opacity: 0, x: "-100%"}} whileInView={{opacity: 1, x: "0px"}} className="container md:text-4xl text-white text-3xl lg:text-5xl font-bold text-center xl:text-left pb-4 xl:pb-8">Projects</motion.h1>
            <motion.p viewport={{ once:true }} transition={{ duration: 0.5, delay: 0.25 }} initial={{opacity: 0, x: "-100%"}} whileInView={{opacity: 1, x: "0px"}} className="container text-sm md:text-md lg:text-lg text-center mb-8 xl:text-left">I&apos;ve built various frontend projects using React, Next.js, and Tailwind CSS, focusing on clean, responsive designs and functionality. Below are some of my recent works, showcasing my skills in creating intuitive and dynamic user experiences.</motion.p>

            <RealProjects />
        </section>
    );
}


