const user={
    username:"sam",
    price:233,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
    }
}

user.welcomeMessage()
user.username="ruh"
user.welcomeMessage()

// browser k ander global obj=> window h 
// this->e mpty in node-> only used in obj, not in fxns

const chai=function(){
    let username="sam"
    console.log(this.username)

}

const cof=()=>{
    let username="sam"
    console.log(this.username);

}

// Normal function

// Value of this depends on how the function is called.

// Arrow function

// this is taken from the parent scope (lexical this).

// const addtwo=(num1,num2)=>{
//     return num1+num2 // explicit
// }

// const addtwo=(num1,num2)=> (num1+num2) ;//implicit
// // no curly braces -> no return kyw

// console.log(addtwo(3,4))

// object ko return krne k liye , u hav to wrap it in parenthesis
const addtwo=(num1,num2)=>({username:"sam"})//parenthesis lagagke autommatically 1 block ban jatah
console.log(addtwo(3,4))

const myArray=[2,34,3,2,3]
normal fxn m this use hoga