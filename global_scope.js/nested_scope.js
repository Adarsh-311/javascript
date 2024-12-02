function one(){
    const userName = "Adarsh"

    function two(){
        const website = "Youtube"
        console.log(userName);
        
    }
    // console.log(website);
    two()
}
one()


if(true){
   const userName = "Adarsh"
    if(userName==="Adarsh"){
        const website = " Youtube"
        console.log(userName + website);
        
    }
    // console.log(website);
    
}
// console.log(userName);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addOne(5));


function addOne(num){
    return num +1
}

console.log(addTwo(5));

const addTwo = function (num){
    return num + 2
}