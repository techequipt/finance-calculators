# TechEquipt Finance Calculators

A range of financial calculators.

## Install

```
$ npm install --save git+ssh://git@gitlab.com:techequipt/finance-calculators.git#master
```

## Usage

```js
import { repayments } from "finance-calculators";

repayments({
  rate: 0.05,
  deposit: 5000,
  amount: 30000,
  years: 5,
  frequency: "monthly"
});
//=> "$471.78"
```
