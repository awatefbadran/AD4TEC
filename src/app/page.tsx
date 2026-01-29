import About from "@/components/home/About";
import Experience from "@/components/home/Experience";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Why from "@/components/home/Why";
import CTASection from "@/components/home/CTASection";


export default function Home() {
  return (
    <>
   <Hero/>
   <About/>
   <Experience/>
   <Services/>
   <Process/>
   <Why/>
   <CTASection/>
   </>
  );
}
