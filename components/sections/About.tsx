import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-4 bg-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gray-50 -skew-x-12 -z-10 origin-top-left transform -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Side */}
          <div className="relative relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-xl overflow-hidden shadow-2xl group">
            {/* Using the real team photo with the branded shirt */}
            <Image 
              src="/images/about.jpg" 
              alt="Panama Group GC Team" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Experience Badge */}
            <div className="absolute bottom-0 left-0 bg-primary text-white p-6 md:p-8 rounded-tr-3xl shadow-xl max-w-[80%]">
              <h3 className="font-heading font-black text-2xl md:text-3xl uppercase mb-2">
                One Company. <br/> <span className="text-accent">All Your Needs.</span>
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                Your trusted partner for comprehensive property solutions.
              </p>
            </div>
          </div>

          {/* Text Side */}
          <div className="flex flex-col items-start">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-primary uppercase mb-8 leading-tight">
              Building Trust Through <span className="text-accent">Excellence.</span>
            </h2>
            
            <div className="text-gray-600 font-sans text-base md:text-lg space-y-6 mb-10 leading-relaxed">
              <p>
                At <strong>Panama Group GC</strong>, we believe property management and improvement shouldn't require juggling multiple contractors. We built our company on a single, powerful idea: providing everything a property needs in one place.
              </p>
              <p>
                Whether you are a homeowner seeking a complete remodel or a property manager in need of reliable, continuous maintenance, our experienced team delivers professional and trustworthy service every time. We treat every property as if it were our own.
              </p>
            </div>

            {/* Bullet points */}
            <ul className="space-y-4 mb-10 w-full">
              {[
                "Fully Licensed & Insured Professionals",
                "Transparent Pricing with No Hidden Fees",
                "Premium Materials & Expert Craftsmanship",
                "Dedicated Project Management"
              ].map((point, i) => (
                <li key={i} className="flex items-center gap-4 text-primary font-bold">
                  <CheckCircle2 className="text-accent flex-shrink-0" size={24} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>
    </section>
  );
}
