//array=>creat shallow copis...share same ref points

const myArr=[0,1,2,3,4,5,6,7,8] 
const myHeroes=["sam","rugh"]

const myArr2=new Array(1,2,3,4,5)
console.log(myArr[0]);

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9)
myArr.shift()
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));
console.log(myArr);

const newArr = myArr.join()

console.log(myArr)
console.log(newArr)

//slice, splice
//splice orig array ko bhi change krta h 
