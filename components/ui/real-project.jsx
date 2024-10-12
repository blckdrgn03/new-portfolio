'use client'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from 'react';
import { Project } from "./3d-project";

export default function RealProjects() {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // Now it's safe to access `window`
        setIsDesktop(window.screen.width >= 1024);
    }, []); // Empty dependency array means this runs once on mount (client-side)
    
    let projects = [
        {
            name: 'calculator',
            description: 'A simple, user-friendly calculator with basic arithmetic operations.',
            id: 1,
            image: '/calc.png',
            techs: ['/html.svg', '/css.svg', '/javascript.svg'],
            url: 'https://calculator-by-sayef.vercel.app/',
            code: 'https://github.com/blckdrgn03/calculator'
        },
        {
            name: 'Login-Register',
            description: 'A authentication system with form validation for user sign-up and login.',
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
            description: 'Displays current weather conditions and a 5-day forecast using real-time data.',
            id: 4,
            image: '/weather.png',
            techs: ['/html.svg', '/css.svg', '/javascript.svg'],
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
    const x = useTransform(scrollYProgress, [0, 1], ["4%", "-80%"]);

    return (
        <div ref={targetRef} className={` ${isDesktop && 'relative h-[400vh]'}`}>
            <div className={`${isDesktop && 'sticky top-0 flex min-h-[100vh] items-stretch overflow-hidden my-12'}  ${!isDesktop && 'overflow-x-scroll py-8 scrollbar-none  scroll-smooth'}`}>
                <motion.div style={isDesktop && { x }} className="flex flex-row-reverse gap-6">
                    {projects.map(project => {
                        return <Project key={project.id} project={project}/>;
                    })}
                </motion.div>
            </div>
        </div>
    );
}





