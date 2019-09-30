export declare type LoanFrequency = "weekly" | "monthly" | "quarterly" | "annually";
interface ILoanData {
    rate: number;
    deposit: number;
    amount: number;
    years: number;
    frequency: LoanFrequency;
}
export declare function repayments(data: ILoanData): string;
export {};
