 .//IIFE->IMMEDIATELY INVOKED FUNCTION EXPRESSIONS

 (function chai(){//named iife
    console.log(`   db coected`);
 })();// semi colon  is imp here 
 ((name)=>{
    console.log(`db go ${name}`);
 })('sam')

 ()()=>global scpope k pollution ko hatane k ByteLengthQueuingStrategy
