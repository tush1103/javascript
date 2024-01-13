const greetings="Hello";
for (const greet of greetings) {
    // console.log(greet);
}

const map=new Map();
map.set("IN","India");
map.set("USA","United States Of America")
map.set("Fr","France")
map.set("IN","INDIA")
//maintains the order
// console.log(map);

for(const entry of map){
    // console.log(entry);//prints array of each entry
}
for(const [key,value] of map){
    // console.log(key," :- ",value);
}

//we cannot iterate object like this:

const obj={
    name:"tush",
    gp:16
}
// for(const [key,value] of obj){
    // console.log(key," :- ",value);//error
// }

//we can iterate objects through for in loop:

const ob1={
    js:"javascript",
    cpp:"c++"
}
for (const key in ob1) {
    //  console.log(ob1[key]);   
    }


//we can use for in for array too
const arr=[1,2]
for (const key in arr) {
    // console.log("index: ",key);//prints indexes
    // console.log("elem: ",arr[key]);
}

//forin doesnt work on map



//for each loop:for each ek array ka hi parameter hai, see in prototype
//it is also high order array loop
const coding=["js","java"]
//callback function doesnt have a name
coding.forEach(function(item){
    // console.log(item);
})
//parameter of foreach is a callback function

// coding.forEach((item)=>console.log(item))//arrow function as callback

function printMe(item){
    console.log(item);
}
// coding.forEach(printMe)

//usually for each ke paas 3 parameters aate hai-> item,index,array
coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
})


const myCoding=[
    {
        name:"javascript",
        filename:"js"
    },
    {
        name:"cplusplus",
        filename:"cpp"
    }
]

myCoding.forEach(({name,filename})=>{
    console.log(name,filename);
})