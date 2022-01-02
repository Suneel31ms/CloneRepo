//flat().
const aryNo=[1,3,[4,[5]]];
const out=aryNo.flat(3);
 
const entries=['bob','biswas',,,,,,'kumar'];
const entryout=entries.flat();

//flatMap().
const arymap=aryNo.flatMap(value=>value+'!');
console.log(arymap)
// trimStart & trimEnd().
const email='      eddy@gmail.com';
const email2='jonny@gmail.com     ';
const usereamil=email.trimStart();
const useremail2=email2.trimEnd();
//fromEntries().--convert array into object.
const userProfiles=[["commanderTom",33],["banny",23],["sunny",28]];
const profileObj=Object.fromEntries(userProfiles);

//entries()---convert obj into array.
const profileArray=Object.entries(profileObj);

//try catch.

try{
    num=bob+10;
}
catch (er){
    console.log("some error"+er);
}

