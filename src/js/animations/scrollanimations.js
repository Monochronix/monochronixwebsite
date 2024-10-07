gsap.registerPlugin(ScrollTrigger);

gsap.from(".about-headline", {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".about-headline",
    }
});

gsap.from(".hero-headline", {
    y: 100,
    delay: 2.8,
    stagger: 0.2,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".hero-headline"
    }
})