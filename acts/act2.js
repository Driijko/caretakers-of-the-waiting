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