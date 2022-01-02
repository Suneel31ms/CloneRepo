//ternary operator....

//define a function..
function experiencePonts(value) {
    var r = value > 60;
    return r;
}
//invoke a experiencePonts fun..
var ans = experiencePonts(66) ? "You are retiered" : "you are doing job";

var answer = "this is a" + (experiencePonts(true) ? " true" : " false");

///
var userInput = prompt("Enter your age");
var checkAge;
function myVoting(age) {
    checkAge = (age >= 18) ? "Eligible for voting" : "Not Eligible for voting";
    return checkAge;
}
alert(myVoting(userInput));


