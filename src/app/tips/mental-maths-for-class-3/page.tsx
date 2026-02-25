import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Mastering Mental Maths for Class 3: Times Tables and Fast Calculation",
  description: "Essential mental math strategies for class 3 students. Master times tables, simple division, and 3-digit addition with our daily practice guide.",
};

export default function MentalMathsClass3Page() {
  // JSON-LD Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Mastering Mental Maths for Class 3: Times Tables, Division, and 2026 Fast Tricks",
    "description": "Essential mental math strategies for class 3 students. Master times tables, simple division, and 3-digit addition with our daily practice guide.",
    "author": {
      "@type": "Organization",
      "name": "MentalMath.cc"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MentalMath.cc",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mentalmath.cc/icon.png"
      }
    },
    "datePublished": "2026-02-17",
    "dateModified": "2026-02-17",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://mentalmath.cc/tips/mental-maths-for-class-3/"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <article className="mx-auto max-w-4xl">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tips", href: "/tips/" },
            { label: "Mental Maths for Class 3", href: "/tips/mental-maths-for-class-3/" },
          ]}
        />

        <header className="mt-8 mb-12">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
            <time dateTime="2026-02-17">February 17, 2026</time>
            <span>•</span>
            <span>10 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Mastering Mental Maths for Class 3: Times Tables, Division, and 2026 Fast Tricks
          </h1>
          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            As students enter Grade 3, the focus shifts to multiplication and logic. Here is how to stay ahead.
          </p>
        </header>

        <div className="prose prose-lg prose-slate max-w-none">
          <section className="mb-12">
            <p className="text-lg leading-relaxed text-slate-700">
              Entering Class 3 is a major milestone in a child&apos;s mathematical development. This is the year where they move beyond basic addition and dive into the world of <strong>multiplication facts</strong> and simple division. Building strong <strong>mental maths for class 3</strong> skills is essential for tackling the more complex word problems they will encounter in higher grades.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
              What Should a Class 3 Student Master?
            </h2>
            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              By the end of Class 3, students should shift from &quot;calculating&quot; to &quot;recalling&quot; key facts. 
            </p>
            
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-6">
              <h3 className="font-bold text-emerald-900 mb-4">Class 3 Benchmarks:</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 mt-0.5">★</span>
                  <span><strong>Instant Recall of Times Tables:</strong> Mastery of 2, 5, 10, 3, 4, and 6 tables.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 mt-0.5">★</span>
                  <span><strong>3-Digit Addition:</strong> Mentally solving $120 + 340$ or $450 + 290$.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 mt-0.5">★</span>
                  <span><strong>Basic Division:</strong> Understanding that $24 \div 4$ is just the reverse of $4 \times 6$.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 mt-0.5">★</span>
                  <span><strong>Estimation:</strong> Rounding numbers to the nearest 10 or 100 to quickly guess a total.</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
              3 Essential Mental Math Tricks for Class 3
            </h2>

            {/* Trick 1: Double and Double Again */}
            <div className="mb-8 border-l-4 border-blue-500 pl-6">
  <h3 className="text-xl font-bold text-slate-900 mb-2">1. The "Double and Double Again" (for x4)</h3>
  <p className="text-slate-700 mb-4">Don't let your child struggle with the 4 times table. Use the double-double trick.</p>
  <div className="bg-slate-100 p-5 rounded-xl font-mono text-slate-800 leading-relaxed">
    <div className="text-sm text-slate-500 mb-2">// Example: 12 x 4</div>
    <div className="flex flex-col gap-1">
      <p>• <span className="text-blue-700 font-bold">Step 1:</span> Double 12 = 24</p>
      <p>• <span className="text-blue-700 font-bold">Step 2:</span> Double 24 = <strong className="text-lg text-blue-600">48</strong></p>
    </div>
  </div>
</div>

            {/* Trick 2: Friendly Numbers */}
<div className="mb-8 border-l-4 border-purple-500 pl-6">
  <h3 className="text-xl font-bold text-slate-900 mb-2">2. Friendly Numbers for 3-Digit Math</h3>
  <p className="text-slate-700 mb-4">When adding numbers near a hundred, round up and then compensate.</p>
  <div className="bg-slate-100 p-5 rounded-xl font-mono text-slate-800 leading-relaxed">
    <div className="text-sm text-slate-500 mb-2">// Example: 298 + 150</div>
    <div className="flex flex-col gap-1">
      <p>• <span className="text-purple-700 font-bold">Think:</span> 300 + 150 = 450</p>
      <p>• <span className="text-purple-700 font-bold">Adjust:</span> 450 - 2 = <strong className="text-lg text-purple-600">448</strong></p>
    </div>
  </div>
</div>

            {/* Trick 3: Multiplication Fact Families */}
            <div className="mb-8 border-l-4 border-green-500 pl-6">
  <h3 className="text-xl font-bold text-slate-900 mb-2">3. Multiplication Fact Families</h3>
  <p className="text-slate-700 mb-4">Stop treating division as a separate subject. Use multiplication facts to solve division.</p>
  <div className="bg-slate-100 p-5 rounded-xl font-mono text-slate-800">
    <div className="flex items-center gap-8 justify-center py-2">
      <div className="text-center">
        <div className="text-2xl font-bold">6 x 7 = 42</div>
        <div className="text-xs text-slate-500 mt-1">Multiplication</div>
      </div>
      <div className="text-2xl text-green-500">⇄</div>
      <div className="text-center">
        <div className="text-2xl font-bold text-green-700">42 ÷ 7 = 6</div>
        <div className="text-xs text-slate-500 mt-1">Division</div>
      </div>
    </div>
  </div>
</div>  
            
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
              Why Daily Practice is Crucial
            </h2>
            <p className="text-lg leading-relaxed text-slate-700 mb-4">
              Class 3 math is often where children decide if they &quot;like&quot; math or not. Regular <strong>mental math practice</strong> builds the confidence needed to enjoy the subject. Our <strong>mental math trainer</strong> helps by providing a low-pressure environment to master these facts.
            </p>
          </section>
        </div>

        <div className="mt-12 mb-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-2xl shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105"
          >
            Practice Class 3 Math Now
          </Link>
        </div>

        {/* Internal Linking to Class 2 */}
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Still mastering the basics?</h3>
          <p className="text-slate-600 mb-4">If your child is still working on 2-digit addition or subtraction within 20, check out our Class 2 guide.</p>
          <Link href="/tips/mental-maths-for-class-2/" className="text-blue-600 font-bold hover:underline">
            Read: Mental Maths for Class 2 Guide →
          </Link>
        </div>
      </article>
    </>
  );
}