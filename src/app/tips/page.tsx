import Link from "next/link";

export const metadata = {
  title: "Tips & Strategies",
  description: "Mental math tips and strategies to improve speed and accuracy.",
};

export default function TipsPage() {
  return (
    <div className="space-y-6">
      <div className="max-w-3xl space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Tips & Strategies</h1>
        <p className="text-slate-600">
          Learn mental math strategies to solve problems faster and more accurately.
        </p>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">Addition Tips</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
            <li>Look for pairs that make 10 (e.g., 7 + 3, 8 + 2)</li>
            <li>Break numbers into tens and ones: 47 + 26 = (40 + 20) + (7 + 6)</li>
            <li>Use compensation: 49 + 35 = 50 + 35 − 1</li>
          </ul>
        </div>

        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">Subtraction Tips</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
            <li>Count up for close numbers: 83 − 78 = count up from 78 to 83</li>
            <li>Subtract tens first, then ones: 54 − 27 = (54 − 20) − 7</li>
            <li>Use compensation: 62 − 19 = 62 − 20 + 1</li>
          </ul>
        </div>

        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">Multiplication Tips</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
            <li>Use the distributive property: 12 × 7 = (10 × 7) + (2 × 7)</li>
            <li>Double and halve: 16 × 5 = 8 × 10</li>
            <li>Master times tables 2-9 for speed</li>
          </ul>
        </div>

        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">Division Tips</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
            <li>Think of division as multiplication: 56 ÷ 7 = ? means 7 × ? = 56</li>
            <li>Use times tables knowledge to speed up</li>
            <li>Estimate first to catch mistakes</li>
          </ul>
        </div>

        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">General Practice Tips</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
            <li>Practice 3-5 minutes daily for best results</li>
            <li>Start easy and gradually increase difficulty</li>
            <li>Focus on accuracy first, then speed</li>
            <li>Review mistakes to learn patterns</li>
          </ul>
        </div>
      </div>

      <div className="text-sm text-slate-600">
        Ready to practice?{" "}
        <Link className="font-medium text-slate-900 underline underline-offset-2" href="/practice">
          Start practicing now
        </Link>
        .
      </div>
    </div>
  );
}
