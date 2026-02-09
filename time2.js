const inputTim = document.getElementById('input-tim');
const displayTim = document.getElementById('display-tim');
const renderTim = document.getElementById('render');

renderTim.addEventListener('click', function() {
    clearInterval(timerInterval);
    const targetMinutes = parseInt(inputTim.value);
    let sec = 0;
    let min = 0;
    timerInterval = setInterval(function() {
        let displaySec = sec < 10 ? '0' + sec : sec;
        displayTim.innerHTML = `<div class="player-input">${min}:${displaySec}</div>`;
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
function re(){
    clearInterval(timerInterval);
    displayTim.innerHTML = `<label>give time in minutes</label>
                    <input type="number" min="0" value="0" class="player-input" id="input-tim">`;
}