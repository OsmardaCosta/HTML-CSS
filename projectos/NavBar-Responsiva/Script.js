const generate = () =>{
    const menu1 = document.querySelector('.menu1')
    const menu2 = document.querySelector('.menu2')
    const menu3 = document.querySelector('.menu3')
    const nav = document.querySelector('.dropdown-menu')
    nav.classList.toggle('generate')
    menu1.classList.toggle('close')
    menu2.classList.toggle('close')
    menu3.classList.toggle('close')
}