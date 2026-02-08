import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Trainer } from "@/components/Trainer";
import { CountSchema, DigitsSchema, OpSchema, opLabel, makeQuestions } from "@/lib/math";
import type { Count, Digits } from "@/lib/math";
import { Breadcrumb } from "@/components/Breadcrumb";

type Props = {
  params: Promise<{ op: string; digits: string; count: string }>;
  searchParams: Promise<{ from?: string }>;
};

/**
 * Core practice combinations for SEO
 * Only these will be indexed by search engines
 */
const CORE_PAGES = [
  { op: 'add', digits: 1, count: 20 },
  { op: 'add', digits: 2, count: 20 },
  { op: 'sub', digits: 1, count: 20 },
  { op: 'sub', digits: 2, count: 20 },
  { op: 'mul', digits: 1, count: 20 },
  { op: 'mul', digits: 2, count: 20 },
  { op: 'div', digits: 2, count: 20 },
] as const;

/**
 * Check if a page is a core page (should be indexed)
 */
function isCorePage(op: string, digits: number, count: number): boolean {
  return CORE_PAGES.some(
    page => page.op === op && page.digits === digits && page.count === count
  );
}

/**
 * Get recommended grade for a practice set (fallback)
 */
function getRecommendedGrade(op: string, digits: number): number {
  if (op === 'add' || op === 'sub') {
    if (digits === 1) return 1;
    if (digits === 2) return 2;
    return 5;
  }
  if (op === 'mul') {
    if (digits === 1) return 3;
    if (digits === 2) return 5;
    return 6;
  }
  if (op === 'div') {
    if (digits === 1) return 3;
    return 5;
  }
  return 3;
}

/**
 * Parse the "from" query parameter to get the source grade
 * Returns the grade number if valid (1-6), otherwise null
 */
function parseFromGrade(from?: string): number | null {
  if (!from) return null;
  const match = from.match(/^grade(\d)$/);
  if (!match) return null;
  const grade = parseInt(match[1], 10);
  if (grade >= 1 && grade <= 6) return grade;
  return null;
}

/**
 * Generate static params only for core combinations
 * This reduces SEO risk from duplicate/thin content
 */
export async function generateStaticParams() {
  return CORE_PAGES.map(({ op, digits, count }) => ({
    op,
    digits: String(digits),
    count: String(count),
  }));
}

/**
 * Allow dynamic params for non-core combinations
 * Users can still access all combinations, but they won't be pre-built
 */
export const dynamicParams = true;

function parseParams(params: { op: string; digits: string; count: string }) {
  const op = OpSchema.safeParse(params.op);
  const digits = DigitsSchema.safeParse(params.digits);
  const count = CountSchema.safeParse(params.count);

  if (!op.success || !digits.success || !count.success) return null;

  return { op: op.data, digits: digits.data, count: count.data };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const parsed = parseParams(resolvedParams);
  if (!parsed) return {};

  const { op, digits, count } = parsed;
  const label = opLabel(op);
  const isCorePageResult = isCorePage(op, digits, count);

  return {
    title: `${digits}-Digit ${label} Practice (${count} Questions)`,
    description: `Practice ${digits}-digit ${label.toLowerCase()} with ${count} timed questions. Build mental math fluency with instant feedback.`,
    
    // SEO: Only index core pages to avoid thin content issues
    robots: isCorePageResult ? {
      index: true,
      follow: true,
    } : {
      index: false,
      follow: true,
    },
  };
}

export default async function PracticeDetailPage({ params, searchParams }: Props) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const parsed = parseParams(resolvedParams);
  if (!parsed) notFound();

  const { op, digits, count } = parsed;
  const label = opLabel(op);
  
  // Use the "from" query param if valid, otherwise fall back to recommended grade
  const fromGrade = parseFromGrade(resolvedSearchParams.from);
  const targetGrade = fromGrade ?? getRecommendedGrade(op, digits);

  const initialConfig = { op, digits1: digits, digits2: digits, count };
  const initialQuestions = makeQuestions(initialConfig);  

  // Generate sibling links (same op, different digits/count)
  // Preserve the "from" parameter so navigation stays consistent
  const allDigits = [1, 2, 3] as const;
  const allCounts = [10, 20, 50] as const;
  const siblings: Array<{ digits: Digits; count: Count }> = [];

  for (const d of allDigits) {
    for (const c of allCounts) {
      if (d !== digits || c !== count) {
        siblings.push({ digits: d, count: c });
      }
    }
  }

  // Build sibling URL with preserved "from" parameter
  const buildSiblingUrl = (d: Digits, c: Count) => {
    const base = `/p/${op}/${d}/${c}/`;
    return fromGrade ? `${base}?from=grade${fromGrade}` : base;
  };

  return (
    <div className="space-y-8">
      {/* Breadcrumb Navigation - Link to source Grade */}
      <Breadcrumb 
        items={[
          { label: "Home", href: "/" },
          { label: "Grades", href: "/grades/" },
          { label: `Grade ${targetGrade}`, href: `/grades/${targetGrade}/` },
          { label: `${digits}-Digit ${label}`, href: `/p/${op}/${digits}/${count}/` },
        ]}
      />

      <div className="max-w-3xl space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          {digits}-Digit {label} Practice
        </h1>
        <p className="text-slate-600">
          Practice {digits}-digit {label.toLowerCase()} with {count} questions. Your timer starts on your first answer.
        </p>
      </div>

      <Trainer initialConfig={initialConfig} initialQuestions={initialQuestions} showShare />

      <section className="rounded-2xl border bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">More {label} practice</h2>
        <div className="mt-3 grid gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {siblings.slice(0, 8).map((s) => (
            <Link
              key={`${s.digits}-${s.count}`}
              href={buildSiblingUrl(s.digits, s.count)}
              className="rounded-xl border bg-slate-50 p-3 text-center text-sm transition-colors hover:bg-slate-100"
            >
              {s.digits}-digit · {s.count} qs
            </Link>
          ))}
        </div>
        <div className="mt-4 text-sm text-slate-600">
          <Link
            className="font-medium text-slate-900 underline underline-offset-2"
            href={`/grades/${targetGrade}/`}
          >
            View all Grade {targetGrade} practice sets
          </Link>
        </div>
      </section>

      <div className="text-sm text-slate-600">
        <Link className="font-medium text-slate-900 underline underline-offset-2" href={`/grades/${targetGrade}/`}>
          ← Back to Grade {targetGrade}
        </Link>
      </div>
    </div>
  );
}
