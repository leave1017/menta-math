import Link from "next/link";

export const metadata = {
  title: "Print",
  description: "Generate printable mental math worksheets.",
};

export default function PrintPage() {
  return (
    <div className="space-y-6">
      <div className="max-w-3xl space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Print Worksheets</h1>
        <p className="text-slate-600">
          Generate printable &ldquo;Math Minute&rdquo; style worksheets for offline practice. Coming soon!
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Features (coming soon)</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
          <li>Customizable worksheet generation (25/50/100 questions per sheet)</li>
          <li>PDF download for printing</li>
          <li>Optional answer keys</li>
          <li>Focus on specific numbers (e.g., multiplication facts of 7)</li>
        </ul>
      </div>

      <div className="text-sm text-slate-600">
        For now, try our{" "}
        <Link className="font-medium text-slate-900 underline underline-offset-2" href="/">
          online trainer
        </Link>{" "}
        for instant practice.
      </div>
    </div>
  );
}
