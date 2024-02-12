document.addEventListener('DOMContentLoaded', function () {
    // Select the "Projects" and "Blog" links
    let homeLink = document.getElementById('nav-home');
    let searchLink = document.getElementById('nav-search');

    // Function to apply the hover effect
    function applyHoverEffect(element) {
        element.style.transition = 'transform  0.3s, background-color  0.3s';
        element.addEventListener('mouseenter', function () {
            element.style.transform = 'scale(1.1)';
        });
        element.addEventListener('mouseleave', function () {
            element.style.transform = 'scale(1)';
        });
    }

    applyHoverEffect(homeLink);
    applyHoverEffect(searchLink);
});