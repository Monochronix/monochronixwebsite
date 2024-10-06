let loadingPercentage = 0;
const totalLoadingTime = 3000;
const fadeOutDuration = 500;
const minimumVisibleDuration = totalLoadingTime - fadeOutDuration;

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
    const loadingStartTime = Date.now();

    const checkLoadingComplete = setInterval(() => {
        if (loadingPercentage >= 100) {
            clearInterval(checkLoadingComplete);
            const elapsedTime = Date.now() - loadingStartTime;
            const remainingTime = Math.max(totalLoadingTime - elapsedTime, 0);

            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                    if (content) {
                        content.style.display = 'block';
                    }
                }, fadeOutDuration);
            }, remainingTime);
        }
    }, 100);
});
