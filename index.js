// TIMELINE /////////////////////
const tl = gsap.timeline();

// ANIMATION//////////////////////////////////
tl.to(".line", {
    duration: 5,
    stroke: "hsla(180, 100%, 10%, 0.1)",
    stagger: {
        from: "center",
        each: 0.2,
    },
    ease: "ease-out",
});

// PAUSE AT 6 SECONDS /////////////////////////
tl.addPause(6);

// CLICK LINK EVENT ////////////////////////////
const link = document.getElementById("link");

link.addEventListener("click", ()=> {
    const timerId = setTimeout(()=>{
        window.location.href = "./home/home.html";
    }, 7000)
    tl.reverse(6);
});