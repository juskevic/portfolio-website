let aboutMeText = document.getElementById('about-me-text');
let originalText = aboutMeText.innerText;
let newText = "Hi thewe!!11 *cries* My nyame is Max, and I-I-I’m a web devewopew *blushes* who is passionyate about c-cweating beautifuw and functionyaw websites. I-I-I’m cuwwentky UwU weawnying JavaScwipt and Awgowithms t-to enhance my skiwws and knyowwedge. I-I-I’m awso pwoficient *sweats* in H-HTMW and CSS. *looks at you* In the x3 futuwe, I-I-I’m wooking fowward t-to weawneding mroe fwont-end technyowogies t-to cweate even OwO mowe amazing websites!!11 😊";

aboutMeText.addEventListener('click', function () {
    if (aboutMeText.innerText === originalText) {
        aboutMeText.innerText = newText; // Change text
    } else {
        aboutMeText.innerText = originalText; // Change text back
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Select the "Projects" and "Blog" links
    var projectLink = document.getElementById('menu-projects');
    var blogLink = document.getElementById('menu-blog');

    // Function to apply the hover effect
    function applyHoverEffect(element) {
        element.style.transition = 'transform  0.3s, background-color  0.3s';
        element.style.backgroundColor = '#FFCCD5'; // Set the initial background color
        element.addEventListener('mouseenter', function () {
            element.style.transform = 'scale(1.1)'; // Scale up the link
        });
        element.addEventListener('mouseleave', function () {
            element.style.transform = 'scale(1)'; // Reset the scale
            element.style.backgroundColor = ''; // Remove the background color
        });
    }

    // Apply the hover effect to the "Projects" and "Blog" links
    applyHoverEffect(projectLink);
    applyHoverEffect(blogLink);
});


