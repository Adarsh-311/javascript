const user = {
    userName : "Adarsh",
    price : 999,

    welcoeMessage : function(){
        console.log(`${this.userName}, welcome to website`);
        // console.log(this);
        
        
    }
}
// user.welcoeMessage()
// user.userName = "AKP"
// user.welcoeMessage()
// console.log(this);

// function chai(){
//     let userName="Adarsh"
//     console.log(this.userName);
    
// }
// chai()

// const chai = function(){
//     let userName = "Adarsh"
//     console.log(this.userName);
    
// }
// chai()



// const chai = () =>{
//     let userName = "Adarsh"
//     console.log(this.userName);
//     console.log(this);
    
// }
// chai()

// const addTwo = (num1,num2) =>{
//     return num1+num2
// }
// console.log(addTwo(5,5));


// const addTwo = (num1,num2) => (num1+num2)
// console.log(addTwo(5,5));

const addTwo = (num1,num2) => ({userName:"Adarsh"})
console.log(addTwo(5,5));