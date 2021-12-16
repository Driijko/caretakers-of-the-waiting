// Animation properties /////////////////////////////////////////
const duration1 = 20;

let clicked = false;

const audioElement = document.getElementById("audio");

audioElement.addEventListener("play", ()=> {
    gsap.to(".line", {
        duration: duration1,
        yoyo: true,
        ease: "linear",
        repeat: -1,
        repeatDelay: 2,
        transformOrigin: "50% 50%",
        rotate: "360deg",
        stagger: {
            each: 0.5,
            from: "center",
        },
        attr: {
            "stroke": "hsla(180, 100%, 50%, 1)",
            "stroke-width": "50",
        }
    })
});