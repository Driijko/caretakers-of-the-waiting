const tl=gsap.timeline();tl.to(".line",{duration:5,stroke:"hsla(180, 100%, 10%, 0.1)",stagger:{from:"center",each:.2},ease:"ease-out"}),tl.addPause(6);const link=document.getElementById("link");link.addEventListener("click",()=>{setTimeout(()=>{window.location.href="./home.html"},7e3);tl.reverse(6)});