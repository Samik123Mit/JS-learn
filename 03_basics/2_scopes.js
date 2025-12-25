let a=10
const b=20
var c=30

//curly braces is a scope


console.log(a)
console.log(b)
console.log(c)

function one(){
    const username="san"
    function two(){
        const website="youtube"
        console.log(username);
    }
console.log(website);
two()
}
one()

if (true){
    const username="sam"
    if(username==="sam"){
        const website="youtube"
        console.log(website+username);
    }
}

///// interesting example

function addone(num){
    return num+1;
}

addone(5);

const addTwo=function(num){
    return num+2;
}

addTwo(5)

//Hoisting means JavaScript moves declarations (not initializations) to the top of their scope before executing the code.

So your code behaves as if variables and functions were declared at the top, even if you wrote them later.
//var is hoisted and initialized with undefined. 