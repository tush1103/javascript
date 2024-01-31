// const user={
//     usrname:"tush",
//     loginCount:8,
//     getUserDetails:function(){
//         // console.log(usrname);      //undefined
//         console.log('this.username',this.usrname); //tush
//         console.log('this',this);
//     }
// }

// console.log('user.username',user.usrname);
// console.log('user.getUserDetails()',user.getUserDetails());
// console.log('this outside',this);

// const promiseone=new Promise()
// const date=new Date()

//new is a constructor function which allows you to make multiple instances from a single object only



//'this' is an object




// function User(username,loginCount){
//     this.username=username
//     this.loginCount=loginCount

//     return this
// }

// const userOne=User('tushika',12)


// console.log(userOne);

// const userTwo=User('tush',10)
// console.log(userOne); //this will give output tush and 10 even though we are printing userOne and not usertwo kuki yaha pe humne new instance nahi bnaya or vo purane 'User' ke instance mei hi values update kr rha hai

//solution to this is create new instance using new keyword

// console.log(userTwo);



function User(username,loginCount){
    this.username=username
    this.loginCount=loginCount

    // return this
}

const userOne= User('tushika',12)


console.log(userOne);

const userTwo= new User('tush',10)
console.log(userOne);
console.log(userTwo);
console.log(userTwo.constructor);
// console.log(userOne.constructor); //error as we have not used new keyword with userOne

//new keyword creates an empty object which is called an instance

//new keyword se ek constructor function call hota hai or jo bhi parameters hote hai vo unko wrap krke return kr deta hai to hme 'return this' krne ke bhi need nahi hoti in case of 'new'

//3rd step: this keyword mei ye sb arguments inject ho jate hai
//4th step: ye this automatically return ho jata hai  