import Link from "next/link";
import { Trainer } from "@/components/Trainer";
import { HomeContent } from "@/components/HomeContent";
import { makeQuestions } from "@/lib/math";

export default function HomePage() {
  const initialConfig = { 
    op: "mul" as const,
    digits1: 1,
    digits2: 1,
    count: 5
  };
  const initialQuestions = makeQuestions(initialConfig);

  // FAQ JSON-LD for SEO (matches visible FAQ in HomeContent)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is mental math practice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mental math practice is solving math problems in your head without writing steps or using a calculator. It improves number sense, fluency, and confidence."
        }
      },
      {
        "@type": "Question",
        "name": "How long should mental arithmetic practice take each day?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most learners improve with 5–10 minutes daily. Short, consistent mental math practice beats long sessions once in a while."
        }
      },
      {
        "@type": "Question",
        "name": "Is timed mental math practice good for kids?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Timed drills can be motivating when used gently. Start with easier sets and focus on accuracy first, then increase speed."
        }
      },
      {
        "@type": "Question",
        "name": "Which operation should I start with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Start with the operation that matches the learner's current level. Many begin with 1-digit addition, then move to subtraction, then multiplication and division."
        }
      },
      {
        "@type": "Question",
        "name": "What's the best way to improve 2-digit addition?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use tens-and-ones splitting and rounding strategies. Repeat the same format for a few days so your mental arithmetic practice becomes automatic."
        }
      },
      {
        "@type": "Question",
        "name": "How can I improve multiplication facts quickly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use small clusters (like 6s and 7s) and practice daily. Consistent mental math practice plus quick error review is the fastest path."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need worksheets for mental arithmetic practice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Worksheets can help, but a quick online trainer makes daily repetition easier. Many users combine both for variety."
        }
      },
      {
        "@type": "Question",
        "name": "What if my accuracy drops when I go faster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Slow down for a few sessions and rebuild accuracy. Then increase speed again. Better mental arithmetic practice always starts with correct answers."
        }
      },
      {
        "@type": "Question",
        "name": "Is this a mental math test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It can be. Use Speed 20 or Fluency 50 as a quick mental math test and track time + accuracy across days."
        }
      },
      {
        "@type": "Question",
        "name": "How do I track progress?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Record your time and accuracy. Improvement shows as fewer mistakes and steadier pacing during mental math practice."
        }
      },
      {
        "@type": "Question",
        "name": "Is 1-digit practice still useful for older students?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Returning to fundamentals builds speed and confidence, especially when gaps exist."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I practice each week?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aim for 4–6 days per week. Consistent mental arithmetic practice is the key."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Hero Section - Tool-First (Trainer as primary visual) */}
      <div id="top" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -mx-4 px-4 py-12 lg:py-16">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" />
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full" />
        
        <div className="relative mx-auto max-w-5xl">
          {/* Small Title Above Trainer (Fixed H1 with separator) */}
          <div className="text-center mb-8 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Mental Math Practice – Free Timed Arithmetic Trainer
              </span>
            </h1>
            <p className="text-base text-slate-600 max-w-2xl mx-auto">
              Open, select your operation and difficulty, then start practicing. Timer starts automatically.
            </p>
          </div>

          {/* Trainer as Primary Visual (Centered, Large) */}
          <div id="trainer" className="mb-8">
            <Trainer initialConfig={initialConfig} initialQuestions={initialQuestions} />
          </div>
          
          {/* CTA Buttons Below Trainer (Subtle, not stealing focus) */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              href="/practice"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-xl hover:border-slate-400 hover:shadow-md transition-all duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Practice Library
            </Link>
            
            <Link 
              href="/print"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-xl hover:border-slate-400 hover:shadow-md transition-all duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print Worksheets
            </Link>
          </div>
        </div>
      </div>

      {/* SEO Content Section Below Hero */}
      <div className="py-16">
        <HomeContent defaultOp={initialConfig.op} defaultDigits={initialConfig.digits1} />
      </div>
    </>
  );
}
