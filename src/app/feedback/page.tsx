import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedback",
  description: "Share your feedback and suggestions for Menta Math mental arithmetic practice.",
};

export default function FeedbackPage() {
  return (
    <div className="mx-auto max-w-2xl py-16 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Feedback</h1>
        <p className="text-lg text-slate-600">
          We&apos;d love to hear your thoughts! Your feedback helps us improve the mental math practice experience.
        </p>
      </div>

      <div className="rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-lg">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Share Your Ideas</h2>
            <p className="text-slate-600 mb-6">
              Whether you have suggestions for new features, found a bug, or just want to share your success story 
              with our mental arithmetic practice platform, we want to hear from you.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Feature Requests</h3>
                <p className="text-sm text-slate-600">
                  Tell us what features would make your mental math practice more effective. New operations? 
                  Different difficulty levels? Progress tracking?
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Bug Reports</h3>
                <p className="text-sm text-slate-600">
                  Found something not working as expected? Let us know so we can fix it and improve the 
                  mental arithmetic practice experience for everyone.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-50 border border-purple-100">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Success Stories</h3>
                <p className="text-sm text-slate-600">
                  Has mental math practice helped you improve? We love hearing success stories from students, 
                  teachers, and parents!
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-3">How to Send Feedback</h3>
            <p className="text-slate-600 mb-4">
              Email us at <span className="font-semibold text-blue-600">feedback@mentamath.com</span> with 
              your thoughts, or use our <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">contact form</Link>.
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
