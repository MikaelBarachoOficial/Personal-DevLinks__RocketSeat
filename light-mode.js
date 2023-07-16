if (localStorage.getItem('light-mode') === 'on') {
    document.body.classList.toggle('light-mode')
}

document.querySelector('#switch-theme').addEventListener('click', () => {

    document.body.classList.toggle('light-mode')
    localStorageUpdates()

})


function localStorageUpdates () {
    
    if (!document.body.classList.contains("light-mode")) {
        localStorage.setItem('light-mode', 'off')
       
    } else {
        localStorage.setItem('light-mode', 'on')
        
    }
}
