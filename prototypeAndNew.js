 //javascript ka prototypal behaviour hota hai mtlb agr usko koi chiz nahi mili to vo apne parent mei dekhegi fir grandparent mei and so on..

 //jo hme this, new keywords milte hai vo bhi prototype se milte hai

 //prototypal inheritance: Prototype inheritance in javascript is the linking of prototypes of a parent object to a child object to share and utilize the properties of a parent class using a child class. Prototypes are hidden objects that are used to share the properties and methods of a parent class to child classes.

 //difference between prototypal and class inheritance:The most important difference between JavaScript class- and prototype-based inheritance is that a class defines a type which can be instantiated at runtime, whereas a prototype is itself an object instance.

 //everything in js is an object,whether it is an array or a string

 function multiply(num){
    return num*5

}
multiply.power=2

// console.log(multiply(5));
// console.log(multiply.power);
// console.log(multiply.prototype);

//hence this proves that function is also an object


// function createUser(username,score){
//     this.username=username
//     this.score=score
//     return this
// }
// //injecting new function increment inside the prototype of function createUser
// createUser.prototype.increment=function(){
//     this.score++
// }

// createUser.prototype.printMe=function(){
//     console.log(`score is ${this.score}`);
// }
// const chai= new createUser('chai',25)
// const tea= new createUser('tea',10)
// console.log(chai);
// chai.printMe()


/*

what happens when the new keyword is used:

a new obj is created: the new keyword initiates the creation of a new js obect

a prototype is linked: the newly created object gets linked to the prototype property of the constructor function. This means that is has access to properties and methods defined on the constructor's prototype.

the constructor is called: the constructor function is called with the specified arguments and this is bound to the newly created obect. If no explicit return value is specified from the constructor, js assumes this, the newly created object to be the intended return value.

the new obj is retured: after the constructor function has been called, if it doesnt return a non primitive value(obj,array,function etc),the newly created object is return


*/


let myName='hitesh     '
console.log(myName.length);
// console.log(myName.truelength);


let myHeroes=['thor','spiderman']

let heroPower={
    thos:'hammer',
    spiderman:"sling",
    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
// Object.prototype.hitesh=function(){
//     console.log('hitesh is present in all objcts');
// }
// heroPower.hitesh()

// myHeroes.hitesh() //since array is also an object, uski prototype mei bhi ye function aa gae


// Array.prototype.heyHitesh=function(){
//     console.log('hey hitesh');
// }

// myHeroes.heyHitesh()
// heroPower.hitesh()
//heroPower doesnt have access to heyHitesh, since heyHitesh is added to prototype of Array and not of object

const User={
    username:'chai'
}
const Teacher={
    makeVideo:true
}

const teachingSuppoert={
    isAvailabe:false
}
const TASupport={
    makeAssignment:'js assignment',
    fullTime: true,
    __proto__:teachingSuppoert  //inheritance
}
//another syntax of inheritance
Teacher.__proto__=User //teacher user ki sb properties access kr skta hai ab(inheritance)
// console.log('1',Teacher.username)
// console.log('2',User.prototype);
// console.log('3',TASupport.isAvailabe);
// console.log('4',TASupport.__proto__);
// console.log('5',User.__proto__);
// console.log('6',Teacher.__proto__);
// console.log('7',Object.getPrototypeOf(User));
// console.log('8',Object.getPrototypeOf(TASupport));
// console.log('9',Object.getPrototypeOf(teachingSuppoert));
// console.log('10',Object.getPrototypeOf(Teacher));

//modern syntax
Object.setPrototypeOf(teachingSuppoert,Teacher)


let anotherUsername="chaiaurcode     "

String.prototype.truelength=function(){
    console.log(this);
    console.log(`${this}`);
    console.log(`true length is : ${this.trim().length}`);
}

anotherUsername.truelength()
"tush  ".truelength()
"ice  ".truelength()