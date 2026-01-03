import { useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import dishImg from "@assets/generated_images/gourmet_plated_dish_macro_shot.png";
import interiorImg from "@assets/generated_images/luxury_restaurant_interior_at_night.png";
import privateImg from "@assets/generated_images/elegant_private_dining_room.png";

export default function Gallery() {
  const images = [
    { src: interiorImg, alt: "Interior" },
    { src: dishImg, alt: "Plated Dish" },
    { src: privateImg, alt: "Private Room" },
    { src: dishImg, alt: "Plated Dish 2" }, // Reusing for grid
    { src: privateImg, alt: "Detail" },     // Reusing for grid
    { src: interiorImg, alt: "Atmosphere" }, // Reusing for grid
  ];

  return (
    <div className="bg-background min-h-screen pt-20">
      <Navbar />
      
      <section className="py-20 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">Gallery</h1>
        <p className="text-white/60 mb-16">Glimpses of the Lumière experience.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, i) => (
                <div key={i} className="aspect-square relative overflow-hidden group cursor-pointer">
                    <img 
                        src={img.src} 
                        alt={img.alt} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-serif italic text-lg">{img.alt}</span>
                    </div>
                </div>
            ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
