//promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value

// const promise1 = new Promise(function (resolve, reject) {
//   //do an async task
//   //database tasks,cryptography,network call
//   setTimeout(function () {
//     resolve()
//     console.log('async task completed') //this will always run first
//   }, 2000)
// })

// //consumption of promise
// //resolve is connected to then()
// promise1.then(function () {
//   console.log('promise consumed')
// })

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve()
//     console.log('async task2')
//   }, 2000)
// }).then(function () {
//   console.log('async 2 resolved')
// })

// const promise3 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: 'tush', email: 'tush@gmail.com' })
//   }, 1000)
// })

// promise3.then(function (data) {
//   console.log(data)
// })

// const promise4 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false
//     if (!error) {
//       resolve({ username: 'tush', pass: '123' })
//     } else {
//       reject('error: something went wrong')
//     }
//   }, 1000)
// })

// promise4
//   .then(function (data) {
//     console.log(data)
//     return data.username
//   })
//   .then(function (username) {
//     console.log(username)
//   })
//   .catch(function (error) {
//     console.log(error)
//   })
//   .finally(function(){
//     console.log('promise is either resolved or rejected');
//   })

// const promise5 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true
//     if (!error) {
//       resolve({ username: 'js', pass: '123' })
//     } else {
//       reject('error: js went wrong')
//     }
//   }, 1000)
// })

// async function consumePromise5 () {
//   try {
//     const response = await promise5
//     console.log(response)
//   } catch (error) {
//     console.log(error)
//   }
// }
// console.log('hello');
// consumePromise5()
// console.log('hi');

//async function always makes sure that a promise is returned and if it is not returned then js automatically wraps it in a promise which is resolved with its value
// async function getAllUsers () {
//   try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data =await res.json()
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    return res.json()
  })
  .then(data => {
    console.log(data)
  })
  .catch(err => console.log(err))
