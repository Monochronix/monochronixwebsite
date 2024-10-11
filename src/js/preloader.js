let loadingPercentage = 0;
const totalLoadingTime = 2500;
const fadeOutDuration = 500;
const scrollDelay = totalLoadingTime - 500;

document.body.classList.add('no-scroll');

const loadingInterval = setInterval(() => {
    loadingPercentage += Math.floor(Math.random() * 10) + 1;
    loadingPercentage = Math.min(loadingPercentage, 100);
    document.getElementById('loaderText').textContent = `${loadingPercentage}%`;

    if (loadingPercentage >= 100) {
        clearInterval(loadingInterval);
    }
}, 100);

window.addEventListener("load", () => {
    const preloader = document.getElementById('preloader');
    const content = document.querySelector('.content');

    setTimeout(() => {
        document.body.classList.remove('no-scroll');
    }, scrollDelay);

    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
            if (content) {
                content.style.display = 'block';
            }
        }, fadeOutDuration);
    }, totalLoadingTime - fadeOutDuration);
});
