let start=document.getElementById("start_quiz")
let nextButton=document.getElementById("next")
let play_quiz=document.getElementById("play");
let questions=document.getElementById('question')
let element=document.querySelectorAll('input')
let opt1=document.getElementById('option1')
let opt2=document.getElementById('option2')
let opt3=document.getElementById('option3')
let opt4=document.getElementById('option4')
let marks=0
play_quiz.style.display="none";
start.addEventListener('click',startQuiz)

//Question and answers
const questionSelection=[{ques:"Which one of the following is a Timer IC?",
    answer:["IC341","IC555","IC8085","IC8051"]	
},
{ques:"Which one of the following is a XOR GATE IC?",
 answer:["IC341","IC555","IC8086","IC8051"]
},
{ques:"Which one of the following is a microcontroller GATE IC?",
 answer:["IC341","IC555","IC8085","IC8051"]
},
{ques:"Which of the following is an extension of a temporary file?",
 answer:[".tnt",".txt",".tmp",".tar"]
}
]

const correctAnswers=["IC555","IC8086","IC8051",".tmp"]
let i=0;

function startQuiz() {
	start.style.display="none"
    play_quiz.style.display="block";
//get questions and answer then assign them
//get radio input
//evaluate answer
//save and next 
//clear radio selection

 questions.textContent=i+1+":"+questionSelection[i].ques
        opt1.textContent=questionSelection[i].answer[0]
        opt2.textContent=questionSelection[i].answer[1]
        opt3.textContent=questionSelection[i].answer[2]
        opt4.textContent=questionSelection[i].answer[3]	
 	
}

const selectedAnswers=[]

document.getElementById('validate').addEventListener('click',validation)
//answer validation
function validation() {
  for(var index=0;index<element.length;index++){
  if(element[index].checked){
  if(questionSelection[i].answer[index]==correctAnswers[i]){
  	selectedAnswers[i]="right"
     document.getElementById('score').textContent=selectedAnswers[i]
     document.getElementById('score').style.background = 'yellow'
     marks=marks+1;
     
     document.getElementById('display').innerText="Score:"+marks;
      
     }
    else{
    	selectedAnswers[i]="wrong"
     document.getElementById('score').textContent=selectedAnswers[i]
     document.getElementById('score').style.background = 'red'
          }
          }
          }
       }

nextButton.addEventListener('click',increaseQuestionIndex)
//increase question index
function increaseQuestionIndex(){ 
	
  document.getElementById('score').textContent=""
  document.getElementById('score').style.background = 'green'
 	if(i<questionSelection.length){
 		i++
 		uncheckRadio()
 		startQuiz()
     }
     else{
     i=0;
     document.getElementById('score').textContent="";
     marks=0
     document.getElementById('display').innerText="Score:"+marks;
     startQuiz()
     } 	
}

 //uncheck radio selection
 function uncheckRadio() {
   for(var index=1;index<element.length;index++){
     if(element[index].checked){
     	element[index].checked=false;
          }
          }
     	}
//previous button function
previous.addEventListener('click',decreaseQuestionIndex)
function decreaseQuestionIndex() {
	if(i>=0){
 		i--
 		document.getElementById('score').textContent=selectedAnswers[i]

    if(selectedAnswers[i]=="right"){
    	document.getElementById('score').style.background = 'yellow'
    }
    else{
    	document.getElementById('score').style.background = 'red'
    }

 		startQuiz()
     }
     else{
     i=questionSelection.length-1;
     document.getElementById('score').textContent=selectedAnswers[i]

if(selectedAnswers[i]=="right"){
    	document.getElementById('score').style.background = 'yellow'
    }
    else{
    	document.getElementById('score').style.background = 'red'
    }

     startQuiz()
     } 	
	
}










	








