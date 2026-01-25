import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center",
  description: "Get help with Menta Math mental arithmetic practice. Learn how to use the trainer, adjust difficulty, and improve your math skills.",
};

export default function HelpPage() {
  return (
    <div className="mx-auto max-w-4xl py-16 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Help Center</h1>
        <p className="text-lg text-slate-600">
          Learn how to get the most out of Menta Math mental arithmetic practice.
        </p>
      </div>

      <div className="space-y-8">
        {/* Getting Started */}
        <div className="rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
          <div className="space-y-4 text-slate-700">
            <p>
              <strong>1. Choose Your Operation:</strong> Select addition (+), subtraction (−), multiplication (×), or division (÷) 
              from the dropdown menu.
            </p>
            <p>
              <strong>2. Set Difficulty:</strong> Choose digit counts for each operand (1-8 digits). Start with 1-digit problems 
              and gradually increase difficulty.
            </p>
            <p>
              <strong>3. Select Question Count:</strong> Choose 1-99 questions. We recommend starting with 10 questions for 
              daily practice.
            </p>
            <p>
              <strong>4. Start Practicing:</strong> The timer starts when you submit your first answer. Type your answer and 
              press Enter or wait for auto-submit.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-lg mb-2">Instant Feedback</h3>
              <p className="text-slate-600">
                See correct/incorrect status immediately after each answer. Learn from mistakes in real-time.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Auto-Submit</h3>
              <p className="text-slate-600">
                Answers are automatically checked when you type the expected number of digits. No need to press Enter.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Performance Tracking</h3>
              <p className="text-slate-600">
                View accuracy percentage, total time, and average time per question after each session.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Custom Difficulty</h3>
              <p className="text-slate-600">
                Mix different digit counts (e.g., 1-digit + 2-digit) to create personalized practice challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Practice Tips</h2>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-bold text-sm">1</span>
              <span><strong>Practice Daily:</strong> 5-10 minutes of consistent practice is more effective than longer, sporadic sessions.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-bold text-sm">2</span>
              <span><strong>Start Easy:</strong> Begin with 1-digit problems to build confidence before advancing to harder levels.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-bold text-sm">3</span>
              <span><strong>Focus on Accuracy First:</strong> Speed comes naturally once you consistently achieve 90%+ accuracy.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-bold text-sm">4</span>
              <span><strong>Track Progress:</strong> Note your accuracy and time for each session to monitor improvement over weeks.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-bold text-sm">5</span>
              <span><strong>Mix Operations:</strong> Vary between addition, subtraction, multiplication, and division to build well-rounded skills.</span>
            </li>
          </ul>
        </div>

        {/* Troubleshooting */}
        <div className="rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Timer not starting?</h3>
              <p className="text-slate-600">
                The timer starts automatically when you submit your first answer. Make sure you&apos;ve entered a number 
                and submitted it.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Input not responding?</h3>
              <p className="text-slate-600">
                Try clicking inside the answer box to ensure it&apos;s focused. If problems persist, refresh the page.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Results not showing?</h3>
              <p className="text-slate-600">
                Complete all questions in the session. Results appear automatically after the last question.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center space-y-4">
        <p className="text-slate-600">
          Still have questions? <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">Contact us</Link> for support.
        </p>
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
