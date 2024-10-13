"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  delay
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    setTimeout(() => {
      animate("span", {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      }, {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      });
    }, delay)
    
  }, [scope.current, delay]);

  const renderWords = () => {
    return (
      (<motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            (<motion.span
              key={word + idx}
              className="opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}>
              {word}{" "}
            </motion.span>)
          );
        })}
      </motion.div>)
    );
  };

  return (
    (<div className={cn("font-bold", className)}>
      <div className="">
        <div
          className="md:leading-tight text-accent md:text-4xl xl:leading-tight text-3xl lg:text-5xl xl:text-6xl font-bold text-center xl:text-left pb-4">
          {renderWords()}
        </div>
      </div>
    </div>)
  );
};

