let clicked = false;

const audioElement = document.getElementById("audio");

audioElement.addEventListener("play", ()=> {
    gsap.to("#stop2",{
        duration: 5,
        repeat: -1,
        // repeatDelay: 1,
        yoyo: true,
        ease: "ease-out",
        // stopColor: "hsl(260, 100%, 40%)",
        attr: {
            offset: "90%",
            "stop-color": "hsl(260, 100%, 20%)",
        },
    });
    
    gsap.to("#stop1",{
        duration: 9,
        repeat: -1,
        // repeatDelay: 1,
        yoyo: true,
        ease: "ease-out",
        // stopColor: "hsl(260, 100%, 40%)",
        attr: {
            offset: "90%",
            "stop-color": "hsl(300, 100%, 20%)",
        },
    });
});