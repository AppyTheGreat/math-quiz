p1n=localStorage.getItem("player1name")
p2n=localStorage.getItem("player2name")
p1s=0;
p2s=0;
document.getElementById("player1_name").innerHTML=p1n+" : ";
document.getElementById("player2_name").innerHTML=p2n+" : ";
document.getElementById("player1_score").innerHTML=p1s
document.getElementById("player2_score").innerHTML=p2s
document.getElementById("player_question").innerHTML="question turn: "+p1n
document.getElementById("player_answer").innerHTML="answer turn: "+p2n
function send(){
getnumber1=document.getElementById("number1").value;
getnumber2=document.getElementById("number2").value;
actual_answer= parseInt(getnumber1) * parseInt(getnumber2);
question_number="<h4>"+getnumber1+" X "+getnumber2+"</h4>";
input_box="<br>Answer: <input type='number' id='input_check_box'>";

z="<br> <br> <button class='btn btn-info' onclick='check()'>CHECK</button>";
a=question_number+input_box+z
document.getElementById("output").innerHTML=a;
document.getElementById("number1").value="";
document.getElementById("number2").value="";
}
questionturn="player1"
answerturn="player2"
function check(){
getans=document.getElementById("input_check_box").value;
if(actual_answer==getans){
if(answerturn=="player1"){
p1s=p1s+1;
document.getElementById("player1_score").innerHTML=p1s;
}
else{
p2s=p2s+1;
document.getElementById("player2_score").innerHTML=p2s;
}
}
if(questionturn=="player1"){
    questionturn="player2"
    document.getElementById("player_question").innerHTML="question turn : "+p2n; 
}
else{
questionturn="player1";
document.getElementById("player_question").innerHTML="question turn = "+p1n;
}
if(answerturn=="player1"){
    answerturn="player2"
    document.getElementById("player_answer").innerHTML="answer turn : "+p2n; 
}
else{
answerturn="player1";
document.getElementById("player_answer").innerHTML="answer turn = "+p1n;
}










}