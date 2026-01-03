import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "wouter";
import heroBg from "@assets/generated_images/luxury_restaurant_interior_at_night.png";
import dishImg from "@assets/generated_images/gourmet_plated_dish_macro_shot.png";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Hero Animation
    tl.from(heroRef.current, {
      scale: 1.1,
      opacity: 0,
      duration: 2,
      ease: "power3.out"
    })
    .from(".animate-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    }, "-=1.5");

    // Scroll Animations
    gsap.utils.toArray(".reveal-section").forEach((section: any) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    });

  }, { scope: container });

  return (
    <div ref={container} className="bg-background min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div ref={heroRef} className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Luxury Restaurant Interior" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="animate-text text-primary text-sm md:text-base uppercase tracking-[0.3em] font-semibold mb-6">
            Welcome to Lumière
          </h2>
          <h1 className="animate-text text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
            Taste the <br/><span className="italic text-white/90">Extraordinary</span>
          </h1>
          <p className="animate-text text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            An immersive dining experience where culinary art meets timeless elegance.
          </p>
          <div className="animate-text flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/menu">
              <a className="px-8 py-4 bg-primary text-black font-semibold uppercase tracking-widest hover:bg-white transition-colors duration-300">
                View Menu
              </a>
            </Link>
            <Link href="/contact">
              <a className="px-8 py-4 border border-white/30 text-white font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
                Book a Table
              </a>
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 md:py-32 px-6 container mx-auto">
        <div className="reveal-section flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 space-y-8">
            <h2 className="text-primary text-sm uppercase tracking-[0.2em]">Our Philosophy</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white leading-tight">
              Honoring tradition, <br/>embracing innovation.
            </h3>
            <p className="text-white/70 leading-relaxed font-light text-lg">
              At Lumière, we believe that food is more than sustenance—it is a story. Our chefs meticulously source the finest seasonal ingredients to craft dishes that are visually stunning and deeply satisfying. Every plate is a tribute to the art of fine dining.
            </p>
            <Link href="/about">
              <a className="inline-block border-b border-primary text-primary pb-1 hover:text-white hover:border-white transition-colors">
                Read Our Story
              </a>
            </Link>
          </div>
          <div className="md:w-1/2">
            <div className="aspect-[4/5] overflow-hidden bg-secondary relative group">
              <img 
                src={dishImg} 
                alt="Signature Dish" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-24 bg-secondary/30 border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <div className="reveal-section max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Critically Acclaimed</h2>
            <p className="text-white/60">Recognized by the world's most prestigious culinary guides.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Michelin Star", year: "2024", desc: "For excellence in culinary execution and service." },
              { title: "Best Interior", year: "2023", desc: "Awarded by Architectural Digest for design innovation." },
              { title: "Chef of the Year", year: "2024", desc: "Executive Chef Antoine Riviere honored globally." }
            ].map((award, i) => (
              <div key={i} className="reveal-section p-8 border border-white/5 hover:border-primary/30 transition-colors duration-300 bg-background/50">
                <span className="text-primary font-serif italic text-2xl mb-2 block">{award.year}</span>
                <h3 className="text-xl text-white font-medium mb-4 uppercase tracking-widest">{award.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{award.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
