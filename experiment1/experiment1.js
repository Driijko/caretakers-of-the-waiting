// gsap.set(".circle", {
//     opacity: 0.3,
//     scale: 0.5,
// })

gsap.to(".circle", {
    duration: 5,
    stagger: {
        each: 0.1,
        from: "edges",
    },
    yoyo: true,
    repeat: -1,
    ease: "linear",
    stroke: "hsl(100, 100%, 90%)",
    repeatDelay: 3,
}); 