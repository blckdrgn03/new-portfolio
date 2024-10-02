import { Project } from "./ui/3d-project";



export default function Projects() {
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
            description: 'A responsive authentication system with form validation for user sign-up and login.',
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
    return (
        <section id="projects" className="container mb-12 mx-auto mt-[5rem] md:mt-[7.5rem] lg:mt-[10rem] xl:mt-[12.5rem]">
            <h1 className="md:text-4xl text-3xl lg:text-5xl font-bold text-center xl:text-left pb-4 xl:pb-8">Projects</h1>
            <p className="text-sm md:text-md lg:text-lg text-center xl:text-left">I’ve built various frontend projects using React, Next.js, and Tailwind CSS, focusing on clean, responsive designs and functionality. Below are some of my recent works, showcasing my skills in creating intuitive and dynamic user experiences.</p>

            <div className="flex gap-8 px-4 py-6 overflow-x-scroll scrollbar-thumb-accent scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded snap-x snap-mandatory xl:py-10 xl:gap-10">
                {projects.map(project => {
                    return <Project key={project.id} project={project}/>;
                })}
            </div>
            
        </section>
    );
}

