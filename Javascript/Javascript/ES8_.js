// .padStart()
//.padEnd

//Object.values
//Object.entries
//Object.keys

let obj = {
    username0:"santa",
    username1:"Rudolf",
    username2:"Mr.Grinch"
}
//
Object.keys(obj).forEach((key, index)=>{
    console.log(key, obj[key]);
});
//
Object.values(obj).forEach(value=>{
    console.log(value);
});
Object.entries(obj).forEach(en=>{
    console.log(en);
})
Object.values(obj).forEach((v,i)=>{
    console.log("index:"+i+" "+"value:"+v);
})