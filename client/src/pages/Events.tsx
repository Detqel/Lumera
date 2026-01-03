import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import privateDiningImg from "@assets/generated_images/elegant_private_dining_room.png";

gsap.registerPlugin(ScrollTrigger);

export default function Events() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".event-hero-img", {
      scale: 1.1,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out"
    });
    
    gsap.utils.toArray(".reveal-event").forEach((el: any) => {
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

      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
            <img 
                src={privateDiningImg} 
                alt="Private Dining" 
                className="event-hero-img w-full h-full object-cover brightness-[0.5]"
            />
        </div>
        <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">Private Dining</h1>
            <p className="text-xl text-white/80 font-light">Exclusive events tailored to perfection.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-16">
            <div className="reveal-event text-center">
                <h2 className="text-3xl font-serif text-white mb-6">The Chef's Table</h2>
                <p className="text-white/70 leading-relaxed">
                    Experience the kitchen up close with our exclusive Chef's Table. Seating up to 8 guests, this intimate setting offers a front-row seat to the culinary artistry of our team, complete with a bespoke tasting menu.
                </p>
            </div>
            
             <div className="w-full h-[1px] bg-white/10 reveal-event"></div>

            <div className="reveal-event text-center">
                <h2 className="text-3xl font-serif text-white mb-6">The Grand Room</h2>
                <p className="text-white/70 leading-relaxed">
                    For larger gatherings, our Grand Room accommodates up to 40 guests. Featuring floor-to-ceiling windows with city views, it is the perfect venue for corporate dinners, wedding receptions, and celebratory feasts.
                </p>
            </div>

            <div className="reveal-event bg-secondary/30 p-10 border border-white/5 text-center mt-12">
                <h3 className="text-primary uppercase tracking-widest mb-4">Inquire Now</h3>
                <p className="text-white/60 mb-8">
                    To plan your event, please contact our events team.
                </p>
                <a href="mailto:events@lumiere.com" className="px-8 py-3 bg-white text-black font-semibold uppercase tracking-widest hover:bg-primary transition-colors">
                    Email Us
                </a>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
