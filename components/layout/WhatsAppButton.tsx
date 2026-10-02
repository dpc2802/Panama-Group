import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  // PENDIENTE: Reemplazar con número real
  const whatsappNumber = "12015983976";
  const message = encodeURIComponent("Hello! I found your website and I'm interested in your services.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-[#25D366]/50 transition-all z-50 group flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} strokeWidth={2} />
      {/* Tooltip on hover for desktop */}
      <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-bold py-2 px-4 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
        Chat with us!
      </span>
    </a>
  );
}
