const resetId = document.getElementById('reset-Match')

resetId.addEventListener('click', function(){
    document.getElementById('set-1').innerText = 0
    document.getElementById('set-2').innerText = 0
    document.getElementById('game-1').innerText = 0
    document.getElementById('game-2').innerText = 0
    document.getElementById('point-1').innerText = 0
    document.getElementById('point-2').innerText = 0
})