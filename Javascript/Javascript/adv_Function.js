// //clossure function: it is an inner fun that has access to the outer fun variables.
// const outer=()=>{
//     const greet="hiii";
//     const inner=()=>{
//         const n="bobby";
//         document.write(greet+n+"<br>");
//     }
//     inner();
//   //  document.write(greet+n); doesn't take inner variable.
// }
// outer();
// //bind function:  this method, we can bind an object to a common function, so that the function gives different result when its need.
// var obj1={
//     name:"sonu",
//     city:"tundla",
//     printFunc:function(){
//         document.write(this.name+" "+this.city)
//     }
// }
//  obj1.printFunc();
//  document.write("<br>");
// //
// // var printFun2 = obj1.printFunc; doesn't work.
// var printFun2 = obj1.printFunc.bind(obj1); //this is bind function.
// printFun2();
// document.write("<br>");
// //
// var myobj1={
//     na:"ABC",
//     article:"hello"
// }
// var myobj2={
//     na:"MNO",
//     article:"Hey.."
// }
// var myobj3={
//     na:"XYZ",
//     article:"hiii"
// }
// function myprint(){
//     document.write(this.na+" "+this.article);
// }
// var myfun1 = myprint.bind(myobj1);
// myfun1();
// document.write("<br>")
// var myfun2 = myprint.bind(myobj2);
// myfun2();

// //currying function: transformation of the function of multiple arguments into several functions of a single argument in sequence. 

// function calVolume(l, b ,h){
//     return l*b*h;
// }
// console.log("Volume:"+calVolume(2,2,4));
// //curring
// function myVolume(l){
//     return function(b){
//         return function(h){
//             return l*b*h;
//         }
//     }
// }
// console.log("Volumee"+myVolume(4)(2)(4));
// // arrow fun..
// var adding1 = (a,b,c)=>a+b+c;
// console.log(adding1(2,4,4));
// // currying arrow fun..
// var myadd=(a)=>(b)=>(c)=>a+b+c;
// console.log("add: "+myadd(1)(1)(2));
// // var addition5= myadd(5)(5)(5);
// // addition5();


// //compose function.:--it is a higher order function. H.O.F is any function which takes a function as an argument, returns a function, or both.
const add2 = (x) => x+2;
const subtract1 =(x) => x-1;
const multiply5 = (x) => x*5;

//function execute  inside to outside & right to left.
const result = multiply5(subtract1(add2(4)));
console.log("Result:"+result); 

// function adding(a,b){
//     return a+b;
// }
// function square(z){
//     return Math.pow(z,2);
// }
// // function parent(){
// //     let total=adding(3,2);
// //     console.log(square(total));
// // }
// // parent();
// function parent(a,s){
//     let total=adding(a,s);
//     console.log(square(total));
// }
// parent(3,2);

//call method....adv. func
var obj={
    fname:"Sonu",
    lname:"Thakur",

    myfun: function(hometown,state){
        console.log(this.fname+" "+this.lname+" from:"+hometown+"state:"+state);
    }
}
obj.myfun("tundla","Up");

var obj2={
    fname:"Sachin",
    lname:"Tendulkar"
}
obj.myfun.call(obj2,"mumbai","maharastra");

//apply  method....
obj.myfun.apply(obj2,["Agra","UP"])

// bind method...
var printName = obj.myfun.bind(obj2,"shimla","HP");
printName();

//
var a=function(){
    console.log("Hello Suneel");
}
a();
///


