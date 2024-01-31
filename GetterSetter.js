 class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get password(){
        return `${this._password}hitesh`
    }
    //getter define kiya hai toh setter bhi define krna hi pdega
    set password(value){
        this._password=value
    }
 }
 const tush=new User('tush@gmail.com','abc')
 console.log(tush.password);