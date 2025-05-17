const padre = document.querySelector('.main')
const hijo = document.querySelectorAll('.hijo')

padre.style.backgroundColor = 'gray'
hijo.forEach((h) => {
    h.style.backgroundColor = 'red'
})
