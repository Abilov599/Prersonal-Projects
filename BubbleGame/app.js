let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let reset = document.querySelector("#reset");
let box = document.querySelector(".box");
let result = document.querySelector("#score");

let easyMode = document.querySelector(".easy");
let mediumMode = document.querySelector(".medium");
let hardMode = document.querySelector(".hard");

let bubble;
let bubbleInterval;
let userScore = 0;
let userPromtName;
let username;
let difficulity = 1500;
let multiple = 1;

let continueBtn;

easyMode.addEventListener("click", () => {
  easyMode.disabled = true;
  mediumMode.disabled = false;
  hardMode.disabled = false;
  difficulity = 1500;
  multiple = 1;
});
mediumMode.addEventListener("click", () => {
  easyMode.disabled = false;
  mediumMode.disabled = true;
  hardMode.disabled = false;
  difficulity = 1000;
  multiple = 2;
});
hardMode.addEventListener("click", () => {
  easyMode.disabled = false;
  mediumMode.disabled = false;
  hardMode.disabled = true;
  difficulity = 500;
  multiple = 3;
});

startBtn.addEventListener("click", function () {
  userPromtName = prompt("Enter your name");
  if (userPromtName == "") {
    alert("Enter Your Name");
  } else if (userPromtName != null) {
    username = document.createElement("h3");
    username.innerText = userPromtName;
    document.querySelector(".text-center").prepend(username);

    easyMode.disabled = true;
    mediumMode.disabled = true;
    hardMode.disabled = true;

    startBtn.disabled = true;
    stopBtn.disabled = false;
    bubbleInterval = setInterval(function () {
      createBubble();
    }, `${difficulity}`);

    document.querySelectorAll(".bubble").forEach((element) => {
      element.disabled = false;
    });
  }
});

stopBtn.addEventListener("click", function () {
  startBtn.style.display = "none";
  continueBtn = document.createElement("button");
  continueBtn.setAttribute("class", "btn btn-primary");
  continueBtn.innerText = "Continue";
  let btnBox = document.querySelector(".text-center");
  btnBox.insertBefore(continueBtn, btnBox.childNodes[1]);
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(bubbleInterval);
  document.querySelectorAll(".bubble").forEach((element) => {
    element.disabled = true;
  });

  continueBtn.addEventListener("click", function () {
    startBtn.style.display = "inline";
    continueBtn.remove();
    startBtn.disabled = true;
    stopBtn.disabled = false;
    bubbleInterval = setInterval(function () {
      createBubble();
    }, 1000);
    document.querySelectorAll(".bubble").forEach((element) => {
      element.disabled = false;
    });
  });
});

reset.addEventListener("click", resetGame);

function resetGame() {
  easyMode.disabled = false;
  mediumMode.disabled = false;
  hardMode.disabled = false;

  startBtn.style.display = "inline";
  continueBtn.style.display = "none";

  startBtn.disabled = false;
  stopBtn.disabled = false;
  clearInterval(bubbleInterval);
  box.innerHTML = "";
  userScore = 0;
  result.innerText = userScore;
  username.remove();
}

function createBubble() {
  let leftPos = Math.floor(Math.random() * (95 - 1) + 1);
  let topPos = Math.floor(Math.random() * (95 - 1) + 1);
  bubble = document.createElement("button");
  bubble.setAttribute("class", "bubble");
  bubble.style.width = "25px";
  bubble.style.height = "25px";
  bubble.style.borderRadius = "50%";
  bubble.style.backgroundColor = "teal";
  bubble.style.border = "1px solid black";
  bubble.style.cursor = "pointer";
  bubble.style.position = "absolute";
  bubble.style.left = `${leftPos}%`;
  bubble.style.top = `${topPos}%`;

  box.appendChild(bubble);

  if (document.querySelectorAll(".bubble").length == 20) {
    clearInterval(bubbleInterval);
    let GameOverSound = new Audio(
      "8d82b5_MK3_Shao_Kahn_Laugh_Sound_Effect.mp3"
    );
    GameOverSound.play();
    setTimeout(() => {
      alert(`Game Over!!! ${userPromtName}, Your score is ${userScore}`);
      resetGame();
    }, 2000);
  }

  bubble.addEventListener("click", function () {
    let mySound = new Audio("./mixkit-long-pop-2358.wav");
    mySound.play();
    this.remove();
    userScore += +`${multiple}`;
    result.innerText = userScore;
  });
}
