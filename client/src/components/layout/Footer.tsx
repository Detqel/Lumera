import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-16 border-t border-white/5">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link href="/">
            <a className="text-3xl font-serif font-bold tracking-wider text-primary">
              LUMIÈRE
            </a>
          </Link>
          <p className="text-white/60 font-sans text-sm leading-relaxed max-w-xs">
            A symphony of flavors, ambience, and hospitality. Experience the art of gastronomy in the heart of the city.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 text-primary">Explore</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li><Link href="/menu"><a className="hover:text-primary transition-colors">Menu</a></Link></li>
            <li><Link href="/gallery"><a className="hover:text-primary transition-colors">Gallery</a></Link></li>
            <li><Link href="/events"><a className="hover:text-primary transition-colors">Private Dining</a></Link></li>
            <li><Link href="/about"><a className="hover:text-primary transition-colors">Our Story</a></Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 text-primary">Contact</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li>123 Culinary Avenue, NY 10012</li>
            <li>+1 (212) 555-0199</li>
            <li>reservations@lumiere.com</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 text-primary">Hours</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex justify-between"><span>Mon - Thu</span> <span>5pm - 10pm</span></li>
            <li className="flex justify-between"><span>Fri - Sat</span> <span>5pm - 11pm</span></li>
            <li className="flex justify-between"><span>Sunday</span> <span>4pm - 9pm</span></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center text-xs text-white/40 uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Lumière Restaurant. All rights reserved.
      </div>
    </footer>
  );
}
