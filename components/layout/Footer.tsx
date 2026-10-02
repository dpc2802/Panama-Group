import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Column 1: Brand & Tagline */}
        <div className="flex flex-col items-start">
          <div className="mb-6 inline-block">
            <Image 
              src="/images/logo-white.png" 
              alt="Panama Group GC Logo" 
              width={160} 
              height={60}
              className="object-contain"
            />
          </div>
          <h3 className="text-white font-heading font-black text-xl uppercase mb-2">
            Built to Last.<br/> Built by Panama.
          </h3>
          <p className="text-sm text-gray-400">
            Proudly serving our community and surrounding areas with top-tier construction and maintenance services.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-heading font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link href="#about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link href="#services" className="hover:text-accent transition-colors">Services</Link></li>
            <li><Link href="#work" className="hover:text-accent transition-colors">Our Work</Link></li>
            <li><Link href="#testimonials" className="hover:text-accent transition-colors">Testimonials</Link></li>
            <li><Link href="#contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h4 className="text-white font-heading font-bold uppercase tracking-widest text-sm mb-6">Services</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="#services" className="hover:text-accent transition-colors">Residential Remodeling</Link></li>
            <li><Link href="#services" className="hover:text-accent transition-colors">Commercial Build-outs</Link></li>
            <li><Link href="#services" className="hover:text-accent transition-colors">Carpentry & Decks</Link></li>
            <li><Link href="#services" className="hover:text-accent transition-colors">Roofing & Exteriors</Link></li>
            <li><Link href="#services" className="hover:text-accent transition-colors">Property Maintenance</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="text-white font-heading font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
          <ul className="space-y-4 text-sm mb-8">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-gray-500 mt-0.5 flex-shrink-0" />
              <span>123 Construction Blvd<br/>City, State 12345</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-gray-500 flex-shrink-0" />
              <a href="tel:+1234567890" className="hover:text-accent transition-colors">(555) 123-4567</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-gray-500 flex-shrink-0" />
              <a href="mailto:info@panamagroupgc.com" className="hover:text-accent transition-colors">info@panamagroupgc.com</a>
            </li>
          </ul>
          
          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all text-gray-400">
              <FacebookIcon />
            </a>
            <a href="https://instagram.com/panamagroupgc" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all text-gray-400">
              <InstagramIcon />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <p>© {new Date().getFullYear()} Panama Group GC. All rights reserved.</p>
          <div className="flex items-center gap-4 hidden md:flex">
            <span>|</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <span>|</span>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
        
        {/* Mobile legal links */}
        <div className="flex md:hidden items-center justify-center gap-3 mb-2 flex-wrap text-center">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <span>|</span>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          <span>|</span>
          <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
        </div>

        <p className="mt-2 md:mt-0">
          Diseñado por <a href="https://wa.me/3239086781" target="_blank" rel="noreferrer" className="text-white font-bold hover:text-accent transition-colors">DPALACIOS</a>
        </p>
      </div>
    </footer>
  );
}
