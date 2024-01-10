let myYoutubeName="Hitesh"

let anothername=myYoutubeName
anothername="chai"  //copy(stack)

console.log(myYoutubeName)
console.log(anothername)

let userOne={
    username:"tush",
    email:"jdnf@gmail.com"
}

let userTwo=userOne //reference(heap)

userTwo.email="tush@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)