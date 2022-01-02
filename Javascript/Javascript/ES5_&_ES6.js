// let + const.
const player='sonu';
let experience = 100;
let wizardLevel= false;

if(experience>90){
    let wizardLevel = true;
    const player = "ramu";
    console.log("inner: "+player);
    console.log("wizard: "+wizardLevel);
}
console.log(wizardLevel+" :ss");
console.log("outer: "+player);

//destructuring....
const obj={
    name:'monu',
    age:38,
    level:true
}
//1.order way
// const name=obj.name;
// const age=obj.age;
// let level=obj.level;
//2.new way
const {name,age}=obj;
console.log(name);
console.log(age);
console.log(obj.level);
//
function calculate(a,b){
    var sum=a+b;
    var sub=a-b;
    var multiply=a*b;
    var divide=a/b;
    return [sum, sub, multiply, divide];
}
const [sum, sub, multiply, divide]=calculate(4,2)

//


//object properties...
//1.
// const obj1={
//     [fname + lname]:"ranvir singh",
//     age:36,
//     ['ray' + 'smith']:"hello",
//     [1+2]:"heyy"
// }
//2.
// const a="simon";
// const b=true;
// const c={};
// const objj={
//     a,b,c
// }
//Template strings...
const namee="sally";
const agee=34;
const pet="dog";

var detail = "Hello "+namee+ "Your age is:"+agee+"and you have a"+pet;

var detailss=`Hello ${namee} Your age is ${agee-4} and you have a ${pet}`;
console.log(detail);
console.log(detailss);

//default arguments...
function myfun(nam="", ag="38", city="delhi"){
    return `Hello ${nam} Your age is ${ag} and you are live in ${city}`;
}
console.log(myfun("sameer"));

//symbol datatype...
var sym=Symbol();
var s1=Symbol("ram");
var s2=Symbol("ram");
if(s1===s2){
    console.log("true");
}
else{
    console.log("false")
}

// arrow function.....
function myFun(x,y){
    return x+y;
}
console.log(myFun(2,3));

var myFunction = (x,y) => x+y;
console.log(myFunction(4,4));