// HEADER SECTION
// Hover effect function
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

// MAIN SECTION
// Type in effect on "about-me"



// FOOTER SECTION
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

// Website under construction bar
const messages = ['Website under construction ⚒️', "I'm working on it! ⛏️", 'Bugs are to be expected! 🚨 '];
let index = 0;

function changeMessage() {
    document.querySelector('.construction-bar p').textContent = messages[index];
    index = (index + 1) % messages.length;
}

setInterval(changeMessage, 5000);

