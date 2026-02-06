import Link from "next/link";

interface PlanCardProps {
  title: string;
  badge: string;
  badgeColor: string;
  description: string;
  goal: string;
  bestFor: string;
  tip: string;
  href: string;
  buttonColor: string;
  isRecommended?: boolean;
}

export function PlanCard({
  title,
  badge,
  badgeColor,
  description,
  goal,
  bestFor,
  tip,
  href,
  buttonColor,
  isRecommended,
}: PlanCardProps) {
  const cardClass = isRecommended
    ? "group relative rounded-3xl border-2 border-emerald-300 bg-gradient-to-br from-white to-emerald-50 p-8 shadow-xl hover:shadow-2xl hover:border-emerald-400 hover:-translate-y-2 transition-all duration-300 ring-2 ring-emerald-200"
    : "group relative rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-lg hover:shadow-2xl hover:border-blue-300 hover:-translate-y-2 transition-all duration-300";

  return (
    <div className={cardClass}>
      <div className={`absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-${badgeColor}-500/10 to-transparent rounded-tl-3xl`} />
      
      {isRecommended ? (
        <div className="relative mb-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 px-4 py-2 text-sm font-bold text-white shadow-lg">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {badge}
        </div>
      ) : (
        <div className={`relative mb-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-${badgeColor}-100 to-${badgeColor}-200 px-4 py-2 text-sm font-bold text-${badgeColor}-700 shadow-sm`}>
          {badge === "Accuracy First" && <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />}
          {badge === "Endurance Set" && (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
            </svg>
          )}
          {badge}
        </div>
      )}
      
      <h3 className="mb-3 text-2xl font-bold text-slate-900">{title}</h3>
      <p className="mb-6 text-slate-600 leading-relaxed">{description}</p>
      
      <div className="space-y-3 text-sm text-slate-700 mb-6">
        <p><strong className="text-slate-900">Goal:</strong> {goal}</p>
        <p><strong className="text-slate-900">Best for:</strong> {bestFor}</p>
        <p><strong className="text-slate-900">Tip:</strong> {tip}</p>
      </div>

      <Link 
        href={href}
        className={buttonColor}
      >
        Learn more about {title} →
      </Link>
    </div>
  );
}

export const PLAN_CARDS_DATA = [
  {
    title: "Daily 10",
    count: 10,
    badge: "Accuracy First",
    badgeColor: "blue",
    description: "A short set of 10 questions is perfect for building confidence. Use this for early learners or when introducing a new skill.",
    goal: "90%+ accuracy",
    bestFor: "1-digit and early 2-digit mental math practice",
    tip: "repeat the same operation for one week",
    href: "/practice-plans/daily-10/",
    buttonColor: "block w-full py-3 text-center text-sm font-bold text-blue-600 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors",
    isRecommended: false,
  },
  {
    title: "Speed 20",
    count: 20,
    badge: "Recommended",
    badgeColor: "emerald",
    description: "A 20-question session adds challenge without feeling long. This is ideal for daily mental arithmetic practice routines.",
    goal: "consistent rhythm, fewer pauses",
    bestFor: "2-digit addition/subtraction, times tables",
    tip: "track your time and try to beat it by a small margin",
    href: "/practice-plans/speed-20/",
    buttonColor: "block w-full py-3 text-center text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl hover:from-emerald-600 hover:to-green-600 transition-all shadow-md hover:shadow-lg",
    isRecommended: true,
  },
  {
    title: "Fluency 50",
    count: 50,
    badge: "Endurance Set",
    badgeColor: "purple",
    description: "A 50-question set builds stamina and helps you stay accurate under pressure.",
    goal: "stable accuracy from start to finish",
    bestFor: "mixed review or classroom drills",
    tip: "if accuracy drops, step back to Speed 20 for a few days",
    href: "/practice-plans/fluency-50/",
    buttonColor: "block w-full py-3 text-center text-sm font-bold text-purple-600 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors",
    isRecommended: false,
  },
];
