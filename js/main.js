(() => {
    let audio = document.querySelector('audio'),
        playButton = document.querySelector('.controls button');

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
            endtime: 15000,
            svgWrap: document.querySelector('#Line-4')
        },
        {
            index: 4,
            time: 16000,
            svgWrap: document.querySelector('#Line-5')
        },
        {
            index: 5,
            time: 17000,
            svgWrap: document.querySelector('#Line-6')
        },
        {
            index: 6,
            time: 18000,
            svgWrap: document.querySelector('#Line-7')
        },
        {
            index: 7,
            time: 19000,
            svgWrap: document.querySelector('#Line-8')
        },
        {
            index: 8,
            time: 20000,
            svgWrap: document.querySelector('#Line-9')
        },
        {
            index: 9,
            time: 21000,
            svgWrap: document.querySelector('#Line-10')
        },
        {
            index: 10,
            time: 22000,
            svgWrap: document.querySelector('#Line-11')
        },
        {
            index: 11,
            time: 23000,
            svgWrap: document.querySelector('#Line-12')
        },


    ]




    function playAudio() {
        document.querySelectorAll('path').forEach(path => path.classList.add('text-anim'));
        document.querySelector('.svgWrap').classList.add("container-turn");
        document.querySelector(".questionIcon").classList.add("questionIcon-anim");
        audio.play();
        registerTimeout();
    }

    //[https://medium.com/@swainson/accurate-javascript-timers-f71e0af5df32](Article explaining)
    function accuTime(timer, max, repeatArgument, callbackArgument) {
        var counter = 1;

        var init = (t) => {
            let timeStart = new Date().getTime();
            setTimeout(function() {
                if (counter < max) {
                    let fix = (new Date().getTime() - timeStart) - timer;
                    init(t - fix);
                    counter++;

                    // event to be repeated max times
                    repeatArgument();

                } else {
                    // event to be executed at animation end
                    callbackArgument();
                }
            }, t);
        }
        init(timer);
    }


    function registerTimeout() {
        animations.forEach((animation) => {
            // debugger;
            accuTime(animation.endTime, 1, null, () => {
                console.log(animation.index)

                animation.svgWrap.classList.toggle("hidden");

                if (animation[animation.index + 1]) {
                    animation[animation.index + 1].svgWrap.classList.toggle("hidden");
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