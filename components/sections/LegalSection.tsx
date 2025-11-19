
import React from 'react';

const LegalSection = () => {
    const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const companyName = "DoughLab Pro";
    const email = "contact@doughlabpro.com";

    return (
        <section className="py-16 bg-gray-50 border-t border-gray-200 text-text-main">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2 uppercase tracking-wide text-text-main">LEGAL</h2>
                    <p className="text-sm text-text-subtle">Last updated: {currentDate}</p>
                    <p className="text-sm text-text-subtle">Company: {companyName}</p>
                    <p className="text-sm text-text-subtle">Contact: {email}</p>
                </div>

                <nav className="legal-nav flex flex-wrap gap-x-2 gap-y-2 text-sm font-medium text-primary mb-10">
                    <a href="#terms-of-use" className="hover:underline">Terms of Use</a> <span className="text-gray-300">|</span>
                    <a href="#privacy-policy" className="hover:underline">Privacy Policy</a> <span className="text-gray-300">|</span>
                    <a href="#affiliate-disclosure" className="hover:underline">Affiliate Disclosure</a> <span className="text-gray-300">|</span>
                    <a href="#refund-policy" className="hover:underline">Refund Policy</a> <span className="text-gray-300">|</span>
                    <a href="#safety-disclaimer" className="hover:underline">Safety Disclaimer</a> <span className="text-gray-300">|</span>
                    <a href="#ai-notice" className="hover:underline">AI Notice</a> <span className="text-gray-300">|</span>
                    <a href="#levain-pet-safety" className="hover:underline">Levain Pet Safety</a>
                </nav>

                <div className="space-y-10 text-sm leading-relaxed text-text-subtle">
                    <section id="terms-of-use" className="scroll-mt-28">
                        <h2 className="text-lg font-bold text-text-main mb-3">Terms of Use</h2>
                        <p>DoughLabPro is a technical tool for dough calculations, fermentation tracking, levain management and baking insights. By using the Service, you agree that you are 18 or older, fully responsible for your use of fermentation, ovens and kitchen equipment, and that all content is informational only. We do not guarantee baking outcomes, food safety, or fermentation results. All intellectual property belongs to {companyName}.</p>
                    </section>

                    <section id="privacy-policy" className="scroll-mt-28">
                        <h2 className="text-lg font-bold text-text-main mb-3">Privacy Policy</h2>
                        <p>We collect account data, dough configurations, batch logs, levain activity, analytics and device information. Data is used to operate the Service, sync across devices, improve features, process subscriptions and protect platform integrity. No data is sold. Payments are processed securely by Stripe. Users may request deletion of their data at {email}.</p>
                    </section>

                    <section id="affiliate-disclosure" className="scroll-mt-28">
                        <h2 className="text-lg font-bold text-text-main mb-3">Affiliate Disclosure</h2>
                        <p>DoughLabPro includes affiliate links to tools, ingredients and books. We may earn commissions at no extra cost to you. Affiliate links do not influence presets or recommendations.</p>
                    </section>

                    <section id="refund-policy" className="scroll-mt-28">
                        <h2 className="text-lg font-bold text-text-main mb-3">Refund Policy</h2>
                        <p>All payments are final and non-refundable, except where required by law. Subscriptions renew until cancelled. Free trials may be adjusted or removed at any time. Cancellation is available in account settings.</p>
                    </section>

                    <section id="safety-disclaimer" className="scroll-mt-28">
                        <h2 className="text-lg font-bold text-text-main mb-3">Safety Disclaimer</h2>
                        <p>Baking and fermentation involve risks including burns, contamination, spoilage, pressure buildup and equipment damage. DoughLabPro is not responsible for injuries, foodborne illness, failed bakes or equipment loss. Always follow professional food safety guidelines.</p>
                    </section>

                    <section id="ai-notice" className="scroll-mt-28">
                        <h2 className="text-lg font-bold text-text-main mb-3">AI Notice</h2>
                        <p>AI-generated outputs may be inaccurate, incomplete or unsafe for certain baking or fermentation processes. AI suggestions are informational only. Users must not rely on AI for safety decisions.</p>
                    </section>

                    <section id="levain-pet-safety" className="scroll-mt-28">
                        <h2 className="text-lg font-bold text-text-main mb-3">Levain Pet Safety</h2>
                        <p>Levain cultures are living organisms and may develop gas, mold or contamination. Users are responsible for inspecting their levain, discarding spoiled cultures, avoiding sealed containers and practicing hygienic handling. {companyName} is not liable for biological or fermentation-related incidents.</p>
                    </section>

                    <p className="pt-4 border-t border-gray-200">Full legal documentation is available upon request.</p>
                </div>
            </div>
        </section>
    );
};

export default LegalSection;
