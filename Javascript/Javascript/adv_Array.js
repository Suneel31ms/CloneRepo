const ary=[1,2,4,6];
const doubl=[];
ary.forEach(myfun);
function myfun(value){
    doubl.push(value*2) ;
}
console.log('D:',doubl);
//map method
const mapary=[2,4,6,8];
var m=mapary.map((value)=> value*3);
console.log(m);
// filter method
const aryfilter=[2,3,6,1,10];
var f=aryfilter.filter(value=>value>4);
console.log(f);

//reduce
const reduceArry=ary.reduce((acc,num)=>{
    return acc+num;
},10);
console.log("reduce",reduceArry);

