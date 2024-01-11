// const myArr=[1,2,3,4,"tush"]
// //arrays create shallow copies
// /*shallow copy: a shallow copy of an object is a copy whose properties share the same references as those of the source object from which the copy was made.As a result, when you change either the source or the copy, you may also cause the other object to change too*/

// /*deep copy: a copy whose properties  do not share the same references as those of the souce object from which the copy was made.As a result, you do not change the other obj on changing one obj.*/

const arr=new Array(1,2,3,4)
// arr.push(5)
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.unshift(9)
// console.log(arr)
// arr.shift()
// console.log(arr)
console.log(arr.includes(9))
console.log(arr.indexOf(9))

// const newarr=arr.join()
// console.log(newarr)
// console.log(arr)

// console.log(typeof newarr)
// console.log(typeof arr)

// console.log("A ",arr)
// const myn1=arr.slice(1,3)
// console.log(myn1)
// console.log("B ",arr)


// const myn2=arr.splice(1,3)  //original array manipulated
// console.log(myn2)
// console.log("C ",arr)


const MActor=["Vicky","Kartik","Shahid","Shah Rukh"];
const FActor=["Katrina","Priyanka"];

// MActor.push(FActor);
// console.log(MActor);

// const allActors=MActor.concat(FActor)
// console.log(allActors)

// const allActors2=[...MActor,...FActor]
// console.log(allActors2)

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Tush"));
console.log(Array.from(123));
console.log(Array.from({name:"tush"}));

console.log(Array.of(10,2,3));