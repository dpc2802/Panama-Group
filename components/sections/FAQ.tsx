"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Do you offer free estimates?",
    answer: "Yes, we provide free, no-obligation quotes for all our projects. Simply reach out to us with your project details, and we’ll schedule a time to assess the work and provide a detailed estimate."
  },
  {
    question: "Are you fully licensed and insured?",
    answer: "Absolutely. Panama Group GC is fully licensed and insured. We prioritize safety and compliance, giving you peace of mind that your property and our workers are completely protected during the job."
  },
  {
    question: "Do you handle both residential and commercial projects?",
    answer: "Yes, we do. Our experienced team is equipped to manage everything from kitchen and bathroom remodels for homeowners to large-scale build-outs and routine maintenance for commercial property managers."
  },
  {
    question: "How do you ensure projects stay on budget and on time?",
    answer: "We believe in strict planning and transparent communication. Before any work begins, we provide a clear timeline and cost breakdown. If any unexpected issues arise (like hidden water damage), we communicate immediately before proceeding with changes."
  },
  {
    question: "Do you offer maintenance plans for landlords or property managers?",
    answer: "Yes! We specialize in working with landlords and property managers. We can handle turnover repairs, emergency fixes, and routine maintenance so you don't have to juggle multiple contractors."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open the first one by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
            Got Questions?
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-primary uppercase mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className={`bg-white border rounded-xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-accent shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                >
                  <span className={`font-bold text-lg md:text-xl pr-8 ${isOpen ? 'text-primary' : 'text-gray-800'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-accent text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {isOpen ? <Minus size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 text-gray-600 leading-relaxed">
                        <div className="w-full h-px bg-gray-100 mb-6"></div>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        
        {/* Contact Prompt */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Still have a question? We are here to help.</p>
          <a href="#contact" className="inline-block bg-primary text-white px-8 py-4 text-sm font-heading font-bold uppercase tracking-widest hover:bg-accent transition-colors shadow-lg">
            Contact Us Directly
          </a>
        </div>

      </div>
    </section>
  );
}
