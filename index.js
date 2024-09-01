let timerInterval;
let totalSeconds;
let isBreak = false;

document.getElementById('stopBtn').addEventListener('dblclick', clearTimer);

function startTimer() {
    const hours = parseInt(document.getElementById("hoursInput").value) || 0;
    const minutes = parseInt(document.getElementById("minutesInput").value) || 0;
    const seconds = parseInt(document.getElementById("secondsInput").value) || 0;

    totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
    updateTimerUI();
    startCountdown();
}

function startBreak() {
    const breakMinutes = parseInt(prompt("Enter break duration in minutes:", "5")) || 5;
    totalSeconds = breakMinutes * 60;
    updateTimerUI();
    startCountdown();
}

function startCountdown() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (totalSeconds > 0) {
            totalSeconds--;
            updateTimerUI();
        } else {
            clearInterval(timerInterval);
            playAlertSound();
            document.getElementById("title").innerText = isBreak ? "Break Over!" : "Time's Up!";
            isBreak = false;
        }
    }, 1000);
}

function updateTimerUI() {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("hour").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minute").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("second").innerText = seconds < 10 ? "0" + seconds : seconds;
}

function stopTimer() {
    clearInterval(timerInterval);
    document.getElementById("title").innerText = "Timer Stopped";
}

function clearTimer() {
    clearInterval(timerInterval);
    totalSeconds = 0;
    updateTimerUI();
    document.getElementById("title").innerText = "Timer Cleared";
}

function playAlertSound() {
    const alertSound = document.getElementById("alertSound");
    alertSound.play();
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const taskText = taskInput.value.trim();
    if (taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;
        li.onclick = () => focusTask(taskText);
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function focusTask(taskText) {
    document.getElementById("title").innerText = "Focusing on: " + taskText;
}
