const myArray = [0,10,2,3,4,5];
console.log(myArray[1]);

const myHeros = ["Dinesh Pratihast","Mamta Devi","Anshu Jha","Amisha Pratihast"];
console.log(myHeros[1]);

// const myArray2 = new Array[1,2,33,4,5]

// Array Methods

myArray.push(12) // used to insert element at the end of array
myArray.push(22)
myArray.pop()  // used to delete the last element in the array
myArray.unshift(20) // used to add element on the first index ate the array
myArray.shift()  // used to remove the first element in the array

console.log(myArray.includes(5)); // used to check weather the element is present in the arrayor not
console.log(myArray.includes(15));

const newArray = myArray.join()

console.log(myArray);
console.log(newArray);

//Slice,splice

console.log("A ",myArray);

const myn1 = myArray.slice(1,3)
console.log(myn1);
console.log("B ",myArray);

const myn2 = myArray.splice(1,3)
console.log(myn2);
console.log("C ",myArray);







