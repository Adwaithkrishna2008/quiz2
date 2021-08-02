var canvas;
var gameState=0;
var contestantCount,answer,allContestants;
var quiz,contestants,questions,contestant,question;
var database;

function setup(){
database=firebase.database()
canvas = createCanvas(850,400);
contestants = new Contestant();
quiz=new Quiz()
quiz.getState();
quiz.start();
}


function draw(){
  background("pink");
if(contestantCount===4){
  quiz.update(1)
}

if(gameState===1){
  clear();
  quiz.play();
}


  
}
