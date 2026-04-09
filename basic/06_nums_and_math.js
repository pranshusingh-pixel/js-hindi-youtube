const score = 400
console.log(score);     // 400

const balance = new Number(100)
console.log(balance);   // Number : 400

console.log(balance.toString());     // 400 in string
console.log(balance.toString().length);    // 3
console.log(balance.toFixed(1));       // 100.0

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));     // 123.9 -> 4 digit tak precise krega and gives ans. in string

const hundreds = 1000000
console.log(hundreds.toLocaleString());     // 1,000,000 -> ease in counting zeroes
console.log(hundreds.toLocaleString('en-IN'));  // 10,00,000 -> allign comma's acc. to indian method


// +++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++






