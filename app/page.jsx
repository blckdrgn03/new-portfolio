"use client"

import { motion } from "framer-motion";
import Resume from "@/components/resume";
import Contact from "@/components/contact";
import Home from "@/components/home";
import Projects from "@/components/projects";
import Services from "@/components/services";

export default function Page() {
    return (
        <motion.main
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.75, delay: 0.25 }}
        >
            <Home />
            <Services />
            <Resume />
            <Projects />
            <Contact />
        </motion.main>
    );
}
