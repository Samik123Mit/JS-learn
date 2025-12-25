// for of
//["","",""]
//[{},{},{}]

const arr=[1,2,3,4,5]

for (const num of arr) {
    console.log(num);    
}

const greetings="hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

//maps->unique values(key:val)->same order
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")

console.log(map)

for(const [key,value] of map){//map is iterrBLE
    console.log(key,':-',value);
}

const myObject={
    'game1':'NFS',
    'game2':'spiderm'
}

for(const [key,value] of myObject){//OBJ IS NOT ITEARBLEW
    console.log(key,':-',value);
}