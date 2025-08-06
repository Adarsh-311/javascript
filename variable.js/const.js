const a = 10;
console.log(a);

// a = 20;
// console.log(a);TypeError: Assignment to constant variable.


const z = 30;
console.log(z);
const person = { name: "Adarsh" };
person.name = "Rahul"; // ✅ Allowed
console.log(person.name); // Rahul
let i = 0;
while (i < 5) {
  console.log("i =", i);
  i++;
}
