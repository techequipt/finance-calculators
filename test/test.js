"use strict";
var expect = require("chai").expect;
var index = require("../dist/index.js");
describe("repayments function test", () => {
  it("should return 471.78", () => {
    var result = index.repayments({
      rate: 5,
      deposit: 5000,
      amount: 30000,
      years: 5,
      frequency: "monthly",
      type: "principal_interest"
    });
    expect(result).to.equal(471.78);
  });
  it("should return 104.17", () => {
    var result = index.repayments({
      rate: 5,
      deposit: 5000,
      amount: 30000,
      years: 5,
      frequency: "monthly",
      type: "interest_only"
    });
    expect(result).to.equal(104.17);
  });
  it("should return 76.92", () => {
    var result = index.repayments({
      rate: 0,
      deposit: 0,
      amount: 20000,
      years: 5,
      frequency: "weekly",
      type: "principal_interest"
    });
    expect(result).to.equal(76.92);
  });
});
