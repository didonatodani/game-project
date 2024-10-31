const playPauseBtn = document.querySelector('#play-pause-btn');
const audio = document.querySelector('#background-audio');
const musicContainer = document.querySelector(".music-container")

// Play music in a loop
audio.loop = true;

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerText = '||';
    } else {
        audio.pause();
        playPauseBtn.innerText = '▶';
    }
});