let gameSeq = [];
let userSeq = [];
let btns = ["red","blue","yellow","green"];
let start = false;
let level = 0;
let high = 0;
let h2 = document.querySelector("h2");
let h1 = document.querySelector("h1");
 document.addEventListener("keypress", function(){
  h1.innerText = "Simon Game"
    if(start == false){
        console.log("Game started");
        start = true;
        document.querySelector("body").style.backgroundColor = "white";
        levelUp();
    }
 });

 function btnFlash(btn) {
   btn.classList.add("flash");
   setTimeout(function () {
      btn.classList.remove("flash");
   }, 1000);
 }
 
 function levelUp() {
    userSeq = [];
    console.log(userSeq);
    level++;
    h2.innerText = `level ${level}`;
    
    let randIndx = Math.floor(Math.random() * 4);
    let randColor = btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`);
    btnFlash(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
 }
 function checkAns(idx) {
  if(userSeq[idx] === gameSeq[idx]) {
    if(userSeq.length == gameSeq.length) 
      setTimeout(levelUp, 300);
  }
     else {
      h1.innerHTML = `Game Over! <b> Your Score Was ${level} </b>`;
    h2.innerText = "press any key to start again!";
    document.querySelector("body").style.backgroundColor = "#e74c3ea8";
    reset();
  }
 }

 function allBtn() {
   console.log("button was pressed");
   let btn = this;
   UserBtnFlash(btn);
   let userColor = btn.getAttribute("id");
   userSeq.push(userColor);
   checkAns(userSeq.length-1);
 } 

 let allBtns = document.querySelectorAll(".box");
 for(btn of allBtns) {
   btn.addEventListener("click", allBtn)
 }

 function UserBtnFlash(btn) {
  btn.classList.add("Userflash");
  setTimeout(function () {
    btn.classList.remove("Userflash");
  }, 300);
 }

 function reset() {
  start = false;
  userSeq = [];
  gameSeq = [];
  highscore();
  level = 0;
 }
 function highscore() {
  if(level>high) high = level;
  let inner = document.querySelector("h3");
  if(high == level) {
    inner.innerHTML = `High Score = ${level}`; 
  }
  else {
    inner.innerHTML = `New High Score = ${high}`;
  }
 }

 