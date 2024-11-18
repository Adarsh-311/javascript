const score = 100
console.log(score);

const score1 = new Number(200)
console.log(score1);

console.log(score1.toString().length);

console.log(score1.toFixed(2)); //toFixed(2) gives the value like 200.00 and same if fixed value is (1) it will gives 200.0 

const otherNumber = 123.456789

console.log(otherNumber.toPrecision(4));

const rupees = 1000000
console.log(rupees.toLocaleString('en-IN'));

// ++++++++++++++++++++++++++++++  Math   ++++++++++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-10));
console.log(Math.round(4.6));
console.log(Math.floor(46.6));
console.log(Math.ceil(46.6));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

// console.log(Math.floor(Math.random()*(max-min + 1))+min);

console.log(Math.floor(Math.random()*(max-min +1))+min);










