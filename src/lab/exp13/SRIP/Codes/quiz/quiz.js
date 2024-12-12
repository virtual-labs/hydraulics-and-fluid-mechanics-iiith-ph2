var quiz = document.getElementById("quiz");
var ques = document.getElementById("question");
var opt1 = document.getElementById("option1");
var opt2 = document.getElementById("option2");
var opt3 = document.getElementById("option3");
var opt4 = document.getElementById("option4");
var res = document.getElementById("result");
var nextbutton = document.getElementById("next");
var q = document.getElementById("quit");

var tques = questions.length;
var score = 0;
var quesindex = 0;

//finish the quiz
function quit(){
	quiz.style.display = "none";
    result.style.display = "";
    var f = score / tques;
    result.textContent = "SCORE = " + score;
    q.style.display = "none";
}

//start the quiz
function giveQues(quesindex){
	ques.textContent = quesindex + 1 + ". " + questions[quesindex][0];
	opt1.textContent = questions[quesindex][1];
	opt2.textContent = questions[quesindex][2];
	opt3.textContent = questions[quesindex][3];
	opt4.textContent = questions[quesindex][4];
	return;
}

giveQues(0);

//next question
function nextques(){
	var selectedAns = document.querySelector("input[type=radio]:checked");
	if(!selectedAns){
		alert("SELECT AN OPTION");
		return;
	}

	if(selectedAns.value == questions[quesindex][5]){
		score = score + 1;
	}
	selectedAns.checked = false;
	quesindex++;
	if(quesindex == tques - 1){
		nextbutton.textContent = "Finish";
	}
	var f = score / tques;
	if(quesindex == tques){
		q.style.display = "none";
        quiz.style.display = "none";
        result.style.display = "";
        result.textContent = "SCORED: " + score + " out of 25 " + String.fromCodePoint(0x1F3C6) +String.fromCodePoint(0x1F973);
        return;
	}
    giveQues(quesindex);
}