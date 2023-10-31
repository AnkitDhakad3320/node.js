// primitive type 
// 7 type : string , boolean , number , null , undefine , symbol , BigInt

const score = 100
const scoreValue = 1001.9

const isLoggedIn = false
const outSideTemp = null
let email;

const id = Symbol( '123' );
const anotherId = Symbol( '123' );

console.log(id === anotherId);

const bigNumber = 5646414643131644654565n

// reference ( non primitive )
// array , objects , functions 

const heros = ["sakitman" , "junierji " , "hatim"]
 let myObj = {
    name: "ankit", 
    age: 26,
    
}

const myFunction = function(){
    console.log("hello world");
}

// console.log(typeof anotherId );

// ========

// stack  (primitive) , heep (non-primitive )

let youtubeName = " Ankit@google.com"

let anotherName = youtubeName
anotherName = "chaiAurBhai"

console.log(anotherName)
console.log(youtubeName)

let user = {
    email: " user@gmail.com",
    upi: "user@ybl"
}

let usertwo = user
usertwo.email = " user@google.com"

console.log(user);
console.log(usertwo);
