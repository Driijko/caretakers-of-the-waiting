gsap.to(".circle", {
    duration: 10,
    yoyo: true,
    repeat: -1,
    repeatDelay: 1,
    stroke: "hsla(260, 100%, 5%, 0.5)",
    stagger: {
        each: 0.5,
        from: "center"
    },
    ease: "bounce",
});