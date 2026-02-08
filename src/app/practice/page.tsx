import Link from "next/link";
import type { Metadata } from "next";
import { OPS, opLabel } from "@/lib/math";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Mental Math Practice Online Free | All Operations",
  description: "Free mental math practice trainer. Build speed with addition, subtraction, multiplication & division drills. Track progress daily.",
};

// Operation-specific descriptions for SEO
const opDescriptions: Record<string, { tagline: string; benefits: string }> = {
  add: {
    tagline: "Addition mental math practice",
    benefits: "Build foundational number sense and speed with mental addition drills from 1-digit to 3-digit problems.",
  },
  sub: {
    tagline: "Subtraction mental math practice", 
    benefits: "Develop subtraction fluency with mental subtraction exercises. Master borrowing and number relationships.",
  },
  mul: {
    tagline: "Multiplication & times tables practice",
    benefits: "Master times tables and multi-digit multiplication. Essential for math confidence at every grade level.",
  },
  div: {
    tagline: "Division mental math practice",
    benefits: "Build division fluency by connecting to multiplication facts. Progress from basic facts to multi-digit division.",
  },
};

export default function PracticePage() {
  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Practice", href: "/practice/" },
        ]}
      />

      {/* Hero Section */}
      <header className="max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Mental Math Practice
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Free online mental math trainer to build speed and accuracy. Choose an operation, 
          select your difficulty level, and start practicing. Track your progress as you 
          improve your mental calculation skills.
        </p>
      </header>

      {/* Introduction for SEO */}
      <section className="max-w-4xl">
        <p className="text-slate-700 leading-relaxed">
          Mental math practice is the key to mathematical fluency. When you can quickly and 
          accurately perform calculations in your head, you free up mental resources for 
          problem-solving and higher-level thinking. Our mental arithmetic practice tools 
          offer customizable drills for addition, subtraction, multiplication, and division 
          at multiple difficulty levels. Whether you&apos;re a student building foundational 
          skills, a parent helping your child prepare for tests, or an adult looking to 
          sharpen your mental math abilities, daily practice with our trainer will help you 
          achieve your goals.
        </p>
      </section>

      {/* Operation Cards */}
      <section>
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Choose Your Operation
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {OPS.map((op) => (
            <Link
              key={op}
              href={`/practice/${op}/`}
              className="group rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-emerald-300"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-emerald-600">
                  {opLabel(op)}
                </div>
                <svg className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="text-sm font-medium text-emerald-600 mb-2">
                {opDescriptions[op]?.tagline}
              </div>
              <div className="text-sm text-slate-600">
                {opDescriptions[op]?.benefits}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-4xl">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Benefits of Daily Mental Math Practice
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-white p-5 border">
            <div className="font-semibold text-slate-900 mb-2">Faster Calculations</div>
            <p className="text-sm text-slate-600">
              Regular practice builds automaticity, allowing you to solve problems quickly without conscious effort.
            </p>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-blue-50 to-white p-5 border">
            <div className="font-semibold text-slate-900 mb-2">Better Number Sense</div>
            <p className="text-sm text-slate-600">
              Mental math develops intuition about numbers and relationships, improving overall mathematical understanding.
            </p>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-purple-50 to-white p-5 border">
            <div className="font-semibold text-slate-900 mb-2">Improved Confidence</div>
            <p className="text-sm text-slate-600">
              Mastering mental math reduces math anxiety and builds confidence for more complex problems.
            </p>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="max-w-4xl">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          How to Practice Mental Math Effectively
        </h2>
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <ul className="space-y-4 text-slate-700">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium flex items-center justify-center">1</span>
              <div>
                <strong>Start with what you know</strong> – Begin at a level where you can achieve 80-90% accuracy, then gradually increase difficulty.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium flex items-center justify-center">2</span>
              <div>
                <strong>Practice daily</strong> – Short, consistent sessions (5-10 minutes) are more effective than occasional long practice.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium flex items-center justify-center">3</span>
              <div>
                <strong>Focus on accuracy first</strong> – Speed will naturally improve as facts become automatic. Don&apos;t sacrifice accuracy for speed.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium flex items-center justify-center">4</span>
              <div>
                <strong>Learn strategies, not just facts</strong> – Understanding mental math strategies (like making tens, doubling, or using known facts) helps you handle unfamiliar problems.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium flex items-center justify-center">5</span>
              <div>
                <strong>Track your progress</strong> – Monitor your accuracy and speed over time. Celebrate improvements to stay motivated.
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Cross-links */}
      <section className="max-w-4xl pt-6 border-t">
        <p className="text-slate-600">
          Not sure where to start?{" "}
          <Link href="/grades/" className="font-medium text-emerald-600 hover:text-emerald-700 underline underline-offset-2">
            Find practice by grade level
          </Link>{" "}
          or try our{" "}
          <Link href="/practice-plans/" className="font-medium text-emerald-600 hover:text-emerald-700 underline underline-offset-2">
            structured practice plans
          </Link>{" "}
          for guided daily practice.
        </p>
      </section>
    </div>
  );
}
