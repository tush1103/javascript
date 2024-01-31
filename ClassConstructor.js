// //after es6 classes are only syntactical sugar 

// class User{
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password
//     }
// //no need to write 'function' here inside class
//     encryptPassword(){
//         console.log(this);
//         console.log(this.password);
//         console.log(typeof(this.password));
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return this.username.toUpperCase()
//     }
// }

// const chai=new User('chai','gmail.com','123')
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());


// //behing the scenes

// function User2(username,email,password){
//     this.username=username
//     this.email=email
//     this.password=password
//     // return this
// }
// User2.prototype.encryptPassword=function(){
//     return `${this.password}abc`
// }

// const tea=new User2('chai','chai@gmail.com','345')
// console.log(tea);



//inheritance

// class User{
//     constructor(username){
//         this.username=username
//     }
//     logMe(){
//         console.log(this);
//         console.log(`username is: ${this.username}`);
//     }
// }

// class Teacher extends User{
//     constructor(username,email,password){
//         super(username) //now we dont need to use 'call'
//         //yaha pr jb super call kiya to vo parent class pe apne aap this(current execution context) bhej dega or Teacher ke username ko set kr dega
//         this.email=email
//         this.password=password
//     }
//     addCourse(){
//         console.log(`a new course is added by ${this.username}`);
//     }
// }

// const chai=new Teacher('chai','g.com','124')
// chai.addCourse()
// chai.logMe()

// const tea=new User('masala')
// tea.logMe()

// console.log(chai instanceof Teacher);




//staticprop

class User{

    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `123`
    }
}

const tush=new User('tush')
// console.log(tush.createId());

//if you do not want to give access of a method/property to any object of this class, add static in front of that method/property


class Teacher extends User{
    constructor(name,email){
        this.email=email
        super(name)
    }
}

const iphone=new Teacher('iphone','i@gmail.com')
iphone.logMe()
iphone.createId() //error snce createId is static