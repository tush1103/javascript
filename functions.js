// function sayMyName(){
//     console.log("Hitesh");
// }
// // sayMyName()


// function add(no1,no2){ //data type not required for parameters
//     console.log(no1+no2);
//     //nothing returned by func
// }
// add("2",4)//arguments
// add(2,"4")
// add(3,"a")
// add(3,null)
// const res=add(8,3)
// console.log("res: ",res); //undefined

// function add2(n1,n2){
//     let res=n1+n2;
//     return res;
// }
// const result=add2(3,4);
// console.log("result: ",result);



// function username(name){
//     return `${name} just logged in`
// }
// console.log(username("tush"));

// function username(name){
//     if(!name){
//         console.log("enter a username");
//         return;
//     }
//     return `${name} just logged in`
// }
// console.log(username()); //undefined


// function username(name="sam"){
//     return `${name} just logged in`
// }
// console.log(username()); //sam



function price(val1,...num1){//rest operator
    return num1
}

console.log(price(20,30,40));