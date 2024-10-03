import CountupOnVisible from '@/lib/CountupOnVisible';

export default function Stats() {
    return (
        <div className="flex flex-wrap xl:flex-nowrap justify-between mt-12">
            <div className="w-1/2 xl:w-auto gap-2 xl:gap-3 mb-8 xl:mb-0 flex justify-center align-center">
                <span className="text-3xl lg:text-4xl xl:text-6xl font-bold"><CountupOnVisible start={0} end={1} duration={5}/></span>
                <span className="capitalize text-sm lg:text-md leading-4 xl:text-lg w-[7ch]">year of experience</span>
            </div>
            <div className="w-1/2 xl:w-auto gap-2 xl:gap-3 flex justify-center align-center">
                <span className="text-3xl lg:text-4xl xl:text-6xl font-bold"><CountupOnVisible start={0} end={12} duration={5}/></span>
                <span className="capitalize text-sm lg:text-md leading-4 xl:text-lg w-[7ch]">projects completed</span>
            </div>
            <div className="w-1/2 xl:w-auto gap-2 xl:gap-3 mb-8 xl:mb-0 flex justify-center align-center">
                <span className="text-3xl lg:text-4xl xl:text-6xl font-bold"><CountupOnVisible start={0} end={8} duration={5}/></span>
                <span className="capitalize text-sm lg:text-md xl:text-lg leading-4 w-[7ch]">technologies mastered</span>
            </div>
            <div className="w-1/2 xl:w-auto gap-2 xl:gap-3 flex justify-center align-center">
                <span className="text-3xl lg:text-4xl xl:text-md xl:text-6xl font-bold"><CountupOnVisible  start={0} end={100} duration={5}/></span>
                <span className="capitalize text-sm lg:text-md xl:text-lg leading-4 w-[7ch]">code committed</span>
            </div>
        </div>
    )
}