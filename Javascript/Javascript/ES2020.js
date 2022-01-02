//BigInt
var num=9007199254740991;
console.log(num);
num+=10;
num+=1;
var newNum = 9007199254741000n+1n;
console.log('s',num);
console.log('s',newNum);
//Optional Chaining Operator ?.
let will_pokemon={
    pikachu:{
        species:'mouse pokemon',
        height:0.4,
        weight:6
    }
}
let andrie_pokemon={
    raichu:{
        species:'mouse pokemon',
        height:0.4,
        weight:7,
        power:false
    }
}
var weight1=will_pokemon.pikachu.weight;
console.log('pikachu',weight1);
// if(andrie_pokemon && andrie_pokemon.pikachu && andrie_pokemon.pikachu.weight){
//     var weight2=andrie_pokemon.pikachu.weight
//     console.log('raichu',weight2); 
// }else{
//     var weight2=undefined;
//     console.log('raichu',weight2);
// }
var weight2=andrie_pokemon?.pikachu?.weight;
console.log('raichu',weight2);
//Nullish Coalescing Operator ??
var power= andrie_pokemon?.raichu?.power ?? 'no power';
console.log(power);

//
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

///................ES2021..........
var st="ztm is best of the best";
console.log(st);
var st1=st.replaceAll("best","worst");
