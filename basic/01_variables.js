const accountId = 14553     // const can't be changed
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"            // two ways to declare variables -> let(most) and var
accountCity = "Jaipur"     // also a way to declare var without keyword But not good
let accountState;      // gives undefined

// accountId = 2 // not allowed because const can't be changed

accountEmail = "hc@hc.com"   //
accountPassword = "212121"   //  these can be changed 
accountCity = "Bengaluru"    //

console.log(accountId);     // to output

/*
prefer not to use var
because of issue in block scope and functional scope
scope -> {} curly braces
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);   // shorthand for console.log in tabular form

