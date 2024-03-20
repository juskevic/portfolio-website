/* Hover effect function */
document.addEventListener('DOMContentLoaded', function () {
    // Select the "Projects" and "Blog" links
    let projectLink = document.getElementById('menu-projects');
    let blogLink = document.getElementById('menu-blog');

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

    applyHoverEffect(projectLink);
    applyHoverEffect(blogLink);
});


