import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50 pt-32 pb-24 px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
          <h1 className="text-4xl font-heading font-black text-primary uppercase mb-8">Terms of Service</h1>
          
          <div className="prose prose-gray max-w-none text-gray-600 space-y-6">
            <p><strong>Last Updated: {new Date().getFullYear()}</strong></p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the website of Panama Group GC, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. Description of Service</h2>
            <p>
              Panama Group GC provides general contracting, residential remodeling, commercial build-outs, and property maintenance services. Information provided on this website is for general informational purposes and does not constitute a binding contract for services until a formal written agreement is signed by both parties.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Accuracy of Information</h2>
            <p>
              While we strive to ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we commit to ensuring that the website remains available or that the material on the website is kept up to date. Quotes and estimates requested through this website are preliminary and subject to an on-site inspection.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Intellectual Property</h2>
            <p>
              The website and its original content, features, and functionality are owned by Panama Group GC and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Limitation of Liability</h2>
            <p>
              In no event shall Panama Group GC, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the website.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">6. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <p>
              <strong>Email:</strong> info@panamagroupgc.com<br />
              <strong>Phone:</strong> (201) 598-3976<br />
              <strong>Address:</strong> 123 Construction Blvd, City, State 12345
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
