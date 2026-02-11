import Link from "next/link";

export const metadata = {
  title: "Tips & Guides | Mental Math Strategies",
  description: "In-depth guides and strategies to help students master mental math. Tips for class 1-6, addition, subtraction, multiplication, and division.",
};

// 文章列表数据
const articles = [
  {
    slug: "mental-maths-for-class-2",
    title: "Mastering Mental Maths for Class 2: Strategies, Tips, and Daily Practice",
    description: "Learn the best mental math tricks for class 2 students, including split strategy, compensation method, and 2-digit addition. A complete guide for parents and teachers.",
    date: "2026-02-11",
    readTime: "8 min",
    tags: ["Class 2", "Addition", "Beginners"],
  },
];

export default function TipsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Tips & Guides</h1>
        <p className="text-lg text-slate-600">
          In-depth guides to help students, parents, and teachers master mental math strategies.
        </p>
      </div>

      {/* Articles List */}
      <section>
        <div className="grid gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/tips/${article.slug}/`}
              className="group block rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-xl hover:border-emerald-300 dark:hover:border-emerald-600 transition-all duration-200"
            >
              <div className="flex flex-col gap-4">
                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Title & Description */}
                <div>
                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    {article.description}
                  </p>
                </div>
                
                {/* Meta */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime} read</span>
                  </div>
                  <span className="inline-flex items-center text-sm font-semibold text-emerald-600 group-hover:text-emerald-700">
                    Read article
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* More Coming Soon */}
      <section className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-8 text-center">
        <div className="text-4xl mb-3">📚</div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">More Guides Coming Soon</h3>
        <p className="text-slate-600 max-w-md mx-auto">
          We&apos;re working on more in-depth guides for different grade levels and topics. Check back soon!
        </p>
      </section>

      {/* CTA */}
      <div className="text-center pt-4">
        <p className="text-slate-600 mb-4">Ready to practice what you&apos;ve learned?</p>
        <Link 
          href="/practice/"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl shadow-md hover:shadow-lg hover:from-emerald-600 hover:to-green-600 transition-all"
        >
          Start Practicing Now
          <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
