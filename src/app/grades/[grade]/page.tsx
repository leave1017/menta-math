import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { getGradeData, getAllGrades } from "@/lib/grades-data";

type Props = {
  params: Promise<{ grade: string }>;
};

/**
 * Generate static params for all grade levels (1-6)
 */
export async function generateStaticParams() {
  return getAllGrades().map((grade) => ({
    grade: String(grade),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { grade } = await params;
  const gradeNum = parseInt(grade, 10);
  const data = getGradeData(gradeNum);
  
  if (!data) return {};

  return {
    title: data.title,
    description: data.description,
  };
}

export default async function GradePage({ params }: Props) {
  const { grade } = await params;
  const gradeNum = parseInt(grade, 10);
  const data = getGradeData(gradeNum);
  
  if (!data || isNaN(gradeNum) || gradeNum < 1 || gradeNum > 6) {
    notFound();
  }

  const prevGrade = gradeNum > 1 ? gradeNum - 1 : null;
  const nextGrade = gradeNum < 6 ? gradeNum + 1 : null;

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Grades", href: "/grades/" },
          { label: `Grade ${gradeNum}`, href: `/grades/${gradeNum}/` },
        ]}
      />

      {/* Hero Section - Compact */}
      <header className="max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Grade {gradeNum} Mental Math Practice
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          UK Year {data.ukYear} • Class {data.indiaClass} • Ages {data.ageRange}
        </p>
      </header>

      {/* Recommended Practice - FIRST (above the fold) */}
      <section className="max-w-4xl">
        <h2 className="text-xl font-semibold text-slate-900 mb-3">
          Start Practicing
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {data.practice.map((p, i) => (
            <Link
              key={i}
              href={`/p/${p.op}/${p.digits}/${p.count}/?from=grade${gradeNum}`}
              className="group rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 shadow-sm transition-all hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-600"
            >
              <div className="flex items-center justify-between">
                <div className="font-semibold text-slate-900 group-hover:text-emerald-600">
                  {p.label}
                </div>
                <svg className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="mt-1 text-sm text-slate-600">{p.description}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Introduction - Condensed */}
      <section className="max-w-4xl">
        <p className="text-slate-700 leading-relaxed">
          {data.intro}
        </p>
      </section>

      {/* Skills + Standards in 2 columns */}
      <section className="max-w-4xl">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Skills */}
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              Skills to Master
            </h2>
            <div className="space-y-2">
              {data.skills.map((skill, i) => (
                <div key={i} className="rounded-lg border bg-slate-50 p-3">
                  <div className="font-medium text-slate-900 text-sm">{skill.title}</div>
                  <div className="text-xs text-slate-600">{skill.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum Standards - Compact */}
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              Curriculum Standards
            </h2>
            <div className="space-y-3">
              {/* US Standards */}
              <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-3">
                <h3 className="font-medium text-slate-900 text-sm mb-2 flex items-center gap-1">
                  <span>🇺🇸</span> US Common Core
                </h3>
                <ul className="space-y-1 text-xs text-slate-600">
                  {data.usStandards.slice(0, 3).map((standard, i) => (
                    <li key={i} className="flex gap-1">
                      <span className="text-emerald-500">✓</span>
                      <span>{standard}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* UK Standards */}
              <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-3">
                <h3 className="font-medium text-slate-900 text-sm mb-2 flex items-center gap-1">
                  <span>🇬🇧</span> UK Year {data.ukYear}
                </h3>
                <ul className="space-y-1 text-xs text-slate-600">
                  {data.ukStandards.slice(0, 3).map((standard, i) => (
                    <li key={i} className="flex gap-1">
                      <span className="text-emerald-500">✓</span>
                      <span>{standard}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Tips - Compact */}
      <section className="max-w-4xl">
        <h2 className="text-lg font-semibold text-slate-900 mb-3">
          Practice Tips
        </h2>
        <div className="rounded-xl border bg-gradient-to-br from-emerald-50 to-white p-4">
          <ul className="space-y-2 text-sm">
            {data.tips.slice(0, 4).map((tip, i) => (
              <li key={i} className="flex gap-2 text-slate-700">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium flex items-center justify-center">
                  {i + 1}
                </span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs - Collapsible style */}
      <section className="max-w-4xl">
        <h2 className="text-lg font-semibold text-slate-900 mb-3">
          FAQ
        </h2>
        <div className="space-y-3">
          {data.faqs.map((faq, i) => (
            <div key={i} className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4">
              <h3 className="font-medium text-slate-900 text-sm">{faq.question}</h3>
              <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <nav className="max-w-4xl pt-4 border-t">
        <div className="flex items-center justify-between text-sm">
          {prevGrade ? (
            <Link 
              href={`/grades/${prevGrade}/`}
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              ← Grade {prevGrade}
            </Link>
          ) : (
            <span></span>
          )}
          
          <Link 
            href="/grades/"
            className="text-slate-500 hover:text-slate-700"
          >
            All Grades
          </Link>
          
          {nextGrade ? (
            <Link 
              href={`/grades/${nextGrade}/`}
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Grade {nextGrade} →
            </Link>
          ) : (
            <span></span>
          )}
        </div>
      </nav>
    </div>
  );
}
