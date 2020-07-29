(() => {
    let audio = document.querySelector('audio'),
        playButton = document.querySelector('.controls button');

    document.querySelector('.stop').addEventListener('click', event => {
        audio.pause();
        audio.currentTime = 0;
        window.location.reload();
    });

    const animations = [{
            index: 0,
            endTime: 5000,
            svgWrap: document.querySelector('#Line-1')
        },
        {
            index: 1,
            endTime: 7790,
            svgWrap: document.querySelector('#Line-2')
        },
        {
            index: 2,
            endTime: 13000,
            svgWrap: document.querySelector('#Line-3')
        },
        {
            index: 3,
            endTime: 15000,
            svgWrap: document.querySelector('#Line-4')
        },
        {
            index: 4,
            endTime: 16000,
            svgWrap: document.querySelector('#Line-5')
        },
        {
            index: 5,
            endTime: 17000,
            svgWrap: document.querySelector('#Line-6')
        },
        {
            index: 6,
            endTime: 18000,
            svgWrap: document.querySelector('#Line-7')
        },
        {
            index: 7,
            endTime: 19000,
            svgWrap: document.querySelector('#Line-8')
        },
        {
            index: 8,
            endTime: 20000,
            svgWrap: document.querySelector('#Line-9')
        },
        {
            index: 9,
            endTime: 21000,
            svgWrap: document.querySelector('#Line-10')
        },
        {
            index: 10,
            endTime: 22000,
            svgWrap: document.querySelector('#Line-11')
        },
        {
            index: 11,
            endTime: 23000,
            svgWrap: document.querySelector('#Line-12')
        },


    ];

    function playAudio() {
        document.querySelectorAll('path').forEach(path => path.classList.add('text-anim'));
        document.querySelector('.svgWrap').classList.add("container-turn");
        document.querySelector(".questionIcon").classList.add("questionIcon-anim");
        audio.play();
        registerTimeout();
    }

    function registerTimeout() {
        const svgWraps = document.querySelectorAll('.svgWrap');
        // Functional approach
        animations.forEach(animation => {
            setTimeout(() => {
                // Set all svgWrap to hidden
                svgWraps.forEach(
                    svgWrap => svgWrap.classList.add('hidden')
                );

                // If we have a next animation show it
                if (animations[animation.index + 1] !== null) {
                    animations[animation.index + 1].svgWrap.classList.remove('hidden');
                }
            }, animation.endTime)
        })
    }


    playButton.addEventListener("click", playAudio);
})();

/*
 -after the animation plays for each line
 -toggle on the hidden class for the animation that just played
 -toggle off the hidden class for the next animation



*/