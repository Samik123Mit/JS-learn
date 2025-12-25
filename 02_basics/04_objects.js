//const tinderUser = new Object()
const tinderUser={}
tinderUser.id="123dbdbu"
tinderUser.name="samsalys"

console.log(tinderUser);

const regularUser={
    email:"dbehbr@gmail.com",
    fullname:{
    userfullname:{
        firstname:"sam",
        lastname:"mitra"

    }}

}
console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

const obj3={obj1,obj2}
const obj4=Object.assign({},obj1,obj2,obj3)
console.log(obj3);
console.log(obj4);

const obj5={...obj1, ...obj2}
console.log(obj5)

const users=[
    {
        id:1,
        email:"g@gmail.com"
    },
    {
        id:2,
        email:"d@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course={
    coursename:"sam teaches to slay",
    price:"333",
    courseInstructor:"ddede"
}
const {courseInstructor:instructor}=course
console.log(courseInstructor);

const navbar=({company})=>{

}
navbar(company="hitesh")