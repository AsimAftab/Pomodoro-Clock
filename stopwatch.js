let countdownInterval;
let countdownSeconds = 0;

function startCountdownTimer() {
    const countdownInput = parseInt(document.getElementById("countdownInput").value) || 0;
    countdownSeconds = countdownInput * 60; // Convert minutes to seconds

    if (countdownSeconds > 0) {
        clearInterval(countdownInterval);
        countdownInterval = setInterval(() => {
            if (countdownSeconds > 0) {
                countdownSeconds--;
                updateCountdownUI();
            } else {
                clearInterval(countdownInterval);
                playAlertSound();
                document.getElementById("title").innerText = "Time's Up!";
            }
        }, 1000);
    }
}

function stopCountdownTimer() {
    clearInterval(countdownInterval);
}

function resetCountdownTimer() {
    clearInterval(countdownInterval);
    countdownSeconds = 0;
    updateCountdownUI();
    document.getElementById("title").innerText = "Countdown Reset";
}

function updateCountdownUI() {
    const hours = Math.floor(countdownSeconds / 3600);
    const minutes = Math.floor((countdownSeconds % 3600) / 60);
    const seconds = countdownSeconds % 60;

    document.getElementById("countdownHour").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("countdownMinute").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("countdownSecond").innerText = seconds < 10 ? "0" + seconds : seconds;
}

function playAlertSound() {
    const alertSound = document.getElementById("alertSound");
    alertSound.play();
}
