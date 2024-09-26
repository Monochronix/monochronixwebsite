document.getElementById("menu-open").addEventListener("click", function() {
    const icon = document.getElementById('menu-icon');
    const button = this;
    const switchTime = 200;
    if (icon) {
        button.disabled = true;
        icon.classList.add('spin');
        setTimeout(function() {
            if (icon.src.includes("/assets/icons/menu.svg")) {
                icon.src = "/assets/icons/close.svg";
            } else {
                icon.src = "/assets/icons/menu.svg";
            }
        }, switchTime);
        setTimeout(function() {
            icon.classList.remove('spin');
            button.disabled = false;
        }, 501);
    }
});
