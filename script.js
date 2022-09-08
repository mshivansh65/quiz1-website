const btnSubmit = document.querySelector(".btn-submit");
const game = document.querySelector(".game");
const firendNameEl = document.querySelector("#name-of-friend");
const welcomeMessage = document.querySelector("#Welcome-text");
const input = document.querySelector(".input");
let btns = document.querySelectorAll(".btn");
const qustions = document.querySelector(".qustions");
const gameChoice = document.querySelector(".game-choice");
const btnChoices = document.querySelectorAll("btn-choice");
let firstQus = true;
let index = -1;
let firendName = "";
let version = -1;
const questions1 = [
  "Am I older than 21 years",
  "Is your hometown salempur",
  "Do you like music?",
  "Do you like to Programming?",
  "Do you want to be web devloper?",
];
let score = 0;
const qusti = [
  "Name of Space Shuttle engine is RD-25 yes or no?",
  "Is liquid hydrogen fuel for RS-25 engne",
  "Is the starship redy yet?",
  "IS liquid methain is the fuel which starship is going to use?",
  "Is the Name of first Indian criogenic eninge is CE-20",
];
const ans2 = [0, 1, 0, 1, 1];
const comment = [
  "The Aerojet Rocketdyne RS-25, also known as the Space Shuttle Main Engine",
  "RS-25 is a Fuel-rich dual-shaft staged combustion cycle engine",
  "When it will be it will be the most powerful rocket ever",
  "Because methane can be produced on Mars",
  "After long dew India devloped its cryogenic rocket engine",
];

function createQus(qus, ans, comment) {
  this.qus = qus;
  this.ans = ans;
  this.comment = comment;
}

const qustions2 = qusti.map(function (qus, i) {
  const quistion = new createQus(qus, ans2[i], comment[i]);
  return quistion;
});

// score = 0;
// qustions2.forEach((qustion) =>
//   conductQuiz(qustion.qus, qustion.ans, qustion.comment)
// );

document.addEventListener("click", (e) => {
  e.preventDefault();
  const target = e.target;
  if (target.classList.contains("btn-choice")) {
    if (target.classList.contains("btn-quiz1")) {
      // console.log(`version 1`);
      version = 1;
      loadGame(1);
    } else if (target.classList.contains("btn-quiz2")) {
      // console.log(`version 2`);
      version = 2;
      loadGame(2);
    }
  }
  // console.log(target);
  if (target.classList.contains("btn-from")) {
    const prevAns = Number(target.value);
    play(prevAns);
  }
});

function insertQus(index = 0, qus = "", comment = "", el) {
  el.innerHTML = "";
  let htmlToBeInserted = "";
  if (index < questions1.length) {
    htmlToBeInserted = `
  <div class="qustion" data-id="${index}">
  <h2 class="qus-heading">${qus}</h2>
  
  <form class="input-form">
  <button class="btn btn-from" href="#" value="1">yes</button>
  <button class="btn btn-from" href="#" value="0">no</button>
  </form>
  
  
  </div>`;
  } else {
    htmlToBeInserted = `<h1 id="Welcome-text2">Your score is ${score}</h1>`;
    const passingScore = questions1.length / 2;
    if (score >= passingScore) {
      welcomeMessage.textContent = `Wow! ${firendName}`;
    } else {
      welcomeMessage.textContent = `Oops! ${firendName}`;
    }
  }
  el.insertAdjacentHTML("beforeend", htmlToBeInserted);
  // console.log(`iserted`);
}
//////////////////////////////////////////////////////////////
// LOGIN
//////////////////////////////////////////////////////////////

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  firendName = firendNameEl.value;
  if (firendName) {
    welcomeMessage.textContent = `Welcome ${firendName} Let's play a frienship potential game`;
    // console.log(firendName);
    //
    gameChoice.classList.remove("hidden");
    input.classList.add("hidden");
    // play();
  }
});
let btnsForm = document.querySelectorAll(".btn-from");
btnsForm.forEach((btn) =>
  btn.addEventListener("clcik", (e) => {
    e.preventDefault();
    play();
  })
);
//////////////////////////////////////////////////////////////
// ADDING QUSTIONS
//////////////////////////////////////////////////////////////
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function checkAns(prevAns, prevAnsCorrect = 1) {
  // console.log(`checking ans ${prevAns}`);
  const inputFrom = document.querySelector(".input-form");
  if (prevAns === prevAnsCorrect) {
    inputFrom.classList.add("ans--right");
    score++;
  }
  // ans--right
  else {
    score--;
    inputFrom.classList.add("ans--wrong");
  }
}
function play(prevAns = -1) {
  // console.log(prevAns);

  if (prevAns !== -1) {
    if (version == 1) {
      checkAns(prevAns);
      delay(500).then(() => {
        loadNextQus();
      });
    } else {
      if (version == 2) {
        const qustion = document.querySelector(".qustion");
        const htmlToBeInserted = `<p class="comment ans">${comment[index]}</p>`;
        qustion.insertAdjacentHTML("beforeend", htmlToBeInserted);
        checkAns(prevAns, ans2[index]);
        delay(3000).then(() => {
          loadNextQus();
        });
      }
    }
  }
}
function loadGame(v) {
  // gameChoice.classList.remove("hidden");
  game.classList.remove("hidden");
  gameChoice.classList.add("hidden");
  loadNextQus();
}
function loadNextQus() {
  index++;
  if (version === 1) {
    // console.log(`loaging game 1 index ${index}`);
    insertQus(index, questions1[index], "", qustions);
  }
  if (version === 2) {
    // console.log(`loading game 2`);
    insertQus(index, qusti[index], comment[index], qustions);
  }
}
//////////////////////////////////////////////////////////////
// conduct quiz
//////////////////////////////////////////////////////////////

// console.log(btnChoices);
// btnChoices.forEach((btn) =>
//   btn.addEventListener("click", function (e) {
//     console.log(e);
//   })
// );

// text-transform: lowercase;
// s.style.transform = `translateX(${100 * (i - slide)}%)`

// console.log("hey");
// var readlineSync = require("readline-sync");
// let score = 0;
// const conductQuiz = function (qus, ans = "yes", comment = "") {
//   console.log("");
//   const userAns = readlineSync.question(qus + " : ");
//   if (userAns === ans) {
//     score++;
//     console.log("Right ans");
//   } else {
//     score--;
//     console.log("No right ans is ");
//     console.log(comment);
//   }
//   console.log(``);
// };
// var userName = readlineSync.question("May I have your name? ");
// // let welcomeMessage = 'Welcome ' + userName;
// console.log(" ");
// console.log(
//   `Hi ${userName} Let's play some game plese enter your ans in yes or no`
// );
// console.log(" ");

// // *************************************************
// // For Mark one
// // *************************************************

// const questions1 = [
//   "Am I older than 21 years",
//   "Is your hometown salempur",
//   "Do you like music?",
//   "Do you like to Programming?",
//   "Do you want to be web devloper?",
// ];
// score = 0;
// questions1.forEach((ques) => conductQuiz(ques));
// console.log(`Your final score is ${score}`);
// // *************************************************

// // *************************************************
// // For Mark two
// // *************************************************
