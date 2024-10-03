import About from "@/components/about";
import Contact from "@/components/contact";
import Home from "@/components/home";
import Projects from "@/components/projects";
import Services from "@/components/services";

export default function Page() {
    return (
        <main>
            <Home />
            <About />
            <Services />
            <Projects />
            <Contact />
        </main>
    );
}
