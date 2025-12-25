function sayMyName(){
    // console.log("s");
    // console.log("a");
    // console.log("m");

}
sayMyName()

// function addTwoNumbers(number1,number2){//param
//     console.log(number1+number2);
// }

function addTwoNumbers(number1,number2){//param
    // let result=number1+number2;
    // console.log("sam");
    // return result;
    return number1+number2;
}

function loginUserMessage(username){
    return `${username} just logged in.`
}
function loginUserMessage(username){
    if(!username){
        //console.log("please enter a username:");
        return;
    }
    return `${username} just logged in.`
}
//console.log(loginUserMessage());

addTwoNumbers(3,"a")//argum

//rest operator,split oper
function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500,2000))

const user={
    username:"sam",
    prices:399
}

function handleObject(anyObject){
    console.log(`Username is  ${anyObject.username} ans price is ${anyObject.prices}`);
}
// handleObject(user)
handleObject({
    username:"sam",
    price:399
})
const myNewArray=[299.,34,44,22,3]
function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,32,21,11]));
