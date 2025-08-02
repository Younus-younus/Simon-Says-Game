let gameSeq = [];
let userSeq = [];
let btns = ["red", "blue", "yellow", "green"];
let start = false;
let level = 0;
let high = 0;
let h2 = document.querySelector("h2");
let h1 = document.querySelector("h1");
let levelNumber = document.querySelector(".level-number");
let currentScore = document.querySelector(".current-score .score-value");
let bestScore = document.querySelector(".best-score .score-value");
let start1 = document.querySelector("#start");
let reload = document.querySelector("#reload");

reload.addEventListener("click",()=>{
  // Reloads the current page
location.reload();
})

start1.addEventListener("click", () => {
  starting();
});

// Initialize the display
function initializeGame() {
  if (levelNumber) levelNumber.innerText = "0";
  if (currentScore) currentScore.innerText = "0";
  if (bestScore) bestScore.innerText = "0";
}

// Call initialization when page loads
initializeGame();

function starting() {
  h1.innerHTML = '<i class="fas fa-gamepad"></i> Simon Says';
  if (!start) {
    console.log("Game started");
    start = true;
    document.querySelector("body").style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
    levelUp();
  }
}

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
  if (levelNumber) levelNumber.innerText = level;
  if (currentScore) currentScore.innerText = level;

  let randIndx = Math.floor(Math.random() * 4);
  let randColor = btns[randIndx];
  let randBtn = document.querySelector(`.${randColor}`);
  btnFlash(randBtn);
  gameSeq.push(randColor);
  console.log(gameSeq);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 300);
    }
  } else {
    h1.innerHTML = `<i class="fas fa-times-circle"></i> Game Over!`;
    if (levelNumber) levelNumber.innerText = `Final: ${level}`;
    document.querySelector("body").style.background = "linear-gradient(135deg, #ff4757 0%, #c44569 100%)";
    reset();
  }
}

function allBtn() {
  console.log("Button was pressed");
  let btn = this;
  UserBtnFlash(btn);
  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".box");
for (let btn of allBtns) {
  btn.addEventListener("click", allBtn);
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
  if (levelNumber) levelNumber.innerText = "0";
  if (currentScore) currentScore.innerText = "0";
}

function highscore() {
  if (level > high) {
    high = level;
    if (bestScore) bestScore.innerText = high;
  }
}
