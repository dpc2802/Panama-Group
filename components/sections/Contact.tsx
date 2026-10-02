"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const service = formData.get("service");
    const message = formData.get("message");

    const text = `Hello Panama Group GC! I would like to request a quote.

*Name:* ${name}
*Phone:* ${phone}
*Email:* ${email}
*Service:* ${service}

*Project Details:* 
${message}`;

    const encodedText = encodeURIComponent(text);
    
    // PENDIENTE: Reemplazar con el número de WhatsApp del cliente cuando te lo pasen
    // Formato internacional sin símbolos, ej: "13239086781"
    const whatsappNumber = "12015983976"; 
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-4 bg-primary text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 -z-10 origin-top-right transform translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info Side */}
          <div className="flex flex-col">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase mb-8 leading-tight">
              Let's Build Your <br/> Next Project.
            </h2>
            <p className="text-gray-300 font-sans text-base md:text-lg mb-12 max-w-md leading-relaxed">
              Ready to transform your space? Contact us today for a free estimate. Our team is ready to answer your questions and schedule a consultation.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-white/10 p-4 rounded-lg flex-shrink-0">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl uppercase mb-1">Call Us</h4>
                  <a href="tel:+12015983976" className="text-gray-300 hover:text-white transition-colors text-lg">
                    +1 (201) 598-3976
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-white/10 p-4 rounded-lg flex-shrink-0">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl uppercase mb-1">Email Us</h4>
                  <a href="mailto:info@panamagroupgc.com" className="text-gray-300 hover:text-white transition-colors text-lg">
                    info@panamagroupgc.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-white/10 p-4 rounded-lg flex-shrink-0">
                  <Clock className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl uppercase mb-1">Business Hours</h4>
                  <p className="text-gray-300 text-lg">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-300 text-lg">Sat: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="bg-white text-primary p-8 md:p-12 rounded-xl shadow-2xl relative">
            <h3 className="font-heading font-black text-3xl uppercase mb-6">
              Request a Quote
            </h3>
            
            {/* Form intercepts submit and redirects to WhatsApp */}
            <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-bold text-sm uppercase tracking-wider">Full Name</label>
                  <input type="text" id="name" name="name" required className="bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-accent transition-colors" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-bold text-sm uppercase tracking-wider">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required className="bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-accent transition-colors" placeholder="(555) 000-0000" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-bold text-sm uppercase tracking-wider">Email Address</label>
                <input type="email" id="email" name="email" required className="bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-accent transition-colors" placeholder="john@example.com" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="font-bold text-sm uppercase tracking-wider">Service Needed</label>
                <select id="service" name="service" required defaultValue="" className="bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer">
                  <option value="" disabled>Select a service...</option>
                  <option value="Residential Remodeling">Residential Remodeling</option>
                  <option value="Commercial Build-out">Commercial Build-out</option>
                  <option value="Exterior & Roofing">Exterior & Roofing</option>
                  <option value="Property Maintenance">Property Maintenance</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-bold text-sm uppercase tracking-wider">Project Details</label>
                <textarea id="message" name="message" rows={4} required className="bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="submit" className="bg-accent text-white py-4 font-heading font-bold uppercase tracking-widest hover:bg-primary transition-colors mt-2">
                Send Request via WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
