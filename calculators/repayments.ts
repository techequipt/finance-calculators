// Payment = Amount / Discount Factor
// Discount Factor = { [(1 + i) ^ n] - 1 } / [i(1 + i)^n]
// i = Interest Rate
// n = Number of periodic payments

const weeksInYear: number = 52;
const monthsInYear: number = 12;
const quartersInYear: number = 4;

export type LoanFrequency = "weekly" | "monthly" | "quarterly" | "annually";
export type LoanType = "principal_interest" | "interest_only";

interface ILoanData {
  rate: number;
  deposit: number;
  amount: number;
  years: number;
  frequency: LoanFrequency;
  type: LoanType;
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

export function repayments(data: ILoanData): number {
  const {
    rate = 0,
    deposit = 0,
    amount = 0,
    years = 0,
    frequency = "weekly",
    type = "principal_interest"
  } = data;

  const percentage: number = rate / 100;
  const frequencyInt: number = getFrequencyInt(frequency);
  const frequencyRate: number = percentage / frequencyInt;
  const n: number = years * frequencyInt;
  let payment: number = 0;

  if (type === "principal_interest") {
    // depreciation factor
    const df: number =
      (Math.pow(1 + frequencyRate, n) - 1) /
      (frequencyRate * Math.pow(1 + frequencyRate, n));

    // principal + interest payment
    payment = (amount - deposit) / df;
  } else if (type === "interest_only") {
    // interest only payment
    payment = ((amount - deposit) * percentage) / frequencyInt;
  }

  return parseFloat(payment.toFixed(2)) || 0;
}
