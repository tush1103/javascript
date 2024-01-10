let mydate=new Date();
console.log(mydate.toString())
console.log(typeof mydate)

let myCreatedDate=new Date(2023,0,23)
console.log(myCreatedDate.toString())
console.log(myCreatedDate.toLocaleString())

let myCreatedDate2=new Date("01-14-2023")
console.log(myCreatedDate2.toLocaleString())


let myTimeStamp=Date.now()  //ms

console.log(myTimeStamp)
console.log(myCreatedDate.getTime()) //ms

console.log(Math.floor(Date.now()/1000))    //seconds