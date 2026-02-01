
import About from "@/components/home/About";
import Experience from "@/components/home/Experience";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Why from "@/components/home/Why";
import CTASection from "@/components/home/CTASection";
import ExecutedProjects from "@/components/home/ExecutedProjects";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ExecutedProjects />
      <Experience />
      <Services />
      <Process />
      <Why />
      <CTASection />
    </>
  );
}
