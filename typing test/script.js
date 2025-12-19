// 2 minutes = 120 seconds
const TEST_DURATION = 120;
const paragraph = `
Typing is a great skill for every developer to practice regularly.The more you practice typing, the faster and more accurate you become.Javascript allows us to build interactive and dynamic web applications.`;  
// DOM elements
const textToTypeEl = document.getElementById("text-to-type");
const inputEl = document.getElementById("input");
const timeEl = document.getElementById("time");
const wpmEl = document.getElementById("wpm");
const accuracyEl = document.getElementById("accuracy");
const mistakesEl = document.getElementById("mistakes");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

let timer = null;
let timeLeft = TEST_DURATION;
let isRunning = false;
let currentText = "";
let totalCharactersTyped = 0;
let mistakes = 0;
// load the text to type
function loadText() {
  currentText = paragraph;          
  textToTypeEl.textContent = currentText;  
}
// reset everything
function resetTest() {
  clearInterval(timer);
  timer = null;
  timeLeft = TEST_DURATION;
  isRunning = false;
  totalCharactersTyped = 0;
  mistakes = 0;
  timeEl.textContent = timeLeft;
  wpmEl.textContent = "0";
  accuracyEl.textContent = "0";
  mistakesEl.textContent = "0";
  inputEl.value = "";
  inputEl.disabled = true;
  startBtn.disabled = false;
  restartBtn.disabled = true;
  loadText();  // Always loads the SAME fixed paragraph
}
// start timer and enable typing
function startTest() {
  if (isRunning) return;
  isRunning = true;
  inputEl.disabled = false;
  inputEl.focus();
  startBtn.disabled = true;
  restartBtn.disabled = false;
  timer = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      endTest();
    }
  }, 1000);
}
// calculate results when time ends
function endTest() {
  clearInterval(timer);
  inputEl.disabled = true;
  isRunning = false;
  const typedText = inputEl.value.replace(/\s+/g, " ").trim();
  const originalText = currentText.replace(/\s+/g, " ").trim();
  const timeUsedMinutes = (TEST_DURATION - timeLeft) / 60 || 1;
  const wordsTyped = typedText.length ? typedText.split(/\s+/).length : 0;
  const wpm = Math.round(wordsTyped / timeUsedMinutes);

  // Compare entire paragraph character by character
  const minLen = Math.min(originalText.length, typedText.length);
  let correctChars = 0;

  for (let i = 0; i < minLen; i++) {
    if (originalText[i] === typedText[i]) {
      correctChars++;
    } else {
      mistakes++;
    }
  }

  totalCharactersTyped = typedText.length;
  mistakesEl.textContent = mistakes;

  const accuracy = originalText.length
    ? Math.round((correctChars / originalText.length) * 100)
    : 0;

  wpmEl.textContent = wpm;
  accuracyEl.textContent = accuracy;
}

function handleInput() {
  totalCharactersTyped = inputEl.value.length;
}

// events
startBtn.addEventListener("click", startTest);
restartBtn.addEventListener("click", resetTest);
inputEl.addEventListener("input", handleInput);

// initial setup
resetTest();
