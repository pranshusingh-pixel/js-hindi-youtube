// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);        // same datatypes
// console.log(2 == 1);
// console.log(2 != 1);        // these comparisons are very basic gives ans as boolean  

// console.log("2" > 1);       // true
// console.log("02" > 1);      // true       

// typescript don't allow to compare different datatypes but in some cases it does so it doesn't give predictable results

console.log(null > 0);      // false
console.log(null == 0);     // false
console.log(null >= 0);     // true -> here for >= it converts null into 0 so doesn't give predicted result

console.log(undefined == 0);  // false
console.log(undefined > 0);   // false
console.log(undefined < 0);   // false

// working operation of >, == and >= are different in javascript
//  in JS - comparison and equality check both are different

//  === -> in this datatype is also compared 

console.log("2" == 2);     // true -> because in == conversion occurs but
console.log("2" === 2);    // false -> because this also compare datatype

//  all this confusion or unpredicted result found when we campare different datatypes

