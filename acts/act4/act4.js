// Animation properties /////////////////////////////////////////
const duration1 = 20;
const duration2 = 10;
const duration3 = 11;

let clicked = false;

const audioElement = document.getElementById("audio");

audioElement.addEventListener("play", ()=> {
    gsap.to("#stop1", {
        duration: duration1,
        yoyo: true,
        repeat: -1,
        repeatDelay: 1,
        attr: {
            "stop-color": "hsla(150, 100%, 60%, 0.2)",
        }
    });

    gsap.to("#stop2", {
        duration: duration2,
        yoyo: true,
        repeat: -1,
        repeatDelay: 1,
        attr: {
            "stop-color": "hsla(120, 100%, 40%, 0.7)",
        },
    });

    gsap.to(".circle", {
        duration: duration3,
        yoyo: true,
        repeat: -1,
        ease: "ease-out",
        repeatDelay: 0.5,
        attr: {
            "stroke": "hsla(150, 100%, 80%, 0.1)",
            "stroke-width": "200",
        },
    })
});