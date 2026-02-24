const name = "hitesh"
const repoCount = 50

// String contatenation
// console.log(name + repocount + " value");    // -> hitesh50 value

// template string -> mostly to use
// use this syntax
console.log('Hello my name is ${name} and my repo count is ${repoCount');

const gameName = new String('hiteshhc')

console.log(gameName[0]);   // -> h
console.log(gameName.__proto__);  // -> String {""}

console.log(gameName.length);  // -> 9
console.log(gameName.toUpperCase());  // -> HITESHHC      // these doesnot changes the original values because of stack(primitive) 
console.log(gameName.toLowerCase());  // -> hiteshhc
console.log(gameName.charAt(2));     // -> t (at pos. 2)
console.log(gameName.indexOf('h'));  // -> 0 (first occurrence of 'h')
console.log(gameName.lastIndexOf('h'));  // -> 6 (last occurrence of 'h')
console.log(gameName.slice(0, 5));   // -> hites (from index 0 to 4)
// can be changed like -> in "hitesh-hc" if we give slice(0, -3) then it will give us "hitesh" because it will ignore last 3 characters
// and if we give slice(-3) then it will give us "hc" because it will ignore first 6 characters
// and if slice(-8,4) then it will give "ite"

console.log(gameName.substring(0, 5));   // -> hites (from index 0 to 4)
// but substring cant obey (-8,4) it gives as (0,4) because it will ignore the negative value and it will consider it as 0

// also can operate like-> const anotherString = gameName.substring(0, 4)
//                         console.log(anotherString)

console.log(gameName.substr(0, 5));   // -> hites (from index 0, length 5)


const newStringOne = "    hitesh"
console.log(newStringOne);         // -> "    hitesh"
console.log(newStringOne.trim());  // -> "hitesh" (removes leading and trailing whitespace)
//  also trimStart() and trimEnd() can be used to remove only leading or trailing whitespace respectively

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'));   // -> https://hitesh.com/hitesh-choudhary (replaces '%20' with '-')
console.log(url.replaceAll('%20', '-')); // -> https://hitesh.com/hitesh-choudhary (replaces all occurrences of '%20' with '-')

console.log(url.includes('hitesh'));  // -> true (checks if 'hitesh' is present in the url)
 
const gameName2 = "hitesh-hc"

console.log(gameName2.split('-')); // -> ["hitesh", "hc"] (splits the string into an array using '-' as the separator)





// String {'hiteshhc'}
// 0
// : 
// "h"
// 1
// : 
// "i"
// 2
// : 
// "t"
// 3
// : 
// "e"
// 4
// : 
// "s"
// 5
// : 
// "h"
// 6
// : 
// "h"
// 7
// : 
// "c"
// length
// : 
// 8
// [[Prototype]]
// : 
// String
// anchor
// : 
// ƒ anchor()
// at
// : 
// ƒ at()
// big
// : 
// ƒ big()
// blink
// : 
// ƒ blink()
// bold
// : 
// ƒ bold()
// charAt
// : 
// ƒ charAt()
// charCodeAt
// : 
// ƒ charCodeAt()
// codePointAt
// : 
// ƒ codePointAt()
// concat
// : 
// ƒ concat()
// constructor
// : 
// ƒ String()
// endsWith
// : 
// ƒ endsWith()
// fixed
// : 
// ƒ fixed()
// fontcolor
// : 
// ƒ fontcolor()
// fontsize
// : 
// ƒ fontsize()
// includes
// : 
// ƒ includes()
// indexOf
// : 
// ƒ indexOf()
// isWellFormed
// : 
// ƒ isWellFormed()
// italics
// : 
// ƒ italics()
// lastIndexOf
// : 
// ƒ lastIndexOf()
// length
// : 
// 0
// link
// : 
// ƒ link()
// localeCompare
// : 
// ƒ localeCompare()
// match
// : 
// ƒ match()
// matchAll
// : 
// ƒ matchAll()
// normalize
// : 
// ƒ normalize()
// padEnd
// : 
// ƒ padEnd()
// padStart
// : 
// ƒ padStart()
// repeat
// : 
// ƒ repeat()
// replace
// : 
// ƒ replace()
// replaceAll
// : 
// ƒ replaceAll()
// search
// : 
// ƒ search()
// slice
// : 
// ƒ slice()
// small
// : 
// ƒ small()
// split
// : 
// ƒ split()
// startsWith
// : 
// ƒ startsWith()
// strike
// : 
// ƒ strike()
// sub
// : 
// ƒ sub()
// substr
// : 
// ƒ substr()
// substring
// : 
// ƒ substring()
// sup
// : 
// ƒ sup()
// toLocaleLowerCase
// : 
// ƒ toLocaleLowerCase()
// toLocaleUpperCase
// : 
// ƒ toLocaleUpperCase()
// toLowerCase
// : 
// ƒ toLowerCase()
// toString
// : 
// ƒ toString()
// toUpperCase
// : 
// ƒ toUpperCase()
// toWellFormed
// : 
// ƒ toWellFormed()
// trim
// : 
// ƒ trim()
// trimEnd
// : 
// ƒ trimEnd()
// trimLeft
// : 
// ƒ trimStart()
// trimRight
// : 
// ƒ trimEnd()
// trimStart
// : 
// ƒ trimStart()
// valueOf
// : 
// ƒ valueOf()
// Symbol(Symbol.iterator)
// : 
// ƒ [Symbol.iterator]()
// [[Prototype]]
// : 
// Object
// constructor
// : 
// ƒ Object()
// hasOwnProperty
// : 
// ƒ hasOwnProperty()
// isPrototypeOf
// : 
// ƒ isPrototypeOf()
// propertyIsEnumerable
// : 
// ƒ propertyIsEnumerable()
// toLocaleString
// : 
// ƒ toLocaleString()
// toString
// : 
// ƒ toString()
// valueOf
// : 
// ƒ valueOf()
// __defineGetter__
// : 
// ƒ __defineGetter__()
// __defineSetter__
// : 
// ƒ __defineSetter__()
// __lookupGetter__
// : 
// ƒ __lookupGetter__()
// __lookupSetter__
// : 
// ƒ __lookupSetter__()
// __proto__
// : 
// (...)
// get __proto__
// : 
// ƒ __proto__()
// set __proto__
// : 
// ƒ __proto__()
// [[PrimitiveValue]]
// : 
// ""
// [[PrimitiveValue]]
// : 
// "hiteshhc"