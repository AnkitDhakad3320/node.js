const marvelHero = ["thor" , "Ironman", "spiderman"];
const dc_heros = ["superman", "flash","batman"];

// marvelHero.push(dc_heros);

// console.log(marvelHero);
// console.log(marvelHero[3][1]);

// const allHeros = marvelHero.concat(dc_heros);
// console.log(allHeros);

const allNewHeros = [ ...dc_heros , ...marvelHero];
// console.log(allNewHeros);

const another_array = [ 1 , 2 , 3 , [ 4 , 5 , 6 ] , 7 , [ 6 , 7 , [ 4 , 5 ]]];
// console.log(another_array);

const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

// const newProb = new Set(another_array);
// console.log(newProb);

console.log(Array.isArray("Ankit"));
console.log(Array.from("Ankit"));
console.log(Array.from({"Name" : "Ankit"}));

let score1 = 100
let score2 = 100
let score3 = 100

console.log(Array.of(score1, score2, score3));