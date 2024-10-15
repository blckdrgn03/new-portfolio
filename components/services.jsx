import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Services() {
    const [windowSize, setWindowSize] = useState(true);

    useEffect(() => {
        setWindowSize(window.innerWidth >= 1200);
        
        const handleResize = () => {
            setWindowSize(window.innerWidth >= 1200);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <section id="services" className="container mx-auto pt-[1rem] mt-[4rem] md:mt-[6.5rem] lg:mt-[9rem] xl:pt-[2rem] xl:mt-[10.5rem]">
            <h1 className="md:text-4xl text-white text-3xl lg:text-5xl font-bold text-center xl:text-left pb-4 xl:pb-8">Services</h1>
            <p className=" text-sm md:text-md lg:text-lg text-center xl:text-left">With expertise in UI/UX design, front-end development, and SEO, I provide customized solutions to bring your ideas to life and optimize your online presence.</p>

            <div className="">
                {services.map((service) => {
                    return <Service isXlWindow={windowSize} key={service.id} name={service.name} description={service.description} topImage={service.topImage} bottomImage={service.bottomImage} />
                })}
            </div>
        </section>
    );
}

const Service = ({ name, description, topImage, bottomImage, isXlWindow }) => {
    
    return (
        <div className="flex mx-auto pt-12 md:pt-16 xl:pt-24 xl:gap-16 flex-col-reverse odd:xl:flex-row even:xl:flex-row-reverse xl:justify-center items-center">
            <motion.div 
                initial={isXlWindow ? (name != "Front-end Development" ? { marginRight: "-50%", opacity: 0 } : { marginLeft: "-50%", opacity: 0 }) : { bottom: "100px", opacity: 0 }} 
                whileInView={isXlWindow ? (name != "Front-end Development" ? { marginRight: "0px", opacity: 1 } : { marginLeft: "0px", opacity: 1 }) : { bottom: "0px", opacity: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.75, delay: 0.25 }}
                
                className="group/service z-full w-1/2 relative shrink" 
            >
                <h2 className=" md:text-2xl text-white text-xl lg:text-3xl font-semibold text-center pb-2 xl:pb-4">
                    {name}
                    <a href="#contact">
                        <FaArrowRight className="inline ml-2 md:ml-3 xl:ml-4 -translate-x-6 hover:text-accent text-[0px] opacity-0 transition-all duration-500 group-hover/service:translate-x-0 group-hover/service:text-xl group-hover/service:opacity-100 hover:rotate-90 cursor-pointer" />
                    </a>
                </h2>
                <p className=" text-xs md:text-sm lg:text-md text-center">{description}</p>
            </motion.div>

            <div className="relative group shrink-0 aspect-[7/5] w-[90%] xl:w-[50%] my-6 md:my-8 xl:my-0">
                
                <motion.div initial={isXlWindow && { top: "0px", left: "0px",bottom: "0px", right: "0px" }} whileInView={isXlWindow && { top: "-16px", left: "-16px",bottom: "16px", right: "16px" }} viewport={isXlWindow && { once: true, margin: '-209px 0px 0px 0px'  }} 
                transition={isXlWindow && { duration: 0.5, delay: 1.25 }} className="absolute group-hover:z-30 group-hover:brightness-100 transition-all duration-500 brightness-90 -top-2 -left-2 right-2 bottom-2 md:-top-3 md:-left-3 md:right-3 md:bottom-3 xl:-top-4 xl:-left-4 xl:right-4 xl:bottom-4 group-hover:top-2 group-hover:left-2 group-hover:-bottom-2 group-hover:-right-2 md:group-hover:top-3 md:group-hover:left-3 md:group-hover:-bottom-3 md:group-hover:-right-3 xl:group-hover:top-4 xl:group-hover:left-4 xl:group-hover:-bottom-4 xl:group-hover:-right-4 md:delay-300 rounded-[8px] overflow-hidden">
                    <Image
                        src={bottomImage.src}
                        alt={bottomImage.alt}
                        fill
                        quality={100}
                        className="object-cover object-center"
                    />
                </motion.div> 
                <motion.div initial={{ top: "0px", left: "0px",bottom: "0px", right: "0px" }} whileInView={{ top: "16px", left: "16px",bottom: "-16px", right: "-16px" }} viewport={{ once: true, margin: '-209px 0px 0px 0px' }} 
                transition={{ duration: 0.5, delay: 1.25 }} className="rounded-[8px] group-hover:brightness-90 transition-all group-hover:-top-2 group-hover:-left-2 md:top-3 md:left-3 md:-right-3 md:-bottom-3 duration-500 absolute group-hover:bottom-2 group-hover:right-2 z-20 top-2 left-2 -right-2 -bottom-2 overflow-hidden md:group-hover:-top-3 md:delay-300 md:group-hover:-left-3 xl:group-hover:-top-4 xl:group-hover:-left-4 xl:group-hover:bottom-4 xl:group-hover:right-4 xl:top-4 xl:left-4 xl:-right-4 xl:-bottom-4 md:group-hover:bottom-3 md:group-hover:right-3">
                    <Image
                        src={topImage.src}
                        alt={topImage.alt}
                        fill
                        quality={100}
                        className="object-cover object-center"
                    />
                </motion.div>
            </div>
        </div>
    );
}

const services = [
    {
        name: "UI/UX Design",
        description: "I design intuitive and visually appealing user interfaces that enhance user experience while balancing aesthetics and functionality.",
        topImage: { alt: "UI/UX design illustration featuring Figma interface", src: "/weather.png" },
        bottomImage: { alt: "UI/UX design tools showcased with Figma logo", src: "/todo.png" },
        id: 1,
    },
    {
        name: "Front-end Development",
        description: "I develop responsive and dynamic front-end applications with clean, efficient code, ensuring seamless interaction across devices.",
        topImage: { alt: "Front-end development screenshot of a weather app", src: "/weather.png" },
        bottomImage: { alt: "Weather app interface showing real-time forecasts", src: "/todo.png" },
        id: 2,
    },
    {
        name: "SEO",
        description: "I optimize websites to rank higher in search engines, increasing visibility and driving organic traffic with strategic SEO practices.",
        topImage: { alt: "SEO optimization with ranking and search analytics", src: "/weather.png" },
        bottomImage: { alt: "Website traffic analytics showing SEO improvement", src: "/todo.png" },
        id: 3,
    },
];
