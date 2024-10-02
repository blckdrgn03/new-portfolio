"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Abdullah Al Sayef`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} className="md:leading-tight text-accent md:text-4xl xl:leading-tight text-3xl lg:text-5x xl:text-6xl font-bold text-center xl:text-left pb-4" />;
}
