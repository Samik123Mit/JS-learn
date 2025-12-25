const userEmail=[]

if(userEmail){
    console.log("got user emalik");
}
else{
    console.log("do not have user email")
}

//falsy values

false,0.-0.BigInt,0n,"",null,undefined,NaN

//truthy values
//"0".'false'." ",[],{},function(){}

if(userEmail.length===0){
    console.log("array is empty");
}

const emptyobj={}

if(Object.keys(emptyobj).length===0){
    console.log("obiject is empty");
}

// false==0->true
//false==''->true
//0==''->true

// log oper &&,||

// nullish coalescing operator(??): null undefined

let val1;
val1=5??10->5

val1=null?? 10->10
val1=undefines??15->undefined
val1=null??10??20->10

console.log(val1);

//ternary opener
//condn?true:false

const iceTeaPrice100
iceTeaPrice<=80? console.log("less tahn 80"): console.log("more than 80")