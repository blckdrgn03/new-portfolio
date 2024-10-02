import { Project } from "./ui/3d-project";



export default function Projects() {
    let projects = [
        {
            name: 'calculator',
            description: 'lorem m ipsum dolor sit amet consectetur, adipisicing elit. Laudantium labor',
            id: 1,
            image: '/calc.png',
            techs: ['/html.svg', '/html.svg', '/html.svg']
        },
        {
            name: 'calculator',
            description: 'lorem m ipsum dolor sit amet consectetur, adipisicing elit. Laudantium labor',
            id: 2,
            image: '/calc.png',
            techs: ['/html.svg', '/html.svg', '/html.svg']
        },
        {
            name: 'calculator',
            description: 'lorem m ipsum dolor sit amet consectetur, adipisicing elit. Laudantium labor',
            id: 3,
            image: '/calc.png',
            techs: ['/html.svg', '/html.svg', '/html.svg']
        },
        {
            name: 'calculator',
            description: 'lorem m ipsum dolor sit amet consectetur, adipisicing elit. Laudantium labor',
            id: 4,
            image: '/calc.png',
            techs: ['/html.svg', '/html.svg', '/html.svg']
        },
        {
            name: 'calculator',
            description: 'lorem m ipsum dolor sit amet consectetur, adipisicing elit. Laudantium labor',
            id: 5,
            image: '/calc.png',
            techs: ['/html.svg', '/html.svg', '/html.svg']
        }
    ]
    return (
        <section id="projects" className="container mx-auto mt-[5rem] md:mt-[7.5rem] lg:mt-[10rem] xl:mt-[12.5rem]">
            <h1 className="md:text-4xl text-3xl lg:text-5x xl:text-6xl font-bold text-center xl:text-left pb-4">Projects</h1>
            <p className="text-sm md:text-md lg:text-lg text-center xl:text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium laborum iste, vero asperiores velit repellat provident.</p>

            <div className="flex gap-8 p-6 overflow-x-scroll">
                {projects.map(project => {
                    return <Project key={project.id} project={project}/>;
                })}
            </div>
            
        </section>
    );
}

