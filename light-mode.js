if (localStorage.getItem('light-mode') === 'on') {
    changeTheme()
}

document.querySelector('#switch-theme').addEventListener('click', () => {

    changeTheme()

})

function changeTheme () {
    
    if (!document.body.classList.contains("light-mode")) {
        localStorage.setItem('light-mode', 'on')
        document.body.classList.add('light-mode')
       
    } else {
        localStorage.setItem('light-mode', 'off')
        document.body.classList.remove('light-mode')
        
    }
}
