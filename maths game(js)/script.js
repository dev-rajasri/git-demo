var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
//if we click on start/reset

document.getElementById("startreset").onclick=
function(){
  if(playing=="true"){

    location.reload();
}else{
    //change mode to playing
     playing=true;
    //set score to 0
     score = 0;
     document.getElementById("scorevalue").innerHTML=
     score;
     //show countdownbox
    show("timeremaining");
    timeremaining=60;
    document.getElementById("timeremainingvalue").innerHTML=timeremaining;
    //hide game over box
    hide("gameover");
    //change button to reset
    document.getElementById("startreset").innerHTML="Reset Game";
   //show countdown
   startCountdown();
   //generate Q&A
   generateQA();
  }
}
 for(i=1; i<5; i++){
  document.getElementById("box"+i).onclick=function(){
    if(playing==true){
      if(this.innerHTML == correctAnswer){
        score++;
        document.getElementById("scorevalue").innerHTML=score;
        hide("wrong");
        show("correct");
        setTimeout(function(){
          hide("correct");
        },1000);
//Generate q&a
generateQA();
      }else{
        hide("correct");
        show("wrong");
        setTimeout(function(){
          hide("wrong");
        },1000);
      }
    }
  }
}
//Functions
//Start counter

    function startCountdown(){
      action=setInterval(function(){
      
   timeremaining -=1;
   document.getElementById("timeremainingvalue").innerHTML
=timeremaining;
if (timeremaining==0) {
  //this means game over
stopCountDown();
show("gameover");
document.getElementById("gameover").innerHTML="<p>game over</p><p>your score is "+score+"</p>"
hide("timeremaining");
hide("correct");
hide("wrong");
playing=false;
document.getElementById("startreset").innerHTML="start Game";
}

      },1000)
    } 
//stop counter
  function stopCountDown(){
    clearInterval(action);
  } 
  //hide an element
  function hide(id){
    document.getElementById(id).style.display="none";

  }
  //show an element
  function show(id){
    document.getElementById(id).style.display="block";
    
  }
  //generate q & multiple answers
  function generateQA(){
    var x=1+ Math.round(9*Math.random());
    var y=1+ Math.round(9*Math.random());
    //Math.random functon will give value b/w 0 and 1
   correctAnswer=x*y;
   document.getElementById("question").innerHTML=x+"x"+y;
  var correctPosition=1+ Math.round(3*Math.random());
  document.getElementById("box"+correctPosition).innerHTML= correctAnswer;
  //fill one box with the correct answer.
  //fill other boxes with wrong answer
 var answers = [correctAnswer];
  for(i=1; i<5; i++){
    if(i != correctPosition){
      var wrongAnswer;
do{
wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random()));
 }while(answers.indexOf(wrongAnswer)>-1)
document.getElementById("box"+i).innerHTML=wrongAnswer;
answers.push(wrongAnswer);
}
}
}
