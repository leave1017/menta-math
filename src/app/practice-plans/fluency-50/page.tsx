import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Fluency 50 Mental Math Plan (Endurance Set)",
  description: "A 50-question set to build stamina and stay accurate under pressure. Best for mixed review or classroom-style drills.",
};

export default function Fluency50Page() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 py-8">
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Home", href: "/" },
          { label: "Practice Plans", href: "/practice-plans/" },
          { label: "Fluency 50", href: "/practice-plans/fluency-50/" },
        ]}
      />

      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-100 to-purple-200 px-4 py-2 text-sm font-bold text-purple-700 shadow-sm">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
          </svg>
          Endurance Set
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Fluency 50 Mental Math Plan</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Fluency 50 is designed to build stamina and test your ability to stay accurate under pressure. A 50-question 
          set typically takes 5 to 10 minutes depending on difficulty, and it challenges you to maintain focus from start 
          to finish. This plan is ideal for mixed review—where you practice multiple operations or digit levels in one 
          session—or for classroom-style drills where consistency matters more than speed alone. Use Fluency 50 when you&rsquo;ve 
          mastered Speed 20 and want to push endurance, or when preparing for longer timed tests. If your accuracy drops 
          below 45 out of 50, step back to Speed 20 for a few days and rebuild before trying again.
        </p>
      </div>

      {/* How to Use */}
      <section className="rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-6">How to Use This Plan</h2>
        <ol className="space-y-4 text-slate-700">
          <li className="flex gap-3">
            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold text-sm">1</span>
            <div>
              <strong className="text-slate-900">Choose an operation you&rsquo;re comfortable with.</strong> Fluency 50 works best when you already have 
              solid accuracy at Speed 20. Start with 2-digit addition or times tables.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold text-sm">2</span>
            <div>
              <strong className="text-slate-900">Pace yourself and maintain focus.</strong> Fifty questions test endurance. 
              Your goal is stable accuracy from start to finish—aim for 45-50 correct.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold text-sm">3</span>
            <div>
              <strong className="text-slate-900">Use for mixed review or test prep.</strong> Fluency 50 is great for cycling through different 
              operations in one week, or for simulating classroom drill conditions.
            </div>
          </li>
        </ol>
      </section>

      {/* Plan Details */}
      <section className="rounded-2xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-purple-900">Plan Details</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold text-slate-900 mb-2">Goal</h3>
            <p className="text-slate-700">Stable accuracy from start to finish</p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">Best For</h3>
            <p className="text-slate-700">Mixed review or classroom drills</p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">Tip</h3>
            <p className="text-slate-700">If accuracy drops, step back to Speed 20 for a few days</p>
          </div>
        </div>
      </section>

      {/* CTA Button */}
      <div className="text-center py-8">
        <Link
          href="/p/add/2/50/?plan=fluency50"
          className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        >
          Start 50-question set
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
            <h3 className="font-bold text-slate-900 mb-2">Is 50 questions too many for beginners?</h3>
            <p className="text-slate-700">
              Yes, usually. Start with Daily 10 or Speed 20 first. Fluency 50 is for learners who already have strong accuracy and want to build endurance.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">How long should Fluency 50 take?</h3>
            <p className="text-slate-700">
              For 2-digit operations, expect 5-8 minutes. For times tables, 3-5 minutes. Your first session establishes a baseline—consistency improves with practice.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">What if I make too many mistakes?</h3>
            <p className="text-slate-700">
              If you&rsquo;re getting fewer than 45 correct, the set is too hard or too long for your current level. Drop back to Speed 20 and rebuild accuracy before trying again.
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
            href="/practice-plans/speed-20/"
            className="p-6 rounded-xl border-2 border-emerald-200 bg-emerald-50 hover:border-emerald-300 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-lg text-emerald-900 mb-2">Speed 20 →</h3>
            <p className="text-sm text-slate-700">Recommended: 20 questions for daily rhythm</p>
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
