//select the elements from DOM
var btn1 = document.getElementById("btn1");
var btn2 = document.querySelector("#btn2");
var ResetBtn = document.querySelector("#reset");
var h1 = document.getElementsByTagName("h1")[0];
var p1display = document.getElementById("p1display");
var p2display = document.getElementById("p2display");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winnigScore = 5;

//addEventListeners to Buttons 
//player one

btn1.addEventListener("click",function(){
  if(!gameOver){
   p1Score++;
    if(winnigScore===p1Score){
       gameOver =true;
       p1display.classList.add("green");
    }
    p1display.textContent = p1Score;
  }
});

//player two
btn2.addEventListener("click",function(){
  if(!gameOver){
   p2Score++;
    if(winnigScore === p2Score){
       gameOver = true;
       p2display.classList.add("green");
    }
    p2display.textContent = p2Score;
  }
});

//Reset button

ResetBtn.addEventListener("click",function(){
   p1Score = 0;
   p2Score = 0;
   p1display.textContent = 0;
   p2display.textContent = 0;
   p1display.classList.remove("green");
   p2display.classList.remove("green");
   gameOver =false;
});


