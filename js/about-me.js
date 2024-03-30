/* Website under construction bar */
const messages = ['Website under construction ⚒️', "I'm working on it! ⛏️", 'Bugs are to be expected! 🚨 '];
let index = 0;

function changeMessage() {
    document.querySelector('.construction-bar p').textContent = messages[index];
    index = (index + 1) % messages.length;
}

setInterval(changeMessage, 5000);