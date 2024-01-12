{} //scope

//global scope
var c=300;
if(true){
    let a=10;
    const b=20;
    var c=30; 
    //local scope
}
// console.log(a); //error
// console.log(b); //error
console.log(c); //30(var has a global scope)

//scope in your browser is different from scope in the editor in node js environment