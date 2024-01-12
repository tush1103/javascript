console.log(addOne(4)); //hoisted no error
function addOne(num){
    return num+1
}

console.log(addTwo(5)); //not hoisted,error
const addTwo=function(num){

    return num+1
}