/* ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000 */

import { type } from "node:os";

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

// 1)filter() all credit transactions 
let type_of_transac=transactions.filter(ele=>ele.type=="credit")
console.log(type_of_transac)

//2.map() transaction amounts
let amount=transactions.map(t=>t.amount)
console.log(amount)

//3.reduce() to calculate final account balance
const finalBalance = transactions.reduce((balance, t) => {
  return t.type === "credit"
    ? balance + t.amount
    : balance - t.amount;
}, 0);
console.log(finalBalance)



// 4) find() the first debit transcation
let debit=transactions.find(ele=>ele.type==="debit")
console.log(debit)
// 5) find index() of transactions with amout of 10000
let index=transactions.findIndex(ele=>ele.amount=="10000")
console.log(index)