function layout () {
  // Redefine 'vh' in CSS based on what's actually available (excluding address bar).
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  // Determine what orientation device has.
  // We add +1 to gutter lengths to avoid layout bugs that I don't quite understand.
  if (window.innerWidth <= window.innerHeight) {
    let aspectRatio = window.innerHeight / window.innerWidth;
    if (aspectRatio < 1.777) {
      let width = ((0.5625 * window.innerHeight) / window.innerWidth) * window.innerWidth;
      document.documentElement.style.setProperty("--w", `${width}px`);
      document.documentElement.style.setProperty("--h", `${window.innerHeight}px`);
      document.documentElement.style.setProperty("--gh", `${window.innerHeight + 1}px`);
      document.documentElement.style.setProperty("--gw", `${((window.innerWidth - width)/2) + 1}px`);
    }
    else {
      document.documentElement.style.setProperty("--h", `${window.innerWidth * 1.777}px`);
      document.documentElement.style.setProperty("--w", `${window.innerWidth}px`);
      document.documentElement.style.setProperty("--gh", `${((window.innerHeight - (window.innerWidth * 1.777))/2) + 1}px`);
      document.documentElement.style.setProperty("--gw", `${window.innerWidth + 1}px`);
    };
    // document.documentElement.style.setProperty("--orientation", "portrait");
  }
  else {
    let aspectRatio = window.innerWidth / window.innerHeight;
    if(aspectRatio < 1.6) {
      let height = ((0.625 * window.innerWidth) / window.innerHeight) * window.innerHeight;
      document.documentElement.style.setProperty("--h", `${height}px`);
      document.documentElement.style.setProperty("--w", `${window.innerWidth}px`);
      document.documentElement.style.setProperty("--gh", `${((window.innerHeight - height)/2)+1}px`);
      document.documentElement.style.setProperty("--gw", `${(window.innerWidth) + 1}px`);
    }
    else {
      let width = vh * 100 * 1.6;
      document.documentElement.style.setProperty("--h", `${window.innerHeight}px`);
      document.documentElement.style.setProperty("--w", `${width}px`);
      document.documentElement.style.setProperty("--gh", `${window.innerHeight + 1}px`);
      document.documentElement.style.setProperty("--gw", `${((window.innerWidth - width)/2) + 1}px`);
    }
    document.documentElement.style.setProperty("--orientation", "landscape");
  }
}

layout();

function resize() {
  resizeReady = true;
  layout();
}

let resizeReady = true;
window.addEventListener("resize", ()=> {
  if(resizeReady) {
    resizeReady = false;
    setTimeout(resize, 2000);
  }
});

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