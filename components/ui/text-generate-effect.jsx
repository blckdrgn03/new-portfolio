"use client"; // This component should be a client component
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 1,
  delay = 0, // Accepting delay as a prop
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    console.log("Animating words with delay:", delay);
    // Animate with a combined delay
    animate("span", {
      opacity: 1,
      filter: filter ? "blur(0px)" : "none",
    }, {
      duration: duration,
      delay: delay, // Initial delay before starting the animation
      // Add stagger for each word
      transition: {
        delay: stagger(0.2, { start: delay }), // Stagger words with the initial delay
      },
    });
  }, [scope.current, delay, animate, duration, filter]); // Include all dependencies

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="opacity-0" // Starts invisible
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div>
        <div className="md:leading-tight text-accent md:text-4xl xl:leading-tight text-3xl lg:text-5xl xl:text-6xl font-bold text-center xl:text-left pb-4">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
