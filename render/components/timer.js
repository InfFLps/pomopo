const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const progressBar = document.getElementById("progress-bar");
const sessionLabel = document.getElementById("session-label");
const sessionCount = document.getElementById("sessions");
const quote = document.getElementById("quote");

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const applySettingsBtn = document.getElementById("applySettings");
const focusInput = document.getElementById("focusInput");
const breakInput = document.getElementById("breakInput");

let focusTime = parseInt(focusInput.value) * 60 || 5 * 60;
let breakTime = parseInt(breakInput.value) * 60 || 5 * 60;
let time = focusTime;
let timer = null;
let isPaused = true;
let onBreak = false;
let sessions = 0;

const quotes = [
  "Small steps every day.",
  "Progress, not perfection.",
  "Stay consistent.",
  "Focus on the process.",
  "Keep your rhythm."
];

function updateTimer() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timerDisplay.textContent =
    `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
  const total = onBreak ? breakTime : focusTime;
  progressBar.style.width = `${((total - time)/total)*100}%`;
  sessionLabel.textContent = onBreak ? "Break" : "Focus";
}

function startTimer() {
  if (timer) return;
  isPaused = false;
  timer = setInterval(() => {
    if (!isPaused) {
      if (time <= 0) {
        handleSessionEnd();
      } else {
        updateTimer();
        time--;
      }
    }
  }, 1000);
}

function pauseTimer() {
  isPaused = true;
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  isPaused = true;
  onBreak = false;
  time = focusTime;
  progressBar.style.width = "0%";
  sessionLabel.textContent = "Focus";
  updateTimer();
}

function handleSessionEnd() {
  clearInterval(timer);
  timer = null;

  if (!onBreak) {
    sessions++;
    sessionCount.textContent = sessions;
    onBreak = true;
    time = breakTime;
  } else {
    onBreak = false;
    time = focusTime;
    quote.textContent = quotes[Math.floor(Math.random() * quotes.length)];
  }

  updateTimer();
  startTimer();
}

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

document.addEventListener("click", e => {
  if (sidebar.classList.contains("open") && !sidebar.contains(e.target) && e.target !== menuBtn) {
    sidebar.classList.remove("open");
  }
});

applySettingsBtn.addEventListener("click", () => {
  const newFocus = parseInt(focusInput.value);
  const newBreak = parseInt(breakInput.value);
  if (!isNaN(newFocus) && newFocus > 0) focusTime = newFocus * 60;
  if (!isNaN(newBreak) && newBreak > 0) breakTime = newBreak * 60;
  const total = onBreak ? breakTime : focusTime;
  if (time > total) time = total;
  updateTimer();
  sidebar.classList.remove("open");
});

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

updateTimer();
quote.textContent = quotes[0];