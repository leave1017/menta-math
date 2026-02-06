import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Daily 10 Mental Math Plan (Accuracy First)",
  description: "A short 10-question set to build confidence and accuracy. Ideal for beginners and new skills. Track accuracy and repeat daily.",
};

export default function Daily10Page() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 py-8">
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Home", href: "/" },
          { label: "Practice Plans", href: "/practice-plans/" },
          { label: "Daily 10", href: "/practice-plans/daily-10/" },
        ]}
      />

      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-100 to-blue-200 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          Accuracy First
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Daily 10 Mental Math Plan</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          The Daily 10 plan uses short, focused sets of 10 questions to build accuracy and confidence. 
          When you&rsquo;re learning a new skill or introducing mental arithmetic to early learners, quality matters more 
          than quantity. Getting 9 or 10 answers correct in a small set reinforces confidence and trains your brain 
          to work carefully before moving fast. Use Daily 10 for one-digit operations, new fact families, or any time 
          you want to prioritize correctness over speed. Repeat the same format every day for one week to see steady improvement.
        </p>
      </div>

      {/* How to Use */}
      <section className="rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-6">How to Use This Plan</h2>
        <ol className="space-y-4 text-slate-700">
          <li className="flex gap-3">
            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">1</span>
            <div>
              <strong className="text-slate-900">Choose your operation and difficulty.</strong> Start with 1-digit addition or subtraction if you&rsquo;re new to mental math. 
              Stick with the same operation for at least one week.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">2</span>
            <div>
              <strong className="text-slate-900">Complete all 10 questions without rushing.</strong> Focus on accuracy. The timer tracks your pace, 
              but the real goal is 90%+ correct (9 or 10 out of 10).
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">3</span>
            <div>
              <strong className="text-slate-900">Repeat daily for one week.</strong> Consistent practice with the same format builds fluency faster than 
              random variety. Once you hit 90%+ accuracy easily, move to 2-digit or try Speed 20.
            </div>
          </li>
        </ol>
      </section>

      {/* Plan Details */}
      <section className="rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">Plan Details</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold text-slate-900 mb-2">Goal</h3>
            <p className="text-slate-700">90%+ accuracy</p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">Best For</h3>
            <p className="text-slate-700">1-digit and early 2-digit mental math practice</p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">Tip</h3>
            <p className="text-slate-700">Repeat the same operation for one week</p>
          </div>
        </div>
      </section>

      {/* CTA Button */}
      <div className="text-center py-8">
        <Link
          href="/p/add/1/10/?plan=daily10"
          className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        >
          Start 10-question set
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
        <p className="mt-3 text-sm text-slate-600">1-digit addition · You can adjust settings after starting</p>
      </div>

      {/* FAQ */}
      <section className="rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Common Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-slate-900 mb-2">Is 10 questions enough?</h3>
            <p className="text-slate-700">
              Yes. Short, accurate sets beat long, error-prone drills. Daily 10 builds the habit without overwhelming new learners.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">How long should it take?</h3>
            <p className="text-slate-700">
              For 1-digit operations, most learners finish in 30-90 seconds. If it takes longer, that&rsquo;s fine—focus on accuracy first, speed will come.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">When should I move to Speed 20?</h3>
            <p className="text-slate-700">
              Once you consistently get 9 or 10 correct without pausing, you&rsquo;re ready for Speed 20. This usually takes 1-2 weeks of daily practice.
            </p>
          </div>
        </div>
      </section>

      {/* Related Plans */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Related Plans</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link 
            href="/practice-plans/speed-20/"
            className="p-6 rounded-xl border-2 border-emerald-200 bg-emerald-50 hover:border-emerald-300 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-lg text-emerald-900 mb-2">Speed 20 →</h3>
            <p className="text-sm text-slate-700">Next step: 20 questions for consistent rhythm</p>
          </Link>
          <Link 
            href="/practice-plans/fluency-50/"
            className="p-6 rounded-xl border-2 border-purple-200 bg-purple-50 hover:border-purple-300 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-lg text-purple-900 mb-2">Fluency 50 →</h3>
            <p className="text-sm text-slate-700">Advanced: 50 questions for endurance</p>
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
