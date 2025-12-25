const name = "hitesh"
const repocount=30

//console.log(name+repocount+"Value");
console.log(`Hello my name is ${name} and my repocont is ${repocount}`);

const gameName = new String('hiteshhc')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,4)// -ve values revs start hoga
console.log(anotherString);

const newStringOne=" hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://sam.com/sam%20mitra"

console.log(url.replace('%20','-'))

console.log(url.includes('sam'))

consolw.log(gameName.split('-'));
//use ` ` wala concept=> newer!1
//read mdn