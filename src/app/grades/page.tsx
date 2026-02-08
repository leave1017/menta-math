import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { GRADES_DATA } from "@/lib/grades-data";

export const metadata: Metadata = {
  title: "Mental Math by Grade Level | K-6 Curriculum Aligned",
  description: "Free mental math practice by grade. Aligned with US Common Core, UK Year 1-6 & Class 1-6 standards. Find your level.",
};

export default function GradesPage() {
  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Grades", href: "/grades/" },
        ]}
      />

      {/* Hero Section */}
      <header className="max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Mental Math Practice by Grade Level
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Find the right mental math practice for your child&apos;s grade level. Our curriculum-aligned 
          exercises cover US Common Core standards, UK National Curriculum (Year 1-6), and 
          international Class 1-6 requirements.
        </p>
      </header>

      {/* Introduction */}
      <section className="max-w-4xl">
        <p className="text-slate-700 leading-relaxed">
          Mental math skills develop progressively from kindergarten through sixth grade. Each grade 
          builds on the previous year&apos;s foundation, starting with number bonds and single-digit 
          addition in Grade 1, advancing through times table mastery in Grades 3-4, and culminating 
          in multi-digit operations and decimal calculations by Grade 6. Our grade-specific practice 
          sets are designed to match curriculum expectations and help students build fluency at the 
          appropriate level.
        </p>
      </section>

      {/* Grade Cards */}
      <section>
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Choose Your Grade
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GRADES_DATA.map((grade) => (
            <Link
              key={grade.grade}
              href={`/grades/${grade.grade}/`}
              className="group rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-emerald-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-2xl font-bold text-slate-900 group-hover:text-emerald-600">
                  Grade {grade.grade}
                </div>
                <div className="text-sm text-slate-500">
                  Ages {grade.ageRange}
                </div>
              </div>
              
              <div className="text-xs text-slate-400 mb-3">
                UK Year {grade.ukYear} • Class {grade.indiaClass}
              </div>
              
              <ul className="space-y-1 text-sm text-slate-600">
                {grade.skills.slice(0, 3).map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    {skill.title}
                  </li>
                ))}
              </ul>
              
              <div className="mt-4 flex items-center text-sm font-medium text-emerald-600 group-hover:text-emerald-700">
                View practice sets
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Curriculum Comparison */}
      <section className="max-w-4xl">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Understanding Grade Equivalents
        </h2>
        <div className="rounded-xl border bg-white overflow-hidden shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-900">US Grade</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-900">UK Year</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-900">Age</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-900">Key Focus</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-3">Grade 1</td>
                <td className="px-4 py-3">Year 1</td>
                <td className="px-4 py-3">5-6</td>
                <td className="px-4 py-3 text-slate-600">Number bonds, addition/subtraction within 20</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-3">Grade 2</td>
                <td className="px-4 py-3">Year 2</td>
                <td className="px-4 py-3">6-7</td>
                <td className="px-4 py-3 text-slate-600">2-digit operations, 2/5/10 times tables</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-3">Grade 3</td>
                <td className="px-4 py-3">Year 3</td>
                <td className="px-4 py-3">7-8</td>
                <td className="px-4 py-3 text-slate-600">3/4/8 times tables, 3-digit operations</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-3">Grade 4</td>
                <td className="px-4 py-3">Year 4</td>
                <td className="px-4 py-3">8-9</td>
                <td className="px-4 py-3 text-slate-600">All times tables to 12×12 (UK MTC year)</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-3">Grade 5</td>
                <td className="px-4 py-3">Year 5</td>
                <td className="px-4 py-3">9-10</td>
                <td className="px-4 py-3 text-slate-600">Multi-digit multiplication, decimals</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-3">Grade 6</td>
                <td className="px-4 py-3">Year 6</td>
                <td className="px-4 py-3">10-11</td>
                <td className="px-4 py-3 text-slate-600">Division, percentages, SATs preparation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Tips Section */}
      <section className="max-w-4xl">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          How to Use Grade-Level Practice
        </h2>
        <div className="rounded-xl border bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm">
          <ul className="space-y-3 text-slate-700">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-sm font-medium flex items-center justify-center">1</span>
              <span><strong>Start at your grade level</strong> – Begin with the recommended practice for your current grade.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-sm font-medium flex items-center justify-center">2</span>
              <span><strong>If struggling, go back one grade</strong> – Building a solid foundation is more important than rushing ahead.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-sm font-medium flex items-center justify-center">3</span>
              <span><strong>Master before advancing</strong> – Achieve 90%+ accuracy before moving to harder problems.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-sm font-medium flex items-center justify-center">4</span>
              <span><strong>Practice daily</strong> – 5-10 minutes of daily practice beats longer weekly sessions.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Cross-links */}
      <section className="max-w-4xl pt-6 border-t">
        <p className="text-slate-600">
          Looking for a different way to practice?{" "}
          <Link href="/practice/" className="font-medium text-emerald-600 hover:text-emerald-700 underline underline-offset-2">
            Browse by operation
          </Link>{" "}
          or try our{" "}
          <Link href="/practice-plans/" className="font-medium text-emerald-600 hover:text-emerald-700 underline underline-offset-2">
            structured practice plans
          </Link>.
        </p>
      </section>
    </div>
  );
}
