import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for Menta Math mental arithmetic practice platform.",
};

export default function CookiesPage() {
  return (
    <div className="mx-auto max-w-4xl py-16 space-y-8">
      <div>
        <Link href="/" className="text-sm text-blue-600 hover:text-blue-700 mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Cookie Policy</h1>
        <p className="text-slate-600">Last updated: January 2026</p>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What Are Cookies</h2>
        <p>
          Cookies are small text files stored on your device when you visit a website. They help 
          websites remember your preferences and improve your browsing experience.
        </p>

        <h2>How We Use Cookies</h2>
        <p>
          Mental Math uses minimal cookies and browser storage for:
        </p>
        <ul>
          <li><strong>Functionality:</strong> Remembering your practice preferences (operation type, difficulty level, question count)</li>
          <li><strong>Analytics:</strong> Understanding how users interact with our platform (anonymous data only)</li>
          <li><strong>Performance:</strong> Improving page load times and user experience</li>
        </ul>

        <h2>Types of Cookies We Use</h2>
        <h3>Essential Cookies</h3>
        <p>
          These cookies are necessary for the website to function properly. They enable basic features 
          like remembering your practice configuration.
        </p>

        <h3>Analytics Cookies</h3>
        <p>
          We may use third-party analytics services (such as Google Analytics) to collect anonymous 
          information about how visitors use our site. This helps us improve our service.
        </p>

        <h2>Managing Cookies</h2>
        <p>
          You can control and manage cookies in your browser settings. Most browsers allow you to:
        </p>
        <ul>
          <li>View and delete cookies</li>
          <li>Block cookies from specific sites</li>
          <li>Block all cookies</li>
          <li>Delete all cookies when you close your browser</li>
        </ul>
        <p>
          Note that blocking or deleting cookies may affect your user experience, such as losing 
          your saved practice preferences.
        </p>

        <h2>Third-Party Cookies</h2>
        <p>
          We may use third-party services that set their own cookies. These services have their own 
          cookie policies that we do not control. Please review their policies for more information.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this cookie policy from time to time. Please check this page periodically 
          for any changes.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about our cookie policy, please <Link href="/contact" className="text-blue-600 hover:text-blue-700">contact us</Link>.
        </p>
      </div>
    </div>
  );
}
