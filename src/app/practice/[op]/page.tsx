import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { OPS, OpSchema, opLabel, type Op } from "@/lib/math";
import { Breadcrumb } from "@/components/Breadcrumb";

type Props = {
  params: Promise<{ op: string }>;
};

// SEO content for each operation
const opContent: Record<Op, {
  title: string;
  description: string;
  intro: string;
  skills: { title: string; description: string }[];
  tips: string[];
  faqs: { question: string; answer: string }[];
}> = {
  add: {
    title: "Addition Mental Math Practice | Online Addition Drills",
    description: "Free addition mental math practice online. Build speed with 1-digit, 2-digit, and 3-digit addition drills. Master mental addition strategies for all skill levels.",
    intro: "Addition is the foundation of all mathematical operations. Mental addition practice builds the number sense and fluency that supports multiplication, algebra, and advanced mathematics. Our addition drills range from single-digit sums for beginners to challenging 3-digit mental addition for advanced students. Regular practice develops automatic recall of addition facts and efficient mental strategies for larger numbers.",
    skills: [
      { title: "Number Bonds", description: "Instant recall of number pairs that sum to 10, 20, or 100" },
      { title: "Adding by Making Tens", description: "Regroup numbers to create friendly tens (8+5 = 8+2+3 = 10+3 = 13)" },
      { title: "Left-to-Right Addition", description: "Add larger place values first for mental calculation" },
      { title: "Compensation", description: "Add a round number and adjust (47+29 = 47+30-1 = 76)" },
    ],
    tips: [
      "Master single-digit addition facts until they are instant (under 3 seconds)",
      "Learn all number bonds to 10 and 20 before moving to larger numbers",
      "For 2-digit addition, try adding tens first, then ones",
      "Use compensation: round one number up, add, then subtract the difference",
      "Practice with real-world scenarios like calculating tips or totals",
    ],
    faqs: [
      {
        question: "How can I improve my mental addition speed?",
        answer: "Start by ensuring single-digit facts are automatic through daily practice. Then learn mental strategies like making tens, left-to-right addition, and compensation. Practice regularly with our timed drills, starting with shorter sets and gradually increasing difficulty."
      },
      {
        question: "What mental addition should a child know by grade?",
        answer: "Grade 1: Add within 20. Grade 2: Add 2-digit numbers mentally. Grade 3-4: Add 3-digit numbers using strategies. Grade 5-6: Add multi-digit numbers and decimals efficiently. Our grade-level practice sets match these expectations."
      },
      {
        question: "Why is mental addition important?",
        answer: "Mental addition builds number sense—an intuitive understanding of how numbers work together. This foundation supports all higher math. It also provides practical life skills for everyday calculations and builds confidence in mathematical ability."
      },
    ],
  },
  sub: {
    title: "Subtraction Mental Math Practice | Online Drills",
    description: "Free subtraction mental math practice. Master strategies with 1-3 digit drills. Build fluency with subtraction facts.",
    intro: "Mental subtraction requires understanding the relationship between addition and subtraction. When you know that 8 + 7 = 15, you also know that 15 - 7 = 8. Our subtraction practice develops this inverse relationship while building efficient mental strategies for subtracting larger numbers. From basic facts to 3-digit mental subtraction, our drills help students at every level build fluency and confidence.",
    skills: [
      { title: "Subtraction as Addition", description: "Think \"what plus 7 equals 15?\" instead of \"15 minus 7\"" },
      { title: "Counting Up", description: "For problems like 63-58, count up from 58 to 63 (5 steps)" },
      { title: "Compensation", description: "Subtract a round number and adjust (83-29 = 83-30+1 = 54)" },
      { title: "Breaking Apart", description: "Subtract in parts: 74-38 = 74-30-8 = 44-8 = 36" },
    ],
    tips: [
      "Connect subtraction to addition: if you know 8+7=15, you know 15-7=8",
      "For close numbers, count up instead of subtracting down",
      "Use compensation: round the subtrahend, calculate, then adjust",
      "Break larger subtractions into smaller, manageable steps",
      "Practice fact families together to reinforce connections",
    ],
    faqs: [
      {
        question: "Why do children struggle with mental subtraction?",
        answer: "Subtraction is often taught as a separate operation, but it is closely related to addition. Children who struggle often lack automatic addition facts or have not learned the inverse relationship. Building strong addition facts and teaching subtraction as \"finding the missing addend\" often helps."
      },
      {
        question: "What are the best mental subtraction strategies?",
        answer: "The best strategy depends on the numbers involved. For close numbers (43-39), count up. For round numbers (65-30), subtract directly. For awkward numbers (72-48), use compensation (72-50+2). Our practice helps develop flexibility in choosing strategies."
      },
      {
        question: "How do I practice 2-digit subtraction mentally?",
        answer: "Start with subtracting multiples of 10 (67-30). Then practice subtracting numbers close to multiples of 10 using compensation. Finally, work on general 2-digit subtraction using breaking apart or counting strategies. Build fluency gradually with our progressive drills."
      },
    ],
  },
  mul: {
    title: "Times Tables Practice | Multiplication Mental Math",
    description: "Free times tables and multiplication practice. Master all tables to 12×12. Build multiplication fluency online.",
    intro: "Times table mastery is a critical milestone in mathematics education. Students who know their multiplication facts automatically can focus their mental energy on understanding more complex concepts. Our multiplication practice covers basic times tables through multi-digit mental multiplication. Whether you are learning your 2, 5, and 10 times tables or mastering challenging facts like 7×8 and 6×9, our drills provide the repetition needed for automatic recall.",
    skills: [
      { title: "Times Table Facts", description: "Instant recall of all products from 2×2 to 12×12" },
      { title: "Commutative Property", description: "If you know 7×8, you know 8×7 (same answer)" },
      { title: "Doubling Strategy", description: "4× is double 2×, 8× is double 4×, 6× is double 3×" },
      { title: "Distributive Property", description: "7×6 = 7×5 + 7×1 = 35+7 = 42" },
    ],
    tips: [
      "Learn times tables in order: 2, 5, 10 first, then 3, 4, then 6, 7, 8, 9",
      "Focus on the \"hard\" facts: 6×7, 6×8, 7×8, 8×9, 7×9 need extra practice",
      "Use patterns: 9× answers digits always sum to 9 (e.g., 9×7=63, 6+3=9)",
      "Practice commutative pairs together: 7×8 and 8×7",
      "Aim for 3-second recall of any times table fact",
    ],
    faqs: [
      {
        question: "What order should I learn times tables?",
        answer: "Start with 2s, 5s, and 10s (easiest patterns). Then 3s and 4s. Then 6s, 7s, 8s, and 9s (hardest). Learn 11s and 12s last if required. This order builds on easier facts to help learn harder ones (e.g., 8× is double 4×)."
      },
      {
        question: "How long does it take to learn times tables?",
        answer: "With daily 10-minute practice, most students can achieve fluency in 3-6 months. The key is consistency—daily short sessions are far more effective than weekly cramming. Our practice tools track progress and highlight facts that need more work."
      },
      {
        question: "My child knows times tables but is slow. How to speed up?",
        answer: "If your child knows the facts but is slow, they may be calculating rather than recalling. Use timed drills with our trainer to build automaticity. Focus especially on facts that take longer than 3 seconds. Competitive elements like beating personal bests can help motivation."
      },
    ],
  },
  div: {
    title: "Division Mental Math Practice | Online Drills",
    description: "Free division mental math practice. Build fluency by connecting to multiplication facts. Progress to multi-digit division.",
    intro: "Mental division builds on multiplication fluency. When you instantly know that 7×8=56, you also know that 56÷7=8 and 56÷8=7. Our division practice reinforces this inverse relationship while developing efficient strategies for dividing larger numbers. From basic division facts to 2-digit divisors, our drills help students build the fluency needed for fractions, ratios, and algebra.",
    skills: [
      { title: "Division as Inverse", description: "56÷8=? Think: 8×?=56, so 56÷8=7" },
      { title: "Fact Families", description: "Connect 6×7=42 with 42÷6=7 and 42÷7=6" },
      { title: "Dividing by Powers of 10", description: "Move decimal point left for ÷10, ÷100, ÷1000" },
      { title: "Chunking", description: "Divide large numbers by subtracting known multiples" },
    ],
    tips: [
      "Always connect division to multiplication: think \"times what equals?\"",
      "Practice fact families: 6×7=42, 7×6=42, 42÷6=7, 42÷7=6",
      "For division by 2, halve the number; for ÷4, halve twice",
      "Estimate quotients before calculating to check reasonableness",
      "For larger divisions, use chunking: subtract known multiples step by step",
    ],
    faqs: [
      {
        question: "Why is division harder than multiplication?",
        answer: "Division is the inverse of multiplication, and our brains find inverse operations more challenging. Additionally, division is often taught later and with less practice time. The solution is to always practice division alongside multiplication, reinforcing the connection between 7×8=56 and 56÷7=8."
      },
      {
        question: "How can I improve mental division skills?",
        answer: "First, ensure multiplication facts are automatic—division speed depends on multiplication recall. Then practice explicitly connecting them: when you see 56÷8, train yourself to think \"8 times what is 56?\" Use our division drills daily, starting with basic facts before attempting larger numbers."
      },
      {
        question: "What division facts should students know?",
        answer: "Students should know all division facts within 144 (corresponding to times tables to 12×12). This means instant recall of facts like 72÷8=9, 81÷9=9, 144÷12=12. Our practice covers all these facts and helps identify which ones need more work."
      },
    ],
  },
};

/**
 * Generate static params for all operation types
 */
export async function generateStaticParams() {
  return OPS.map((op) => ({
    op: op,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { op } = await params;
  const result = OpSchema.safeParse(op);
  if (!result.success) return {};

  const content = opContent[result.data];
  return {
    title: content.title,
    description: content.description,
  };
}

export default async function OperationPage({ params }: Props) {
  const { op } = await params;
  const result = OpSchema.safeParse(op);
  if (!result.success) notFound();

  const op_data = result.data;
  const label = opLabel(op_data);
  const content = opContent[op_data];

  const digits = [1, 2, 3] as const;
  const counts = [10, 20, 50] as const;

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Home", href: "/" },
          { label: "Practice", href: "/practice/" },
          { label: label, href: `/practice/${op_data}/` },
        ]}
      />

      {/* Hero Section */}
      <header className="max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {label} Practice
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Build speed and accuracy with mental {label.toLowerCase()} drills. 
          Choose your difficulty level and question count to start practicing.
        </p>
      </header>

      {/* Introduction */}
      <section className="max-w-4xl">
        <p className="text-slate-700 leading-relaxed">
          {content.intro}
        </p>
      </section>

      {/* Practice Grid */}
      <section>
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Choose Your Difficulty
        </h2>
        <div className="space-y-4">
          {digits.map((d) => (
            <div key={d} className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="text-lg font-semibold text-slate-900 mb-3">{d}-Digit {label}</div>
              <div className="grid gap-2 sm:grid-cols-3">
                {counts.map((c) => (
                  <Link
                    key={c}
                    href={`/p/${op_data}/${d}/${c}/`}
                    className="group rounded-xl border bg-slate-50 p-4 text-center transition-all hover:bg-emerald-50 hover:border-emerald-300"
                  >
                    <div className="text-2xl font-bold text-slate-900 group-hover:text-emerald-600">{c}</div>
                    <div className="text-sm text-slate-600">questions</div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mental Math Skills */}
      <section className="max-w-4xl">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Mental {label} Skills to Master
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {content.skills.map((skill, i) => (
            <div key={i} className="rounded-xl border bg-slate-50 p-4">
              <div className="font-medium text-slate-900">{skill.title}</div>
              <div className="mt-1 text-sm text-slate-600">{skill.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="max-w-4xl">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Tips for Mental {label}
        </h2>
        <div className="rounded-xl border bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm">
          <ul className="space-y-3">
            {content.tips.map((tip, i) => (
              <li key={i} className="flex gap-3 text-slate-700">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium flex items-center justify-center">
                  {i + 1}
                </span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {content.faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900">{faq.question}</h3>
              <p className="mt-2 text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <nav className="max-w-4xl pt-6 border-t">
        <div className="flex items-center justify-between">
          <Link 
            href="/practice/"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            ← All Operations
          </Link>
          <Link 
            href="/grades/"
            className="text-sm text-slate-500 hover:text-slate-700"
          >
            Practice by Grade
          </Link>
        </div>
      </nav>
    </div>
  );
}
