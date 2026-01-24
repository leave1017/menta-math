import Link from "next/link";

export const metadata = {
  title: "Grades",
  description: "Mental math practice organized by grade level.",
};

export default function GradesPage() {
  const grades = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div className="space-y-6">
      <div className="max-w-3xl space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Practice by Grade</h1>
        <p className="text-slate-600">
          Find mental math practice organized by grade level. Content recommendations coming soon!
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {grades.map((g) => (
          <div
            key={g}
            className="rounded-2xl border bg-white p-5 text-center shadow-sm"
          >
            <div className="text-2xl font-semibold">Grade {g}</div>
            <div className="mt-1 text-sm text-slate-600">Coming soon</div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">General guidance</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
          <li>Grades 1-2: Focus on 1-digit addition and subtraction</li>
          <li>Grades 3-4: Add 2-digit problems and basic multiplication</li>
          <li>Grades 5-6: Include 3-digit problems and division</li>
        </ul>
      </div>

      <div className="text-sm text-slate-600">
        Ready to practice?{" "}
        <Link className="font-medium text-slate-900 underline underline-offset-2" href="/practice">
          Browse by operation
        </Link>{" "}
        instead.
      </div>
    </div>
  );
}
