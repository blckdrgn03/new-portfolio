"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

export function Project({ project }) {
  return (
    (<CardContainer className="inter-var w-[25rem]">
      <CardBody
        className="border-2 relative group/card hover:shadow-2xl hover:shadow-accent/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-white capitalize">
          {project.name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-neutral-300">
          {project.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={project.image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="pb-1 ml-4 hover:text-accent text-sm font-normal text-white">
            Source code →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-full hover:bg-accent-hover bg-accent text-primary text-sm font-bold">
            Visit website
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>)
  );
}
