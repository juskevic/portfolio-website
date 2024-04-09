/* Hover effect function */
document.addEventListener('DOMContentLoaded', function () {
    let projectLink = document.getElementById('menu-projects');
    let blogLink = document.getElementById('menu-blog');
    let aboutLink = document.getElementById('menu-about');

    function applyHoverEffect(element) {
        element.style.transition = 'transform  0.3s, background-color  0.3s';
        element.addEventListener('mouseenter', function () {
            element.style.transform = 'scale(1.1)';
        });
        element.addEventListener('mouseleave', function () {
            element.style.transform = 'scale(1)';
        });
    }

    applyHoverEffect(projectLink);
    applyHoverEffect(blogLink);
    applyHoverEffect(aboutLink)
});

// Night-mode functionality (probably broken)
document.addEventListener('DOMContentLoaded', function() {
    const switchInput = document.getElementById('switch');
    const body = document.body;

    function toggleNightMode() {
        if (body.classList.contains('night-mode')) {
            body.classList.remove('night-mode');
        } else {
            body.classList.add('night-mode');
        }
    }

    switchInput.addEventListener('change', toggleNightMode);
});
