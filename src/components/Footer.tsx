import Link from "next/link";

const footerLinks = {
  product: [
    { label: "Home", href: "/" },
    { label: "Practice", href: "/practice" },
    { label: "Print", href: "/print" },
    { label: "Grades", href: "/grades" },
    { label: "Tips", href: "/tips" },
  ],
  support: [
    { label: "Contact", href: "/contact" },
    { label: "Feedback", href: "/feedback" },
    { label: "FAQ", href: "/#faq" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Left Column: Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-xl shadow-md">
                M
              </div>
              <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Menta Math
              </span>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Free mental math practice for students and adults. Build arithmetic fluency 
              through daily practice with instant feedback. Master addition, subtraction, 
              multiplication, and division.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <p className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Product</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {footerLinks.product.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:underline transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Support Column */}
          <div>
            <p className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Support</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {footerLinks.support.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:underline transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal Column */}
          <div>
            <p className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Legal</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {footerLinks.legal.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:underline transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
            © 2026 mental-math. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
