var start = document.getElementById("btn1");
var areaName = document.getElementById("userName");
var textName = document.getElementById("enterName");
var quiz = document.getElementById("quiz");
var container = document.getElementById("container");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var progress = document.getElementById("progress");
var scoreDiv = document.getElementById("scoreContainer");
var restart = document.getElementById("btn2");

var questions = [
    {
        question : "A 1985 North Atlantic expedition led by Robert Ballard discovered the wreck of what famous ship 73 years after it sank?",
        choiceA : "sultana",
        choiceB : "atlantic",
        choiceC : "titanic",
        choiceD : "vestris",
        correct : "C"
    },{
        question : "A bit of folk wisdom warns that when you point a finger at someone, how many fingers are pointing back at you?",
        choiceA : "one",
        choiceB : "two",
        choiceC : "three",
        choiceD : "four",
        correct : "C"
    },{
        question : "A Darwinist is,by definition,a believer of what concept?",
        choiceA : "transformation",
        choiceB : "religious belief",
        choiceC : "human intervention",
        choiceD : "evolution",
        correct : "D"
    },{
        question : "A group of what birds is known as “murder”?",
        choiceA : "crows",
        choiceB : "pidgeons",
        choiceC : "eagles",
        choiceD : "seagulls",
        correct : "A"
    },{
        question : "A musician can play notes on which of these instruments while inhaling?",
        choiceA : "piano",
        choiceB : "guitar",
        choiceC : "harmonica",
        choiceD : "bass",
        correct : "C"
    },{
        question : "A muumuu is a loose-fitting dress traditionally worn where?",
        choiceA : "egypt",
        choiceB : "hawaii",
        choiceC : "mexico",
        choiceD : "india",
        correct : "B"
    },{
        question : "A person known to doctors as a “universal donor” has which of these blood types?",
        choiceA : "ab",
        choiceB : "b",
        choiceC : "o",
        choiceD : "a",
        correct : "C"
    },{
        question : "A popular tourist destination in Europe, Prague is the capital of what country?",
        choiceA : "romania",
        choiceB : "czech republic",
        choiceC : "bulgaria",
        choiceD : "hungary",
        correct : "B"
    },{
        question : "A traditional food for the Japanese New Year,mochi is a cake primarily made of what ingredient?",
        choiceA : "sushi",
        choiceB : "rice",
        choiceC : "cheese",
        choiceD : "mochi",
        correct : "B"
    },{
        question : "A “cinephile” is a person who is a devoted and knowledgeable fan of what?",
        choiceA : "movies",
        choiceB : "tv shows",
        choiceC : "sports",
        choiceD : "music",
        correct : "A"
    },{
        question : "According to a 2011 report by Forbes, what country counts 115 billionaires among its citizens, second only to the U.S.?",
        choiceA : "canada",
        choiceB : "united kingdom",
        choiceC : "china",
        choiceD : "russia",
        correct : "C"
    },{
        question : "According to legend, what did Mohammad Ali do with his 1969 Olympic gold medal?",
        choiceA : "cooked it and ate it",
        choiceB : "donated it",
        choiceC : "sold it",
        choiceD : "tossed it in a river",
        correct : "D"
    },{
        question : "Which of these countries remained officially neutral during both WWI and WWII?",
        choiceA : "france",
        choiceB : "serbia",
        choiceC : "switzerland",
        choiceD : "sweden",
        correct : "D"
    },{
        question : "Poison ivy belongs to a diverse botanical family that also includes the cashew and what tropical fruit?",
        choiceA : "mango",
        choiceB : "pineapple",
        choiceC : "kiwi",
        choiceD : "coconut",
        correct : "A"
    },{
        question : "Which of these ancient Greek philosophers first wrote about the lost civilization of Atlantis?",
        choiceA : "apollos",
        choiceB : "plato",
        choiceC : "socrates",
        choiceD : "aristotle",
        correct : "B"
    },{
        question : "What country’s capital city has a name that means “capital” in its native tongue?",
        choiceA : "tunisia",
        choiceB : "russia",
        choiceC : "greece",
        choiceD : "south korea",
        correct : "D"
    },{
        question : "What movie icon’s body was buried under six feet of concrete after it was stolen and recovered in 1978?",
        choiceA : "robin williams",
        choiceB : "bruce lee",
        choiceC : "charlie chaplin",
        choiceD : "elvis presley",
        correct : "C"
    },{
        question : "In order to win a bet, what historical female once allegedly dissolved a pearl in vinegar and drank it?",
        choiceA : "lady diana",
        choiceB : "elyssa",
        choiceC : "indira ghandi",
        choiceD : "cleopatra",
        correct : "D"
    },{
        question : "What does an oniomaniaic love to do?",
        choiceA : "cut onions",
        choiceB : "eat onions",
        choiceC : "take long walks alone",
        choiceD : "shop",
        correct : "D"
    },{
        question : "The voyager space proves traveling to interstellar space bear notes to exterrestrials from what U.S. president?",
        choiceA : "john f kennedy",
        choiceB : "jimmy carter",
        choiceC : "bill clinton",
        choiceD : "richard nixon",
        correct : "B"
    }
];

var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var count = 0;
var questionTime = 30; 
var gaugeWidth = 150; 
var gaugeUnit = gaugeWidth / questionTime;
var timer;
var score = 0;

function showQuestion(){
    var q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);


function startQuiz(){
    start.style.display = "none";
    areaName.style.display = "none";
    textName.style.display = "none";
    showQuestion();
    quiz.style.display = "block"
    container.style.display = "block";
    showProgress();
    incrementCounter();
    timer = setInterval(incrementCounter,1000);
}

function showProgress(){
    for(var i = 0; i <= lastQuestion; i++){
        progress.innerHTML += "<div class='prog' id="+ i +"></div>";
    }
}

function incrementCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            showQuestion();
        }else{
            clearInterval(timer);
            showScore();
        }
    }
}

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        score++;
        answerIsCorrect();
    }else{
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        showQuestion();
    }else{
        clearInterval(timer);
        showScore();
    }
}

function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

function showScore(){
    scoreDiv.style.display = "block";
    quiz.style.display = "none"
    container.style.display = "none";
    restart.style.display = "block";

    var scorePercent = Math.round(100 * score/questions.length);
    
    var img = (scorePercent >= 80) ? "5305917-gold-bars.jpg":
              (scorePercent >= 60) ? "8766403-stacked-gold-bars.jpg" :
              (scorePercent >= 40) ? "100540730-stack-of-gold-bars-isolated-on-white-background-gold-bullion-concept-image-3d-illustration-.jpg" :
              (scorePercent >= 20) ? "download.jpg" :
              "poor.jpg";
    var cashOut =(scorePercent >= 80) ? cashOut = 5000000:
              (scorePercent >= 60) ? cashOut = 900000 :
              (scorePercent >= 40) ? cashOut = 100000 :
              (scorePercent >= 20) ? cashOut = 500:
              1;
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ "You\'ve earned: " + cashOut +"$</p>";
}