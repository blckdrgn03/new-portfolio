'use client'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from 'react';
import { Project } from "./3d-project";

export default function RealProjects() {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        setIsDesktop(window.screen.width >= 1024);
    }, []);
    
    let projects = [
        {
            name: 'calculator',
            description: 'A simple, user-friendly and neon calculator with basic arithmetic operations.',
            id: 1,
            image: '/calc.png',
            techs: ['/html.svg', '/css.svg', '/javascript.svg'],
            url: 'https://calculator-by-sayef.vercel.app/',
            code: 'https://github.com/blckdrgn03/calculator'
        },
        {
            name: 'Login-Register',
            description: 'A authentication system with form validation for user to login or register new account.',
            id: 2,
            image: '/login.png',
            techs: ['/html.svg', '/css.svg', '/javascript.svg'],
            url: 'https://login-register-by-sayef.vercel.app/',
            code: 'https://github.com/blckdrgn03/login-register'
        },
        {
            name: 'TODO List',
            description: ' A task management app with drag-and-drop functionality for easy task organization.',
            id: 3,
            image: '/todo.png',
            techs: ['/html.svg', '/css.svg', '/javascript.svg'],
            url: 'https://todo-list-by-sayef.vercel.app/',
            code: 'https://github.com/blckdrgn03/todo-list'
        },
        {
            name: 'Weather App',
            description: 'Displays the current weather conditions and a 5-day forecast of any country.',
            id: 4,
            image: '/weather.png',
            techs: ['/html.svg', '/css.svg', '/javascript.svg', '/react.svg'],
            url: 'https://weather-by-sayef.vercel.app/',
            code: 'https://github.com/blckdrgn03/Weather'
        },
        {
            name: 'Old Portfolio',
            description: 'A personal portfolio site showcasing projects and skills, fully responsive for all devices.',
            id: 5,
            image: '/portfolio.png',
            techs: ['/html.svg', '/css.svg', '/javascript.svg', '/react.svg', '/tailwind.svg'],
            url: 'https://abdullahalsayef.vercel.app/',
            code: 'https://github.com/blckdrgn03/portfolio'
        },
        
    ]

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    return (
        <div ref={targetRef} className={` ${isDesktop && 'relative h-[400vh]'}`}>
            <div className={`${isDesktop && 'sticky top-0 container flex min-h-[100vh] items-center overflow-hidden'}  ${!isDesktop && 'overflow-x-scroll container flex  items-center my-8 scrollbar-thumb-accent/[0.5] py-4 scrollbar-track-transparent scrollbar-thin scroll-smooth'}`}>
                <motion.div style={isDesktop && { x }} className="flex flex-row-reverse gap-4 h-auto md:gap-6">
                    {projects.map(project => {
                        return <Project key={project.id} project={project}/>;
                    })}
                </motion.div>
            </div>
        </div>
    );
}





