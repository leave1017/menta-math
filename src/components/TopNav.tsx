import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/practice", label: "Practice" },
  { href: "/print", label: "Print" },
  { href: "/grades", label: "Grades" },
  { href: "/tips", label: "Tips" },
] as const;

export function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/90 backdrop-blur-lg shadow-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-xl shadow-md group-hover:shadow-lg transition-shadow">
            M
          </div>
          <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Menta Math
          </span>
        </Link>
        <nav className="flex items-center gap-2">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              {i.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

