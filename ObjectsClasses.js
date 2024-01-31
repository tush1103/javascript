// console.log(Math.PI);



const chai={
    name:'ginger chai',
    price:250,
    isAvailable:true,

}
// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,'name'));

// Object.defineProperty(chai,'name',{
//     writable:false,
//     enumerable:false
// })

console.log(Object.getOwnPropertyDescriptor(chai,'name'));

console.log(Object.getOwnPropertyDescriptor(Math,"PI"));



for (let [key,val] of Object.entries(chai)) {
    console.log(`${key} : ${val}`);
}

//agr hum chai mei name property mei enumerable ko false krde to loop uspe itearte nahi hoga

Object.defineProperty(chai,'name',{
    enumerable:false
})

for (let [key,val] of Object.entries(chai)) {
    console.log(`${key} : ${val}`);
}