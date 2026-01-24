import Link from "next/link";
import { Trainer } from "@/components/Trainer";
import { HomeContent } from "@/components/HomeContent";
import { makeQuestions } from "@/lib/math";

export default function HomePage() {
  const initialConfig = { 
    op: "mul" as const,  // 默认乘法
    digits1: 1,          // 默认个位数
    digits2: 1,          // 默认个位数
    count: 10            // 默认10题
  };
  const initialQuestions = makeQuestions(initialConfig);

  // FAQ JSON-LD for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is mental math practice and why is it important?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mental math practice involves solving arithmetic problems in your head without using calculators or paper. It builds number sense, improves calculation speed, and strengthens working memory. Regular mental math training helps students develop mathematical fluency and confidence that benefits them across all areas of math."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I practice mental arithmetic?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Daily practice for 5-10 minutes is more effective than longer, infrequent sessions. Consistency builds automaticity. Start with 10 questions per day and gradually increase to 20 or 50 as you improve. Many students see noticeable improvements within 2-3 weeks of regular practice."
        }
      },
      {
        "@type": "Question",
        "name": "What's the best way to practice 1-digit mental math?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Begin with addition and subtraction of single-digit numbers, then move to multiplication tables (0-9). Use our timed trainer to build speed and accuracy. Focus on one operation at a time until you achieve 90% accuracy before mixing operations or increasing digit complexity."
        }
      },
      {
        "@type": "Question",
        "name": "How can I improve my 2-digit addition and subtraction?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Break numbers into tens and ones (e.g., 47 + 25 = 40 + 20 + 7 + 5). Practice adding/subtracting multiples of 10 first, then add the ones. Use our 2-digit trainer daily, starting with 10 questions and increasing to 20 as you gain confidence."
        }
      },
      {
        "@type": "Question",
        "name": "What mental math strategies work best for multiplication?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Master your times tables (1-12) first through spaced repetition. For larger numbers, use strategies like breaking apart (23 × 4 = 20 × 4 + 3 × 4) or doubling and halving. Our multiplication trainer lets you focus on specific digit combinations to build fluency systematically."
        }
      },
      {
        "@type": "Question",
        "name": "How do I practice division mentally without a calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Start with simple division facts that are inverses of multiplication tables. Our trainer generates only problems with whole number answers, so you can focus on speed without worrying about remainders. Practice estimating first, then confirm with mental calculation."
        }
      },
      {
        "@type": "Question",
        "name": "Can mental math practice help with standardized tests?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Strong mental math skills reduce test-taking time and improve accuracy on standardized assessments. Students who practice regularly often finish math sections faster and have more time to check their work, leading to higher scores overall."
        }
      },
      {
        "@type": "Question",
        "name": "Is timed mental math practice suitable for all ages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, but adjust expectations by age and skill level. Elementary students can start with 1-digit problems and no time pressure, gradually adding the timer as confidence grows. Older students and adults can challenge themselves with 2-digit or 3-digit problems under timed conditions."
        }
      },
      {
        "@type": "Question",
        "name": "What if I keep making mistakes during mental arithmetic?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mistakes are part of learning. Our trainer shows you the correct answer immediately so you learn from errors. If accuracy drops below 70%, reduce the difficulty (fewer digits or fewer questions) until you rebuild confidence. Speed comes naturally after accuracy improves."
        }
      },
      {
        "@type": "Question",
        "name": "How does this mental math trainer compare to worksheets?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our online trainer offers instant feedback, automatic timing, and immediate results tracking. Unlike paper worksheets, you see your accuracy percentage and average time per question right away. You can also easily adjust difficulty without printing new pages."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use this for homeschooling mental math curriculum?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our trainer supports all four operations with adjustable difficulty levels from 1-digit to 8-digit numbers. You can create custom practice sessions aligned with your curriculum goals. The timer and accuracy tracking help you monitor progress over time."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between 10, 20, and 50 question sessions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ten questions work well for daily warm-ups or skill checks. Twenty questions provide moderate practice with enough repetition to build fluency. Fifty questions are ideal for intensive practice or simulating timed math tests. Start with 10 and increase as stamina improves."
        }
      },
      {
        "@type": "Question",
        "name": "How can I track my mental math improvement over time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "After each session, note your accuracy percentage and average time per question. Practice the same difficulty level for a week, then compare your results. You should see faster times and higher accuracy. When you consistently hit 90%+ accuracy, increase the difficulty."
        }
      },
      {
        "@type": "Question",
        "name": "Are there benefits to mental math practice for adults?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Definitely. Mental math keeps your brain sharp, improves everyday estimation skills (shopping, cooking, budgeting), and builds cognitive flexibility. Many adults find 5-10 minutes of daily mental math practice helps maintain numerical reasoning and problem-solving abilities."
        }
      },
      {
        "@type": "Question",
        "name": "Can I practice specific times tables or math facts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Select multiplication or division, choose 1-digit for both operands, and practice 10-20 questions daily. This targets specific times tables. For focused practice on particular numbers (like 7s or 8s), run multiple short sessions to build automaticity."
        }
      },
      {
        "@type": "Question",
        "name": "What if my child finds timed mental math stressful?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Remove time pressure initially by focusing only on accuracy. Let them work at their own pace until confidence builds. The timer is motivational for many students, but not required. Gradually introduce timing once they consistently achieve high accuracy without it."
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
      
      {/* Hero Section with Gradient Background */}
      <div id="top" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -mx-4 px-4">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" />
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-30 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full" />
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 blur-3xl opacity-20 w-96 h-96 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-full" />
        
        <div className="relative mx-auto max-w-4xl py-16 sm:py-24 text-center space-y-8">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-blue-700 shadow-lg border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            Free Mental Math Trainer
          </div>
          
          {/* Main heading with gradient */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Mental Math Practice
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-600 leading-relaxed">
            Master arithmetic with our free timed trainer. Build fluency in addition, subtraction, 
            multiplication, and division—start practicing in seconds.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a 
              href="#trainer"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Start Practicing Now
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            
            <Link 
              href="/practice"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 bg-white border-2 border-slate-200 rounded-2xl hover:border-slate-300 hover:shadow-md transition-all duration-200"
            >
              Browse Library
            </Link>
          </div>
          
          {/* Small hint text */}
          <p className="text-sm text-slate-500">
            No signup required · Works on all devices · 100% free
          </p>
        </div>
      </div>

      {/* Trainer Section */}
      <div id="trainer" className="py-12">
        <Trainer initialConfig={initialConfig} initialQuestions={initialQuestions} />
      </div>

      {/* SEO Content Section */}
      <HomeContent />
    </>
  );
}
