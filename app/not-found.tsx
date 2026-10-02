import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-9xl font-heading font-black text-primary opacity-20">404</h1>
          <h2 className="text-4xl font-bold text-primary mt-4 mb-6">Page Not Found</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Oops! It seems we can't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <Link 
            href="/" 
            className="inline-block bg-accent text-white px-8 py-4 text-sm font-heading font-bold uppercase tracking-widest hover:bg-primary transition-colors shadow-lg"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
