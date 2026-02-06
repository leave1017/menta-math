"use client";

import Link from "next/link";
import { FAQAccordion } from "./FAQAccordion";

export interface HomeContentProps {
  defaultOp?: string;
  defaultDigits?: number;
}

export function HomeContent({ defaultOp = "add", defaultDigits = 1 }: HomeContentProps = {}) {
  const faqItems = [
    {
      question: "What is mental math practice?",
      answer:
        "Mental math practice is solving math problems in your head without writing steps or using a calculator. It improves number sense, fluency, and confidence.",
    },
    {
      question: "How long should mental arithmetic practice take each day?",
      answer:
        "Most learners improve with 5–10 minutes daily. Short, consistent mental math practice beats long sessions once in a while.",
    },
    {
      question: "Is timed mental math practice good for kids?",
      answer:
        "Yes. Timed drills can be motivating when used gently. Start with easier sets and focus on accuracy first, then increase speed.",
    },
    {
      question: "Which operation should I start with?",
      answer:
        "Start with the operation that matches the learner's current level. Many begin with 1-digit addition, then move to subtraction, then multiplication and division.",
    },
    {
      question: "What's the best way to improve 2-digit addition?",
      answer:
        "Use tens-and-ones splitting and rounding strategies. Repeat the same format for a few days so your mental arithmetic practice becomes automatic.",
    },
    {
      question: "How can I improve multiplication facts quickly?",
      answer:
        "Use small clusters (like 6s and 7s) and practice daily. Consistent mental math practice plus quick error review is the fastest path.",
    },
    {
      question: "Do I need worksheets for mental arithmetic practice?",
      answer:
        "Worksheets can help, but a quick online trainer makes daily repetition easier. Many users combine both for variety.",
    },
    {
      question: "What if my accuracy drops when I go faster?",
      answer:
        "Slow down for a few sessions and rebuild accuracy. Then increase speed again. Better mental arithmetic practice always starts with correct answers.",
    },
    {
      question: "Is this a mental math test?",
      answer:
        "It can be. Use Speed 20 or Fluency 50 as a quick mental math test and track time + accuracy across days.",
    },
    {
      question: "How do I track progress?",
      answer:
        "Record your time and accuracy. Improvement shows as fewer mistakes and steadier pacing during mental math practice.",
    },
    {
      question: "Is 1-digit practice still useful for older students?",
      answer:
        "Yes. Returning to fundamentals builds speed and confidence, especially when gaps exist.",
    },
    {
      question: "How often should I practice each week?",
      answer:
        "Aim for 4–6 days per week. Consistent mental arithmetic practice is the key.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl space-y-20 py-16">
      {/* Section 1: Introduction */}
      <section className="max-w-4xl mx-auto">
        <h2 className="mb-6 text-3xl font-bold tracking-tight">
          Mental Math Practice You Can Start in Seconds
        </h2>
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
          <p>
            Mental math is a skill you build through small, consistent wins. This page is a simple, timed trainer designed 
            for <strong>mental math practice</strong> at home or in the classroom. Choose addition, subtraction, multiplication, 
            or division, pick the digit level, select how many questions you want, and begin. The timer starts automatically when 
            you submit your first answer, so your <strong>mental arithmetic practice</strong> stays focused and measurable. 
            If you want faster recall, better accuracy, and stronger number sense, daily <strong>mental math practice</strong> is 
            one of the most efficient ways to get there.
          </p>
        </div>
      </section>

      {/* Section 2: Why Timed Practice Works */}
      <section className="max-w-4xl mx-auto">
        <h2 className="mb-6 text-3xl font-bold tracking-tight">
          Why Timed Mental Arithmetic Practice Works
        </h2>
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
          <p>
            Timed training is not about rushing—it&rsquo;s about building fluency. With steady <strong>mental arithmetic practice</strong>, 
            you reduce hesitation, strengthen fact recall, and catch common mistake patterns early. A good routine combines speed with accuracy: 
            keep your answers correct first, then let time naturally improve as your brain learns faster pathways. This is why many teachers use 
            timed drills as short warm-ups, and why parents use <strong>mental math practice</strong> to support homework without turning it 
            into a long lesson.
          </p>
        </div>
      </section>

      {/* Section 3: Practice Plans (3 Cards) */}
      <section>
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-center">
          Three Simple Practice Plans (Pick One and Repeat)
        </h2>
        <p className="text-center text-slate-600 mb-8">
          <Link href="/practice-plans/" className="text-blue-600 hover:text-blue-700 underline font-medium">
            View all Practice Plans →
          </Link>
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1: Daily 10 */}
          <div className="group relative rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-lg hover:shadow-2xl hover:border-blue-300 hover:-translate-y-2 transition-all duration-300">
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-tl-3xl" />
            
            <div className="relative mb-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-100 to-blue-200 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              Accuracy First
            </div>
            
            <h3 className="mb-3 text-2xl font-bold text-slate-900">Daily 10</h3>
            <p className="mb-6 text-slate-600 leading-relaxed">
              A short set of 10 questions is perfect for building confidence. Use this for early learners or when introducing a new skill.
            </p>
            
            <div className="space-y-3 text-sm text-slate-700 mb-6">
              <p><strong className="text-slate-900">Goal:</strong> 90%+ accuracy</p>
              <p><strong className="text-slate-900">Best for:</strong> 1-digit and early 2-digit <strong>mental math practice</strong></p>
              <p><strong className="text-slate-900">Tip:</strong> repeat the same operation for one week</p>
            </div>

            <Link 
              href="/practice-plans/daily-10/"
              className="block w-full py-3 text-center text-sm font-bold text-blue-600 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
            >
              Learn more about Daily 10 →
            </Link>
          </div>

          {/* Card 2: Speed 20 - Recommended */}
          <div className="group relative rounded-3xl border-2 border-emerald-300 bg-gradient-to-br from-white to-emerald-50 p-8 shadow-xl hover:shadow-2xl hover:border-emerald-400 hover:-translate-y-2 transition-all duration-300 ring-2 ring-emerald-200">
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-tl-3xl" />
            
            <div className="relative mb-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 px-4 py-2 text-sm font-bold text-white shadow-lg">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Recommended
            </div>
            
            <h3 className="mb-3 text-2xl font-bold text-slate-900">Speed 20</h3>
            <p className="mb-6 text-slate-600 leading-relaxed">
              A 20-question session adds challenge without feeling long. This is ideal for daily <strong>mental arithmetic practice</strong> routines.
            </p>
            
            <div className="space-y-3 text-sm text-slate-700 mb-6">
              <p><strong className="text-slate-900">Goal:</strong> consistent rhythm, fewer pauses</p>
              <p><strong className="text-slate-900">Best for:</strong> 2-digit addition/subtraction, times tables</p>
              <p><strong className="text-slate-900">Tip:</strong> track your time and try to beat it by a small margin</p>
            </div>

            <Link 
              href="/practice-plans/speed-20/"
              className="block w-full py-3 text-center text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl hover:from-emerald-600 hover:to-green-600 transition-all shadow-md hover:shadow-lg"
            >
              Learn more about Speed 20 →
            </Link>
          </div>

          {/* Card 3: Fluency 50 */}
          <div className="group relative rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-lg hover:shadow-2xl hover:border-purple-300 hover:-translate-y-2 transition-all duration-300">
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-transparent rounded-tl-3xl" />
            
            <div className="relative mb-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-100 to-purple-200 px-4 py-2 text-sm font-bold text-purple-700 shadow-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
              Endurance Set
            </div>
            
            <h3 className="mb-3 text-2xl font-bold text-slate-900">Fluency 50</h3>
            <p className="mb-6 text-slate-600 leading-relaxed">
              A 50-question set builds stamina and helps you stay accurate under pressure.
            </p>
            
            <div className="space-y-3 text-sm text-slate-700 mb-6">
              <p><strong className="text-slate-900">Goal:</strong> stable accuracy from start to finish</p>
              <p><strong className="text-slate-900">Best for:</strong> mixed review or classroom drills</p>
              <p><strong className="text-slate-900">Tip:</strong> if accuracy drops, step back to Speed 20 for a few days</p>
            </div>

            <Link 
              href="/practice-plans/fluency-50/"
              className="block w-full py-3 text-center text-sm font-bold text-purple-600 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors"
            >
              Learn more about Fluency 50 →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Tips for Faster Practice */}
      <section>
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-center">
          Tips for Faster Mental Math Practice (By Operation)
        </h2>
        <div className="rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-lg max-w-4xl mx-auto">
          <div className="space-y-6">
              <div>
                <h3 className="mb-3 font-bold text-blue-700 text-lg">Addition tips</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="pl-4 before:content-['•'] before:mr-2 before:text-blue-600">
                    Split into tens and ones: 38 + 27 = (38 + 20) + 7
                  </li>
                  <li className="pl-4 before:content-['•'] before:mr-2 before:text-blue-600">
                    Make a round number: 49 + 18 = 50 + 17
                  </li>
                  <li className="pl-4 before:content-['•'] before:mr-2 before:text-blue-600">
                    Practice common tricky pairs (7+8, 8+9) to speed up <strong>mental arithmetic practice</strong>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-bold text-emerald-700 text-lg">Subtraction tips</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="pl-4 before:content-['•'] before:mr-2 before:text-emerald-600">
                    Use compensation: 52 − 19 = 52 − 20 + 1
                  </li>
                  <li className="pl-4 before:content-['•'] before:mr-2 before:text-emerald-600">
                    Subtract tens, then ones to avoid confusion
                  </li>
                  <li className="pl-4 before:content-['•'] before:mr-2 before:text-emerald-600">
                    Check by adding back: answer + subtrahend = original
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-bold text-purple-700 text-lg">Multiplication tips</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="pl-4 before:content-['•'] before:mr-2 before:text-purple-600">
                    Use known facts: 6×7 = (6×5) + (6×2)
                  </li>
                  <li className="pl-4 before:content-['•'] before:mr-2 before:text-purple-600">
                    For ×9: 10×n − n
                  </li>
                  <li className="pl-4 before:content-['•'] before:mr-2 before:text-purple-600">
                    Cluster practice: focus on 6s/7s for a week of <strong>mental math practice</strong>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-bold text-orange-700 text-lg">Division tips</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="pl-4 before:content-['•'] before:mr-2 before:text-orange-600">
                    Think fact families: 7×8=56 → 56÷7=8
                  </li>
                  <li className="pl-4 before:content-['•'] before:mr-2 before:text-orange-600">
                    Estimate before you answer to avoid off-by-one errors
                  </li>
                  <li className="pl-4 before:content-['•'] before:mr-2 before:text-orange-600">
                    Start with clean division until fluent, then increase difficulty
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </section>

      {/* Section 5: Common Mistakes to Avoid */}
      <section className="max-w-4xl mx-auto">
        <h2 className="mb-6 text-3xl font-bold tracking-tight">
          Common Mistakes to Avoid in Mental Arithmetic
        </h2>
        <div className="rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-lg">
          <ul className="space-y-4 text-slate-700">
            <li>
              <strong className="text-slate-900">Addition:</strong> forgetting to carry; rushing the last digit
            </li>
            <li>
              <strong className="text-slate-900">Subtraction:</strong> borrowing from the wrong place; switching digits
            </li>
            <li>
              <strong className="text-slate-900">Multiplication:</strong> mixing similar facts (6×7 vs 7×8); skipping steps mentally
            </li>
            <li>
              <strong className="text-slate-900">Division:</strong> ignoring remainders; not checking with multiplication
            </li>
          </ul>
          <p className="mt-6 text-slate-600">
            Strong <strong>mental arithmetic practice</strong> means noticing these patterns and correcting them early.
          </p>
        </div>
      </section>

      {/* Section 6: FAQ */}
      <section id="faq">
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Section 7: Back to Trainer (Lightweight) */}
      <section className="text-center py-6">
        <p className="text-slate-600 mb-4 text-sm">Ready to practice?</p>
        <button
          onClick={() => {
            const trainer = document.getElementById("trainer");
            if (trainer) {
              trainer.scrollIntoView({ behavior: "smooth", block: "start" });
              // Focus input after scroll completes
              setTimeout(() => {
                const input = document.getElementById("trainer-answer");
                if (input) {
                  (input as HTMLInputElement).focus();
                }
              }, 500);
            }
          }}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          Back to trainer
        </button>
      </section>
    </div>
  );
}
