import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Progress } from '@/components/ui/progress'

export default function Resume() {
    
    return (
        <section id="resume" className="mx-auto container pt-[1rem] mt-[4rem] md:mt-[6.5rem] lg:mt-[9rem] xl:pt-[2rem] xl:mt-[10.5rem] mb-64">
            <h1 className="md:text-4xl text-white text-3xl lg:text-5xl font-bold text-center xl:text-left pb-4 xl:pb-8">Resume</h1>
            <p className="text-sm md:text-md lg:text-lg text-center xl:text-left mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime odio deleniti amet iusto, omnis, laudantium quasi ipsum facilis explicabo inventore animi nam. Iusto nobis nemo maiores voluptate, numquam ex laudantium?</p>

            <Tabs defaultValue="about">
                <TabsList>
                    <TabsTrigger value="about">About</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="technology">Technology</TabsTrigger>
                </TabsList>
                <TabsContent value="about">
                    <div className="text-sm">
                        <h2 className="text-2xl lg:text-4xl font-bold text-center md:text-3xl text-white pb-2 sm:pb-3">About</h2>
                        <p className="mb-8 text-center">tetur adipisicing elit. Maxime odio deleniti amet iusto, omnis, laudantium quasi</p>

                        <div className="flex flex-col gap-4">
                            {aboutData.map((data, i) => {
                                return (
                                    <div key={i} className="flex flex-col items-center">
                                        <h3 className="text-lg font-medium text-white ">{data[0]}</h3>
                                        <p className={`text-md text-slate`}>{data[1]}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="pt-8 flex flex-col gap-4">
                            <Progress value={85} />
                            <Progress value={95} />
                            <Progress value={90} />
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="education">
                    <div className="">
                        this is education
                    </div>
                </TabsContent>
                <TabsContent value="experience">
                    <div className="">
                        this is education
                    </div>
                </TabsContent>
                <TabsContent value="technology">
                    <div className="">
                        this is education
                    </div>
                </TabsContent>
            </Tabs>
        </section>
    );
}

const aboutData = [
    ["Name", "Abdullah Al Sayef"],
    ["Age", "16 Years"],
    ["Phone", "(+880) 13056 38260"],
    ["Email", "abdullahalsayef03@gmail.com"],
    ["Nationality", "Bangladeshi"],
    ["Language", "English, Bangla"]
]

