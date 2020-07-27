(() => {
    let audio = document.querySelector('audio'),
        playButton = document.querySelector('.controls button');

    const animations = [{
            time: 5000,
            svgWrap: document.querySelector('#Line-1')
        },
        {
            time: 6000,
            svgWrap: document.querySelector('#Line-2')
        },
        {
            time: 7000,
            svgWrap: document.querySelector('#Line-3')
        },
        {
            time: 8000,
            svgWrap: document.querySelector('#Line-4')
        },
        {
            time: 9000,
            svgWrap: document.querySelector('#Line-5')
        },
        {
            time: 10000,
            svgWrap: document.querySelector('#Line-6')
        },
        {
            time: 11000,
            svgWrap: document.querySelector('#Line-7')
        },

    ]




    function playAudio() {
        document.querySelectorAll('path').forEach(path => path.classList.add('text-anim'));
        document.querySelector('#text1').classList.add("container-turn");
        document.querySelector(".questionIcon").classList.add("questionIcon-anim");
        audio.play();
        registerTimeout();
    }

    function registerTimeout() {
        animations.forEach(animation => {
            setTimeout(() => {
                animation.svgWrap.classList.toggle("hidden")

            }, animation.time)
        })
    }


    playButton.addEventListener("click", playAudio);
})();

/*
 -after the animation plays for each line
 -toggle on the hidden class for the animation that just played
 -toggle off the hidden class for the next animation



*/