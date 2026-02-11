import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Menta Math for support, feedback, or questions about mental math practice.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl py-16 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="text-lg text-slate-600">
          We&apos;d love to hear from you! Whether you have questions, feedback, or suggestions, 
          feel free to reach out.
        </p>
      </div>

      <div className="rounded-3xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 shadow-lg">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-slate-600 mb-6">
              For general inquiries, support questions, or feedback about our mental math practice platform:
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-100 text-blue-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Email</h3>
                <p className="text-slate-600">support@mentamath.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Feedback</h3>
                <p className="text-slate-600">
                  Share your ideas and suggestions to help us improve the platform.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-100 text-purple-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Educational Partnerships</h3>
                <p className="text-slate-600">
                  Teachers and schools interested in using our platform for classroom instruction.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-3">Frequently Asked Questions</h3>
            <p className="text-slate-600">
              Before reaching out, check our <Link href="/#faq" className="text-blue-600 hover:text-blue-700 font-medium">FAQ section</Link> for 
              answers to common questions about mental math practice, features, and usage.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
