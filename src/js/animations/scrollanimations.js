gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".hero-headline", {
    scrollTrigger: ".hero-headline", 
    y: 75,
    opacity: 0
},
{
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power1.inOut",
    delay: 2.8,
    stagger: 0.2
});