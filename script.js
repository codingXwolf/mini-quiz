//start button. Removes button and subtitle then procceds to ask a question.
let startButton = document.querySelector('button');
let subTitle = document.querySelector('h3');
startButton.addEventListener('click', (e) => {
    startButton.remove();
    subTitle.innerHTML = '';
})

