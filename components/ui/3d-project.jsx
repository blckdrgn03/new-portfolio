"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function Project({ project }) {
  return (
    (<CardContainer className="inter-var snap-start">
      <CardBody
        className="border-2  relative group/card hover:shadow-2xl hover:shadow-accent/[0.1] w-[22rem] md:w-[25rem] lg:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="60"
          className="text-xl md:text-2xl lg:text-3xl font-bold text-white capitalize">
          {project.name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="50"
          className="text-xs md:text-sm lg:text-md max-w-sm mt-2 lg:mt-4 xl:mt-8 text-neutral-300">
          {project.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={project.image}
            height="1000"
            width="1000"
            className="w-full aspect-[4/3] object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" />
        </CardItem>
        
          <div className="flex justify-end pt-4">
            <CardItem
          translateZ={30}
          className="flex gap-2"
        >
            {project.techs.map((tech , index)=> {
            return <Image 
              key={index}
              alt="tech"
              src={tech}
              height={20}
              width={20}
              className="object-contain rounded-[3px]"
            />
          })}
          </CardItem>
          </div>
          
        
        <div className="flex justify-between items-center mt-8 md:mt-12">
          <CardItem
            translateZ={40}
            as="a"
            href={project.code}
            target="__blank"
            className="pb-1 ml-4 md:text-sm hover:text-accent text-xs font-normal text-white lg:text-md">
            Source code →
          </CardItem>
          <CardItem
            translateZ={40}
            as="a"
            href={project.url}
            className="px-4 md:text-sm lg:text-md py-2 rounded-full hover:bg-accent-hover bg-accent text-primary text-xs font-bold">
            Visit website
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>)
  );
}
