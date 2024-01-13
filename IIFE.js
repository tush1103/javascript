//Immediately invoked function Expressions(IIFE)

//two iifes should always be separated by a semicolon otherwise error

(function(){
    console.log("anonymous iife")
})();

((name)=>{
    console.log(`arrow function iife ${name}`)
})("tush");


(function chai(){
    console.log("named iffe")
})()