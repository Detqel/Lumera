import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

gsap.registerPlugin(ScrollTrigger);

const MenuSection = ({ title, items }: { title: string, items: { name: string, price: string, desc: string }[] }) => (
  <div className="mb-16 reveal-menu-section">
    <h3 className="text-3xl font-serif text-primary mb-8 border-b border-white/10 pb-4">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
      {items.map((item, idx) => (
        <div key={idx} className="group cursor-pointer">
          <div className="flex justify-between items-baseline mb-2">
            <h4 className="text-xl text-white font-medium group-hover:text-primary transition-colors">{item.name}</h4>
            <span className="text-primary/80 font-serif text-lg">{item.price}</span>
          </div>
          <p className="text-white/50 text-sm font-light leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default function Menu() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.utils.toArray(".reveal-menu-section").forEach((el: any) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 90%" },
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });
    });
  }, { scope: container });

  const starters = [
    { name: "Scallop Crudo", price: "$24", desc: "Hokkaido scallops, yuzu kosho, radishes, citrus foam." },
    { name: "Wagyu Beef Tartare", price: "$32", desc: "Hand-cut A5 Wagyu, smoked egg yolk, capers, toasted brioche." },
    { name: "Forest Mushroom Soup", price: "$18", desc: "Wild seasonal mushrooms, truffle oil, thyme croutons." },
    { name: "Burrata & Heritage Tomato", price: "$22", desc: "Fresh basil pesto, balsamic glaze, pine nuts." }
  ];

  const mains = [
    { name: "Pan-Seared Duck Breast", price: "$42", desc: "Fig reduction, roasted root vegetables, potato fondant." },
    { name: "Miso Glazed Black Cod", price: "$48", desc: "Bok choy, ginger dashi broth, lotus root chips." },
    { name: "Herb-Crusted Lamb Rack", price: "$52", desc: "Mint pea purée, rosemary jus, confit garlic." },
    { name: "Wild Mushroom Risotto", price: "$34", desc: "Arborio rice, parmesan crisp, shaved black truffle." }
  ];

  const desserts = [
    { name: "Dark Chocolate Fondant", price: "$16", desc: "Salted caramel center, vanilla bean ice cream." },
    { name: "Lemon Basil Tart", price: "$14", desc: "Meringue cloud, fresh berries, basil syrup." },
    { name: "Artisan Cheese Board", price: "$24", desc: "Selection of local and imported cheeses, honeycomb, crackers." }
  ];

  return (
    <div ref={container} className="bg-background min-h-screen pt-20">
      <Navbar />

      <section className="py-20 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">Our Menu</h1>
        <p className="text-white/60 mb-12">A culinary journey through the seasons.</p>
        
        <Tabs defaultValue="dinner" className="w-full max-w-4xl mx-auto">
          <TabsList className="bg-transparent border-b border-white/10 w-full justify-center gap-8 mb-16 h-auto p-0">
            {["Dinner", "Lunch", "Wine"].map((tab) => (
              <TabsTrigger 
                key={tab} 
                value={tab.toLowerCase()}
                className="bg-transparent text-lg uppercase tracking-widest text-white/50 data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none pb-4 transition-all"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="dinner" className="text-left animate-in fade-in slide-in-from-bottom-4 duration-700">
            <MenuSection title="Starters" items={starters} />
            <MenuSection title="Mains" items={mains} />
            <MenuSection title="Desserts" items={desserts} />
          </TabsContent>
          
          <TabsContent value="lunch" className="text-center text-white/50 py-20">
            Lunch menu available upon request.
          </TabsContent>
           <TabsContent value="wine" className="text-center text-white/50 py-20">
            Comprehensive wine list available at the table.
          </TabsContent>
        </Tabs>
      </section>

      <Footer />
    </div>
  );
}
