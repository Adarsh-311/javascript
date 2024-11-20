
// const tinderUser = new Object()  Singleton Object
// console.log(typeof tinderUser);
const tinderUser1 = {}  // none-singleton object
tinderUser1.id = "123abc"
tinderUser1.name = "Adarsh Pandit"
tinderUser1.isLoggedIn = false
// console.log(tinderUser1);

const regularUser = {
    email : "xyz@gmail.com",
    fullName : {
        userFullName : {
            firstName :"Adarsh",
            lastName : "Pandit"
        }
    }
}

// console.log(regularUser.fullName?.userFullName.firstName); // funllName? it is known as optional chaning used to check value where it is present or not

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
// const obj3 = Object.assign({},obj1,obj2); //here {} act as target and obj1,obj2 act as source
const obj3 = {...obj1,...obj2}
// console.log(obj3);

console.log(Object.keys(tinderUser1));
console.log(Object.values(tinderUser1));
console.log(Object.entries(tinderUser1));

console.log(tinderUser1.hasOwnProperty('isLoggedIn'));
console.log(tinderUser1.hasOwnProperty('isLogged'));














