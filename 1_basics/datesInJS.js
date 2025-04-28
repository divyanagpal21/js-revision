let myDate=new Date();

console.log(myDate.toString());
// Mon Apr 28 2025 19:04:16 GMT+0530 (India Standard Time)

console.log(myDate.toISOString());
// 2025-04-28T13:34:16.033Z

console.log(myDate.toDateString());
// Mon Apr 28 2025

console.log(myDate.toLocaleString());
// 28/4/2025, 7:04:16 pm

console.log(typeof myDate);
// object


let myCreatedDate=new Date(2025,3,28);

console.log(myCreatedDate.toLocaleString());
// 28/4/2025, 12:00:00 am


let myCreatedDateTime=new Date(2025,3,28,7,29);

console.log(myCreatedDateTime.toLocaleString());
// 28/4/2025, 7:29:00 am


let myCreatedDateString=new Date("04-28-2025");

console.log(myCreatedDateString.toLocaleString());
//  28/4/2025, 12:00:00 am


let myTimeStamp=Date.now();

console.log(myTimeStamp);
// 1745848467228

console.log(myCreatedDateTime.getTime());
// 1745805540000

console.log(Math.floor(Date.now()/1000));
// 1745849199

let newDate=new Date();

console.log(newDate.getDate());
// 28

newDate.toLocaleString('default',{
    weekday : "long"
});