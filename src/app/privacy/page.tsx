import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Menta Math mental arithmetic practice platform.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl py-16 space-y-8">
      <div>
        <Link href="/" className="text-sm text-blue-600 hover:text-blue-700 mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-slate-600">Last updated: January 2026</p>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>Overview</h2>
        <p>
          Menta Math is committed to protecting your privacy. This page describes how we collect, 
          use, and protect your information when you use our mental math practice platform.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We do not require user registration or collect personal information. Our service is completely 
          free and anonymous. We may collect:
        </p>
        <ul>
          <li>Anonymous usage statistics (page views, practice sessions)</li>
          <li>Browser type and device information</li>
          <li>Practice configuration preferences (stored locally in your browser)</li>
        </ul>

        <h2>How We Use Information</h2>
        <p>
          Any data we collect is used solely to:
        </p>
        <ul>
          <li>Improve our service and user experience</li>
          <li>Analyze site traffic and usage patterns</li>
          <li>Remember your practice preferences (using browser local storage)</li>
        </ul>

        <h2>Data Storage</h2>
        <p>
          Your practice history and preferences are stored locally in your browser using localStorage. 
          We do not store this information on our servers. You can clear this data at any time by 
          clearing your browser&apos;s local storage.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          We may use third-party analytics services to understand how users interact with our platform. 
          These services may use cookies or similar technologies. Please refer to their privacy policies 
          for more information.
        </p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          Our service is safe for children. We do not knowingly collect personal information from children 
          under 13. Parents and teachers can use our platform with confidence that no personal data is required.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. We will notify users of any material changes 
          by posting the new policy on this page with an updated date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this privacy policy, please <Link href="/contact" className="text-blue-600 hover:text-blue-700">contact us</Link>.
        </p>
      </div>
    </div>
  );
}
