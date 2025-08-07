function fullName(firstName,lastName) {
    let ans = firstName + " " + lastName;
    return ans;
}
console.log(fullName("Adarsh","Pandit"));


let getmul = function(a,b){
    let res = a*b;
    return res;
}
console.log(getmul(2,10));


let getcount = (n)=>{
    for (let i = 0; i < 100; i++) {
        console.log(i);
        
    }
}
getcount();