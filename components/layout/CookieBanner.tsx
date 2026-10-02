"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show if they haven't accepted before
    const hasAccepted = localStorage.getItem("panama_cookies_accepted");
    if (!hasAccepted) {
      // Small delay so it slides in after page load
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("panama_cookies_accepted", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto md:max-w-md bg-white border border-gray-200 shadow-2xl rounded-xl p-6 z-50 flex flex-col gap-4"
        >
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
          >
            <X size={16} />
          </button>
          
          <div>
            <h4 className="font-heading font-black text-primary uppercase text-sm mb-2">We Use Cookies 🍪</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              We use cookies to improve your experience on our site and to analyze web traffic. By clicking "Accept", you consent to our use of cookies. 
              Read our <Link href="/cookies" className="text-accent hover:underline font-bold">Cookie Policy</Link> for details.
            </p>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={acceptCookies}
              className="flex-1 bg-primary text-white text-xs font-bold uppercase tracking-widest py-3 rounded hover:bg-accent transition-colors"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
