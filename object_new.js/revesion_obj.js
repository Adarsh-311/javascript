
const mySym = Symbol("Hello");

// object leterals
const adarsh ={
    namee :"Adarsh",
    age : 20,
    [mySym] : "Adarsh",
    "full name" : "Adarsh Pandit",
    Email :"adarshpandit311@gamil.com",
    Address : "Noida",
    mobNo:8541026679
};
Object.freeze(adarsh);
adarsh.Email = "adarshxyz@gmail.com"
console.log(adarsh);

adarsh.fun1 = function(){
    console.log(`How Are You ${this.namee}`);
}
// console.log(adarsh.fun1());

