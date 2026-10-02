"use client";

import { Star } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  text: string;
  source: string;
};

const row1: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    text: '"Panama Group GC completely transformed our outdated kitchen. Their attention to detail and precision is unmatched. They finished on time and left the place spotless. Highly recommend them for any interior work!"',
    source: "Google Review"
  },
  {
    id: 2,
    name: "Michael T.",
    text: '"I hired them to rebuild my backyard deck. The structure is incredibly solid, and the finish is beautiful. The crew was professional, polite, and kept me updated every step of the way. Five stars!"',
    source: "Google Review"
  },
  {
    id: 3,
    name: "David & Elena M.",
    text: '"After 15 years without maintenance, our exterior was looking rough. Panama Group came in and handled the repairs flawlessly. It looks like a brand new house. Thank you for the hard work!"',
    source: "Google Review"
  },
  {
    id: 4,
    name: "Amanda R.",
    text: '"We wanted to turn our dark, unfinished basement into a modern living space. They delivered exactly what we envisioned. Great communication and top-tier craftsmanship from start to finish."',
    source: "Google Review"
  },
  {
    id: 5,
    name: "Carlos Rivera",
    text: '"They replaced our old roof in just two days. The team arrived early, worked hard, and cleaned up every single nail before leaving. Very impressive work ethic and fair pricing."',
    source: "Google Review"
  }
];

const row2: Testimonial[] = [
  {
    id: 6,
    name: "Robert H.",
    text: '"They were recommended to me by a neighbor, and I’m so glad I called. They fixed my garage and did some exterior painting. Very fair pricing for the high quality of work they provide."',
    source: "Google Review"
  },
  {
    id: 7,
    name: "Jessica L.",
    text: '"I am a property manager and I use Panama Group GC for all our turnover maintenance and repairs. They are reliable, fast, and always do the job right the first time. A true lifesaver."',
    source: "Google Review"
  },
  {
    id: 8,
    name: "The Harrison Family",
    text: '"From the initial quote to the final walkthrough, everything was handled with extreme professionalism. Our new hardwood floors look absolutely stunning. We couldn’t be happier!"',
    source: "Google Review"
  },
  {
    id: 9,
    name: "Mark D.",
    text: '"It is hard to find contractors you can trust these days, but these guys are the real deal. Transparent pricing, no hidden fees, and the quality of the finish is just top-notch."',
    source: "Google Review"
  },
  {
    id: 10,
    name: "Linda & James",
    text: '"They completely remodeled our master bathroom. The tile work is flawless. They really listened to our design ideas and made them a reality. We will definitely hire them again."',
    source: "Google Review"
  }
];

// Helper to render a single review card
const ReviewCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="w-[300px] md:w-[400px] flex-shrink-0 bg-white border border-gray-100 rounded-xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex flex-col justify-between">
    <div>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="fill-[#F59E0B] text-[#F59E0B]" />
        ))}
      </div>
      <p className="text-gray-600 font-sans italic text-base leading-relaxed mb-6">
        {testimonial.text}
      </p>
    </div>
    <div>
      <div className="w-full h-px bg-gray-100 mb-4"></div>
      <h4 className="font-bold text-primary text-base">{testimonial.name}</h4>
      <p className="text-xs text-gray-400 mt-1">{testimonial.source}</p>
    </div>
  </div>
);

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-4 w-full">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
            What Our Clients Say
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-primary uppercase max-w-4xl mx-auto leading-tight">
            Trusted by Property Owners Across The Area.
          </h2>
        </div>
      </div>

      {/* Animated Marquees Container */}
      <div className="relative w-full max-w-[100vw] flex flex-col gap-8 pb-12">
        
        {/* Row 1 (Left to Right) */}
        <div className="flex w-max animate-marquee hover:pause-on-hover gap-8 pl-8">
          {[...row1, ...row1].map((testimonial, idx) => (
            <ReviewCard key={`r1-${idx}`} testimonial={testimonial} />
          ))}
        </div>

        {/* Row 2 (Right to Left) */}
        <div className="flex w-max animate-marquee-reverse hover:pause-on-hover gap-8 pl-8">
          {[...row2, ...row2].map((testimonial, idx) => (
            <ReviewCard key={`r2-${idx}`} testimonial={testimonial} />
          ))}
        </div>

        {/* Fading Edges for Desktop to make the slider look infinite */}
        <div className="absolute top-0 left-0 w-16 md:w-48 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-16 md:w-48 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  );
}
