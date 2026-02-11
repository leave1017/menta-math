import Link from "next/link";
import type { Metadata } from "next";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently Asked Questions about Menta Math mental arithmetic practice.",
};

export default function FAQPage() {
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
    {
      question: "Can mental math practice help with standardized tests?",
      answer:
        "Yes. Strong mental arithmetic skills reduce test-taking time and improve accuracy on standardized assessments. Students who do regular mental math practice finish math sections faster.",
    },
    {
      question: "What if timed mental math is stressful?",
      answer:
        "Remove time pressure initially by focusing only on accuracy during mental math practice. Let learners work at their own pace until confidence builds.",
    },
    {
      question: "How does this compare to paper worksheets?",
      answer:
        "Our online mental math trainer offers instant feedback, automatic timing, and results tracking. Unlike worksheets, you see accuracy percentage and average time immediately.",
    },
    {
      question: "Can I use this for homeschooling?",
      answer:
        "Yes. Our mental math practice trainer supports all four operations with difficulty from 1-digit to 8-digit numbers. Create custom mental arithmetic practice sessions aligned with curriculum goals.",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl py-16 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Frequently Asked Questions</h1>
        <p className="text-lg text-slate-600">
          Find answers to common questions about mental math practice and how to use our trainer.
        </p>
      </div>

      <div className="rounded-3xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 shadow-lg">
        <FAQAccordion items={faqItems} />
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
