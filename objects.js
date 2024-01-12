// //creating object using constructor->singleton obj
// //Object.create


// //object literals->not singleto object
// const mySym=Symbol("key1");     //symbol
// const jsUser={
//     name:"Tush",  //stored internally as "name" : "Tush"
//     age:20,
//     "full name":"Tushika Garg",
//     [mySym]:"mykey1"
// }

// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]); //can only be accessed like this bcz we have two words here
// // console.log(jsUser.full name);  //error
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

// //to freeze the object ie no one can now modify the obj
// Object.freeze(jsUser)
// jsUser.name="Momo"      //this wont modify the obj name
// console.log(jsUser);


//singleton obj
// const tinderUser=new Object()
// console.log(tinderUser)

// //non singleton
// const tinderUser2={}
// console.log(tinderUser2)


const obj1={1:'a',2:'b'};
const obj2={3:'a',4:'b'};
const obj3={5:'a',6:'b'};
// const obj4={obj1,obj2,obj3}; //will return object ke andr 3 objects
// const obj4=Object.assign({},obj1,obj2,obj3) //will combine in the target obj({})
// const obj4={...obj1,...obj2} //combine
// console.log(obj4);
// console.log(Object.keys(obj1))
// console.log(Object.values(obj1))
// console.log(Object.entries(obj1))
// console.log(obj1.hasOwnProperty(4))
// console.log(obj1.hasOwnProperty(2))


//object destructuring

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

const {courseInstructor}=course
console.log(courseInstructor);//hitesh
const {courseInstructor:instructor}=course
console.log(instructor);//hitesh 
