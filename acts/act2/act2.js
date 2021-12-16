let clicked = false;

const audioElement = document.getElementById("audio");

audioElement.addEventListener("play", ()=> {

    if (clicked === false) {
        clicked = true;
        gsap.to("#background", {
            duration: 20,
            yoyo: true,
            repeat: -1,
            attr: {
                fill: "hsl(260, 100%, 10%)"
            },
        });
        
        gsap.to("#square1", {
            duration: 17,
            yoyo: true,
            repeat: -1,
            attr: {
                fill: "hsla(260, 100%, 5%)",
            },
        });
        
        gsap.to("#square2", {
            duration: 14,
            yoyo: true,
            repeat: -1,
            attr: {
                fill: "hsla(260, 100%, 15%, 0.7)",
            },
        });
        
        gsap.to("#square3", {
            duration: 11,
            yoyo: true,
            repeat: -1,
            attr: {
                fill: "hsla(260, 100%, 20%, 0.6)",
            },
        });
        
        gsap.to("#square4", {
            duration: 8,
            yoyo: true,
            repeat: -1,
            attr: {
                fill: "hsla(260, 100%, 30%, 0.3)",
            },
        });
    }
});