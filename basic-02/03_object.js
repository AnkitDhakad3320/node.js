//singleton 
// object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Ankit",
    "full name" : "Ankit dhakad",
    age: 18,
    [mySym] : "mykey1",
    location: "Bhopal",
    email: "ankit@google.com",
    isLoggedIn: false,
    lastloginDays: ["Monday" , "Saturday"]

}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
console.log(typeof "mykey1");


jsUser.email = "ankit@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email= "ankit@microsoft.com"

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user")
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());