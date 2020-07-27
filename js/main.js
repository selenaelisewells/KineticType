(() => {
    let audio = document.querySelector('audio'),
        playButton = document.querySelector('.controls button');

    function playAudio() {
        document.querySelectorAll('path').forEach(path => path.classList.add('text-anim'));
        document.querySelector('#text1').classList.add("container-turn");
        document.querySelector(".questionIcon").classList.add("questionIcon-anim");
        audio.play();
    }

    playButton.addEventListener("click", playAudio);
})();