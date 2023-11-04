// ====Array====

const myArray = [ 0 , 1 , 2 , 3 , 4 , 5 ];
const myHero = [ " saktimaan" , " nagarjun" ];

const myArray2 = new Array(1, 2, 3, 4);

// console.log(myArray[1]);

// myArray.push(6);
// myArray.push(7);

// myArray.pop();
// myArray.unshift(9);
// myArray.shift()

// console.log(myArray);
// console.log(myArray.includes(9));
// console.log(myArray.indexOf(9));

const newArray = myArray.join()
console.log(myArray);
console.log(myArray2);
console.log(newArray);

console.log("A" , myArray)

const myNew = myArray.slice( 1 , 3 );
console.log(myNew);
console.log("B" , myArray);

const myNew2 = myArray.splice(1 ,3 );
console.log(myNew2);
console.log(myArray);

