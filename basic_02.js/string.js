const name = "Adarsh pandit "
const repoCount = 100

console.log(name + repoCount + " value");
console.log(`hello my name is ${name} and repCount is ${repoCount}`);

const gammeName = new String('Adarsh-pr-ati-hast')
// console.log(gammeName[0]);
// console.log(gammeName.__proto__);
// console.log(gammeName.length);
// console.log(gammeName.toUpperCase());
// console.log(gammeName.charAt(1));
// console.log(gammeName.indexOf('r'));

const newString = gammeName.substring(0,4);
console.log(newString);

const anotherString = gammeName.slice(-6,5)
console.log(anotherString);

const newStringOne = "    Adarsh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://adarsh.com/adarsh%20pratihast"
console.log(url.replace('%20','-'));
console.log(url.includes('adarsh'));

console.log(gammeName.split('-'));

