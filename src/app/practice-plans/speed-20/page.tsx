import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Speed 20 Mental Arithmetic Plan (Recommended)",
  description: "A 20-question session that adds challenge without feeling long. Great for daily rhythm and fewer pauses—track time and improve steadily.",
};

export default function Speed20Page() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 py-8">
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Home", href: "/" },
          { label: "Practice Plans", href: "/practice-plans/" },
          { label: "Speed 20", href: "/practice-plans/speed-20/" },
        ]}
      />

      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 px-4 py-2 text-sm font-bold text-white shadow-lg">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Recommended
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Speed 20 Mental Arithmetic Plan</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Speed 20 is the recommended daily routine for most learners. A 20-question session is long enough to establish 
          rhythm and track improvement, but short enough to fit into any schedule—usually 2 to 5 minutes depending on 
          difficulty. This plan balances speed and accuracy: you aim for consistent pacing with fewer pauses, and your 
          goal is to maintain accuracy while gradually reducing your total time. Use Speed 20 for 2-digit addition and 
          subtraction, multiplication tables, or any skill where you want to build fluency without the endurance challenge 
          of longer sets. Track your time and try to beat it by small margins each week.
        </p>
      </div>

      {/* How to Use */}
      <section className="rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-6">How to Use This Plan</h2>
        <ol className="space-y-4 text-slate-700">
          <li className="flex gap-3">
            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm">1</span>
            <div>
              <strong className="text-slate-900">Choose your operation and digit level.</strong> Speed 20 works best with 2-digit addition/subtraction 
              or times tables. If you&rsquo;re comfortable with Daily 10, this is your next step.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm">2</span>
            <div>
              <strong className="text-slate-900">Complete the set with consistent rhythm.</strong> Don&rsquo;t rush—aim for fewer pauses. 
              Your goal is steady pacing with high accuracy (18-20 correct).
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm">3</span>
            <div>
              <strong className="text-slate-900">Track your time and repeat daily.</strong> Write down your time and accuracy. 
              Each week, try to shave off 10-20 seconds while maintaining correctness.
            </div>
          </li>
        </ol>
      </section>

      {/* Plan Details */}
      <section className="rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-emerald-900">Plan Details</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold text-slate-900 mb-2">Goal</h3>
            <p className="text-slate-700">Consistent rhythm, fewer pauses</p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">Best For</h3>
            <p className="text-slate-700">2-digit addition/subtraction, times tables</p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">Tip</h3>
            <p className="text-slate-700">Track your time and try to beat it by a small margin</p>
          </div>
        </div>
      </section>

      {/* CTA Button */}
      <div className="text-center py-8">
        <Link
          href="/p/add/2/20/?plan=speed20"
          className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        >
          Start 20-question set
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
        <p className="mt-3 text-sm text-slate-600">2-digit addition · You can adjust settings after starting</p>
      </div>

      {/* FAQ */}
      <section className="rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Common Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-slate-900 mb-2">Why is Speed 20 recommended?</h3>
            <p className="text-slate-700">
              It&rsquo;s the sweet spot: long enough to build fluency, short enough to stay focused. Most learners see steady improvement with daily Speed 20 practice.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">What&rsquo;s a good target time?</h3>
            <p className="text-slate-700">
              For 2-digit addition, aim for 2-3 minutes. For times tables, 1-2 minutes. Your first session establishes your baseline—improvement comes with repetition.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">Should I prioritize speed or accuracy?</h3>
            <p className="text-slate-700">
              Accuracy first, always. Aim for 18-20 correct. Once you hit that consistently, speed will naturally improve. Rushing causes mistakes and builds bad habits.
            </p>
          </div>
        </div>
      </section>

      {/* Related Plans */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Related Plans</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link 
            href="/practice-plans/daily-10/"
            className="p-6 rounded-xl border-2 border-blue-200 bg-blue-50 hover:border-blue-300 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-lg text-blue-900 mb-2">Daily 10 →</h3>
            <p className="text-sm text-slate-700">Easier: 10 questions for accuracy first</p>
          </Link>
          <Link 
            href="/practice-plans/fluency-50/"
            className="p-6 rounded-xl border-2 border-purple-200 bg-purple-50 hover:border-purple-300 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-lg text-purple-900 mb-2">Fluency 50 →</h3>
            <p className="text-sm text-slate-700">Challenge: 50 questions for endurance</p>
          </Link>
        </div>
      </section>

      {/* Bottom Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-slate-200">
        <Link 
          href="/practice-plans/"
          className="text-slate-600 hover:text-slate-900 underline"
        >
          ← Back to Practice Plans
        </Link>
        <Link 
          href="/"
          className="text-slate-600 hover:text-slate-900 underline"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
