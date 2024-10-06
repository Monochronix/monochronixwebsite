gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".hero-headline", {
    scrollTrigger: ".hero-headline", 
    y: 75,
    opacity: 0,
    filter: "blur(5px)"
},
{
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 0.8,
    ease: "power1.inOut"
});