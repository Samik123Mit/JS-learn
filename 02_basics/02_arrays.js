const marvel_heroes=["sam","man","gill"]
const dc_heroes=["super","slash","nay"]

marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
//arrays can take any elem(even arrays)as data\

const all_heroes=marvel_heroes.concat(dc_heroes)//retunr a anew array will all elem concat 
console.log(all_heroes)

const all_new_heroes=[...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes)

const another_array=[1,2,3,[4,5,6],7,[4,3,[4,5,3]]]
const real_another_array =another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("sam"))
console.log(Array.from("sam"))
console.log(Array.from({name:"himansh"}))//interesting case


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));

//JS=>OBJECTS+EVENTS