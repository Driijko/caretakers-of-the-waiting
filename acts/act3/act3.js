const lineWidth1 = 1000;
const lineWidth2 = 300;
const lineColor1 = "hsla(100, 50%, 60%, 0.5)";
const lineColor2 = "hsla(120, 100%, 80%, 0.6)";
const lineColor3 = "hsla(150, 100%, 90%, 0.2)";
const duration1 = 11;
const duration2 = 5;
const duration3 = 15;

let clicked = false;

const audioElement = document.getElementById("audio");

audioElement.addEventListener("play", ()=> {
    gsap.to("#line1", {
        duration: duration2,
        repeat: -1,
        yoyo: true,
        attr: {
            "y2": "1000",
            "stroke-width": lineWidth1, 
            "stroke": lineColor1, 
        },
    });
    
    gsap.to("#line2", {
        duration: duration2,
        repeat: -1,
        yoyo: true,
        attr: {
            "y2": "1000",
            "stroke-width": lineWidth1, 
            "stroke": lineColor1, 
        },
    });
    
    gsap.to("#line3", {
        duration: duration2,
        repeat: -1,
        yoyo: true,
        attr: {
            "y2": "1000",
            "stroke-width": lineWidth1, 
            "stroke": lineColor1, 
        },
    });
    
    gsap.to("#line4", {
        duration: duration2,
        repeat: -1,
        yoyo: true,
        attr: {
            "y2": "0",
            "stroke-width": lineWidth1,
            "stroke": lineColor1,
        }
    });
    
    gsap.to("#line5", {
        duration: duration2,
        repeat: -1,
        yoyo: true,
        attr: {
            "y2": "0",
            "stroke-width": lineWidth1,
            "stroke": lineColor1,
        }
    });
    
    gsap.to("#line6", {
        duration: duration1,
        repeat: -1,
        yoyo: true,
        attr: {
            "x2": "1600",
            "stroke-width": lineWidth2,
            "stroke": lineColor2,
        }
    });
    
    gsap.to("#line7", {
        duration: duration1,
        repeat: -1,
        yoyo: true,
        attr: {
            "x2": "1600",
            "stroke-width": lineWidth2,
            "stroke": lineColor2,
        }
    });
    
    gsap.to("#line8", {
        duration: duration1,
        repeat: -1,
        yoyo: true,
        attr: {
            "x2": "0",
            "stroke-width": lineWidth2,
            "stroke": lineColor2,
        }
    });
    
    gsap.to("#line9", {
        duration: duration1,
        repeat: -1,
        yoyo: true,
        attr: {
            "x2": "0",
            "stroke-width": lineWidth2,
            "stroke": lineColor2,
        }
    });

    gsap.to("#line10", {
        duration: duration3,
        repeat: -1,
        yoyo: true,
        attr: {
            "x1": "0",
            "x2": "1600",
            "stroke-width": lineWidth1,
            "stroke": lineColor3,
        }
    });
});