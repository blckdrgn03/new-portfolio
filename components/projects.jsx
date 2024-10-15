import RealProjects from "./ui/real-project";



export default function Projects() {
    
    
    return (
        <section id="projects" className="mx-auto pt-[1rem] mt-[4rem] md:mt-[6.5rem] lg:mt-[9rem] xl:pt-[2rem] xl:mt-[10.5rem]">
            <h1 className="container md:text-4xl text-white text-3xl lg:text-5xl font-bold text-center xl:text-left pb-4 xl:pb-8">Projects</h1>
            <p className="container text-sm md:text-md lg:text-lg text-center mb-8 xl:text-left">I&apos;ve built various frontend projects using React, Next.js, and Tailwind CSS, focusing on clean, responsive designs and functionality. Below are some of my recent works, showcasing my skills in creating intuitive and dynamic user experiences.</p>

            <RealProjects />
        </section>
    );
}


