import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { OpSchema, opLabel } from "@/lib/math";

type Props = {
  params: { op: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const result = OpSchema.safeParse(params.op);
  if (!result.success) return {};

  const label = opLabel(result.data);
  return {
    title: `${label} Practice`,
    description: `Mental math practice for ${label.toLowerCase()}.`,
  };
}

export default function OperationPage({ params }: Props) {
  const result = OpSchema.safeParse(params.op);
  if (!result.success) notFound();

  const op = result.data;
  const label = opLabel(op);

  const digits = [1, 2, 3] as const;
  const counts = [10, 20, 50] as const;

  return (
    <div className="space-y-6">
      <div className="max-w-3xl space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">{label} Practice</h1>
        <p className="text-slate-600">
          Select a difficulty level and question count to start practicing {label.toLowerCase()}.
        </p>
      </div>

      <div className="space-y-4">
        {digits.map((d) => (
          <div key={d} className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="text-lg font-semibold">{d}-digit {label}</div>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {counts.map((c) => (
                <Link
                  key={c}
                  href={`/p/${op}/${d}/${c}`}
                  className="rounded-xl border bg-slate-50 p-4 text-center transition-colors hover:bg-slate-100"
                >
                  <div className="text-2xl font-semibold">{c}</div>
                  <div className="text-sm text-slate-600">questions</div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-sm text-slate-600">
        <Link className="font-medium text-slate-900 underline underline-offset-2" href="/practice">
          ← Back to all operations
        </Link>
      </div>
    </div>
  );
}
