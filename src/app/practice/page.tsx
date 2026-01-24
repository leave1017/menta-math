import Link from "next/link";
import { OPS, opLabel } from "@/lib/math";

export const metadata = {
  title: "Practice Library",
  description: "Browse mental math practice by operation type.",
};

export default function PracticePage() {
  return (
    <div className="space-y-6">
      <div className="max-w-3xl space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Practice Library</h1>
        <p className="text-slate-600">
          Choose an operation to see all available practice sets by digit count and question count.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {OPS.map((op) => (
          <Link
            key={op}
            href={`/practice/${op}`}
            className="rounded-2xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="text-2xl font-semibold tracking-tight">{opLabel(op)}</div>
            <div className="mt-2 text-sm text-slate-600">
              View all {opLabel(op).toLowerCase()} practice sets
            </div>
          </Link>
        ))}
      </div>

      <div className="rounded-2xl border bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">Quick tips</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
          <li>Start with 1-digit problems to build confidence</li>
          <li>Increase difficulty gradually as accuracy improves</li>
          <li>Practice 3-5 minutes daily for best results</li>
        </ul>
      </div>
    </div>
  );
}
