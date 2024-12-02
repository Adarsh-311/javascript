function sayMyName() {
    console.log("A");
    console.log("D");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    
}
// sayMyName();

// function addTwoNumbers(number1,number2)   // Parameters
// {
//     console.log(number1+number2);
    
// }

// addTwoNumbers(5,10); // arguments
// addTwoNumbers("5",10);
// addTwoNumbers("a",10);

function addTwoNumbers(number1,number2){
    // console.log(number1+number2);
    // let result = number1+number2
    // return result;
    return number1+number2;
}
const result = addTwoNumbers(3,7);
// console.log("Result :",result);

function loginUserMessage(userName = "ak"){
    if(userName === undefined){
        console.log("Please enter a userName");
        
    }
    return`${userName} just logged in`
}
// console.log(loginUserMessage("Adarsh"));
// console.log(loginUserMessage());
// console.log(loginUserMessage("adarsh"));//it override the vaue of ak hare ak is the default value 

function calculateCartPrice1(...num) {
    return num;
}
console.log(calculateCartPrice1(200,400,600,1000,2000));

function calculateCartPrice(a,b,c,...num1) {
    return num1;
}
console.log(calculateCartPrice(200,400,600,1000,2000));








