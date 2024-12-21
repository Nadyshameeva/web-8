const buttons = document.getElementsByClassName('submit-btn');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseover', () => {
        console.log('fsdhfklsdjlf')
        buttons[i].style.background = 'transparent';
    });

    buttons[i].addEventListener('mouseout', () => {
        buttons[i].style.background = '#C2AB99';
    });
}

let isMars = true;
function changeBackground() {
    const back = document.querySelector('header');

    if (isMars) {
        back.style.background = "url('bg_space.png')";
    } else {
        back.style.background = "url('bg_mars.png')";
    }

    back.style.backgroundPosition = 'center';
    back.style.backgroundSize = 'cover';

    isMars = !isMars;
}