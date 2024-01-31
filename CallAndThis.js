function setUsername(username){
    this.username=username
    //yaha pe jo this hai vo ab ye createUser ka le rha hai
}

function createUser(username,email,password){
    this.email=email
    this.password=password
    setUsername.call(this,username)
    //agr hum call use nahi krenge to hmara function to call hoga lekin call hone ke baad stack se uska execution context bhi hat jaega or jo uske andr username ki value hmne set ki this vo bhi hat jaegi, isliye hmne yaha call ki help se this mei refernce leli uske execution context ki
    //call ki help se hmara current execution context (this)dusre function mei pass kr dete hai
}

const chai=new createUser('tush','tush@gmail.com','123')
console.log(chai);