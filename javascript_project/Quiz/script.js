const quiz = [
    {

        question: "Q1: Grand Central Terminal, Park Avenue, New York is the world's",

        A: "largest railway station",
        B: "highest railway station",
        C: "longest railway station",
        D: "None of the above",
        ans:"ans1"
    },
    {

        question: "Q2: Entomology is the science that studies",

        A: "Behavior of human beings",
        B: "Insects",
        C: "The origin and history of technical and scientific terms",
        D: "The formation of rocks",
        ans:"ans2"
    },
    {
    question: "Q3: Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",

    A: "Asia",
    B: "Africa",
    C: "Europe",
    D: "Australia",
    ans:"ans2"
    },
    {
        question: "Q4: Garampani sanctuary is located at",
    
        A: "Junagarh, Gujarat",
        B: "Diphu, Assam",
        C: "Kohima, Nagaland",
        D: "Gangtok, Sikkim",
        ans:"ans2"
        },
        {
            question: "Q5:For which of the following disciplines is Nobel Prize awarded?",
        
            A: "Physics and Chemistry",
            B: "Physiology or Medicine",
            C: "Literature, Peace and Economics",
            D: "All of the above",
            ans:"ans4"
            }
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showscore = document.querySelector("#showscore");
const quesDiv = document.querySelector("#ques");
let quesCount = 0;
score=0;
const loadQuestion = () =>{
   question.innerHTML=(quiz[quesCount].question);
   option1.innerHTML = (quiz[quesCount].A);
   option2.innerHTML = (quiz[quesCount].B);
   option3.innerHTML = (quiz[quesCount].C);
   option4.innerHTML = (quiz[quesCount].D);
  
}
loadQuestion();
const getCheckAns = () =>{
    let answer;
    answers.forEach(curAnsElem =>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
           
        }
    });
    return  answer;
}
const disableCheck = () =>{
            answers.forEach((curAnsElem)=>curAnsElem.checked=false)
} 
submit.addEventListener("click",() =>{
    const checkAnswer = getCheckAns();
    console.log(checkAnswer);
    if(checkAnswer ===quiz[quesCount].ans){
        score++;
    }
    quesCount++; 

    disableCheck();

    if(quesCount< quiz.length){
        loadQuestion();
    }else{
        showscore.innerHTML = `
        <h3>Your Scored ${score}/${quiz.length}</h3>
        <button class="btn" onclick="location.reload()">Reset</button>`;
        showscore.classList.remove("scoredisplay");
        submit.classList.add("smt");
        quesDiv.classList.add("hideques");
        
    }
});