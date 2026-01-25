import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Menta Math mental arithmetic practice platform.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl py-16 space-y-8">
      <div>
        <Link href="/" className="text-sm text-blue-600 hover:text-blue-700 mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Terms of Service</h1>
        <p className="text-slate-600">Last updated: January 2026</p>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>Agreement to Terms</h2>
        <p>
          By accessing and using Menta Math, you agree to be bound by these Terms of Service. 
          If you do not agree to these terms, please do not use our service.
        </p>

        <h2>Use of Service</h2>
        <p>
          Menta Math provides free mental math practice tools for educational purposes. You may use 
          our service for:
        </p>
        <ul>
          <li>Personal learning and skill development</li>
          <li>Classroom instruction and homework</li>
          <li>Homeschooling and tutoring</li>
          <li>Test preparation and practice</li>
        </ul>

        <h2>User Responsibilities</h2>
        <p>You agree to:</p>
        <ul>
          <li>Use the service in a lawful and responsible manner</li>
          <li>Not attempt to disrupt or interfere with the service</li>
          <li>Not use automated tools to generate excessive requests</li>
          <li>Not reproduce or distribute content without permission</li>
        </ul>

        <h2>Intellectual Property</h2>
        <p>
          All content, features, and functionality on Menta Math are owned by us and protected by 
          copyright and other intellectual property laws. You may not copy, modify, or distribute 
          our content without written permission.
        </p>

        <h2>Disclaimer</h2>
        <p>
          Menta Math is provided &quot;as is&quot; without warranties of any kind. We do not guarantee that the 
          service will be uninterrupted, error-free, or free of viruses or other harmful components.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          We shall not be liable for any indirect, incidental, special, or consequential damages arising 
          out of or in connection with your use of the service.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Continued use of the service after 
          changes constitutes acceptance of the modified terms.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about these terms, please <Link href="/contact" className="text-blue-600 hover:text-blue-700">contact us</Link>.
        </p>
      </div>
    </div>
  );
}
