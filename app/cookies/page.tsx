import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function CookiePolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50 pt-32 pb-24 px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
          <h1 className="text-4xl font-heading font-black text-primary uppercase mb-8">Cookie Policy</h1>
          
          <div className="prose prose-gray max-w-none text-gray-600 space-y-6">
            <p><strong>Last Updated: {new Date().getFullYear()}</strong></p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. What are cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. How we use cookies</h2>
            <p>
              Panama Group GC uses cookies to improve your experience on our website. We use them for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential functions:</strong> These cookies are necessary for the website to function properly. They enable basic functions like page navigation.</li>
              <li><strong>Analytics:</strong> We use analytical cookies to help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
              <li><strong>Preferences:</strong> These cookies allow the website to remember choices you make (such as your language or region) and provide enhanced, more personal features.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Managing cookies</h2>
            <p>
              You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site, and some services and functionalities may not work.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Contact Information</h2>
            <p>
              If you have any questions about our use of cookies, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> info@panamagroupgc.com<br />
              <strong>Phone:</strong> +1 (201) 598-3976<br />
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
