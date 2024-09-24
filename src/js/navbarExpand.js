document.getElementById('menu-open').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    // Toggle the data-expanded attribute between true and false
    if (navbar.getAttribute('data-expanded') === 'true') {
        navbar.setAttribute('data-expanded', 'false');
    } else {
        navbar.setAttribute('data-expanded', 'true');

        console.log('Open.');
    }
});
