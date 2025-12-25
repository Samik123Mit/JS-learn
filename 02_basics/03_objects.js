//singleton

const mySym=Symbol("key1")


//object literals
const JsUser={
    name:"sam",
    age:23,
    [mySym]:"mykey1",
    location:"goa",
    email: "sam@slays.com",
    isLoggedin:false,
    lastlogindays:["monday","saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])  
console.log(JsUser[mySym])


JsUser.email="dnhdjij@gmail.com"
// Object.freeze(JsUser)
JsUser.email="dfedfe@gmail.co"
console.log(JsUser)


JsUser.greeting=function(){
    console.log("hello js user")
}


JsUser.greetingTwo=function(){
    console.log(`hello js user,${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
