/* Hover effect function */
document.addEventListener('DOMContentLoaded', function () {
    // Select the "Projects" and "Blog" links
    let projectLink = document.getElementById('menu-projects');
    let blogLink = document.getElementById('menu-blog');
    let aboutLink = document.getElementById('menu-about');

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
    applyHoverEffect(aboutLink)
});

/* Website under construction bar */
const messages = ['Website Under Construction ⚒️', "I'm working on it! ⛏️", 'Coming soon... ⏳'];
let index = 0;

function changeMessage() {
    document.querySelector('.construction-bar p').textContent = messages[index];
    index = (index + 1) % messages.length;
}

setInterval(changeMessage, 5000);

/*Pop up msg*/
let popup = document.querySelector(".popup");
let close = document.querySelector(".popup .close");

popup.style.display = "block";
popup.style.visibility = "hidden";
setTimeout(() => {
    popup.style.visibility = "visible";
    popup.style.opacity = "1";
}, 1000);

close.addEventListener("click", () => {
    popup.style.opacity = "0";
    popup.style.visibility = "hidden";
    setTimeout(() => {
        popup.style.display = "none";
    }, 1000);
});

