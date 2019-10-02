export declare type LoanFrequency = "weekly" | "monthly" | "quarterly" | "annually";
export declare type LoanType = "principal_interest" | "interest_only";
interface ILoanData {
    rate: number;
    deposit: number;
    amount: number;
    years: number;
    frequency: LoanFrequency;
    type: LoanType;
}
export declare function repayments(data: ILoanData): number;
export {};
