//creating object using constructor->singleton obj
//Object.create


//object literals->not singleto object
const mySym=Symbol("key1");     //symbol
const jsUser={
    name:"Tush",  //stored internally as "name" : "Tush"
    age:20,
    "full name":"Tushika Garg",
    [mySym]:"mykey1"
}

console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser["full name"]); //can only be accessed like this bcz we have two words here
// console.log(jsUser.full name);  //error
console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);

//to freeze the object ie no one can now modify the obj
Object.freeze(jsUser)
jsUser.name="Momo"      //this wont modify the obj name
console.log(jsUser);