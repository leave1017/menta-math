"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Op, PracticeConfig, Question } from "@/lib/math";
import { OPS, formatMs, makeQuestions, opSymbol } from "@/lib/math";

type Props = {
  initialConfig: PracticeConfig;
  initialQuestions?: Question[];
  showShare?: boolean;
};

type Feedback =
  | { kind: "idle" }
  | { kind: "correct" }
  | { kind: "wrong"; correctAnswer: number };

export function Trainer({ initialConfig, initialQuestions, showShare = false }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [config, setConfig] = useState<PracticeConfig>(initialConfig);
  const [questions, setQuestions] = useState<Question[]>(
    () => initialQuestions ?? makeQuestions(initialConfig),
  );
  const [idx, setIdx] = useState(0);
  const [value, setValue] = useState("");
  const [feedback, setFeedback] = useState<Feedback>({ kind: "idle" });

  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [endedAt, setEndedAt] = useState<number | null>(null);
  const [now, setNow] = useState(() => Date.now());

  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  const current = questions[idx] ?? null;
  const done = idx >= questions.length;

  const restart = useCallback((next: PracticeConfig) => {
    setQuestions(makeQuestions(next));
    setIdx(0);
    setValue("");
    setFeedback({ kind: "idle" });
    setStartedAt(null);
    setEndedAt(null);
    setNow(Date.now());
    setCorrect(0);
    setWrong(0);
    queueMicrotask(() => inputRef.current?.focus());
  }, []);

  const onSubmit = useCallback(() => {
    if (!current || done) return;

    const parsed = Number(value.trim());
    if (!startedAt) setStartedAt(Date.now());

    const isCorrect = Number.isFinite(parsed) && parsed === current.answer;
    const isLast = idx + 1 >= questions.length;

    if (isCorrect) {
      setCorrect((n) => n + 1);
      setFeedback({ kind: "correct" });
      setValue("");
      window.setTimeout(() => {
        setFeedback({ kind: "idle" });
        if (isLast) setEndedAt(Date.now());
        setIdx((i) => i + 1);
      }, 250);
      return;
    }

    setWrong((n) => n + 1);
    setFeedback({ kind: "wrong", correctAnswer: current.answer });
    window.setTimeout(() => {
      setFeedback({ kind: "idle" });
      setValue("");
      if (isLast) setEndedAt(Date.now());
      setIdx((i) => i + 1);
    }, 650);
  }, [current, done, value, startedAt, idx, questions.length]);

  useEffect(() => {
    if (!startedAt || endedAt) return;
    const id = window.setInterval(() => setNow(Date.now()), 250);
    return () => window.clearInterval(id);
  }, [startedAt, endedAt]);

  const elapsedMs = useMemo(() => {
    if (!startedAt) return 0;
    if (endedAt) return endedAt - startedAt;
    return now - startedAt;
  }, [startedAt, endedAt, now]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [idx, done]);

  // Auto-submit when user finishes typing answer
  useEffect(() => {
    if (!current || done || !value.trim() || feedback.kind !== "idle") return;

    const parsed = Number(value.trim());
    if (!Number.isFinite(parsed)) return;

    // Estimate expected answer length to auto-submit
    const expectedDigits = String(Math.abs(current.answer)).length;
    const inputDigits = String(Math.abs(parsed)).length;

    if (inputDigits >= expectedDigits) {
      // Small delay to let user see their input
      const timer = window.setTimeout(() => onSubmit(), 200);
      return () => window.clearTimeout(timer);
    }
  }, [value, current, done, feedback.kind, onSubmit]);

  function handleConfigChange(newConfig: PracticeConfig) {
    setConfig(newConfig);
    restart(newConfig);
  }

  return (
    <div className="mx-auto w-full max-w-4xl space-y-6">
      {/* Main Trainer Card - Enhanced Design */}
      <div className="relative rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-2xl">
        {/* Top decorative bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-t-3xl" />
        
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          {/* Left: Title with icon */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-3xl font-bold shadow-lg">
              {opSymbol(config.op)}
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Mental Math Trainer</div>
              <div className="text-xl font-bold text-slate-900 mt-1">
                {config.digits1}-digit {opSymbol(config.op)} {config.digits2}-digit
              </div>
              <div className="text-sm text-slate-600 mt-0.5">
                {config.count} questions
              </div>
            </div>
          </div>

          {/* Right: Configuration Controls */}
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            <label className="relative">
              <span className="block mb-2 text-xs font-bold text-slate-700 uppercase tracking-wide">
                Operation
              </span>
              <select
                className="w-full appearance-none rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-center text-2xl font-bold hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                value={config.op}
                onChange={(e) => handleConfigChange({ ...config, op: e.target.value as Op })}
              >
                {OPS.map((op) => (
                  <option key={op} value={op}>
                    {opSymbol(op)}
                  </option>
                ))}
              </select>
            </label>

            <label className="relative">
              <span className="block mb-2 text-xs font-bold text-slate-700 uppercase tracking-wide">
                First digit
              </span>
              <select
                className="w-full appearance-none rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-center font-semibold hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                value={config.digits1}
                onChange={(e) => handleConfigChange({ ...config, digits1: Number(e.target.value) })}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((d) => (
                  <option key={d} value={d}>
                    {d}-digit
                  </option>
                ))}
              </select>
            </label>

            <label className="relative">
              <span className="block mb-2 text-xs font-bold text-slate-700 uppercase tracking-wide">
                Second digit
              </span>
              <select
                className="w-full appearance-none rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-center font-semibold hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                value={config.digits2}
                onChange={(e) => handleConfigChange({ ...config, digits2: Number(e.target.value) })}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((d) => (
                  <option key={d} value={d}>
                    {d}-digit
                  </option>
                ))}
              </select>
            </label>

            <label className="relative">
              <span className="block mb-2 text-xs font-bold text-slate-700 uppercase tracking-wide">
                Questions
              </span>
              <input
                type="number"
                min="1"
                max="99"
                className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-center font-semibold hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                value={config.count}
                onChange={(e) =>
                  handleConfigChange({ ...config, count: Math.max(1, Math.min(99, Number(e.target.value) || 10)) })
                }
              />
            </label>
          </div>
        </div>

        {/* Question Area */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-8 border-2 border-slate-200">
            {!done && current ? (
              <>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                    Question {idx + 1} / {questions.length}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {startedAt ? formatMs(elapsedMs) : "Not started"}
                  </div>
                </div>
                
                <div className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 text-center">
                  {current.text}
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                  }}
                >
                  <input
                    ref={inputRef}
                    inputMode="numeric"
                    className="w-full rounded-2xl border-3 border-slate-300 bg-white px-6 py-5 text-3xl text-center font-bold focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all outline-none shadow-sm"
                    placeholder="Type your answer"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    aria-label="Answer"
                  />
                </form>

                <div className="mt-4 min-h-6 text-center">
                  {feedback.kind === "correct" && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-semibold">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Correct!
                    </div>
                  )}
                  {feedback.kind === "wrong" && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-700 font-semibold">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      Answer: {feedback.correctAnswer}
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-white mb-6 shadow-lg">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Completed</div>
                <div className="text-3xl font-bold text-slate-900 mb-8">Great work!</div>

                {/* Results Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4 hover:shadow-md transition-shadow">
                    <div className="text-sm font-semibold text-emerald-700 mb-1">Correct</div>
                    <div className="text-3xl font-bold text-emerald-600">{correct}</div>
                  </div>
                  <div className="rounded-xl border-2 border-rose-200 bg-rose-50 p-4 hover:shadow-md transition-shadow">
                    <div className="text-sm font-semibold text-rose-700 mb-1">Wrong</div>
                    <div className="text-3xl font-bold text-rose-600">{wrong}</div>
                  </div>
                  <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-4 hover:shadow-md transition-shadow col-span-2 lg:col-span-1">
                    <div className="text-sm font-semibold text-blue-700 mb-1">Accuracy</div>
                    <div className="text-3xl font-bold text-blue-600">
                      {correct + wrong > 0 ? Math.round((correct / (correct + wrong)) * 100) : 0}%
                    </div>
                  </div>
                  <div className="rounded-xl border-2 border-purple-200 bg-purple-50 p-4 hover:shadow-md transition-shadow">
                    <div className="text-sm font-semibold text-purple-700 mb-1">Time</div>
                    <div className="text-2xl font-bold text-purple-600">{formatMs(elapsedMs)}</div>
                  </div>
                  <div className="rounded-xl border-2 border-indigo-200 bg-indigo-50 p-4 hover:shadow-md transition-shadow">
                    <div className="text-sm font-semibold text-indigo-700 mb-1">Avg / question</div>
                    <div className="text-2xl font-bold text-indigo-600">
                      {questions.length > 0
                        ? formatMs(Math.round(elapsedMs / questions.length))
                        : "0s"}
                    </div>
                  </div>
                </div>

                {/* Restart Button */}
                <button
                  className="group w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 inline-flex items-center justify-center gap-2"
                  onClick={() => restart(config)}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Restart Practice
                </button>
              </div>
            )}
          </div>

          {/* Timer Sidebar (Desktop) */}
          <div className="hidden lg:block space-y-4 min-w-[180px]">
            <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 text-center shadow-lg">
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">
                Timer
              </div>
              <div className="text-4xl font-bold tabular-nums text-slate-900">
                {startedAt ? formatMs(elapsedMs) : "—"}
              </div>
            </div>

            {showShare && (
              <div className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-4 text-xs text-slate-500 text-center">
                Sharing will be enabled in a later step.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tip Text */}
      <div className="text-center text-sm text-slate-600 px-4">
        💡 <strong>Tip:</strong> Type your answer and it will be checked automatically. Timer starts on your first answer.
      </div>
    </div>
  );
}

