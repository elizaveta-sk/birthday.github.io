document.addEventListener('DOMContentLoaded', () => {
    const yesButtons = document.querySelectorAll('#yesButton1, #yesButton2');
    const intro = document.querySelector('.intro');
    const giftOptions = document.querySelector('.gift-options');
    const finalStep = document.querySelector('.final-step');
    const result = document.querySelector('.result');

    yesButtons.forEach(button => {
        button.addEventListener('click', () => {
            intro.classList.add('hidden');
            giftOptions.classList.remove('hidden');
        });
    });

    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box, index) => {
        box.addEventListener('click', () => {
            giftOptions.classList.add('hidden');
            finalStep.classList.remove('hidden');
            if (index === 0) {
                box.innerHTML = '<iframe width="640" height="360" src="https://www.youtube.com/embed/op0aJGB165A" frameborder="0" allowfullscreen></iframe>';
            } else if (index === 1) {
                box.innerHTML = '<iframe width="640" height="360" src="https://www.youtube.com/embed/ufit4zSvTJ0" frameborder="0" allowfullscreen></iframe>';
            } else if (index === 2) {
                box.innerHTML = '<iframe width="640" height="360" src="https://www.youtube.com/embed/3AL0I-V88Do" frameborder="0" allowfullscreen></iframe>';
            } else if (index === 3) {
                box.innerHTML = '<a href="https://www.klook.com/en-US/activity/41323-tokyo-joypolis/" target="_blank">Link to activity</a>';
            }
        });
    });

    const chooseButton = document.querySelector('#chooseButton');
    chooseButton.addEventListener('click', () => {
        finalStep.classList.add('hidden');
        result.classList.remove('hidden');
    });
});
