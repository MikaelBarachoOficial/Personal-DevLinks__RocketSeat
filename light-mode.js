if (localStorage.getItem('light-mode') === 'on') {
    lightModeOn()
}

document.querySelector('#switch-theme').addEventListener('click', () => {

    if (localStorage.getItem('light-mode') === 'on') {
    
        lightModeOff()

    } else {

        lightModeOn()

    }

})

function lightModeOn () {
    localStorage.setItem('light-mode', 'on')
    document.body.classList.add('light-mode')
    document.querySelector('.profile img').src = 'assets/Avatar-light.svg'
}

function lightModeOff () {
    localStorage.setItem('light-mode', 'off')
    document.body.classList.remove('light-mode')
    document.querySelector('.profile img').src = 'assets/Avatar.svg'
}