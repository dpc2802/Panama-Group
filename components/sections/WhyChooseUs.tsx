import Image from "next/image";
import { CheckCircle2, Shield, Wrench, Search } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      id: "01",
      icon: <Wrench className="w-8 h-8 text-white" />,
      title: "ALL-IN-ONE SOLUTION",
      description: "From minor handyman repairs to full-scale remodeling and ongoing maintenance, we handle it all so you only have to make one call."
    },
    {
      id: "02",
      icon: <CheckCircle2 className="w-8 h-8 text-white" />,
      title: "RESIDENTIAL & COMMERCIAL",
      description: "Whether you own a single-family home or manage a large apartment complex, our team is equipped and trained to deliver top-tier results."
    },
    {
      id: "03",
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "QUALITY CRAFTSMANSHIP",
      description: "Every project is completed with precision, using premium materials and proven techniques that stand the test of time."
    },
    {
      id: "04",
      icon: <Search className="w-8 h-8 text-white" />,
      title: "FREE INSPECTIONS",
      description: "Free inspections to detect problems before they turn into costly inconveniences. No pressure, no obligations."
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 px-6 bg-primary text-white overflow-hidden relative">
        {/* Decorative background grid pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-32 relative z-10">
        
        {/* Top Block: Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Text Side */}
          <div className="flex flex-col items-start order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-6 border border-white/20 rounded-full px-4 py-1.5 bg-white/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-white font-bold tracking-widest uppercase text-xs">
                See the Difference
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-heading font-black uppercase mb-6 leading-[1.05]">
              PRECISION. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-500">EVERY PROJECT.</span> <br/>
              ALWAYS.
            </h2>
            <p className="text-gray-300 font-sans text-base md:text-lg mb-10 leading-relaxed max-w-lg">
              Watch how our team transforms and maintains properties from the ground up, with a level of precision and mastery that speaks for itself. We don't just fix properties; we elevate them.
            </p>
            <a href="#contact" className="bg-accent text-white px-8 py-4 text-sm font-heading font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-colors shadow-[0_0_20px_rgba(181,21,34,0.3)]">
              Get Your Free Quote
            </a>
          </div>

          {/* Image Side with styling */}
          <div className="relative w-full aspect-[4/3] order-1 lg:order-2 group">
            {/* Offset Red Border Frame */}
            <div className="absolute -inset-4 border-2 border-accent/50 rounded-xl transform translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
            
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/why-choose-us.jpg" 
                alt="Panama Group GC Precision" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Dark Gradient Overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
              
              {/* Floating Experience Badge */}
              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 text-white p-4 rounded-lg shadow-xl flex items-center gap-4">
                <span className="font-heading font-black text-4xl text-accent">100%</span>
                <span className="font-bold text-xs uppercase tracking-wider leading-tight">
                  Commitment <br/> to Quality
                </span>
              </div>
            </div>
          </div>
          
        </div>


        {/* Bottom Block: Why Choose Us Grid */}
        <div className="flex flex-col">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-heading font-black uppercase mb-4">
              WHY PROPERTY OWNERS CHOOSE US
            </h2>
            <div className="w-24 h-1 bg-accent"></div>
          </div>

          {/* Staggered 2x2 Grid of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {reasons.map((reason, index) => (
              <div 
                key={reason.id} 
                className={`relative bg-white/[0.03] border border-white/10 p-8 md:p-10 hover:bg-white/10 transition-all group overflow-hidden ${index % 2 !== 0 ? 'md:mt-16' : ''}`}
              >
                {/* Large Background Accent Number */}
                <span className="absolute -bottom-6 -right-4 text-9xl font-heading font-black text-white/[0.02] group-hover:text-accent/[0.05] transition-colors pointer-events-none select-none">
                  {reason.id}
                </span>

                <div className="relative z-10 flex flex-col items-start">
                  <div className="bg-accent/10 border border-accent/20 text-accent p-4 rounded-lg mb-6 shadow-lg transform group-hover:-translate-y-1 transition-transform">
                    {reason.icon}
                  </div>
                  <h4 className="text-white font-heading font-bold text-2xl uppercase mb-4 tracking-wide">
                    {reason.title}
                  </h4>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
