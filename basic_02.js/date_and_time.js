let myDate = new Date()
console.log(myDate)
console.log(myDate.toTimeString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toString());
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);

let myCreateDate = new Date(2024,0,17)
console.log(myCreateDate.toLocaleDateString());
console.log(myCreateDate.toLocaleString());

let myCreateDate1 = new Date("2024-01-15")
console.log(myCreateDate1.toLocaleString());

let timeStamp = Date.now()
console.log(timeStamp);
console.log(myCreateDate1.getTime())
console.log(Date.now());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getDate());





