//prefered:- 
const accountId = 1234567;

let accountPassword="sdfghjk";

let namee;



//not preffered:-

var accountEmail="abs@email.com";
//(issue in block scope and functional scope)


accountCity="Delhi";





console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,namee]);

//console.table prints everything(given in array format) in table format
//if something is declared but not defined then it is "undefined"