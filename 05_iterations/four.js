const myObject={
    js:'javascript',
    cpp:'C++',
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myObject) {
    console.log(myObject[key]);
    console.log(`${key} shortcut is for ${myObject[key]}`);  
    
}

const programming=["js","rb","py","java","cpp"]

for(const key in programming){
    console.log(key);// arr ki index from 0 
    console.log(programming[key]);//values

}

//maps r not iterable
