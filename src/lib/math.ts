import { z } from "zod";

export const OPS = ["add", "sub", "mul", "div"] as const;
export type Op = (typeof OPS)[number];

export type PracticeConfig = {
  op: Op;
  digits1: number; // 第一个数字的位数 (1-3)
  digits2: number; // 第二个数字的位数 (1-3)
  count: number;   // 题目数量 (1-99)
};

export type Question = {
  id: string;
  op: Op;
  a: number;
  b: number;
  text: string;
  answer: number;
};

export const OpSchema = z.enum(OPS);
export const DigitsSchema = z.coerce.number().int().min(1).max(8);
export const CountSchema = z.coerce.number().int().min(1).max(99);
export type Count = z.infer<typeof CountSchema>;
export type Digits = z.infer<typeof DigitsSchema>;

export function opLabel(op: Op) {
  switch (op) {
    case "add":
      return "Addition";
    case "sub":
      return "Subtraction";
    case "mul":
      return "Multiplication";
    case "div":
      return "Division";
  }
}

export function opSymbol(op: Op) {
  switch (op) {
    case "add":
      return "+";
    case "sub":
      return "−";
    case "mul":
      return "×";
    case "div":
      return "÷";
  }
}

function randInt(min: number, max: number) {
  const lo = Math.ceil(min);
  const hi = Math.floor(max);
  return Math.floor(Math.random() * (hi - lo + 1)) + lo;
}

export function rangeForDigits(digits: number) {
  // 1位数从1开始，避免0+0=0, 0×0=0等无意义题目
  if (digits === 1) return { min: 1, max: 9 };
  if (digits === 2) return { min: 10, max: 99 };
  if (digits === 3) return { min: 100, max: 999 };
  // 支持更多位数
  const min = Math.pow(10, digits - 1);
  const max = Math.pow(10, digits) - 1;
  return { min, max };
}

export type GenerateOptions = {
  min?: number;
  max?: number;
  focusNumber?: number | null;
};

export function makeQuestion(
  op: Op,
  digits1: number,
  digits2: number,
  opts: GenerateOptions = {}
): Question {
  const range1 = rangeForDigits(digits1);
  const range2 = rangeForDigits(digits2);
  const focus = opts.focusNumber ?? null;

  const id = `${op}-${digits1}x${digits2}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const blank = "____";
  const sym = opSymbol(op);

  if (op === "add") {
    const a = randInt(range1.min, range1.max);
    const b = randInt(range2.min, range2.max);
    return { id, op, a, b, answer: a + b, text: `${a} ${sym} ${b} = ${blank}` };
  }

  if (op === "sub") {
    let a = randInt(range1.min, range1.max);
    let b = randInt(range2.min, range2.max);
    // 确保 a >= b (避免负数)
    if (b > a) [a, b] = [b, a];
    return { id, op, a, b, answer: a - b, text: `${a} ${sym} ${b} = ${blank}` };
  }

  if (op === "mul") {
    const a = randInt(range1.min, range1.max);
    const b = focus != null ? focus : randInt(range2.min, range2.max);
    return { id, op, a, b, answer: a * b, text: `${a} ${sym} ${b} = ${blank}` };
  }

  // div: guarantee integer result by constructing dividend = divisor × quotient
  // 修复：确保商有意义（不只是1），根据位数选择合适的商范围
  
  // 根据除数位数决定商的范围
  // 1位数除数：商 2-9（产生如 56÷7=8 的题目）
  // 2位数除数：商 2-9（产生如 240÷30=8 的题目）
  // 3位数及以上：商 2-9
  const quotientMin = 2;
  const quotientMax = digits2 === 1 ? 9 : 9;
  const quotient = randInt(quotientMin, quotientMax);
  
  // 生成除数
  const divisor = focus != null ? focus : randInt(range2.min, range2.max);
  
  // 被除数 = 除数 × 商（被除数可能超出原始range1范围，这是可接受的）
  const dividend = divisor * quotient;

  return {
    id,
    op,
    a: dividend,
    b: divisor,
    answer: quotient,
    text: `${dividend} ${sym} ${divisor} = ${blank}`,
  };
}

export function makeQuestions(config: PracticeConfig): Question[] {
  const out: Question[] = [];
  for (let i = 0; i < config.count; i++) {
    out.push(makeQuestion(config.op, config.digits1, config.digits2));
  }
  return out;
}

export function formatMs(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return m > 0 ? `${m}m ${s}s` : `${s}s`;
}

