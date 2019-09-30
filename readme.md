# @techequipt/finance-calculators

[![npm (scoped)](https://img.shields.io/npm/v/@techequipt/finance-calculators.svg)](https://www.npmjs.com/package/@techequipt/finance-calculators)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@techequipt/finance-calculators.svg)](https://www.npmjs.com/package/@techequipt/finance-calculators)

A range of financial calculators.

## Install

```
$ npm install @techequipt/finance-calculators
```

## Usage

```js
import { repayments } from "@techequipt/finance-calculators";

repayments({
  rate: 0.05,
  deposit: 5000,
  amount: 30000,
  years: 5,
  frequency: "monthly"
});
//=> "$471.78"
```
