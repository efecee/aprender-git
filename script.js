const padre = document.querySelector('.main')
const hijo = document.querySelectorAll('.hijo')

padre.style.backgroundColor = '#2c2c2c'
hijo.forEach((h) => {
    if(h.classList.contains('dos')){
        h.style.backgroundColor = 'red'
    }else{
        h.style.backgroundColor = 'blue'
    }
})
