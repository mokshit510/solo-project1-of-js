let scores = ["0", "15", "30", "40", "AD"];
let p1PointIdx = 0;
let p2PointIdx = 0;

function addPoint(player) {
    if (player === 1) {
        handleScoring('1', '2');
    } else {
        handleScoring('2', '1');
    }
}

function handleScoring(winner, loser) {
    let winEl = document.getElementById(`point-${winner}`);
    let loseEl = document.getElementById(`point-${loser}`);
    
    let winIdx = winner === '1' ? p1PointIdx : p2PointIdx;
    let loseIdx = loser === '1' ? p1PointIdx : p2PointIdx;

    // Advantage Logic
    if (scores[winIdx] === "40" && scores[loseIdx] === "40") {
        updatePoint(winner, 4); // Advantage
    } else if (scores[winIdx] === "40" && scores[loseIdx] === "AD") {
        updatePoint(loser, 2); // Back to Deuce (30-40 logic)
    } else if (scores[winIdx] === "AD" || (scores[winIdx] === "40" && loseIdx < 3)) {
        winGame(winner);
    } else {
        updatePoint(winner, winIdx + 1);
    }
}

function updatePoint(player, idx) {
    if (player === '1') p1PointIdx = idx; else p2PointIdx = idx;
    document.getElementById(`point-${player}`).innerText = scores[idx];
}

function winGame(player) {
    p1PointIdx = 0; p2PointIdx = 0;
    document.getElementById('point-1').innerText = "0";
    document.getElementById('point-2').innerText = "0";
    
    let gameEl = document.getElementById(`game-${player}`);
    gameEl.innerText = parseInt(gameEl.innerText) + 1;
    
    if (parseInt(gameEl.innerText) >= 6) {
        winSet(player);
    }
}

function winSet(player) {
    document.getElementById('game-1').innerText = "0";
    document.getElementById('game-2').innerText = "0";
    let setEl = document.getElementById(`set-${player}`);
    setEl.innerText = parseInt(setEl.innerText) + 1;
}

function toggleServe() {
    document.getElementById('serve-1').classList.toggle('hidden');
    document.getElementById('serve-2').classList.toggle('hidden');
}
let timerInterval;


function startGame() {
    const sport = document.getElementById('input-sport').value || "Custom Match";
    const t1 = document.getElementById('input-t1').value || "Team 1";
    const t2 = document.getElementById('input-t2').value || "Team 2";

    document.getElementById('display-sport').innerText = sport;
    document.getElementById('display-t1').innerText = t1;
    document.getElementById('display-t2').innerText = t2;
    document.getElementById('setup-modal').style.display = 'none';
}
function inc(point, id) {
    let el = document.getElementById(id); 
    let currentCount = parseInt(el.innerText);
    el.innerText = currentCount + point;
}
function dec(point, id){
    let el = document.getElementById(id)
    let currentCount = parseInt(el.innerText);
    if((currentCount-point)<0){
        el.innerText = 0;
    }
    else{
        el.innerText = (currentCount-point);
    }
}
function reset(id){
    count = 0;
    let el = document.getElementById(id);
    el.innerText = count;
    if(id=='tol-a'||id=='tol-b'){
        el.innerText = 7;
    }
}