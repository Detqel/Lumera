import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import chefImg from "@assets/generated_images/professional_chef_plating_food.png";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.utils.toArray(".reveal-text").forEach((el: any) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 85%" },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    });
  }, { scope: container });

  return (
    <div ref={container} className="bg-background min-h-screen pt-20">
      <Navbar />

      {/* HEADER */}
      <section className="py-20 md:py-32 container mx-auto px-6 text-center">
        <h1 className="reveal-text text-5xl md:text-7xl font-serif text-white mb-8">Our Story</h1>
        <p className="reveal-text text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
          From a humble passion for flavor to a world-renowned culinary destination.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <section className="pb-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 reveal-text">
             <div className="relative aspect-[3/4] overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
                <img 
                  src={chefImg} 
                  alt="Head Chef" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
             </div>
          </div>
          <div className="md:w-1/2 space-y-10">
            <div className="reveal-text">
              <h3 className="text-primary text-sm uppercase tracking-[0.2em] mb-4">The Beginning</h3>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">A Vision of Excellence</h2>
              <p className="text-white/70 leading-relaxed font-light">
                Founded in 2025, Lumière began as a small bistro with a big dream: to redefine modern dining. Over the years, we have evolved, but our core mission remains unchanged—to create unforgettable moments through food.
              </p>
            </div>
            
            <div className="reveal-text">
              <h3 className="text-primary text-sm uppercase tracking-[0.2em] mb-4">The Kitchen</h3>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Led by Passion</h2>
              <p className="text-white/70 leading-relaxed font-light">
                Executive Chef Antoine Riviere brings over 20 years of experience from top kitchens in Paris and Tokyo. His approach combines classical French technique with contemporary Japanese minimalism, resulting in dishes that are as beautiful as they are delicious.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
