"use strict";
// Payment = Amount / Discount Factor
// Discount Factor = { [(1 + i) ^ n] - 1 } / [i(1 + i)^n]
// i = Interest Rate
// n = Number of periodic payments
Object.defineProperty(exports, "__esModule", { value: true });
var weeksInYear = 52;
var monthsInYear = 12;
var quartersInYear = 4;
function getFrequencyInt(frequency) {
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
function repayments(data) {
    var _a = data.rate, rate = _a === void 0 ? 0 : _a, _b = data.deposit, deposit = _b === void 0 ? 0 : _b, _c = data.amount, amount = _c === void 0 ? 0 : _c, _d = data.years, years = _d === void 0 ? 0 : _d, _e = data.frequency, frequency = _e === void 0 ? "weekly" : _e;
    var frequencyInt = getFrequencyInt(frequency);
    var frequencyRate = rate / frequencyInt;
    var n = years * frequencyInt;
    var df = (Math.pow(1 + frequencyRate, n) - 1) /
        (frequencyRate * Math.pow(1 + frequencyRate, n));
    var payment = (amount - deposit) / df;
    return "$" + (parseFloat(payment.toFixed(2)) || "0");
}
exports.repayments = repayments;
