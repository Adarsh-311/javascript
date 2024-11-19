// Object.create this method is known as constructer method
// object literals

const mySym = Symbol("key1");


const a = {
    name : "Adarsh",
    "Full Name" :"Adarsh Pratihast",
    age :20,
    [mySym] : "myKey1",
    location : "Noida",
    Email : "adarshpandit311@mail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday","Sunday"]
};
// console.log(a.Email);
// console.log(a["Email"]);
// console.log(a["Full Name"]);

a.Email = "xyz@gmail.com"
// Object.freeze(a); It is used to freeze the objet after freez function we cannot change the values
a.Email = "abc@gmail.com"

// console.log(a);

a.greeting = function() {
    console.log("I am unStopabe");
    
}

a.greetingTwo = function(){
    console.log(`How Are You ${this.name}`);
    
}
console.log(a.greeting());
console.log(a.greetingTwo());
