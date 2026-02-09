const inputTim = document.getElementById('input-t3');
const displayTim = document.getElementById('display-tim');
const renderTim = document.getElementById('timer-toggle');

renderTim.addEventListener('click', function() {
    clearInterval(timerInterval);
    const targetMinutes = parseInt(inputTim.value);
    let sec = 0;
    let min = 0;
    timerInterval = setInterval(function() {
        let displaySec = sec < 10 ? '0' + sec : sec;
        displayTim.innerHTML = `${min}:${displaySec}`;
        if (min >= targetMinutes) {
            clearInterval(timerInterval);
            alert("Match Time Over!");
            return;
        }
        sec++;
        if (sec === 60) {
            sec = 0;
            min++;
        }
    }, 1000);
    inputTim.value=''
});