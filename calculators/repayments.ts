// Payment = Amount / Discount Factor
// Discount Factor = { [(1 + i) ^ n] - 1 } / [i(1 + i)^n]
// i = Interest Rate
// n = Number of periodic payments

const weeksInYear: number = 52;
const monthsInYear: number = 12;
const quartersInYear: number = 4;

export type LoanFrequency = "weekly" | "monthly" | "quarterly" | "annually";

interface ILoanData {
  rate: number;
  deposit: number;
  amount: number;
  years: number;
  frequency: LoanFrequency;
}

function getFrequencyInt(frequency: string): number {
  return frequency === "weekly"
    ? weeksInYear
    : frequency === "monthly"
    ? monthsInYear
    : frequency === "quarterly"
    ? quartersInYear
    : frequency === "annually"
    ? 1
    : 0;
}

export function repayments(data: ILoanData): string {
  const {
    rate = 0,
    deposit = 0,
    amount = 0,
    years = 0,
    frequency = "weekly"
  } = data;

  const frequencyInt: number = getFrequencyInt(frequency);
  const frequencyRate: number = rate / frequencyInt;
  const n: number = years * frequencyInt;
  const df: number =
    (Math.pow(1 + frequencyRate, n) - 1) /
    (frequencyRate * Math.pow(1 + frequencyRate, n));

  const payment: number = (amount - deposit) / df;

  return `$${parseFloat(payment.toFixed(2)) || "0"}`;
}
