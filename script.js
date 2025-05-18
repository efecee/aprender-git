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

const h1 = document.querySelector('h1')
h1.style.color = 'white'
h1.style.backgroundColor = 'black'
h1.style.padding = '10px'
h1.style.borderRadius = '10px'
