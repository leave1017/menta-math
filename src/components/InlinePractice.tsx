"use client";

import { useState } from "react";
import { Trainer } from "./Trainer";
import { makeQuestions } from "@/lib/math";
import type { Op } from "@/lib/math";

interface InlinePracticeProps {
  op: Op;
  digits: number;
  count: number;
  plan: string;
  buttonText: string;
  buttonColor: string;
  defaultNote?: string;
}

/**
 * Inline Practice Component
 * 
 * Allows users to start practice directly on the page without navigation.
 * - Expands practice module below the button
 * - Uses existing Trainer component
 * - Collapsible
 */
export function InlinePractice({
  op,
  digits,
  count,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  plan,
  buttonText,
  buttonColor,
  defaultNote,
}: InlinePracticeProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleStart = () => {
    setIsOpen(true);
    // Scroll to practice area after a brief delay
    setTimeout(() => {
      document.getElementById("inline-practice")?.scrollIntoView({ 
        behavior: "smooth", 
        block: "start" 
      });
    }, 100);
  };

  const config = { op, digits1: digits, digits2: digits, count };
  const questions = makeQuestions(config);

  return (
    <div className="space-y-6">
      {/* Start Button */}
      {!isOpen && (
        <div className="text-center py-8">
          <button
            onClick={handleStart}
            className={buttonColor}
          >
            {buttonText}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          {defaultNote && (
            <p className="mt-3 text-sm text-slate-600">{defaultNote}</p>
          )}
        </div>
      )}

      {/* Expanded Practice Module */}
      {isOpen && (
        <div id="inline-practice" className="space-y-4">
          {/* Practice Header with Close Button */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Practice Session</h3>
              <p className="text-sm text-slate-600">{count} questions · {digits}-digit {op}</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Close practice"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Trainer Component */}
          <div className="rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-lg">
            <Trainer initialConfig={config} initialQuestions={questions} />
          </div>

          {/* Collapse Button */}
          <div className="text-center">
            <button
              onClick={() => setIsOpen(false)}
              className="text-sm text-slate-600 hover:text-slate-900 underline"
            >
              ← Hide practice module
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
