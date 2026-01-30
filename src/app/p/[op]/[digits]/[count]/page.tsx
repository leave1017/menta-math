import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Trainer } from "@/components/Trainer";
import { CountSchema, DigitsSchema, OpSchema, opLabel, makeQuestions } from "@/lib/math";
import type { Count, Digits } from "@/lib/math";

type Props = {
  params: { op: string; digits: string; count: string };
};

function parseParams(params: Props["params"]) {
  const op = OpSchema.safeParse(params.op);
  const digits = DigitsSchema.safeParse(params.digits);
  const count = CountSchema.safeParse(params.count);

  if (!op.success || !digits.success || !count.success) return null;

  return { op: op.data, digits: digits.data, count: count.data };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const parsed = parseParams(params);
  if (!parsed) return {};

  const { op, digits, count } = parsed;
  const label = opLabel(op);

  return {
    title: `${digits}-Digit ${label} Practice (${count} Questions)`,
    description: `Practice ${digits}-digit ${label.toLowerCase()} with ${count} timed questions.`,
  };
}

export default function PracticeDetailPage({ params }: Props) {
  const parsed = parseParams(params);
  if (!parsed) notFound();

  const { op, digits, count } = parsed;
  const label = opLabel(op);

  cconst initialConfig = { op, digits1: digits, digits2: digits, count };
  const initialQuestions = makeQuestions(initialConfig);  

  // Generate sibling links (same op, different digits/count)
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

  return (
    <div className="space-y-8">
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
              href={`/p/${op}/${s.digits}/${s.count}`}
              className="rounded-xl border bg-slate-50 p-3 text-center text-sm transition-colors hover:bg-slate-100"
            >
              {s.digits}-digit · {s.count} qs
            </Link>
          ))}
        </div>
        <div className="mt-4 text-sm text-slate-600">
          <Link
            className="font-medium text-slate-900 underline underline-offset-2"
            href={`/practice/${op}`}
          >
            View all {label} practice sets
          </Link>
        </div>
      </section>

      <div className="text-sm text-slate-600">
        <Link className="font-medium text-slate-900 underline underline-offset-2" href="/practice">
          ← Back to practice library
        </Link>
      </div>
    </div>
  );
}
