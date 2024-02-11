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

