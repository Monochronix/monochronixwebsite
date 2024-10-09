gsap.registerPlugin(ScrollTrigger);

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Listen for the 'scroll' event and log the event data to the console
lenis.on('scroll', (e) => {
  console.log(e);
});

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);


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
