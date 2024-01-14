const greetings = 'Hello'
for (const greet of greetings) {
  // console.log(greet);
}

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States Of America')
map.set('Fr', 'France')
map.set('IN', 'INDIA')
//maintains the order
// console.log(map);

for (const entry of map) {
  // console.log(entry);//prints array of each entry
}
for (const [key, value] of map) {
  // console.log(key," :- ",value);
}

//we cannot iterate object like this:

const obj = {
  name: 'tush',
  gp: 16
}
// for(const [key,value] of obj){
// console.log(key," :- ",value);//error
// }

//we can iterate objects through for in loop:

const ob1 = {
  js: 'javascript',
  cpp: 'c++'
}
for (const key in ob1) {
  //  console.log(ob1[key]);
}

//we can use for in for array too
const arr = [1, 2]
for (const key in arr) {
  // console.log("index: ",key);//prints indexes
  // console.log("elem: ",arr[key]);
}

//forin doesnt work on map

//for each loop:for each ek array ka hi parameter hai, see in prototype
//it is also high order array loop
const coding = ['js', 'java']
//callback function doesnt have a name
coding.forEach(function (item) {
  // console.log(item);
})
//parameter of foreach is a callback function

// coding.forEach((item)=>console.log(item))//arrow function as callback

function printMe (item) {
  console.log(item)
}
// coding.forEach(printMe)

//usually for each ke paas 3 parameters aate hai-> item,index,array
coding.forEach((item, index, arr) => {
  // console.log(item,index,arr)
})

const myCoding = [
  {
    name: 'javascript',
    filename: 'js'
  },
  {
    name: 'cplusplus',
    filename: 'cpp'
  }
]

myCoding.forEach(({ name, filename }) => {
  // console.log(name,filename);
})

// const coding1 = ['js', 'cpp']
// const values = coding1.forEach(language => {
// //   console.log(language)
//   return language;
// })
// console.log(values)//undefined->forEach doesnt return any value

const myNums = [1, 2, 3, 4, 5, 6]
const values = myNums.filter(
  num => num > 3 //4,5,6
)
// console.log(values);

const values2 = myNums.filter(
  num => num + 3 //1,2,3,4,5,6
)
// console.log(values2);

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 }
]

const userBooks = books.filter(book => book.genre === 'History')
userBooks.forEach(book => {
  // console.log(book.title)
})
// console.log(userBooks);

const mynums = [1, 2, 3, 4]
const newnums = mynums.map(num => num > 1) //false,true,true,true
// console.log(newnums)
const newnums2 = mynums.map(num => num + 1) //2,3,4,5
// console.log(newnums2)

//chaining
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
const nums = numbers
  .map(num => num * 10)
  .map(num => num + 1)
  .filter(num => num > 40)
// console.log(nums)

//reduce method

//works like accoumulator=accumulator+currentValue
//on start, accoumulator has the initialValue
const numb = [1, 2, 3]
const total = numb.reduce((acc, currVal) => acc + currVal, 0)
//here 0 is the initital value of accumulator
console.log(total)

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"Python course",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"data science course",
        price:12999
    }
]

const totalSum=shoppingCart.reduce((totalPrice,item)=>totalPrice+item.price,0)
console.log(totalSum);