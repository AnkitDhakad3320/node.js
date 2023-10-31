const name = "Ankit"
const repocount = 50

// console.log(name + repocount + "value" )
console.log(` My Name is ${name} and My repocount is ${repocount}`)

const gameName = new String ( 'Ankit-hc-dk')
// console.log(gameName[1],gameName[9])
// console.log(gameName.__proto__);

// console.log(gameName.length)
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// console.log(gameName.indexOf(+'t'));

const newString = gameName.substring(0,4);
// console.log(newString);

const anotherString = gameName.slice(-9,5);
// console.log(anotherString);

const newStringOne = "    Ankit    " 
// console.log(newStringOne);
// console.log(newStringOne.trim())


const url = "https://ankit.com/ankit%20dhakad/"

console.log(url.replace('%20', ' '))

console.log(url.includes('sunder'))

console.log(gameName.split('-'));