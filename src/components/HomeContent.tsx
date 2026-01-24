import { FAQAccordion } from "./FAQAccordion";

export function HomeContent() {
  const faqItems = [
    {
      question: "What is mental math practice and why is it important?",
      answer:
        "Mental math practice involves solving arithmetic problems in your head without using calculators or paper. It builds number sense, improves calculation speed, and strengthens working memory. Regular mental math training helps students develop mathematical fluency and confidence that benefits them across all areas of math.",
    },
    {
      question: "How often should I practice mental arithmetic?",
      answer:
        "Daily practice for 5-10 minutes is more effective than longer, infrequent sessions. Consistency builds automaticity. Start with 10 questions per day and gradually increase to 20 or 50 as you improve. Many students see noticeable improvements within 2-3 weeks of regular practice.",
    },
    {
      question: "What's the best way to practice 1-digit mental math?",
      answer:
        "Begin with addition and subtraction of single-digit numbers, then move to multiplication tables (0-9). Use our timed trainer to build speed and accuracy. Focus on one operation at a time until you achieve 90% accuracy before mixing operations or increasing digit complexity.",
    },
    {
      question: "How can I improve my 2-digit addition and subtraction?",
      answer:
        "Break numbers into tens and ones (e.g., 47 + 25 = 40 + 20 + 7 + 5). Practice adding/subtracting multiples of 10 first, then add the ones. Use our 2-digit trainer daily, starting with 10 questions and increasing to 20 as you gain confidence.",
    },
    {
      question: "What mental math strategies work best for multiplication?",
      answer:
        "Master your times tables (1-12) first through spaced repetition. For larger numbers, use strategies like breaking apart (23 × 4 = 20 × 4 + 3 × 4) or doubling and halving. Our multiplication trainer lets you focus on specific digit combinations to build fluency systematically.",
    },
    {
      question: "How do I practice division mentally without a calculator?",
      answer:
        "Start with simple division facts that are inverses of multiplication tables. Our trainer generates only problems with whole number answers, so you can focus on speed without worrying about remainders. Practice estimating first, then confirm with mental calculation.",
    },
    {
      question: "Can mental math practice help with standardized tests?",
      answer:
        "Absolutely. Strong mental math skills reduce test-taking time and improve accuracy on standardized assessments. Students who practice regularly often finish math sections faster and have more time to check their work, leading to higher scores overall.",
    },
    {
      question: "Is timed mental math practice suitable for all ages?",
      answer:
        "Yes, but adjust expectations by age and skill level. Elementary students can start with 1-digit problems and no time pressure, gradually adding the timer as confidence grows. Older students and adults can challenge themselves with 2-digit or 3-digit problems under timed conditions.",
    },
    {
      question: "What if I keep making mistakes during mental arithmetic?",
      answer:
        "Mistakes are part of learning. Our trainer shows you the correct answer immediately so you learn from errors. If accuracy drops below 70%, reduce the difficulty (fewer digits or fewer questions) until you rebuild confidence. Speed comes naturally after accuracy improves.",
    },
    {
      question: "How does this mental math trainer compare to worksheets?",
      answer:
        "Our online trainer offers instant feedback, automatic timing, and immediate results tracking. Unlike paper worksheets, you see your accuracy percentage and average time per question right away. You can also easily adjust difficulty without printing new pages.",
    },
    {
      question: "Can I use this for homeschooling mental math curriculum?",
      answer:
        "Yes. Our trainer supports all four operations with adjustable difficulty levels from 1-digit to 8-digit numbers. You can create custom practice sessions aligned with your curriculum goals. The timer and accuracy tracking help you monitor progress over time.",
    },
    {
      question: "What's the difference between 10, 20, and 50 question sessions?",
      answer:
        "Ten questions work well for daily warm-ups or skill checks. Twenty questions provide moderate practice with enough repetition to build fluency. Fifty questions are ideal for intensive practice or simulating timed math tests. Start with 10 and increase as stamina improves.",
    },
    {
      question: "How can I track my mental math improvement over time?",
      answer:
        "After each session, note your accuracy percentage and average time per question. Practice the same difficulty level for a week, then compare your results. You should see faster times and higher accuracy. When you consistently hit 90%+ accuracy, increase the difficulty.",
    },
    {
      question: "Are there benefits to mental math practice for adults?",
      answer:
        "Definitely. Mental math keeps your brain sharp, improves everyday estimation skills (shopping, cooking, budgeting), and builds cognitive flexibility. Many adults find 5-10 minutes of daily mental math practice helps maintain numerical reasoning and problem-solving abilities.",
    },
    {
      question: "Can I practice specific times tables or math facts?",
      answer:
        "Yes. Select multiplication or division, choose 1-digit for both operands, and practice 10-20 questions daily. This targets specific times tables. For focused practice on particular numbers (like 7s or 8s), run multiple short sessions to build automaticity.",
    },
    {
      question: "What if my child finds timed mental math stressful?",
      answer:
        "Remove time pressure initially by focusing only on accuracy. Let them work at their own pace until confidence builds. The timer is motivational for many students, but not required. Gradually introduce timing once they consistently achieve high accuracy without it.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl space-y-16 py-12">
      {/* Section A: Introduction */}
      <section className="max-w-4xl">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">
          Build Math Fluency Through Daily Mental Arithmetic Practice
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Mental math is the foundation of mathematical fluency and confidence. Whether you&rsquo;re a student preparing for
          standardized tests, a parent helping your child master times tables, or an adult keeping your mind sharp, regular
          mental arithmetic practice delivers measurable results. Our free mental math trainer provides instant feedback on
          addition, subtraction, multiplication, and division problems across difficulty levels from simple 1-digit calculations
          to challenging multi-digit operations. The timed format simulates real test conditions while building speed and
          accuracy. Each practice session takes just 5-10 minutes, making it easy to fit mental math drills into your daily
          routine. Start with 10 questions to warm up, progress to 20 questions for steady improvement, or challenge yourself
          with 50-question sessions to build true computational fluency. Track your accuracy percentage and average time per
          question to see your progress over weeks and months. No login required—just open the page and start practicing
          immediately.
        </p>
      </section>

      {/* Section B: Practice Cards */}
      <section>
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-center">Choose Your Practice Level</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1: Daily 10 */}
          <div className="group relative rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-lg hover:shadow-2xl hover:border-blue-300 hover:-translate-y-2 transition-all duration-300">
            {/* Top decorative corner */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-tl-3xl" />
            
            <div className="relative mb-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-100 to-blue-200 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              Daily Warm-Up
            </div>
            
            <h3 className="mb-3 text-2xl font-bold text-slate-900">10 Questions</h3>
            <p className="mb-6 text-slate-600 leading-relaxed">
              Perfect for daily mental math warm-ups or quick skill checks. Ideal for elementary students or anyone starting
              their mental arithmetic journey. Complete in under 3 minutes once you build fluency.
            </p>
            
            <ul className="space-y-3 text-sm text-slate-700 mb-6">
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Best for morning math routines</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Builds consistency without overwhelm</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Great for testing new difficulty levels</span>
              </li>
            </ul>

            <a 
              href="#trainer"
              className="block w-full py-3 text-center text-sm font-bold text-blue-600 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
            >
              Try 10 Questions →
            </a>
          </div>

          {/* Card 2: Speed 20 */}
          <div className="group relative rounded-3xl border-2 border-emerald-300 bg-gradient-to-br from-white to-emerald-50 p-8 shadow-xl hover:shadow-2xl hover:border-emerald-400 hover:-translate-y-2 transition-all duration-300 ring-2 ring-emerald-200">
            {/* Top decorative corner */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-tl-3xl" />
            
            {/* Recommended badge - special styling */}
            <div className="relative mb-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 px-4 py-2 text-sm font-bold text-white shadow-lg">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Recommended
            </div>
            
            <h3 className="mb-3 text-2xl font-bold text-slate-900">20 Questions</h3>
            <p className="mb-6 text-slate-600 leading-relaxed">
              Our most popular option for building mental math speed and accuracy. Provides enough repetition to reinforce
              patterns while staying engaging. Suitable for middle school students and adults seeking steady improvement.
            </p>
            
            <ul className="space-y-3 text-sm text-slate-700 mb-6">
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100">
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Optimal balance of practice and time</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100">
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Ideal for daily focused practice</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100">
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Enough reps to identify patterns</span>
              </li>
            </ul>

            <a 
              href="#trainer"
              className="block w-full py-3 text-center text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl hover:from-emerald-600 hover:to-green-600 transition-all shadow-md hover:shadow-lg"
            >
              Try 20 Questions →
            </a>
          </div>

          {/* Card 3: Fluency 50 */}
          <div className="group relative rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-lg hover:shadow-2xl hover:border-purple-300 hover:-translate-y-2 transition-all duration-300">
            {/* Top decorative corner */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-transparent rounded-tl-3xl" />
            
            <div className="relative mb-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-100 to-purple-200 px-4 py-2 text-sm font-bold text-purple-700 shadow-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
              Challenge Mode
            </div>
            
            <h3 className="mb-3 text-2xl font-bold text-slate-900">50 Questions</h3>
            <p className="mb-6 text-slate-600 leading-relaxed">
              Intensive mental arithmetic training for students preparing for math competitions or timed exams. Builds stamina
              and true computational fluency. Best for high school students, competitive math enthusiasts, and adults seeking
              rigorous practice.
            </p>
            
            <ul className="space-y-3 text-sm text-slate-700 mb-6">
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-purple-100">
                  <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Simulates test-length conditions</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-purple-100">
                  <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Maximum skill reinforcement</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-purple-100">
                  <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Tracks performance across many problems</span>
              </li>
            </ul>

            <a 
              href="#trainer"
              className="block w-full py-3 text-center text-sm font-bold text-purple-600 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors"
            >
              Try 50 Questions →
            </a>
          </div>
        </div>
      </section>

      {/* Section C: Two-column Tips & Mistakes */}
      <section>
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">Mental Math Tips & Common Mistakes</h2>
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: Tips by Operation */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-slate-900">Tips by Operation</h3>

            <div className="space-y-6">
              <div>
                <h4 className="mb-2 font-medium text-blue-700">Addition</h4>
                <ul className="space-y-1.5 text-sm text-slate-700">
                  <li className="pl-4 before:content-['•'] before:mr-2 before:text-blue-600">
                    Add from left to right (tens first, then ones)
                  </li>
                  <li className="pl-4 before:content-['•'] before:mr-2 before:text-blue-600">
                    Look for number bonds that make 10
                  </li>
                  <li className="pl-4 before:content-['•'] before:mr-2 before:text-blue-600">
                    Round up to the nearest ten, then adjust
                  </li>
                  <li className="pl-4 before:content-['•'] before:mr-2 before:text-blue-600">
                    Break larger numbers into friendlier parts
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 font-medium text-emerald-700">Subtraction</h4>
                <ul className="space-y-1.5 text-sm text-slate-700">
                  <li className="pl-4 before:content-['•'] before:mr-2 before:text-emerald-600">
                    Count up from the smaller number instead
                  </li>
                  <li className="pl-4 before:content-['•'] before:mr-2 before:text-emerald-600">
                    Subtract in parts (tens first, then ones)
                  </li>
                  <li className="pl-4 before:content-['•'] before:mr-2 before:text-emerald-600">
                    Use known facts (like 100 - 37 = 63)
                  </li>
                  <li className="pl-4 before:content-['•'] before:mr-2 before:text-emerald-600">
                    Add the same amount to both numbers for easier subtraction
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 font-medium text-purple-700">Multiplication</h4>
                <ul className="space-y-1.5 text-sm text-slate-700">
                  <li className="pl-4 before:content-['•'] before:mr-2 before:text-purple-600">
                    Memorize times tables 1-12 through spaced repetition
                  </li>
                  <li className="pl-4 before:content-['•'] before:mr-2 before:text-purple-600">
                    Use doubling for multiplying by 2, 4, or 8
                  </li>
                  <li className="pl-4 before:content-['•'] before:mr-2 before:text-purple-600">
                    Break apart larger numbers (23 × 5 = 20 × 5 + 3 × 5)
                  </li>
                  <li className="pl-4 before:content-['•'] before:mr-2 before:text-purple-600">
                    Recognize commutative property (7 × 8 = 8 × 7)
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 font-medium text-orange-700">Division</h4>
                <ul className="space-y-1.5 text-sm text-slate-700">
                  <li className="pl-4 before:content-['•'] before:mr-2 before:text-orange-600">
                    Think of division as the inverse of multiplication
                  </li>
                  <li className="pl-4 before:content-['•'] before:mr-2 before:text-orange-600">
                    Estimate first, then refine your answer
                  </li>
                  <li className="pl-4 before:content-['•'] before:mr-2 before:text-orange-600">
                    Use halving repeatedly for even dividends
                  </li>
                  <li className="pl-4 before:content-['•'] before:mr-2 before:text-orange-600">
                    Practice division facts alongside multiplication tables
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Common Mistakes */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-slate-900">Common Mistakes to Avoid</h3>

            <div className="space-y-6">
              <div>
                <h4 className="mb-2 font-medium text-blue-700">Addition Errors</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="pl-4 before:content-['×'] before:mr-2 before:text-red-500 before:font-bold">
                    <strong>Carrying mistakes:</strong> Forgetting to add the carried digit when adding columns. Always write
                    down or visualize the carry.
                  </li>
                  <li className="pl-4 before:content-['×'] before:mr-2 before:text-red-500 before:font-bold">
                    <strong>Rushing through place value:</strong> Adding ones to tens or tens to hundreds. Slow down and align
                    digits mentally.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 font-medium text-emerald-700">Subtraction Errors</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="pl-4 before:content-['×'] before:mr-2 before:text-red-500 before:font-bold">
                    <strong>Subtracting smaller from larger:</strong> Always subtracting the smaller digit regardless of
                    position (e.g., 52 - 37 = 25 instead of 15). Watch your order.
                  </li>
                  <li className="pl-4 before:content-['×'] before:mr-2 before:text-red-500 before:font-bold">
                    <strong>Borrowing confusion:</strong> Not adjusting the next column after borrowing. Track regrouping
                    carefully.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 font-medium text-purple-700">Multiplication Errors</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="pl-4 before:content-['×'] before:mr-2 before:text-red-500 before:font-bold">
                    <strong>Times table gaps:</strong> Inconsistent memorization leads to hesitation and errors. Practice weak
                    facts daily.
                  </li>
                  <li className="pl-4 before:content-['×'] before:mr-2 before:text-red-500 before:font-bold">
                    <strong>Place value in multi-digit:</strong> Forgetting to shift when multiplying by tens (e.g., 23 × 40).
                    Visualize zeros.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 font-medium text-orange-700">Division Errors</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="pl-4 before:content-['×'] before:mr-2 before:text-red-500 before:font-bold">
                    <strong>Guessing quotients:</strong> Not estimating before calculating leads to wild guesses. Always
                    estimate first.
                  </li>
                  <li className="pl-4 before:content-['×'] before:mr-2 before:text-red-500 before:font-bold">
                    <strong>Confusing dividend and divisor:</strong> Mixing up which number goes where. Remember: dividend ÷
                    divisor = quotient.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section D: FAQ */}
      <section>
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">Frequently Asked Questions</h2>
        <FAQAccordion items={faqItems} />
      </section>

      {/* Section E: CTA */}
      <section className="relative overflow-hidden rounded-3xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-12 text-center shadow-xl">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full" />
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 blur-3xl opacity-20 w-64 h-64 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-full" />
        
        <div className="relative">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white text-2xl font-bold shadow-lg mb-6">
            🚀
          </div>
          
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Start Your Mental Math Journey Today
            </span>
          </h2>
          
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-700 leading-relaxed">
            Just 5-10 minutes of daily practice builds lasting mathematical fluency. Begin with 1-digit problems to build
            confidence, then gradually increase difficulty as your speed improves. Treat each session like a quick mental
            workout—challenging but rewarding.
          </p>
          
          <a
            href="#top"
            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            Start Practicing Now
            <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
          
          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">No signup required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">100% free forever</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
