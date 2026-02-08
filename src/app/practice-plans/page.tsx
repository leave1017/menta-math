import Link from "next/link";
import type { Metadata } from "next";
import { PlanCard, PLAN_CARDS_DATA } from "@/components/PlanCard";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Mental Math Practice Plans (Daily 10, Speed 20, Fluency 50)",
  description: "Pick a simple plan and repeat: Daily 10 for accuracy, Speed 20 for rhythm, or Fluency 50 for endurance. Start in one click.",
};

export default function PracticePlansPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-12 py-12">
      {/* Breadcrumb Navigation */}
      <Breadcrumb 
        items={[
          { label: "Home", href: "/" },
          { label: "Practice Plans", href: "/practice-plans/" },
        ]}
      />

      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Practice Plans for Mental Math
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Each plan is designed with a specific goal. Pick one that matches your needs and repeat it consistently. 
          Simple, measurable, and effective mental math practice.
        </p>
      </div>

      {/* Three Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {PLAN_CARDS_DATA.map((plan) => (
          <PlanCard key={plan.title} {...plan} />
        ))}
      </div>

      {/* How to Choose */}
      <section className="max-w-3xl mx-auto rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">How to Choose Your Plan</h2>
        <div className="space-y-4 text-slate-700">
          <p>
            <strong className="text-blue-700">Daily 10</strong> is ideal for beginners or when learning a new skill. 
            Focus on accuracy first—getting 9 or 10 correct builds confidence faster than rushing through 20.
          </p>
          <p>
            <strong className="text-emerald-700">Speed 20</strong> is the recommended daily routine for most learners. 
            It&rsquo;s short enough to fit into any schedule but long enough to establish rhythm and track improvement.
          </p>
          <p>
            <strong className="text-purple-700">Fluency 50</strong> is for building stamina and handling longer sessions. 
            Use it when you want to test endurance or prepare for timed classroom drills.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <div className="text-center space-y-4 pt-8">
        <Link 
          href="/"
          className="inline-block text-slate-600 hover:text-slate-900 underline"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
