let score = "33abc"

// console.log(typeof score);     // string because of " "
// console.log(typeof(score));   // both are same   - string

let valueInNumber = Number(score)  // to convert use capital (N)  // by this string converted into number
// console.log(typeof valueInNumber);   // only the type converted to number not value
// console.log(valueInNumber);

// string
// string
// number
// NaN -> not a number(33abc), for null -> 0, for undefined -> NaN  
// for boolean value - true(1), false(0), pure string which can't be converted into number(NaN)   
// output till now till now 

// "33" => 33
// "33abc" => NaN
// true => 1, false => 0
 
let isLoggedIn =1    // we have to convert this in boolean

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true, 0=> false
// "" => false
// "pranshu" => true

let someNumber = 33

let stringNumber = String(someNumber)

// console.log(stringNumber);          // 33
// console.log(typeof stringNumber);   // string

// ******************** Operations ************************* //

let value = 3
let negValue = -value       // operation
// console.log(negValue);
// console.log(2+2);     => 4
// console.log(2-2);     => 0
// console.log(2*2);     => 4
// console.log(2**3);    => 8(2 ki power 3)
// console.log(2/3);     => 0
// console.log(2%3);     => 2

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2 
// console.log(str3);          // hello hitesh

// console.log("1" + 2);        // 12
// console.log(1 + "2");        // 12
// console.log("1" + 2 + 2);    // 122 
// console.log(1 + 2 + "2");    // 32     -> because of some rule or guideline we go from first to last sometimes check from ECMA site

// console.log(3 + 4 * 5 % 3);  // very messy code so try to make it better like ((3 + 4) * (5 % 3)) or more


// console.log(+true);    // 1   -> this is also conversion type but very confusing so don't use it

// console.log(true+);    // not possible

// console.log(+"");      // 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2      // try to make code readable

let gameCounter = 100
gameCounter++;     // 101      if ++ gameCounter then also => 101 no change shown but there is change developed (study from mdn or ecma)
console.log(gameCounter);


