import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Services() {
    const [windowSize, setWindowSize] = useState(true);
   

    useEffect(() => {
        setWindowSize(window.innerWidth >= 1200);
    }, [])

    useEffect(() => {
        
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
            <motion.h1 viewport={{ once:true }} transition={{ duration: 0.5 }} initial={{opacity: 0, x: "-100%"}} whileInView={{opacity: 1, x: "0px"}} className="md:text-4xl text-white text-3xl lg:text-5xl font-bold text-center xl:text-left pb-4 xl:pb-8">Services</motion.h1>
            <motion.p viewport={{ once:true }} transition={{ duration: 0.5, delay: 0.25 }} initial={{opacity: 0, x: "-100%"}} whileInView={{opacity: 1, x: "0px"}} className=" text-sm md:text-md lg:text-lg text-center xl:text-left">With expertise in UI/UX design, front-end development, and SEO, I provide customized solutions to bring your ideas to life and optimize your online presence.</motion.p>

            <div className="">
                {services.map((service) => {
                    return <Service isXlWindow={windowSize} key={service.id} id={service.id} name={service.name} description={service.description} topImage={service.topImage} bottomImage={service.bottomImage} />
                })}
            </div>
        </section>
    );
}

const Service = ({ name, description, topImage, bottomImage, isXlWindow, id }) => {
    const [inView, setInView] = useState([false, false, false])

    const handleView = (e, id) => {
        setTimeout(() => {
            setInView(inView.map((x, i) => {
            
                if(id == i) {
                    return true;
                } else {
                    return x;
                }
                
            }))
        }, 1250)
    } 
 // Ref for the triggering element
 const triggerRef = useRef(null);

 // Check if the trigger element is in view
 const isInView = useInView(triggerRef, { once: true });
    return (
        <div className="flex mx-auto pt-12 md:pt-16 xl:pt-24 xl:gap-16 flex-col-reverse odd:xl:flex-row even:xl:flex-row-reverse xl:justify-center items-center">
            <motion.div 
                initial={isXlWindow ? (name != "Front-end Development" ? { marginRight: "-50%", opacity: 0 } : { marginLeft: "-50%", opacity: 0 }) : { marginTop: "-100px", opacity: 0 }} 
                animate={isInView ? (isXlWindow ? (name != "Front-end Development" ? { marginRight: "0px", opacity: 1 } : { marginLeft: "0px", opacity: 1 }) : { marginTop: "0px", opacity: 1 }) : {}}
                transition={{ duration: 0.75, delay: 0.25 }}
                key={isXlWindow}
                className="group/service z-10 xl:w-1/2 shrink" 
            >
                <h2 className=" md:text-2xl text-white text-xl lg:text-3xl font-semibold text-center pb-2 xl:pb-4">
                    {name}
                    <a href="#contact">
                        <FaArrowRight className="inline ml-2 md:ml-3 xl:ml-4 hover:text-accent transition-all duration-300 text-xl hover:rotate-90 cursor-pointer" />
                    </a>
                </h2>
                <p className=" text-xs md:text-sm lg:text-md text-center">{description}</p>
            </motion.div>

            <div className="relative group shrink-0 z-20 aspect-[7/5] w-[90%] xl:w-[50%] my-6 md:my-8 xl:my-0">
                <motion.div ref={triggerRef} onViewportEnter={(e) => {handleView(e, id)}} className="absolute bottom-1/3  h-1 bg-transparent"></motion.div>
                <div className={`absolute shadow-2xl transition-all duration-500 md:delay-300 rounded-[8px] overflow-hidden ${inView[id] ? "group-hover:brightness-100 brightness-90  -top-2 -left-2 right-2 bottom-2 md:-top-3 md:-left-3 md:right-3 md:bottom-3 xl:-top-4 xl:-left-4 xl:right-4 xl:bottom-4 group-hover:top-2 group-hover:left-2 group-hover:-bottom-2 group-hover:-right-2 md:group-hover:top-3 md:group-hover:left-3 md:group-hover:-bottom-3 md:group-hover:-right-3 xl:group-hover:top-4 xl:group-hover:left-4 xl:group-hover:-bottom-4 xl:group-hover:-right-4 group-hover:z-30" : "top-0 left-0 right-0 bottom-0" }`}>
                    <Image
                        src={bottomImage.src}
                        alt={bottomImage.alt}
                        fill
                        quality={100}
                        className="object-cover object-center"
                    />
                </div> 
                <div className={`rounded-[8px] shadow-2xl transition-all duration-500 absolute  z-20 overflow-hidden ${inView[id] ? "group-hover:brightness-90 group-hover:-top-2 group-hover:-left-2 md:top-3 md:left-3 md:-right-3 md:-bottom-3 group-hover:bottom-2 group-hover:right-2 top-2 left-2 -right-2 -bottom-2 md:group-hover:-top-3 md:delay-300 md:group-hover:-left-3 xl:group-hover:-top-4 xl:group-hover:-left-4 xl:group-hover:bottom-4 xl:group-hover:right-4 xl:top-4 xl:left-4 xl:-right-4 xl:-bottom-4 md:group-hover:bottom-3 md:group-hover:right-3" : "top-0 left-0 right-0 bottom-0" }`}>
                    <Image
                        src={topImage.src}
                        alt={topImage.alt}
                        fill
                        quality={100}
                        className="object-cover object-center"
                    />
                </div>
            </div>
        </div>
    );
}

const services = [
    {
        name: "UI/UX Design",
        description: "I design intuitive and visually appealing user interfaces that enhance user experience while balancing aesthetics and functionality.",
        topImage: { alt: "UI/UX design illustration featuring Figma interface", src: "/b.png" },
        bottomImage: { alt: "UI/UX design tools showcased with Figma logo", src: "/a.png" },
        id: 0,
    },
    {
        name: "Front-end Development",
        description: "I develop responsive and dynamic front-end applications with clean, efficient code, ensuring seamless interaction across devices.",
        topImage: { alt: "Front-end development screenshot of a weather app", src: "/b.png" },
        bottomImage: { alt: "Weather app interface showing real-time forecasts", src: "/a.png" },
        id: 1,
    },
    {
        name: "SEO",
        description: "I optimize websites to rank higher in search engines, increasing visibility and driving organic traffic with strategic SEO practices.",
        topImage: { alt: "SEO optimization with ranking and search analytics", src: "/b.png" },
        bottomImage: { alt: "Website traffic analytics showing SEO improvement", src: "/a.png" },
        id: 2,
    },
];
